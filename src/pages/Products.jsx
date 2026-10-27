import { categories } from "../shopInfo";
import CategoryIcon from "../components/CategoryIcon";

function Products() {
  return (
    <section className="page">
      <h1>Products</h1>
      <p>Everything available at the shop.</p>

      <ul className="prod-grid">
        {categories.map((c) => (
          <li className={`prod${c.highlight ? " is-highlight" : ""}`} key={c.name}>
            <span className={`icon-disc big tone-${c.tone}`}>
              <CategoryIcon name={c.icon} size={32} />
            </span>
            <div>
              <h2>{c.name}</h2>
              <p>{c.items}</p>
              {c.note && <span className="tag">{c.note}</span>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
