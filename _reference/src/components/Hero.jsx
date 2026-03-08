import { useEffect, useRef } from 'react';
import './Hero.css';

class Particle {
    constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 2;
        this.alpha = Math.random() * 0.5;
        this.width = width;
        this.height = height;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = this.width;
        if (this.x > this.width) this.x = 0;
        if (this.y < 0) this.y = this.height;
        if (this.y > this.height) this.y = 0;
        this.alpha = 0.3 + Math.sin(Date.now() * 0.001 + this.x) * 0.2;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(197, 160, 101, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default function Hero() {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animIdRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particlesRef.current = [];
            for (let i = 0; i < 100; i++) {
                particlesRef.current.push(new Particle(width, height));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particlesRef.current.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            animIdRef.current = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
        };
    }, []);

    return (
        <section id="hero">
            <canvas ref={canvasRef} id="hero-canvas" />
            <div className="hero-overlay" />
            <div className="hero-content">
                <h1 className="hero-title">A City<br />Raised On<br />Truth</h1>
                <div className="hero-sub">Jesus City International Ministries</div>
                <div className="hero-ctas">
                    <button className="btn">Join The Movement</button>
                    <button className="btn">Explore JCIM</button>
                </div>
            </div>
            <div className="scroll-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1">
                    <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
                </svg>
            </div>
        </section>
    );
}
