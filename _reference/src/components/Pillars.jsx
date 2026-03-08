import './Pillars.css';

const pillars = [
    { icon: 'W', title: 'The Word', desc: 'Uncompromising truth as the final authority for life and godliness.' },
    { icon: 'D', title: 'Discipleship', desc: 'Intentional mentorship to form Christ in every believer.' },
    { icon: 'L', title: 'Leadership', desc: 'Empowering individuals to take responsibility for their generation.' },
    { icon: 'C', title: 'Community', desc: 'Authentic relationships that foster accountability and growth.' },
    { icon: 'M', title: 'Mission', desc: 'Taking the gospel beyond the four walls of the church.' },
    { icon: 'X', title: 'Multiplication', desc: 'Reproducing leaders and churches globally.' },
];

export default function Pillars() {
    return (
        <section id="pillars">
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <span className="section-tag">Core Values</span>
                    <h2 style={{ color: '#fff', fontSize: '3rem' }}>The Six Pillars</h2>
                </div>
                <div className="grid-6">
                    {pillars.map((p, i) => (
                        <div className="pillar-card" key={i}>
                            <div className="pillar-icon">{p.icon}</div>
                            <h3 className="pillar-title">{p.title}</h3>
                            <p className="pillar-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
