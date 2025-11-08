export const normalizePath = (path: string): string => {
    if (!path) {
        return '/';
    }

    let cleaned = path.trim();

    if (cleaned.startsWith('#')) {
        cleaned = cleaned.slice(1);
    }

    if (!cleaned.startsWith('/')) {
        cleaned = `/${cleaned.replace(/^\/?/, '')}`;
    }

    return cleaned === '' ? '/' : cleaned;
};

export const navigateTo = (path: string) => {
    const nextPath = normalizePath(path);

    if (window.location.pathname !== nextPath) {
        window.history.pushState({}, '', nextPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
        // Still emit the event so listeners can react (e.g., scroll to top)
        window.dispatchEvent(new PopStateEvent('popstate'));
    }
};
