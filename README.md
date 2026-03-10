# Lil' Wud

React web, React Native mobile, a shared TypeScript SDK, and a local TypeScript API for a handmade outdoor children furniture shop with a saved-garden planner.

## Stack

- `backend/`: Fastify + SQLite TypeScript API
- `frontend/`: React + Vite web app
- `mobile/`: Expo React Native companion app
- `packages/lilwud-sdk/`: shared TypeScript SDK for web and mobile

## Prerequisites

- Node.js 20+
- npm 10+
- For mobile: Expo Go or an iOS/Android simulator

## Install

From the repo root:

```bash
npm install
```

## Configure

The TypeScript backend runs on `http://localhost:5021` by default.

Create the local env files:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
cp mobile/.env.example mobile/.env
```

For a physical phone, change `EXPO_PUBLIC_API_BASE_URL` in `mobile/.env` to your machine's LAN IP, for example `http://192.168.1.20:5021`.

This repo also includes a project-level `.npmrc` that pins installs to `https://registry.npmjs.org/`, so it will not inherit your work registry while you are inside this project.

## Run The API

From the repo root:

```bash
npm run dev:api
```

Useful URLs:

- API: `http://localhost:5021`
- Health: `http://localhost:5021/health`

The SQLite database is created automatically at `backend/App_Data/lilwud.sqlite` and the product catalog is seeded on first run.

## Run The Web App

In another terminal:

```bash
cd /Users/francoisbrunet/Documents/STUDIO\ MFB/atelierFrancois
npm run dev:web
```

Open `http://localhost:1234`.

The web app reads `VITE_API_BASE_URL` from `frontend/.env.local`.

## Run The Mobile App

In another terminal:

```bash
cd /Users/francoisbrunet/Documents/STUDIO\ MFB/atelierFrancois
npm run dev:mobile
```

Then open Expo and choose:

- iOS simulator
- Android emulator
- Expo Go on a device

The mobile app reads `EXPO_PUBLIC_API_BASE_URL` from `mobile/.env`.

Recommended values:

- iOS simulator: `http://localhost:5021`
- Android emulator: `http://10.0.2.2:5021`
- Physical phone: `http://<your-lan-ip>:5021`

## Notes

- The full Garden planner is on the web app.
- The mobile app is currently a companion app for account, shop, basket, and saved gardens.
- If `npm install` fails partway through because of network issues, rerun it from the repo root.

## Main Commands

```bash
npm run dev:api
npm run build:api
npm run dev:web
npm run dev:mobile
npm run build:sdk
```
