import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-logo">JCIM</div>
                <p className="footer-verse">
                    &ldquo;...till we all come to the unity of the faith and of the knowledge of the Son of God, to a perfect man, to the measure of the stature of the fullness of Christ.&rdquo;
                    <br /><br />
                    — Ephesians 4:13
                </p>

                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Berean Church</a>
                    <a href="#">Sermons</a>
                    <a href="#">Contact</a>
                </div>

                <div className="copyright">
                    © 2026 Jesus City International Ministries. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
