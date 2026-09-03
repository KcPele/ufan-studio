# UFAN Studio

A Next.js portfolio for UFAN Studio — comic art, illustration, animation, and visual storytelling.

## Run with Docker

```bash
docker compose up --build -d
```

The Compose configuration binds the site to `127.0.0.1:3101` by default. To use another local port:

```bash
HOST_PORT=3200 docker compose up --build -d
```

Then open `http://127.0.0.1:3101` (or the selected `HOST_PORT`).

## Stop

```bash
docker compose down
```

## Local development

```bash
corepack pnpm install
corepack pnpm dev
```
