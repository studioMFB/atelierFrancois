# Changelog

## 2026-03-09

### Frontend Refactor
- Replaced the legacy Vue entrypoints, routes, views, and stores with a React-only app structure.
- Moved routing into the React app bootstrap with dedicated page routes and shared layouts.
- Centralized app state with reducer-based providers instead of Pinia-style state management.
- Split API access into frontend services and hydrators to match the desired architecture.

### Page Structure
- Refactored large route files into smaller page-domain components for home, account, product, shop, saved gardens, and planner flows.
- Extracted planner sidebar, action bar, and utility sections into reusable components to make the planner page easier to read and debug.
- Added shared page-level UI pieces for section headers, loading states, and empty/not-found panels.

### Branding And UX
- Updated the Lil' Wud wordmark and brand presentation.
- Reworked the homepage to open with a shorter intro and surface featured products sooner.
- Rebuilt the footer around about, contact, and mascot sign-off content instead of implementation notes.
- Added richer planner interactions, product presentation sections, and reusable UI controls across the shop flow.
