import { ArrowUpRight, Clock3, MapPin, Phone, Utensils } from "lucide-react";
import { Link } from "wouter";
import PageMeta from "../components/PageMeta";
import { listing } from "../data/listing";

export default function Visit() {
  return (
    <main id="main-content" className="page-main">
      <PageMeta title="Visit" description="Find Yadav G Ka Dhaba in Sorkha, Noida. See its hours, address, phone and directions." />
      <section className="page-hero section-wrap">
        <div className="section-marker" data-enter><span>03</span><span>PLAN YOUR VISIT</span></div>
        <div className="page-hero-copy" data-enter>
          <p className="eyebrow">GETTING HERE</p>
          <h1>Find your way<br /><em>to Yadav G.</em></h1>
          <p className="page-lede">Open the map for the location pin and turn-by-turn directions.</p>
          <a className="button button-primary" href={listing.directionsUrl} target="_blank" rel="noreferrer noopener">Open directions <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
      <section className="visit-detail-layout section-wrap">
        <div className="visit-details-list">
          <article className="visit-detail" data-enter><span className="detail-icon"><MapPin size={18} /></span><div><span className="eyebrow">ADDRESS</span><h2>{listing.address}</h2><p>Located in {listing.placeLabel}</p></div><a href={listing.directionsUrl} target="_blank" rel="noreferrer noopener" aria-label="Open directions to the address"><ArrowUpRight size={17} /></a></article>
          <article className="visit-detail" data-enter><span className="detail-icon"><Clock3 size={18} /></span><div><span className="eyebrow">HOURS</span><h2>{listing.hours}</h2></div></article>
          <article className="visit-detail" data-enter><span className="detail-icon"><Utensils size={18} /></span><div><span className="eyebrow">SERVICE</span><h2>{listing.services.join(" · ")}</h2></div></article>
          <article className="visit-detail" data-enter><span className="detail-icon detail-icon-price">₹</span><div><span className="eyebrow">PRICE RANGE</span><h2>{listing.priceRange} <small>/ person</small></h2></div></article>
          <article className="visit-detail" data-enter><span className="detail-icon"><Phone size={17} /></span><div><span className="eyebrow">PHONE</span><h2><a className="detail-phone" href={listing.phoneHref}>{listing.phone}</a></h2></div><a href={listing.phoneHref} aria-label={`Call ${listing.phone}`}><ArrowUpRight size={17} /></a></article>
        </div>
        <aside className="visit-side-card" data-enter>
          <div className="side-card-photo"><img src={listing.photoUrl} alt="Food photograph associated with Yadav G Ka Dhaba" /></div>
          <div className="side-card-content"><p className="eyebrow">READY TO GO?</p><h2>Find the way<br /><em>to Sorkha.</em></h2><a className="button button-primary button-full" href={listing.mapsUrl} target="_blank" rel="noreferrer noopener">Open Google Maps <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </aside>
      </section>
      <div className="page-bottom-link section-wrap"><Link className="inline-link" href="/contact">Contact details <ArrowUpRight size={15} /></Link></div>
    </main>
  );
}
