import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { shop, categories, addressLines } from "../shopInfo";
import CategoryIcon from "../components/CategoryIcon";

function Home() {
  const a = shop.address;
  return (
    <>
      <section className="signboard">
        <h1 className="sign-name">{shop.name}</h1>
        <p className="sign-telugu" lang="te">{shop.telugu}</p>
        <p className="sign-tagline">{shop.tagline}</p>
        <p className="sign-where">
          <MapPin size={18} aria-hidden="true" />
          {a.landmark}, {a.village}
        </p>
        <div className="sign-actions">
          <Link className="btn btn-yellow" to="/products">See all products</Link>
          <a className="btn btn-outline" href={shop.mapLink} target="_blank" rel="noreferrer">
            Get directions
          </a>
        </div>
      </section>

      <div className="restock">
        <Clock size={20} aria-hidden="true" />
        <strong>Snacks are restocked twice a week.</strong>
        <span>Groceries: all items available.</span>
      </div>

      <section className="page">
        <h2 className="section-title">Shop by category</h2>
        <ul className="cat-grid">
          {categories.map((c) => (
            <li key={c.name}>
              <Link to="/products" className="cat-tile">
                <span className={`icon-disc tone-${c.tone}`}>
                  <CategoryIcon name={c.icon} />
                </span>
                <span className="cat-name">{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="page visit">
        <div className="visit-text">
          <h2>Visit the shop</h2>
          <address>
            {addressLines().map((l) => (<span key={l}>{l}</span>))}
          </address>
          <Link className="btn btn-blue" to="/find-us">See map</Link>
        </div>
        <div className="map-wrap small">
          <iframe
            title={`${shop.name} location on Google Maps`}
            src={shop.mapEmbed}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
