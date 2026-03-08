import { useEffect, useRef } from 'react';
import './Vision.css';

export default function Vision() {
    const quoteRef = useRef(null);
    const revealRef = useRef(null);

    useEffect(() => {
        const quote = quoteRef.current;
        if (!quote) return;
        const text = "We don't just build churches. We build nations.";
        quote.innerHTML = '';
        text.split(' ').forEach((word, index) => {
            const span = document.createElement('span');
            span.innerText = word + ' ';
            span.style.transitionDelay = `${index * 100}ms`;
            quote.appendChild(span);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        quote.querySelectorAll('span').forEach(span => observer.observe(span));
        if (revealRef.current) observer.observe(revealRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="vision">
            <img
                src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2574&auto=format&fit=crop"
                className="vision-bg-img"
                alt="City Silhouette"
            />
            <div className="container vision-text">
                <h2 className="vision-quote" ref={quoteRef}>
                    We don&apos;t just build churches. We build nations.
                </h2>
                <p className="reveal-text" ref={revealRef}>
                    JCIM is committed to the systematic deconstruction of worldly mindsets and the reconstruction of Kingdom culture through rigorous discipleship.
                </p>
            </div>
        </section>
    );
}
