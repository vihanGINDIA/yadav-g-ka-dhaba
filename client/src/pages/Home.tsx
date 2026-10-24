import { ArrowDownRight, ArrowUpRight, Clock3, MapPin, Navigation2, Star } from "lucide-react";
import { Link } from "wouter";
import PageMeta from "../components/PageMeta";
import { listing } from "../data/listing";

const embeddedMapUrl = "https://www.google.com/maps?q=28.5739301%2C77.4019544&z=16&output=embed";

export default function Home() {
  return (
    <main id="main-content">
      <PageMeta title="Home" description="Find Yadav G Ka Dhaba in Sorkha, Noida. See its rating, phone, hours and location." />
      <section className="hero section-wrap">
        <div className="hero-copy" data-enter>
          <p className="eyebrow"><span className="eyebrow-dot" /> SORKHA <span className="eyebrow-divider">/</span> NOIDA</p>
          <h1>Yadav G<br /><em>Ka Dhaba</em><span className="hero-period">.</span></h1>
          <p className="hero-description">A restaurant in Sorkha, open 24 hours.</p>
          <div className="action-row hero-actions">
            <a className="button button-primary" href={listing.directionsUrl} target="_blank" rel="noreferrer noopener">Get directions <ArrowUpRight size={16} aria-hidden="true" /></a>
            <Link className="button button-text" href="/visit">Visit details <ArrowDownRight size={16} aria-hidden="true" /></Link>
          </div>
          <a className="rating-line" href={listing.mapsUrl} target="_blank" rel="noreferrer noopener" aria-label={`Rated ${listing.rating} out of 5 from ${listing.reviews} reviews on Google Maps`}>
            <span className="rating-stars" aria-hidden="true"><Star /><Star /><Star /><Star /><Star /></span>
            <strong>{listing.rating}</strong><span>({listing.reviews} reviews)</span><ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-photo-wrap" data-enter>
          <div className="hero-photo-frame">
            <img className="hero-photo" src={listing.photoUrl} alt="Food photograph on the Yadav G Ka Dhaba listing" />
            <div className="photo-overlay" aria-hidden="true" />
            <div className="photo-index"><span>01</span><span>YADAV G KA DHABA</span></div>
            <div className="open-stamp"><Clock3 size={15} aria-hidden="true" /><span>OPEN<br /><strong>24 HRS</strong></span></div>
          </div>
          <p className="photo-caption"><MapPin size={13} aria-hidden="true" /> {listing.address}</p>
        </div>
        <a className="scroll-cue" href="#at-a-glance"><span>EXPLORE</span><ArrowDownRight size={15} aria-hidden="true" /></a>
      </section>

      <section className="glance section-wrap" id="at-a-glance">
        <div className="glance-heading">
          <div className="section-marker" data-enter><span>01</span><span>AT A GLANCE</span></div>
          <div className="section-heading" data-enter><p className="eyebrow">THE ESSENTIALS</p><h2>Make a plan.<br /><em>Find your way.</em></h2></div>
        </div>
        <div className="glance-content">
          <div className="glance-grid">
            <article className="info-tile" data-enter><span className="tile-number">01</span><span className="tile-label">RATING</span><strong className="tile-value">{listing.rating}<span className="tile-star">★</span></strong><span className="tile-note">{listing.reviews} reviews</span></article>
            <article className="info-tile" data-enter><span className="tile-number">02</span><span className="tile-label">HOURS</span><strong className="tile-value tile-small">{listing.hours}</strong></article>
            <article className="info-tile" data-enter><span className="tile-number">03</span><span className="tile-label">SERVICE</span><strong className="tile-value tile-small">Dine-in<br />Takeaway</strong></article>
            <article className="info-tile info-tile-price" data-enter><span className="tile-number">04</span><span className="tile-label">PRICE RANGE</span><strong className="tile-value">{listing.priceRange}</strong><span className="tile-note">{listing.pricePer}</span></article>
          </div>
          <div className="glance-link-row"><Link className="inline-link" href="/visit">Full visit details <ArrowUpRight size={15} /></Link></div>
        </div>
      </section>

      <section className="location-section" id="location">
        <div className="location-inner section-wrap">
          <div className="location-copy" data-enter>
            <div className="section-marker"><span>02</span><span>FIND US</span></div>
            <p className="eyebrow">RIGHT HERE IN SORKHA</p>
            <h2>Open the map.<br /><em>Make your way.</em></h2>
            <p className="location-address">{listing.address}</p>
            <p className="location-place">Located in <strong>{listing.placeLabel}</strong></p>
            <div className="location-hours"><Clock3 size={16} aria-hidden="true" /><span>{listing.hours}</span></div>
            <div className="action-row location-actions">
              <a className="button button-primary" href={listing.directionsUrl} target="_blank" rel="noreferrer noopener">Get directions <Navigation2 size={15} aria-hidden="true" /></a>
              <a className="button button-secondary" href={listing.mapsUrl} target="_blank" rel="noreferrer noopener">Open listing <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="location-map" data-enter>
            <div className="map-heading"><span className="map-live-dot" /><span>YADAV G KA DHABA</span><span className="map-heading-location">SORKHA · NOIDA</span></div>
            <iframe
              className="location-map-frame"
              title="Interactive map for Yadav G Ka Dhaba in Sorkha, Noida"
              src={embeddedMapUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-footer"><MapPin size={14} aria-hidden="true" /><span>{listing.address}</span><a href={listing.directionsUrl} target="_blank" rel="noreferrer noopener">Directions <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
      </section>

      <section className="contact-strip section-wrap" data-enter>
        <div><p className="eyebrow">CONTACT</p><h2>Call Yadav G<br /><em>Ka Dhaba.</em></h2></div>
        <div className="contact-strip-action"><a className="phone-display" href={listing.phoneHref}>{listing.phone} <ArrowUpRight size={18} aria-hidden="true" /></a><Link className="inline-link" href="/contact">Contact Us <ArrowUpRight size={15} /></Link></div>
      </section>
    </main>
  );
}
