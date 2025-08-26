# Nx Monorepo with Micro Frontends (Vite Module Federation)

This repository demonstrates how to implement **Micro Frontends (MFEs)** inside an **Nx Monorepo** using **Vite + Module Federation**.

We use two applications in this monorepo:

- **App-1 (Remote):** Exposes shared UI components (`Button`, `Input`).
- **App-2 (Host):** Consumes components from App-1 dynamically at runtime.

