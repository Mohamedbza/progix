# Cloudflare Deployment Guide

This guide explains how to deploy the Projix Next.js application to Cloudflare Workers using the latest @opennextjs/cloudflare adapter (2025 approach).

## Prerequisites

1. A Cloudflare account
2. Your Cloudflare Account ID
3. A Cloudflare API Token with Workers permissions

## Setup Instructions

### 1. Install Dependencies

The project is already configured with the necessary scripts. To install the OpenNext Cloudflare adapter locally:

```bash
npm install -D @opennextjs/cloudflare
```

### 2. Configure GitHub Secrets

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

#### Creating a Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use the "Edit Cloudflare Workers" template or create a custom token with:
   - Account: Cloudflare Workers Scripts:Edit
   - Zone: Zone:Read (optional, for custom domains)

### 3. Local Development

```bash
# Regular Next.js development
npm run dev

# Preview on Cloudflare Workers locally
npm run preview
```

### 4. Manual Deployment

To deploy manually from your local machine:

```bash
# Build and deploy to Cloudflare
npm run deploy
```

You'll need to set up Wrangler authentication first:

```bash
npx wrangler login
```

### 5. Automatic Deployment

The project includes two GitHub Actions workflows:

1. **CI/CD Pipeline** (`cicd.yml`): Runs on every push and PR to ensure code quality
2. **Cloudflare Deployment** (`deploy-cloudflare.yml`): Deploys to Cloudflare on pushes to main

## Configuration Files

### wrangler.toml

The main configuration file for Cloudflare Workers deployment. Key settings:

- `name`: Your application name
- `compatibility_date`: Set to current date for latest features
- `compatibility_flags`: Must include `nodejs_compat` for Next.js
- `main`: Worker entry point (auto-generated)
- `assets`: Static assets configuration

### open-next.config.ts

Optional configuration for the OpenNext adapter. Can be used to:
- Configure incremental caching with R2
- Customize image optimization
- Set build paths

## Environment Variables

### Adding Environment Variables

1. **For local development**: Create a `.env.local` file
2. **For Cloudflare deployment**: Add to `wrangler.toml` under `[vars]`
3. **For secrets**: Use Wrangler secrets:

```bash
npx wrangler secret put MY_SECRET_KEY
```

### Public Environment Variables

Next.js public environment variables (prefixed with `NEXT_PUBLIC_`) should be added to:
- `.env.local` for local development
- `wrangler.toml` under `[vars]` for production

## Custom Domains

To add a custom domain:

1. Go to your Cloudflare Workers dashboard
2. Select your worker (projix)
3. Go to "Triggers" → "Custom Domains"
4. Add your domain

## Monitoring & Logs

View logs and metrics:

```bash
# View real-time logs
npx wrangler tail projix

# View logs for specific environment
npx wrangler tail projix --env production
```

## Troubleshooting

### Common Issues

1. **Build fails with "nodejs_compat" error**
   - Ensure `compatibility_flags = ["nodejs_compat"]` is in wrangler.toml
   - Update `compatibility_date` to a recent date

2. **Static assets not loading**
   - Check that `[assets]` section in wrangler.toml is configured correctly
   - Verify `.open-next/assets` directory exists after build

3. **Environment variables not working**
   - Public variables must start with `NEXT_PUBLIC_`
   - Add them to both `.env.local` and `wrangler.toml`

4. **Deployment fails with API token error**
   - Verify your Cloudflare API token has the correct permissions
   - Check that GitHub secrets are set correctly

## Advanced Configuration

### Using R2 for Caching

To enable R2 incremental cache (recommended for production):

1. Create an R2 bucket in Cloudflare dashboard
2. Update `wrangler.toml`:

```toml
[[r2_buckets]]
binding = "CACHE_BUCKET"
bucket_name = "projix-cache"
```

3. Update `open-next.config.ts`:

```typescript
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
```

### Multiple Environments

The wrangler.toml includes configurations for development, staging, and production. Deploy to specific environments:

```bash
# Deploy to staging
npx wrangler deploy --env staging

# Deploy to production
npx wrangler deploy --env production
```

## Costs

Cloudflare Workers pricing (as of 2025):
- **Free tier**: 100,000 requests/day
- **Paid tier**: $5/month for 10 million requests
- **Additional requests**: $0.50 per million

## Support

- [OpenNext Documentation](https://opennext.js.org/cloudflare)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [GitHub Issues](https://github.com/opennextjs/opennextjs-cloudflare/issues)