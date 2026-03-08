import './CtaBanner.css';

export default function CtaBanner() {
    return (
        <section id="cta-banner">
            <h2 className="cta-headline">ARE YOU READY<br /><span className="gold-text">TO BE BUILT?</span></h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.2rem', color: '#aaa' }}>Join a community of leaders in formation.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <button className="btn">Connect With Us</button>
                <button className="btn" style={{ borderColor: '#fff', color: '#fff' }}>Partner / Give</button>
            </div>
        </section>
    );
}
