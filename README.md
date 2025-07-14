# Spidr Air Fryer Interest Form

A simple React app built for Spidr Design's coding challenge.  
This project is a responsive, brand-inspired form intended to be embedded at the bottom of a landing page.

## Overview

Spidr is unveiling a new air fryer, and this form collects interest from potential customers.  
It includes all the requested fields:

- First name
- Last name
- Phone number
- Email address
- Guess the air fryer's cost ($)
- Very, Very Secret 16-digit Spidr PIN (formatted as ####-####-####-####)

On submit, the form simply prints the entered data to the console as required.

---

## Deployment

Live App [deployed via Netlify]:
effortless-babka-1d22e7.netlify.app

---

## Features

- Clean, responsive layout
- Styled to match Spidr's dark theme and accent colors
- Raleway typography to match the brand site
- Auto-formatting for the Spidr PIN input (inserts dashes every 4 digits like a credit card field)
-  Built as embeddable – no header/footer, just the form  

---

## Brand Matching Notes

I reviewed Spidr's actual website to match:

- Color palette (dark backgrounds, teal accents)
- Typography (Raleway with light weights for headings)
- Layout style (centered sections with minimal, clear design)
- Subtle transitions and modern form input styling

I used CSS variables throughout so colors can be easily updated in one place.

---

## Tech Stack

- React (Vite)
- Plain CSS
- Deployed via Netlify

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Build for Production
```bash
npm run build
```

---

## How to test the Form
1. Fill in each field – all are required.
2. The Spidr PIN field will automatically format into the required ####-####-####-#### format.
3. Submit the form to see all values printed to the browser console.

---

## Folder Structure
src/
  * components/
    * FormInput.jsx
    * InterestForm.jsx
    * SpidrPinInput.jsx
  * App.jsx
  * App.css

---

## Notes
No routing or complex state management is included.
Uses semantic, accessible markup where possible.
