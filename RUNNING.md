# Running the project (local dev)

Prerequisites
- Node.js >= 22.12.0 (recommended) — use nvm-windows to manage versions

Quick start
1. cd "D:\ZeeshanProjects\Ababeel-Foundation\ababeel-foundation"
2. npm install
3. npm run dev

Open http://localhost:5173/ in your browser. Use the top nav to access Home and Dashboard.

Add real hero images
- Place your hero images in the project at `src/assets/hero1.jpg` and `src/assets/hero2.jpg` (recommended size ~1600x600). The carousel will automatically use these images (it falls back to `src/assets/hero.svg` if the JPGs are missing).
Notes
- If Vite warns about Node version, update Node (nvm-windows recommended).
- `npm install` will install `react-router-dom` used for routing.
