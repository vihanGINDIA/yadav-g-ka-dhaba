# Yadav G Ka Dhaba website plan

## Product and implementation

Create a static, responsive React website with Home, About, Visit, and Contact Us routes. Business information and the restaurant photo must come only from the user-pasted listing and the supplied Google Maps page. Use verified details such as the business name, restaurant category, 4.5 rating from 6 reviews, ₹1–200 per person, dine-in and takeaway, 24-hour hours, the full address, Khan D.J marker, and phone number. Do not invent a menu, origin story, features, cuisine, or any other unlisted business facts. Phone, directions, Maps links and copy controls should be direct, usable actions.

The Home page will include an interactive Google Maps embed centered at the coordinates in the supplied Maps URL, alongside the written address and a direct directions link. The map embed must be accompanied by a separate Google Maps listing/directions action in case a browser blocks embedded Maps. Keep the four At a Glance facts in four equal-width columns across the full content width on desktop, with a balanced two-column arrangement on small screens. Use Wouter, Lenis and GSAP. Coordinate Lenis scrolling with GSAP ScrollTrigger section entrances and a restrained image motion effect; disable nonessential animation for reduced-motion users and clean up triggers on route changes. Keep links keyboard-accessible and buttons functional. Keep the application static with no new server or database resources.

Refine Contact Us into a concise two-column layout with a clear phone action group and an address/hours panel. Remove the fixed, oversized empty area, align Call now and Copy phone consistently, keep address directions and copy actions together, and remove the redundant Maps callout at the bottom. Keep the direct phone-call, Directions and Maps actions available.

Remove the About page’s closing editorial/source note and similar source-explaining disclaimers; do not replace them with similar disclaimer text. Simplify the Home page by removing its repetitive highlights ticker and replacing the static visit banner with the functional location map. Keep the actual listing facts and usable contact/directions actions.

The listing photo shown on Google Maps may be used as restaurant imagery. The site's custom signboard icon is original artwork, not an official logo. Keep route metadata and `/manus-routes.json` consistent with the page set. Publish on Manus first and leave GitHub untouched until the user explicitly confirms.

## Project structure

- `client/src/App.tsx`: route shell, shared navigation/footer, Lenis and GSAP ScrollTrigger setup.
- `client/src/pages/Home.tsx`: verified highlights, equally spaced At a Glance facts, and interactive Google Maps embed.
- `client/src/pages/About.tsx`: concise listing facts, without the closing source-note section.
- `client/src/pages/Visit.tsx`: listing hours, address, service options, price range and directions.
- `client/src/pages/Contact.tsx`: verified phone/address/hours and grouped call, copy and Maps actions.
- `client/src/index.css`: green identity, responsive layouts, equal-width metric row, refined contact spacing, map styling, motion and reduced-motion rules.
- `client/public/manus-routes.json`: all public page routes.
- `plan.md` and `TODO.md`: implementation/design decisions and acceptance outcomes.

## Design direction

Candidate styles (tail probabilities):
- **Contemporary Indian editorial / neighborhood-signage blend — 0.07**
- **Minimal Swiss hospitality directory — 0.05**
- **Neo-brutalist street-food poster — 0.03**

Choose the contemporary Indian editorial / neighborhood-signage blend, revised to use green as the main identity color.

- **Design Movement:** Contemporary Indian editorial design with restrained hand-painted-neighborhood-signage cues.
- **Core Principles:** Clear information; tactile but calm visual hierarchy; direct local actions; accessible motion and small-screen usability.
- **Color Philosophy:** Forest green and sage anchor the identity, supported by pale lichen and paper neutrals; high contrast and quiet spacing keep the expanded location map from making the page feel busy.
- **Layout Paradigm:** Asymmetric editorial copy-and-photo hero; full-width, equal-column facts row; restrained two-column Contact actions; separate map-and-location panel; stacked mobile layout.
- **Signature Elements:** A custom signboard/steam mark; restrained green focus and action treatments; a softly pulsing map indicator paired with the real embedded map.
- **Interaction Philosophy:** Buttons say what happens—call, directions, copy, or page navigation. Motion reinforces orientation rather than delaying access.
- **Animation:** Lenis smooth wheel scrolling; GSAP/ScrollTrigger entrances as sections enter view; subtle image parallax; working hover feedback; reduced-motion disables Lenis and all nonessential animation.
- **Typography System:** Editorial serif headlines with neutral system sans-serif body and labels; no external font dependency.
- **Brand Essence:** A direct, welcoming online front door for the listed Sorkha restaurant; grounded, clear, dependable.
- **Brand Voice:** Specific and warm. Examples: “Find Yadav G Ka Dhaba.” “Open the map. Make your way.”
- **Wordmark & Logo:** Listing name paired with an original signboard/steam mark, not presented as an official supplied logo.
- **Signature Brand Color:** Forest green.

## Serving and publication

Use the existing Vite static preview and `pnpm build:static`. Keep browser URLs relative. Save each deliverable change to Manus canonical main and publish the approved checkpoint to Manus hosting. GitHub publication remains a separate future action that requires the user's explicit confirmation.
