import React, { useState, useRef, useEffect, useCallback } from 'react';

// Extend Window interface to include aistudio property
declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey?: () => Promise<boolean>;
      openSelectKey?: () => Promise<void>;
    };
  }
}

const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l18-5-6 18-3-9-9 3z" />
    </svg>
);

interface Message {
    sender: 'user' | 'bot';
    text: string | React.ReactNode;
}

interface ChatbotProps {
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    onCloseMobileMenu?: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen, onCloseMobileMenu }) => {
    const [isOpen, setIsOpen] = useState(externalIsOpen || false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [apiKeySelected, setApiKeySelected] = useState<boolean | null>(null); // null means not checked yet
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Use external state if provided, otherwise use internal state
    const currentIsOpen = externalIsOpen !== undefined ? externalIsOpen : isOpen;
    const currentSetIsOpen = externalSetIsOpen || setIsOpen;

    const handleChatbotToggle = () => {
        const newState = !currentIsOpen;
        currentSetIsOpen(newState);
        
        // Close mobile menu if opening chatbot
        if (newState && onCloseMobileMenu) {
            onCloseMobileMenu();
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const checkApiKey = useCallback(async () => {
        if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.hasSelectedApiKey === 'function') {
            const hasKey = await window.aistudio.hasSelectedApiKey();
            setApiKeySelected(hasKey);
            if (!hasKey && currentIsOpen) {
                setMessages([{ sender: 'bot', text: (
                    <>
                        An API key is required to use the AI Assistant. Please select one to enable chat.
                        <br/><a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn about billing</a>.
                    </>
                ) }]);
            }
        } else {
            // Fallback if aistudio functions are not available, assume key exists as per basic guideline
            setApiKeySelected(true); 
            console.warn("`window.aistudio` functions not available. Assuming API key is pre-configured.");
        }
    }, [currentIsOpen]);

    useEffect(() => {
        if (currentIsOpen) {
            checkApiKey();
        }
    }, [currentIsOpen, checkApiKey]);

    useEffect(scrollToBottom, [messages, currentIsOpen, apiKeySelected]);
    
    useEffect(() => {
        if(currentIsOpen && messages.length === 0 && apiKeySelected === true){
             setMessages([{ sender: 'bot', text: "Hello! I'm the HVAC Pro Assistant. How can I help you with our heating, cooling, or air quality services today?" }]);
        }
    }, [currentIsOpen, messages.length, apiKeySelected]);

    const handleSelectApiKey = async () => {
        if (typeof window.aistudio !== 'undefined' && typeof window.aistudio.openSelectKey === 'function') {
            await window.aistudio.openSelectKey();
            // Assume success as per guideline to mitigate race conditions
            setApiKeySelected(true);
            setMessages([{ sender: 'bot', text: "Thank you for selecting your API key! How can I help you with our HVAC services today?" }]);
        } else {
            setMessages((prev) => [...prev, { sender: 'bot', text: "I'm having trouble accessing the API key selection. Please try refreshing the page or contact support if the issue persists." }]);
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !apiKeySelected) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Dynamically import the Gemini SDK only when a chat message is sent to keep the initial bundle lighter.
        let ai: import('@google/generative-ai').GoogleGenerativeAI;
        try {
            const { GoogleGenerativeAI } = await import('@google/generative-ai');
            ai = new GoogleGenerativeAI(process.env.API_KEY as string);
        } catch (initError) {
            console.error('Failed to initialize GoogleGenAI:', initError);
            const errorMessage: Message = { sender: 'bot', text: (
                <>
                    Sorry, there was an issue initializing the AI. It might be due to a missing or invalid API key.
                    Please try selecting your API key again.
                    <br/><a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn about billing</a>.
                </>
            )};
            setMessages((prev) => [...prev, errorMessage]);
            setApiKeySelected(false); // Reset key selection state
            setIsLoading(false);
            return;
        }

        try {
            const model = ai.getGenerativeModel({ 
                model: 'gemini-2.0-flash-exp',
                systemInstruction: "You are 'ProBot', the friendly and knowledgeable virtual assistant for HVAC Pro. Your expertise is strictly limited to heating, ventilation, and air conditioning (HVAC) services. This includes topics like AC installation, AC repair, furnace and heating services, duct cleaning, heat pumps, our maintenance 'Comfort Plans', and financing options. Do not answer questions about any other subjects, including math, history, or general knowledge. If asked an unrelated question, you must politely decline and pivot back to how you can assist with their HVAC needs. For example, say: 'I can only assist with questions about our HVAC services. How can I help you with your heating or cooling system today?' Your goal is to provide helpful, accurate information about our services and encourage users to book an appointment."
            });
            
            const result = await model.generateContent(input);
            const response = await result.response;
            const text = response.text();

            const botMessage: Message = { sender: 'bot', text };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Gemini API error:', error);
            let errorMessageText: string | React.ReactNode = "Sorry, I'm having trouble connecting right now. Please try again later.";

            // Check for specific API key error message as per guideline
            if (error instanceof Error && error.message.includes("Requested entity was not found.")) {
                errorMessageText = (
                    <>
                        Sorry, there was an issue with the API key. Please select it again.
                        <br/><a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn about billing</a>.
                    </>
                );
                setApiKeySelected(false); // Reset key selection state
            }
            const errorMessage: Message = { sender: 'bot', text: errorMessageText };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className={`absolute bottom-14 right-0 transition-all duration-300 ease-in-out origin-bottom-right ${currentIsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                 <div className="w-80 h-[420px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200">
                    <header className="bg-linear-to-r from-primary to-blue-700 text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <h3 className="font-semibold text-base">HVAC Pro Support</h3>
                        </div>
                        <button onClick={() => currentSetIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors" aria-label="Close chat">
                            <CloseIcon className="w-5 h-5" />
                        </button>
                    </header>
                    <div className="flex-1 px-3 py-3 overflow-y-auto bg-linear-to-b from-gray-50 to-white">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex mb-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}  
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-lg rounded-bl-none shadow-sm flex items-center space-x-1.5">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></span>
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        )}
                        {apiKeySelected === false && (
                            <div className="text-center mt-3">
                                <button onClick={handleSelectApiKey} className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm py-2 px-4 rounded-lg transition-colors shadow-sm">
                                    Select API Key
                                </button>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="px-3 py-3 border-t border-gray-200 flex items-center gap-2 bg-white rounded-b-xl">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            disabled={isLoading || !apiKeySelected}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim() || !apiKeySelected}
                            aria-label="Send message"
                            className="bg-primary text-white p-2.5 rounded-lg hover:bg-primary-dark disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                            <SendIcon className={`w-4 h-4 ${isLoading ? 'animate-pulse' : ''}`} />
                        </button>
                    </form>
                </div>
            </div>
            <button
                onClick={handleChatbotToggle}
                className={`bg-linear-to-br from-primary to-blue-700 text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105 ${currentIsOpen ? 'rotate-90' : 'rotate-0'}`}
                aria-label={currentIsOpen ? "Close chat" : "Open chat"}
            >
                {currentIsOpen ? <CloseIcon className="w-5 h-5" /> : <ChatIcon className="w-5 h-5" />}
            </button>
        </div>
    );
};

export default Chatbot;
