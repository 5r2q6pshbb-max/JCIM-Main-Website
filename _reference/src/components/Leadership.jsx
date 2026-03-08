import { useEffect, useRef } from 'react';
import './Leadership.css';

export default function Leadership() {
    const revealRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        if (revealRef.current) observer.observe(revealRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="leadership">
            <div className="container">
                <div className="profile-container">
                    <div className="profile-img" />
                    <div className="profile-info reveal-text" ref={revealRef}>
                        <span className="section-tag">Leadership</span>
                        <h2>General Overseer<br />&amp; Founder</h2>
                        <span className="profile-role">Dr. [Founder Name]</span>
                        <p>Engineer. Theologian. Author. Visionary. A voice crying in the wilderness of the modern age, dedicated to building leaders who will not bend to the patterns of this world but will transform it through the renewing of their minds.</p>

                        <div className="credentials">
                            <div className="cred-item">B.Eng Electrical Engineering</div>
                            <div className="cred-item">Masters in Divinity</div>
                            <div className="cred-item">Yale Postgraduate Fellow</div>
                            <div className="cred-item">Author of 15+ Books</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
