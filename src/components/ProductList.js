import Image from 'next/image'

export default function ProductList({ products = [] }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <article key={p.id} className="card" aria-labelledby={`title-${p.id}`}>
          <a href={`#product-${p.id}`} className="card-link" aria-label={`View ${p.title}`}>
            <div className="image-wrap">
              <Image
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="product-image"
                priority={false}
              />
            </div>

            <div className="card-body">
              <h3 id={`title-${p.id}`} className="product-title">{p.title}</h3>
              <p className="product-category">{p.category}</p>
              <div className="product-meta">
                <span className="price">${Number(p.price).toFixed(2)}</span>
                <button className="btn">Add</button>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  )
}
