# Vercel Deployment Guide

This guide explains how to deploy the Projix Next.js application to Vercel with automated CI/CD using GitHub Actions.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/docs/cli) installed locally (optional)
3. GitHub repository (already configured)

## Quick Setup

### Option 1: Vercel Dashboard (Easiest)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository (`DigitariaWebs/progix`)
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

That's it! Vercel will automatically deploy on every push to `main`.

### Option 2: GitHub Actions Setup (More Control)

#### Step 1: Get Vercel Credentials

1. **Install Vercel CLI** (if not installed):

   ```bash
   npm i -g vercel
   ```

2. **Link your project**:

   ```bash
   vercel link
   ```

   Follow the prompts to create or link to an existing Vercel project.

3. **Get your credentials**:
   After linking, a `.vercel` folder is created. Open `.vercel/project.json` to find:
   - `orgId` - Your organization ID
   - `projectId` - Your project ID

4. **Create a Vercel Token**:
   - Go to [Vercel Tokens](https://vercel.com/account/tokens)
   - Click "Create Token"
   - Name it (e.g., "GitHub Actions")
   - Copy the token (you won't see it again!)

#### Step 2: Configure GitHub Secrets

Add these secrets to your GitHub repository:

1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VERCEL_TOKEN` - Your Vercel token
   - `VERCEL_ORG_ID` - Your organization ID
   - `VERCEL_PROJECT_ID` - Your project ID

#### Step 3: Deploy

The repository includes two GitHub Actions workflows:

1. **Production Deployment** (`vercel-deploy.yml`):
   - Triggers on push to `main` branch
   - Deploys to production environment

2. **Preview Deployment** (`vercel-preview.yml`):
   - Triggers on pull requests
   - Creates preview deployments
   - Comments the preview URL on the PR

## Environment Variables

### Adding Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables with appropriate environments:
   - Production
   - Preview
   - Development

### Local Development

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
# Add other environment variables
```

## Project Structure

```
.github/
  workflows/
    cicd.yml              # Build and test pipeline
    vercel-deploy.yml     # Production deployment
    vercel-preview.yml    # Preview deployments
vercel.json              # Vercel configuration
```

## Available Scripts

```bash
# Development
npm run dev              # Start development server

# Build & Production
npm run build            # Build for production
npm start               # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript type checking
npm run format          # Format with Prettier
npm run format:check    # Check formatting
```

## Deployment Flow

### Automatic Deployments

1. **Main Branch**: Every push to `main` → Production deployment
2. **Pull Requests**: Every PR → Preview deployment with unique URL
3. **Comments**: Bot comments preview URL on PRs

### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## Custom Domain

### Adding a Custom Domain

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your domain
4. Follow DNS configuration instructions

### DNS Configuration

For `example.com`:

- **A Record**: `76.76.21.21`
- **CNAME** (www): `cname.vercel-dns.com`

## Features

### Automatic Features

- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Automatic optimization
- ✅ Preview deployments
- ✅ Rollback capabilities
- ✅ Analytics (with Pro plan)
- ✅ Web Vitals monitoring

### Next.js Optimizations

Vercel automatically optimizes:

- Image optimization
- Font optimization
- Script optimization
- API routes as serverless functions
- Static generation where possible
- Incremental Static Regeneration (ISR)

## Monitoring

### Deployment Status

- Check deployment status in Vercel Dashboard
- View build logs for debugging
- Monitor function logs in real-time

### Analytics (Pro Plan)

- Real User Monitoring (RUM)
- Web Vitals tracking
- Custom events

## Troubleshooting

### Build Failures

1. Check build logs in Vercel Dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - ESLint errors

### Environment Variables Not Working

- Ensure variables are added for the correct environment
- Redeploy after adding new variables
- Check variable names (case-sensitive)

### Preview Deployments Not Working

- Verify GitHub Actions secrets are set
- Check workflow permissions in repository settings

## Best Practices

1. **Use Preview Deployments**: Test changes before merging to main
2. **Environment Variables**: Never commit sensitive data
3. **Build Optimization**: Keep dependencies minimal
4. **Monitoring**: Set up alerts for failed deployments
5. **Rollback Plan**: Know how to rollback if needed

## Rollback

If something goes wrong:

1. **Via Dashboard**:
   - Go to your project
   - Click on "Deployments"
   - Find a previous successful deployment
   - Click "..." → "Promote to Production"

2. **Via Git**:
   ```bash
   git revert HEAD
   git push origin main
   ```

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Support](https://vercel.com/support)
- [Community Forum](https://github.com/vercel/next.js/discussions)

## Pricing

- **Hobby**: Free (personal projects)
- **Pro**: $20/user/month (commercial projects)
- **Enterprise**: Custom pricing

Free tier includes:

- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Preview deployments
