import { MapPin, Phone, Clock } from "lucide-react";
import { shop, addressLines } from "../shopInfo";

function FindUs() {
  return (
    <section className="page">
      <h1>Find us</h1>

      <ul className="details">
        <li>
          <MapPin size={22} aria-hidden="true" />
          <address>
            {addressLines().map((l) => (<span key={l}>{l}</span>))}
          </address>
        </li>
        {shop.phone && (
          <li><Phone size={22} aria-hidden="true" /><a href={`tel:${shop.phone}`}>{shop.phone}</a></li>
        )}
        {shop.hours && (
          <li><Clock size={22} aria-hidden="true" /><span>{shop.hours}</span></li>
        )}
      </ul>

      <div className="map-wrap">
        <iframe
          title={`${shop.name} location on Google Maps`}
          src={shop.mapEmbed}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <a className="btn btn-blue" href={shop.mapLink} target="_blank" rel="noreferrer">
        Open in Google Maps
      </a>
    </section>
  );
}

export default FindUs;
