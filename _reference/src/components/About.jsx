import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const statRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);

        // Counter animation
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target.getAttribute('data-target');
                    if (target) {
                        let count = 0;
                        const targetNum = parseInt(target);
                        const updateCount = () => {
                            const increment = targetNum / 50;
                            if (count < targetNum) {
                                count += increment;
                                entry.target.innerText = Math.ceil(count);
                                setTimeout(updateCount, 20);
                            } else {
                                entry.target.innerText = targetNum;
                            }
                        };
                        updateCount();
                        statObserver.unobserve(entry.target);
                    }
                }
            });
        });

        if (statRef.current) statObserver.observe(statRef.current);

        return () => {
            observer.disconnect();
            statObserver.disconnect();
        };
    }, []);

    return (
        <section id="about">
            <div className="about-left reveal-text" ref={leftRef}>
                <div className="stat-item">
                    <div className="stat-number" data-target="2020" ref={statRef}>0</div>
                    <div className="stat-label">Founded</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">1</div>
                    <div className="stat-label">Global Vision</div>
                </div>
            </div>
            <div className="about-right">
                <div className="about-text reveal-text" ref={rightRef}>
                    <span className="section-tag">About The Mandate</span>
                    <h2>Multiplying Nations</h2>
                    <p>Through the Katabole Growth System, we are raising a generation of leaders equipped with the theological depth and practical wisdom to impact every sphere of society. We believe in the cell structure as the primary vehicle for multiplication.</p>
                    <br />
                    <button className="btn">Read Our Story</button>
                </div>
            </div>
        </section>
    );
}
