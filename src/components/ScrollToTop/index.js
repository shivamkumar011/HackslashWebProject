import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import './styles/scroll.css';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 2500) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top image cursor-pointer text-center"
            onClick={scrollToTop}
        >
            <i className="icon"></i>
        </div>
    );
};

export default ScrollToTop;