# Projix

A modern Next.js 15 application built with TypeScript, Tailwind CSS, and Framer Motion. Features comprehensive Docker support and automated CI/CD pipeline.

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ 
- npm or yarn
- Docker (for containerization)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd projix
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🐳 Docker Deployment

### Build and Run Locally

```bash
# Build the Docker image
docker build -t projix .

# Run the container
docker run -p 3000:3000 projix
```

### Production Deployment

The application uses a multi-stage Docker build for optimal production deployment:

1. **Dependencies stage**: Installs npm packages
2. **Build stage**: Compiles the Next.js application  
3. **Runtime stage**: Runs the standalone application with non-root user

```bash
# Build with production tag
docker build -t ghcr.io/your-username/projix:latest .

# Push to registry
docker push ghcr.io/your-username/projix:latest
```

## 🔄 CI/CD Pipeline

### Automated Workflow

The project includes a comprehensive GitHub Actions workflow (`.github/workflows/cicd.yml`) that:

1. **Build & Test Job**:
   - Sets up Node.js 22 with npm cache
   - Installs dependencies with `npm ci`
   - Runs TypeScript type checking
   - Executes ESLint linting
   - Runs tests (if present)
   - Builds the Next.js application

2. **Docker Publishing Job**:
   - Builds multi-stage Docker image
   - Publishes to GitHub Container Registry (GHCR)
   - Uses build cache for faster builds
   - Auto-tags with branch, SHA, and semantic versions

### Triggering Deployments

- **Push to `main`**: Triggers full CI/CD pipeline
- **Pull Requests**: Runs build and test validation
- **Manual**: Workflow can be triggered manually from GitHub Actions

### Environment Setup

To enable the CI/CD pipeline:

1. Ensure your repository has access to GitHub Container Registry
2. The workflow uses `GITHUB_TOKEN` (automatically provided)
3. No additional secrets configuration required

## 📁 Project Structure

```
projix/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── favicon.ico   # Site favicon
│   ├── components/       # Reusable React components
│   └── config/          # Configuration files
├── public/              # Static assets
├── .github/
│   └── workflows/
│       └── cicd.yml     # CI/CD pipeline configuration
├── Dockerfile           # Multi-stage Docker build
├── next.config.ts       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## 🛠 Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animation**: Framer Motion 12.23.12
- **Development**: Turbopack for fast builds
- **Linting**: ESLint 9 with Next.js configuration
- **Formatting**: Prettier 3.6.2 with Tailwind plugin
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: GitHub Actions with GHCR publishing

## 🔧 Development Workflow

### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/your-feature-name
```

### Code Quality
The project enforces code quality through:
- **TypeScript**: Strict type checking
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Automatic code formatting
- **Pre-commit hooks**: Automated quality checks

### Testing
```bash
# Run tests (when available)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🚀 Deployment Options

### 1. GitHub Container Registry (Recommended)
Automatic deployment via GitHub Actions to GHCR:
```bash
# Images are automatically built and pushed on main branch
ghcr.io/your-username/projix:main
ghcr.io/your-username/projix:sha-<commit-hash>
```

### 2. Manual Docker Deployment
```bash
# Build and run locally
docker build -t projix .
docker run -p 3000:3000 projix
```

### 3. Cloud Platforms
The standalone Docker image can be deployed to:
- AWS ECS/EKS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean Apps
- Railway, Fly.io, etc.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Docker Documentation](https://docs.docker.com/) - Containerization guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks (`npm run lint`, `npm run type-check`)
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
