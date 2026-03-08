import { useEffect, useRef } from 'react';
import './Berean.css';

export default function Berean() {
    const cardRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (cardRef.current) observer.observe(cardRef.current);

        const handleScroll = () => {
            const section = document.getElementById('berean');
            const bg = bgRef.current;
            if (!section || !bg) return;
            const scrolled = window.scrollY;
            if (section.offsetTop - window.innerHeight < scrolled) {
                const speed = 0.15;
                const offset = (scrolled - section.offsetTop) * speed;
                bg.style.transform = `translateY(${offset - 50}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="berean">
            <div className="parallax-bg" ref={bgRef} />
            <div className="berean-card reveal-text" ref={cardRef}>
                <span className="section-tag">A New Expression</span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>THE BEREAN CHURCH</h2>
                <div style={{ fontFamily: 'var(--font-ui)', marginBottom: '2rem', color: 'var(--gold-primary)' }}>EST. 2026</div>
                <p style={{ marginBottom: '2rem' }}>A community built on rigorous scripture, deep discipleship, and transformational community. Returning to the roots of the faith with the power of the Spirit.</p>
                <button className="btn">Visit Berean</button>
            </div>
        </section>
    );
}
