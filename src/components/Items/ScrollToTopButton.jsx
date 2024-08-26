import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollTop = () => {
        if (window.scrollY > 300) { // Adjust the value based on when you want the button to appear
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    return (
        <button
            className={` scroll-to-top-button ${isVisible ? '' : 'hidden'}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
