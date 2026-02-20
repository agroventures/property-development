import React, { useEffect, useRef, useState } from 'react'

function useScrollReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    io.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return [ref, visible];
}

function RevealSection({ children, className = "", delay = "" }) {
    const [ref, visible] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${delay} ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default RevealSection
