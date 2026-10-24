import { ArrowUpRight, Clock3, Star, Utensils } from "lucide-react";
import PageMeta from "../components/PageMeta";
import { listing } from "../data/listing";

export default function About() {
  return (
    <main id="main-content" className="page-main">
      <PageMeta
        title="About"
        description="Yadav G Ka Dhaba is a restaurant in Sorkha, Noida, with a 4.5 rating, 24-hour opening hours, dine-in and takeaway."
      />
      <section className="page-hero section-wrap">
        <div className="section-marker" data-enter><span>02</span><span>THE DHABA</span></div>
        <div className="page-hero-copy" data-enter>
          <p className="eyebrow">{listing.category} · SORKHA, NOIDA</p>
          <h1>A few clear<br /><em>facts about the place.</em></h1>
        </div>
      </section>
      <section className="about-body section-wrap">
        <div className="about-photo" data-enter>
          <img src={listing.photoUrl} alt="Food photograph on the Yadav G Ka Dhaba listing" />
        </div>
        <div className="about-facts">
          <article className="about-fact" data-enter>
            <span className="fact-icon"><Star size={17} /></span>
            <div><span className="eyebrow">RATING</span><h2>{listing.rating}<small> / 5</small></h2><p>{listing.reviews} reviews</p></div>
            <a href={listing.mapsUrl} target="_blank" rel="noreferrer noopener" aria-label="View the rating and reviews on Google Maps"><ArrowUpRight size={17} /></a>
          </article>
          <article className="about-fact" data-enter>
            <span className="fact-icon"><Clock3 size={17} /></span>
            <div><span className="eyebrow">OPENING HOURS</span><h2 className="fact-title">{listing.hours}</h2></div>
          </article>
          <article className="about-fact" data-enter>
            <span className="fact-icon"><Utensils size={17} /></span>
            <div><span className="eyebrow">SERVICE OPTIONS</span><h2 className="fact-title">{listing.services.join(" & ")}</h2></div>
          </article>
        </div>
      </section>
    </main>
  );
}
