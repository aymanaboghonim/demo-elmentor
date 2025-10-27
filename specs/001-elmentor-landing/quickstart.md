# Quickstart: Elmentor Landing Page

## Prerequisites

- Node.js 20+ installed
- npm or pnpm package manager

## Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:5173 in your browser.

3. **Switch languages**
   - Click the language toggle button in the top navigation
   - Observe instant content swap and RTL/LTR layout adjustment
   - Confirm all sections update without page reload

4. **Test the Join form**
   - Scroll to the "Join Us" section or click hero CTA
   - Fill required fields (name, email, role)
   - Submit form (note: requires valid Formspree endpoint configuration in `src/components/form-handler.js`)
   - Verify inline success/error message displays without navigation

5. **Run tests**
   ```bash
   npm run test
   ```

## Production Build

1. **Build for deployment**
   ```bash
   npm run build
   ```
   Output appears in `dist/` directory.

2. **Preview production build locally**
   ```bash
   npm run preview
   ```

## Deployment to GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site when pushing to the `main` or `001-elmentor-landing` branch.

### Manual Setup

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push code to trigger deployment
4. Access site at `https://<username>.github.io/demo-elmentor/`

### Configuration

- Base path is configured in `vite.config.js` as `/demo-elmentor/`
- Update this if deploying to a different repository name

## Formspree Integration

To enable the contact form:

1. Sign up at https://formspree.io
2. Create a new form and copy the form endpoint URL
3. Update `FORMSPREE_ENDPOINT` in `src/components/form-handler.js`
4. Rebuild and redeploy

## Build Results (Latest)

**Build Date**: 2025-10-27  
**Status**: ✓ Success  
**Bundle Size**:
- HTML: 0.68 kB (gzip: 0.39 kB)
- CSS: 5.66 kB (gzip: 1.66 kB)  
- JS: 11.40 kB (gzip: 4.90 kB)
- **Total (gzipped)**: ~7 kB

**Performance**: Well under 200 kB target  
**Deployment URL**: _Pending GitHub Pages configuration_

