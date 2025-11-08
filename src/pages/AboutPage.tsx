import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';

const TeamMember: React.FC<{ name: string; title: string; imageUrl: string }> = ({ name, title, imageUrl }) => (
    <div className="text-center">
        <img src={imageUrl} alt={`Portrait of ${name}, ${title} at KlimaPro PH`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" />
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600">{title}</p>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About KlimaPro PH</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Your trusted partner for home comfort in the Philippines. We're a team of dedicated professionals committed to providing top-quality air conditioning and HVAC services to Metro Manila and surrounding communities.
          </p>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-20 sm:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The certified experts dedicated to keeping you comfortable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Carlos Santos" title="Lead Technician" imageUrl="https://picsum.photos/200/200?image=836" />
            <TeamMember name="Maria Reyes" title="Installation Specialist" imageUrl="https://picsum.photos/200/200?image=786" />
            <TeamMember name="Jose Cruz" title="Service Manager" imageUrl="https://picsum.photos/200/200?image=743" />
            <TeamMember name="Ana Flores" title="Customer Support" imageUrl="https://picsum.photos/200/200?image=494" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;