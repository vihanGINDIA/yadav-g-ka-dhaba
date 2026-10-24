import { useState } from "react";
import { ArrowUpRight, Check, Clock3, Copy, MapPin, Phone } from "lucide-react";
import PageMeta from "../components/PageMeta";
import { listing } from "../data/listing";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  if (!copied) throw new Error("Copy is not available in this browser.");
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const handleCopy = async () => {
    try {
      await copyText(value);
      setCopied(true);
      setError(false);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setError(true);
      setCopied(false);
    }
  };
  return (
    <div className="copy-control">
      <button type="button" className="copy-button" onClick={handleCopy} aria-label={`Copy ${label}`}>
        {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        {copied ? "Copied" : `Copy ${label}`}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? `${label} copied to clipboard.` : error ? `Unable to copy ${label}. You can select it above.` : ""}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <main id="main-content" className="page-main">
      <PageMeta title="Contact Us" description="Contact Yadav G Ka Dhaba by phone or open its Google Maps listing for the address and directions." />
      <section className="page-hero section-wrap">
        <div className="section-marker" data-enter><span>04</span><span>CONTACT US</span></div>
        <div className="page-hero-copy" data-enter><p className="eyebrow">SAY HELLO OR FIND THE WAY</p><h1>Need to reach<br /><em>the dhaba?</em></h1><p className="page-lede">Call using the listed number, or open the Google Maps pin for directions.</p></div>
      </section>
      <section className="contact-layout section-wrap">
        <div className="contact-primary-card" data-enter>
          <span className="contact-large-icon"><Phone size={22} aria-hidden="true" /></span>
          <p className="eyebrow">CALL THE RESTAURANT</p>
          <a className="contact-phone" href={listing.phoneHref}>{listing.phone}<ArrowUpRight size={19} aria-hidden="true" /></a>
          <div className="contact-primary-actions">
            <a className="button button-light" href={listing.phoneHref}>Call now <Phone size={15} aria-hidden="true" /></a>
            <CopyButton value={listing.phone} label="phone number" />
          </div>
        </div>
        <div className="contact-secondary">
          <article className="contact-detail-card" data-enter>
            <span className="detail-icon"><MapPin size={18} aria-hidden="true" /></span>
            <p className="eyebrow">VISIT</p>
            <h2>{listing.address}</h2>
            <p>Located in {listing.placeLabel}</p>
            <div className="contact-card-actions"><a className="inline-link" href={listing.directionsUrl} target="_blank" rel="noreferrer noopener">Get directions <ArrowUpRight size={15} /></a><CopyButton value={listing.address} label="address" /></div>
          </article>
          <article className="contact-detail-card hours-card" data-enter>
            <span className="detail-icon"><Clock3 size={18} aria-hidden="true" /></span>
            <p className="eyebrow">HOURS</p>
            <h2>{listing.hours}</h2>
            <a className="inline-link" href={listing.mapsUrl} target="_blank" rel="noreferrer noopener">Check the listing <ArrowUpRight size={15} /></a>
          </article>
        </div>
      </section>
    </main>
  );
}
