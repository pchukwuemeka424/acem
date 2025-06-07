# Vercel Deployment Guide for AceHub Technologies

This guide provides instructions for deploying the AceHub Technologies website to Vercel.

## Pre-deployment Steps

Before deploying to Vercel, run the following commands to fix common ESLint errors:

```bash
# Fix common ESLint errors
./fix-vercel-deploy.sh

# Test the build locally
npm run build
```

## Deployment Options

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the following build settings:
   - Framework Preset: Next.js
   - Build Command: `NEXT_TELEMETRY_DISABLED=1 next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## Environment Variables

Add the following environment variables in your Vercel project:

- `NEXT_ESLINT_SKIP=1` - Skip ESLint checks during build

## Troubleshooting

If you encounter ESLint errors during deployment:

1. Try running `./fix-vercel-deploy.sh` to automatically fix common ESLint issues
2. Check the modified files and commit the changes
3. Push to GitHub and redeploy

Remember that the Next.js configuration is set to ignore ESLint errors during build, so the deployment should succeed regardless of ESLint warnings.

## Monitoring

After deployment, monitor your application using Vercel Analytics and make sure to check for any runtime errors.