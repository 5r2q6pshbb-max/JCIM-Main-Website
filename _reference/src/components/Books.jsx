import './Books.css';

const books = [
    { category: 'DISCIPLESHIP', title: 'The Science of Surrender' },
    { category: 'SPIRITUALITY', title: 'The Alabaster Vessel' },
    { category: 'HEALING', title: "The Bitter Waters' Song" },
    { category: 'APOLOGETICS', title: 'Wolves in the Sanctuary' },
];

export default function Books() {
    return (
        <section id="books">
            <div className="container" style={{ textAlign: 'center' }}>
                <span className="section-tag">Literary Works</span>
                <h2 style={{ color: '#fff', fontSize: '3rem' }}>Words That Build Nations</h2>

                <div className="book-gallery">
                    {books.map((book, i) => (
                        <div className="book-wrapper" key={i}>
                            <div className="book-cover">
                                <div style={{ fontSize: '0.7rem', color: '#666', marginBottom: '10px' }}>{book.category}</div>
                                <h3 className="book-title">{book.title}</h3>
                                <button className="btn" style={{ marginTop: 'auto', fontSize: '0.6rem', padding: '8px 16px' }}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
