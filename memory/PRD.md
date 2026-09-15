# PRD — Paraphase Controls & Transformers (ALPAS) Website

## Original Problem Statement
Build a premium, modern, professional B2B industrial website for Paraphase Controls & Transformers (brand: ALPAS – The Perfect Protection), an Indian manufacturer of electrical and power-conditioning equipment with 25+ years in the industry. Goals: professional presence, direct customer enquiries, dealer/distributor enquiries across India, full product range showcase, quotation requests, SEO-friendly Google Ads landing pages, easy call/WhatsApp conversion, trust via experience/certifications/clients. Explicitly NOT ecommerce — no cart/checkout/payments. Conversion actions: Request a Quote, Get in Touch, WhatsApp, Call Now, Become a Dealer.

## User Personas
- Industrial buyer / plant head needing a stabilizer or transformer quote (5–1000 KVA)
- OEM / machine manufacturer (CNC, medical, printing) needing reliable power conditioning
- Prospective dealer/distributor evaluating a manufacturing partner
- Government/institutional procurement (references: ministries, railways, banks, universities)

## Core Requirements (static)
- Pages: Home, About, Products listing, 9 product detail pages, Industries, Clients, Quality & Certifications, Dealer Enquiry, Contact
- Reusable Request-a-Quote form (12 fields + optional spec file upload) as modal + dedicated /request-quote page
- Dealer/Distributor enquiry form (10 fields)
- Contact: clickable phones (9210638205, 8376863221, 7303374227), WhatsApp chat (8796445811), email paraphrase3@gmail.com, address Shastri Nagar Delhi 110031, Google Maps embed, Instagram link
- Mobile sticky bottom bar: CALL / WHATSAPP / REQUEST QUOTE
- SEO: unique titles/descriptions per page; natural keyword copy
- No invented specs, clients, certifications or reviews

## Architecture
- Frontend: React (CRA/craco), Tailwind + shadcn/ui, framer-motion (masked hero reveal, scroll reveals, parallax), lenis smooth scrolling, react-router, axios, sonner toasts
- Backend: FastAPI + MongoDB (motor). Endpoints: GET /api/health, POST /api/enquiries/quote (multipart, optional attachment ≤10MB), POST /api/enquiries/dealer (JSON)
- Email: Emergent managed Resend proxy (EMERGENT_EMAIL_KEY in backend/.env), enquiries emailed to paraphrase3@gmail.com with reply-to set; guardrail gate applied on every send
- Assets: real ALPAS logo + 4 real product photos served from /public/assets

## Implemented (2026-09-15)
- Full site with all 12 routes, dark-navy editorial art direction, kinetic masked hero headline, parallax product spotlight, slow editorial marquee, numbered manifesto chapters (01–05)
- 9 SEO-friendly product pages with specs tables, features, applications, enquiry sidebar (quote/WhatsApp/call)
- Quote + dealer enquiry flows: stored in MongoDB AND emailed to paraphrase3@gmail.com (verified email_sent:true)
- Mobile sticky action bar, responsive layout, data-testids on interactive elements
- Google Maps embed, clickable tel/mailto/WhatsApp links, Instagram

## Backlog / Next
- P1: Password-protected admin page to view stored enquiries (user skipped initially)
- P1: More real product photos per product line (currently shared across some products)
- P2: sitemap.xml + robots.txt + JSON-LD schema for products
- P2: Hindi language version
- P3: Google Ads conversion tracking / analytics wiring
