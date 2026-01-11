## Portfolio Project – UI Components Showcase + Swiggy Dashboard

**Live Demo (Vercel):** `https://components-ui-delta.vercel.app` ([Open Website](https://components-ui-delta.vercel.app))

Built with **React + TypeScript** (bundled with **Parcel**).

## Table of Contents
- [About](#about)
- [Live Demo](#live-demo)
- [Features](#features)
- [Why This Matters](#why-this-matters-frontend--website-perspective)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Notes](#notes)

## About
This project is my **frontend portfolio website** where I showcase a set of **interactive UI components** (opened inside a modal) and a dedicated **Swiggy-style dashboard** page. Instead of static screenshots, the site provides **real, clickable demos** of UI patterns used in modern web applications.

## Live Demo
- **Vercel Deployment:** [components-ui-delta.vercel.app](https://components-ui-delta.vercel.app)

## Features
The home page contains a component gallery. Each card opens a working demo and a short description:

- **Accordion** – expandable/collapsible sections (FAQs, grouped content)
- **Tabs** – switch between multiple views without leaving the page
- **Modal / Dialog** – overlays for confirmations and details
- **Tooltip** – contextual hints on hover/focus
- **Dropdown** – option selection UI
- **Pagination** – navigate large lists/tables
- **Data Table + Progress Bars** – dashboard-style table UI
- **Theme Toggle** – light/dark mode switching
- **Toast Notifications** – timed alerts for success/error/info
- **Search Bar** – filtering/typeahead-style search experience
- **Form Validation** – real-time validation with error feedback
- **Swiggy Dashboard** – full page demo with a food ordering/dashboard experience

## Why This Matters (Frontend + Website Perspective)
- **Component-driven UI**: each feature is built as a reusable React component.
- **Real-world interaction patterns**: modals, forms, search, toasts, pagination, tables—these are patterns used in production apps.
- **Data-driven gallery**: demos are configured in `src/componentData.tsx`, so maintaining and expanding the gallery is straightforward.
- **Portfolio website flow**: hero → component gallery → interactive demos / dashboard, designed for quick exploration.

## Tech Stack
- **React** + **React DOM**
- **TypeScript**
- **Parcel** (dev server + production build)
- **CSS** (custom styling)
- **framer-motion** (animations / motion effects)

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Install
```bash
npm install
```

### Run (Development)
```bash
npm run dev
```

Parcel will print a local URL in the terminal (commonly `http://localhost:1234`).

### Build (Production)
```bash
npm run build
```

The production output is generated in `dist/`.

## Project Structure
```text
src/
  components/          # Individual UI demos (Accordion, Tabs, Tooltip, etc.)
  Recordings/          # Demo preview videos used in the cards
  App.tsx              # Modal handling + home/dashboard switching
  componentData.tsx    # Single source of truth for the gallery list
  styles.css           # Global styles and animations
  index.tsx            # React entry point
```

## Notes
- This is a portfolio/demo project focused on UI patterns and interaction quality.
- Preview videos are included to quickly show what each component does before opening it.
