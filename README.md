# Projix

A modern Next.js 15 application built with TypeScript, Tailwind CSS, and Framer Motion. Features automated CI/CD pipeline for continuous integration and deployment.

## 🚀 Quick Start

### Prerequisites

- Node.js 22+
- npm or yarn
- Git

### Local Development

1. **Clone the repository progix**

   ```bash
   git clone git@github.com:DigitariaWebs/progix.git
   cd progix

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build for production                    |
| `npm start`            | Start production server                 |
| `npm run lint`         | Run ESLint                              |
| `npm run type-check`   | Run TypeScript type checking            |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check code formatting                   |

## 🔄 CI/CD Pipeline

### Automated Workflow

The project includes a comprehensive GitHub Actions workflow (`.github/workflows/cicd.yml`) that:

**Build & Test Job**:

- Sets up Node.js 22 with npm cache
- Installs dependencies with `npm ci`
- Runs TypeScript type checking
- Executes ESLint linting
- Checks code formatting with Prettier
- Runs tests (if present)
- Builds the Next.js application

### Triggering Builds

- **Push to `main`**: Triggers full CI pipeline
- **Pull Requests**: Runs build and test validation

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
- **CI/CD**: GitHub Actions for continuous integration

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

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

**Quick Deploy:**
1. Import your GitHub repository on [Vercel](https://vercel.com/new)
2. Vercel auto-detects Next.js and configures everything
3. Click "Deploy"

**GitHub Actions CI/CD:**
- Production deployments on push to `main`
- Preview deployments for pull requests
- See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed setup

### Other Deployment Options

- **Railway** - For backend services (planned)
- **Netlify** - Alternative hosting
- **AWS Amplify** - Full-stack AWS deployment
- **Cloudflare Pages** - Edge deployment

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks (`npm run lint`, `npm run type-check`)
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
