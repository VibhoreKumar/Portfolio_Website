# Portfolio redesign

Video-inspired monochrome layout adapted to Vibhore Kumar’s existing portfolio content.

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Main UI: `src/App.jsx`. Styling: `src/styles/global.css`. Project and experience content: `src/content.js`. Contact form: `src/components/Contact.jsx`. Portrait: `public/portrait.jpg`.

The reference platform sidebar and branding are excluded. Project visuals are illustrative interface compositions, not screenshots of the actual applications. GitHub is used instead of a Resume button because this repository contains no resume PDF. Existing EmailJS configuration is preserved; message delivery has not been tested.

Production build passed. Browser visual checks were unavailable in the editing session. Check desktop and mobile layouts locally before deploying. No changes have been pushed to GitHub.

## Motion refinement

The portrait appears once, in About. `src/hooks/usePortfolioMotion.js` adds scroll-linked skills text, gentle hero/photo/project parallax, and one-time section reveals. CSS adds staggered entries and menu/dialog entrances. Native scrolling is preserved; reduced-motion preferences disable these effects.

The re-uploaded reference video was unavailable, and the original video file could no longer be decoded. This refinement uses the previously extracted reference frames; exact motion timing has not been verified against video playback. Browser visual checks remain pending.

## Background effects update

Added procedural WebGL silver and charcoal flowing surfaces, original vector reaching hands, scroll-driven star rotation, a stronger photo reveal and project entrances. Background rendering is capped at about 30 fps, paused offscreen and in hidden tabs, and static for reduced-motion preferences. If WebGL is unavailable, CSS supplies a static background. Browser visual verification remains pending.

## Animated avatar

The About portrait now uses public/developer-avatar.svg: an original grayscale vector developer with a beard and charcoal baseball cap. CSS keyframes inside the SVG animate blinking, head bobbing, breathing and a small wave. Reduced-motion preferences disable animation. The original portrait remains available in public/portrait.jpg. This is a stylized vector character, not a rigged version of the generated photorealistic preview.

## Cartoon avatar refinement

The current avatar is a compact cartoon bust in a rounded square card with a circular backdrop, beard, baseball cap, and hoodie. It blinks, bobs its head and breathes subtly; the earlier waving-arm/laptop composition has been replaced. Layout and animations elsewhere are retained.

## Resume download

The fixed right-side links now include Resume below LinkedIn and GitHub. It downloads public/Vibhore_Kumar_Resume.pdf, copied from the user's Vibhore_Kumar_Data_Resume.pdf. Replace that public PDF to update the resume. The portrait is unchanged in this revision.
