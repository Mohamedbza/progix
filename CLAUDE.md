# CLAUDE.md - Project Documentation

## Project Overview
**Projix** is a modern Next.js 15 application built with TypeScript, Tailwind CSS, and Framer Motion. The project uses the App Router architecture and includes comprehensive Docker support with CI/CD automation.

## Technology Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animation**: Framer Motion 12.23.12
- **Build Tool**: Turbopack (development)
- **Linting**: ESLint 9 with Next.js config
- **Formatting**: Prettier 3.6.2 with Tailwind plugin

## Development Setup Commands
```bash
# Install dependencies
npm ci

# Start development server with Turbopack
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Code formatting
npm run format

# Check formatting
npm run format:check

# Production build
npm run build

# Start production server
npm start
```

## Docker Commands
```bash
# Build Docker image
docker build -t projix .

# Run container locally
docker run -p 3000:3000 projix

# Build with specific tag
docker build -t ghcr.io/your-username/projix:latest .

# Push to GitHub Container Registry
docker push ghcr.io/your-username/projix:latest
```

## CI/CD Pipeline
The project uses GitHub Actions with the following workflow:

### Build & Test Job
- Node.js 22 setup with npm cache
- Dependencies installation (`npm ci`)
- TypeScript type checking
- ESLint linting
- Test execution (if tests exist)
- Next.js build

### Docker Publishing Job
- Runs after successful build/test
- Builds multi-stage Docker image
- Pushes to GitHub Container Registry (GHCR)
- Uses GitHub Actions cache for faster builds
- Automatically tags with branch, SHA, and semver tags

## Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Commit changes
git add .
git commit -m "feat: your feature description"

# Push to remote
git push origin feature/your-feature-name

# Create pull request (triggers CI/CD)
# Merge to main (triggers production deployment)
```

## Project Structure
```
projix/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico     # Site icon
│   ├── components/         # Reusable React components
│   └── config/            # Configuration files
├── public/                # Static assets
├── .github/
│   └── workflows/
│       └── cicd.yml       # CI/CD pipeline
├── Dockerfile             # Multi-stage Docker build
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── eslint.config.mjs      # ESLint configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## Environment Configuration
- **Development**: `npm run dev` on http://localhost:3000
- **Production**: Standalone output for Docker deployment
- **Container**: Runs on port 3000 with non-root user (nextjs:1001)

## Key Features
- **Modern Stack**: Latest Next.js 15 with React 19
- **Performance**: Turbopack for fast development builds
- **Security**: Non-root Docker container, minimal permissions
- **Automation**: Full CI/CD pipeline with Docker publishing
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Deployment Ready**: Standalone output for containerized deployment

## Useful Commands for Claude
- **Lint Check**: `npm run lint`
- **Type Check**: `npm run type-check` 
- **Format Check**: `npm run format:check`
- **Build Test**: `npm run build`
- **Dev Server**: `npm run dev`