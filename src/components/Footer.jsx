import { shop, addressLines } from "../shopInfo";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong className="footer-name">{shop.name}</strong>
        <span className="footer-te" lang="te">{shop.telugu}</span>
      </div>
      <address>
        {addressLines().map((l) => (<span key={l}>{l}</span>))}
      </address>
    </footer>
  );
}

export default Footer;
