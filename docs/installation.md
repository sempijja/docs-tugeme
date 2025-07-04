---
title: Installation & Setup
sidebar_position: 1
---

# Installation & Setup

Follow these steps to get your project up and running locally.

## Prerequisites

- **Node.js** (v18+ recommended)
- **pnpm** (preferred) or **Bun** (for Docker)
- **Git** (for cloning the repository)

## 1. Clone the Repository

```bash
git clone https://gitlab.com/tugeme/tugeme-fe.git
cd tugeme-fe
```

## 2. Install Dependencies

This project uses [pnpm](https://pnpm.io/) for fast, efficient package management.

```bash
pnpm install
```

> If you don't have pnpm installed, run:
> ```bash
> npm install -g pnpm
> ```

## 3. Development Server

Start the development server:

```bash
pnpm dev
```

The app will open in your browser automatically. If not, visit [http://localhost:3000](http://localhost:3000).

## 4. Build for Production

To create an optimized production build:

```bash
pnpm build
```

## 5. Preview Production Build

To locally preview the production build:

```bash
pnpm preview
```

## 6. Linting & Formatting

To check and automatically fix code style issues:

```bash
pnpm check
pnpm format
```

## 7. Docker (Optional)

A `Dockerfile` is provided for containerized builds. Example usage:

```bash
docker build -t tugeme-fe .
docker run -p 3000:3000 tugeme-fe
```

## 8. Environment Variables

If your deployment requires environment variables, create a `.env` file in the project root. (No `.env.example` is provided by default.)



**You're all set!**  
