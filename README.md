# 🚀 SPACE GRAVEYARD — The Machines We Left Behind

> **“Every machine left a footprint. Every footprint tells a story.”**

[![NASA Space Apps Challenge 2026](https://img.shields.io/badge/NASA%20Space%20Apps-2026%20Submission-0B3D91?style=for-the-badge&logo=nasa)](https://spaceappschallenge.org/)
[![Next.js 14](https://img.shields.io/badge/Next.js-14%20App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 🌌 NASA Space Apps Challenge 2026

**Challenge Topic:** *Abandoned but Not Forgotten — Mapping and Visualizing Left-Behind Lunar & Martian Hardware*

**Space Graveyard** is an interactive, scientifically rigorous web application and digital archive that honors the hardware, landers, rovers, and descent stages left on the Moon and Mars. Rather than treating these objects as space debris, **Space Graveyard** frames them as monuments of human ambition, scientific milestones, and cultural heritage.

---

## 🎯 The Problem

Decades of planetary exploration have left dozens of robotic spacecraft, landers, rovers, and descent modules resting on extraterrestrial surfaces:
1. **Public Disconnect**: Most people view inactive spacecraft as junk or forgotten debris rather than active scientific monuments.
2. **Scattered Telemetry**: NASA records, flight logs, last communication timestamps, and coordinates are distributed across multiple deep archive databases (NASA PDS, JPL, Apollo Lunar Surface Journal).
3. **Data Complexity**: Raw telemetry data is difficult for students, educators, and space enthusiasts to visualize or contextualize.

---

## 💡 The Solution

**Space Graveyard** unites verified NASA scientific archives into an immersive, cinematic, accessible experience that features:
- **Zero Fabricated Facts**: 100% of telemetry, last signal timestamps, coordinates, and distances traveled are sourced directly from NASA, NASA JPL, and the NASA Planetary Data System (PDS). Where data is unknown or unconfirmed, it is explicitly labeled as *“Data unavailable”* or *“Not publicly confirmed”*.
- **The Last Signal Timeline**: A signature storytelling visualizer documenting the final telemetry, last known communication, final activity, and physical legacy of inactive machines.
- **Interactive Surface Maps**: Precise coordinate mapping for Moon and Mars landing sites, including full traverse paths (e.g. Opportunity's 45.16 km traverse across Meridiani Planum).
- **Subsystem Hardware Inspector**: Interactive 3D/telemetry decomposition of power, communication, and scientific instruments.
- **Scientific Data Visualizations**: Rigorous Recharts-powered comparisons of mission duration vs. expectations, traverse distance, and communication blackouts.
- **Global Education Mode**: Toggleable beginner-friendly science explainers, instrument teardowns, and interactive NASA quizzes for students and educators.

---

## ✨ Key Features & Screenshots

### 1. 🎬 Cinematic Hero & Homepage
- Dynamic NASA-inspired visual language with ambient telemetry feeds.
- Scroll-based storytelling highlighting featured Moon and Mars hardware.
- Fast access to Mission Explorer and Data Telemetry sections.

### 2. 🔍 Mission Explorer (`/explorer`)
- Multi-dimensional filtering by destination (Moon vs. Mars), hardware type (Rover, Lander, Descent Stage, Rover Vehicle), and search query.
- Real-time search and sorting by landing date.
- Card metrics displaying mission period, status, destination, and key scientific objective.

### 3. 📡 The Last Signal (`/last-signal`)
- Signature timeline visualizer capturing the poignant transition from active science to final silence.
- Documents:
  1. Last Known Communication
  2. Final Activity
  3. Mission-Ending Event
  4. Known/Believed Resting Coordinates
  5. Scientific Legacy

### 4. 🗺️ Interactive Planetary Surface Map (`/maps`)
- SVG-based high-resolution coordinate projection for Moon (Apollo 11, Apollo 15, Surveyor 3) and Mars (Opportunity, InSight, Perseverance EDL).
- Interactive waypoint inspection with verified latitude, longitude, and elevation/depth data.

### 5. 🛠️ Subsystem Hardware Inspector (`/hardware`)
- Deep-dive structural teardowns into solar/RTG power systems, high-gain telemetry antennae, and primary science packages (e.g., APXS, RAT, SEIS, Pancam).

### 6. 📊 NASA Data Visualizations (`/visualizations`)
- Interactive charts answering scientific research questions:
  - *How far did Opportunity travel compared to its original 90-day design expectation?*
  - *How long did lunar and Martian landers survive beyond their prime missions?*
  - *What was the final power degradation curve for InSight before dust covered its solar arrays?*

### 7. 🎓 Global Education Mode & NASA Quiz (`/education`)
- One-click global toggle converting technical terminology into clear scientific explainers.
- 5-question interactive NASA knowledge check with immediate feedback and explanation references.

### 8. 📜 Sources & Data Provenance (`/sources`)
- Complete bibliography linking every mission card and data point directly to NASA.gov, JPL Mission Archives, NASA PDS, and Apollo Flight Logs.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Static Site Generation (SSG) with zero-runtime latency |
| **Language** | TypeScript 5 | Strict type safety for data models and telemetry schemas |
| **Styling** | Tailwind CSS 3.4 | Custom NASA glassmorphism, glowing telemetry states, and dark UI |
| **Animations** | Framer Motion 11 | Smooth motion graphics with full `prefers-reduced-motion` compliance |
| **Data Viz** | Recharts 2.12 | Accessible responsive charts with dynamic tooltips and WHAT/WHY callouts |
| **Icons** | Lucide React | NASA control room icon aesthetic |
| **Testing** | Node Test Runner | Verification scripts for link health, data schema, and factual accuracy |

---

## 📂 Project Architecture

```
space-graveyard/
├── src/
│   ├── app/                        # Next.js 14 App Router Pages
│   │   ├── page.tsx                # Homepage & Hero Section
│   │   ├── explorer/page.tsx       # Mission & Hardware Explorer
│   │   ├── mission/[slug]/page.tsx # Dynamic SSG Mission Detail Page (9 Sections)
│   │   ├── last-signal/page.tsx    # The Last Signal Timeline Feature
│   │   ├── visualizations/page.tsx # NASA Data Visualization Dashboard
│   │   ├── data-explorer/page.tsx # Raw Telemetry Explorer
│   │   ├── education/page.tsx      # Interactive Education & Quiz Hub
│   │   ├── sources/page.tsx        # NASA Sources & Provenance Audit
│   │   ├── layout.tsx              # Root Layout with Navigation & Education Context
│   │   ├── loading.tsx             # Telemetry Fallback Skeleton UI
│   │   ├── error.tsx               # Control Room Emergency Telemetry Fallback
│   │   └── not-found.tsx           # 404 Orbital Signal Lost View
│   ├── components/                 # Reusable UI & Feature Components
│   │   ├── dataviz/                # Recharts Visualization Components
│   │   ├── education/              # Quiz and Science Explainer Widgets
│   │   ├── hardware/               # Subsystem Teardown Components
│   │   ├── maps/                   # SVG Planetary Surface Map Component
│   │   ├── signal/                 # Last Signal Timeline Components
│   │   ├── Navbar.tsx              # Accessible Global Navigation
│   │   └── Footer.tsx              # NASA Attribution & Footer
│   ├── context/                    # React Context State Providers
│   │   └── EducationContext.tsx    # Global Education Mode State
│   ├── data/                       # Verified NASA Data Store
│   │   ├── missions.ts             # 6 Primary NASA Missions Data Registry
│   │   ├── visualizations.ts      # Telemetry & Charting Datasets
│   │   ├── education.ts            # Quiz & Explainer Questions
│   │   └── sources.ts              # Primary NASA Bibliography & Citations
│   └── types/                      # TypeScript Interfaces & Schemas
│       └── mission.ts              # Strongly Typed Telemetry Schemas
├── public/                         # Static Assets & NASA Imagery
├── package.json                    # Project Dependencies & Scripts
├── tailwind.config.ts              # Design System Custom Theme Configuration
├── tsconfig.json                   # TypeScript Compiler Configuration
└── README.md                       # Project Documentation
```

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/space-graveyard.git
   cd space-graveyard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Navigate to `http://localhost:3000` to view the application.

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm run start
```

---

## 📡 NASA Data Sources & Provenance

Every data point in **Space Graveyard** comes directly from official NASA repositories:

1. **NASA Planetary Data System (PDS)**: [pds.nasa.gov](https://pds.nasa.gov) — Raw instrument telemetry and traverse data.
2. **NASA JPL Mission Archives**: [jpl.nasa.gov](https://www.jpl.nasa.gov) — Mars Exploration Rovers (Opportunity), InSight, and Perseverance.
3. **Apollo Lunar Surface Journal**: [hq.nasa.gov/alsj](https://www.hq.nasa.gov/alsj/) — Apollo 11 Lunar Module *Eagle* descent stage and Apollo 15 Lunar Roving Vehicle.
4. **Surveyor 3 Artifact Analysis**: [nasa.gov](https://www.nasa.gov) — Lunar lander recovery data from Apollo 12 astronaut inspection.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits & Acknowledgments

- **NASA / NASA JPL / NASA PDS**: For pioneering humanity's reach into the cosmos and providing open scientific data.
- **NASA Space Apps Challenge 2026**: For inspiring innovative approaches to space data storytelling.

*Created for the 2026 NASA Space Apps Challenge.*
