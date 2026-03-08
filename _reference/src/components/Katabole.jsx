import { useEffect, useRef } from 'react';
import './Katabole.css';

const nodes = [
    { title: 'Foundation School', desc: '18 Modules of systematic doctrine laying the groundwork for faith.' },
    { title: 'Maturity Class', desc: 'Advanced theology focusing on character and spiritual discipline.' },
    { title: 'Ministry Training', desc: 'Practical equipping for service within the local body.' },
    { title: 'School of Leaders', desc: 'Executive leadership development for planting and governance.' },
];

export default function Katabole() {
    const sectionRef = useRef(null);
    const lineFillRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const lineFill = lineFillRef.current;
            if (!section || !lineFill) return;

            const scrolled = window.scrollY;
            if (scrolled > section.offsetTop - window.innerHeight / 2) {
                const height = section.offsetHeight;
                const progress = (scrolled - (section.offsetTop - window.innerHeight / 2)) / height;
                const percent = Math.min(Math.max(progress * 100, 0), 100);
                lineFill.style.height = `${percent * 1.5}%`;

                const nodeEls = section.querySelectorAll('.timeline-node');
                nodeEls.forEach(node => {
                    if (node.getBoundingClientRect().top < window.innerHeight * 0.7) {
                        node.classList.add('active');
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="katabole" ref={sectionRef}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-tag">Discipleship Architecture</span>
                    <h2 style={{ color: '#fff', fontSize: '3rem' }}>Katabole Growth System</h2>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line" />
                    <div className="timeline-line-fill" ref={lineFillRef} />

                    {nodes.map((node, i) => (
                        <div className="timeline-node" key={i}>
                            <div className="node-dot" />
                            <div className="node-content">
                                <h3 className="gold-text">{node.title}</h3>
                                <p>{node.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
