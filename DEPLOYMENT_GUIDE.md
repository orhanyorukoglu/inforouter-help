# Deployment Guide: infoRouter Help to GitHub Pages

This guide provides step-by-step instructions to deploy the infoRouter Help documentation to GitHub Pages with your custom domain (help.inforouter.com).

## Prerequisites

Before starting, ensure you have:

- A GitHub account (create one at https://github.com if needed)
- Access to your domain registrar to modify DNS records
- Git installed on your local machine
- The inforouter-help-mkdocs project folder

## Step 1: Create a GitHub Repository

1. Log in to GitHub (https://github.com)
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository: `inforouter-help` (or your preferred name)
4. Add description: "infoRouter Help Documentation - MkDocs Version"
5. Choose **Public** (required for GitHub Pages free tier)
6. Click **Create repository**

## Step 2: Initialize Git and Push Code

In your local terminal, navigate to the project folder and run:

```bash
cd /path/to/inforouter-help-mkdocs

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial MkDocs migration of infoRouter Help"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/inforouter-help.git

# Push to GitHub (use 'main' as default branch)
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/root**
5. Click **Save**

GitHub Actions will automatically build and deploy your site when you push changes.

## Step 4: Configure Custom Domain

### Option A: Using CNAME Record (Recommended)

1. In your GitHub repository **Settings** → **Pages**
2. Under "Custom domain", enter: `help.inforouter.com`
3. Check **Enforce HTTPS**
4. Click **Save**

GitHub will create a CNAME file automatically.

Now update your DNS records:

1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find the DNS management section
3. Create a new CNAME record:
   - **Name/Host**: `help`
   - **Type**: CNAME
   - **Value**: `USERNAME.github.io` (replace USERNAME with your GitHub username)
   - **TTL**: 3600 (or default)
4. Save the DNS record

DNS propagation typically takes 5-30 minutes. You can check status at https://www.whatsmydns.net/

### Option B: Using A Records (Alternative)

If your registrar doesn't support CNAME for subdomains:

1. Create two A records pointing to GitHub's IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. Set the host to `help`
3. Save the records

## Step 5: Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit `https://help.inforouter.com` in your browser
3. You should see the MkDocs site with the Material theme
4. Test the search functionality by clicking the search icon

## Step 6: Automated Deployment Setup

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured to:

- Build the site automatically on every push to `main` branch
- Deploy to the `gh-pages` branch
- Set the CNAME record for your custom domain

No additional setup is needed! Changes are deployed automatically.

## Making Updates

To update content:

1. Edit markdown files in the `docs/` folder
2. Commit and push changes:

```bash
git add .
git commit -m "Update documentation"
git push origin main
```

3. GitHub Actions will automatically rebuild and deploy
4. Changes appear on your site within 1-2 minutes

## Troubleshooting

### Site not showing at custom domain

- **Check DNS propagation**: Use https://www.whatsmydns.net/ to verify DNS records are propagated
- **Verify CNAME file**: Check that GitHub created the CNAME file in the gh-pages branch
- **Clear browser cache**: Try accessing in an incognito/private window
- **Wait longer**: DNS can take up to 48 hours to fully propagate

### GitHub Actions build fails

1. Go to your repository
2. Click **Actions** tab
3. Click the failed workflow
4. Review the error messages
5. Common issues:
   - Invalid YAML in `mkdocs.yml` (check indentation)
   - Missing image files (verify paths are correct)
   - Broken markdown links

### Search not working

- Rebuild the site: `mkdocs build`
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure search plugin is enabled in `mkdocs.yml`

### Images not displaying

- Verify image paths are relative: `../images/filename.jpg`
- Check that images exist in `docs/images/` folder
- Ensure filenames match exactly (case-sensitive)

## Local Testing

To test the site locally before pushing:

```bash
# Install dependencies
pip install -r requirements.txt

# Start local server
mkdocs serve

# Visit http://localhost:8000 in your browser
```

The local server auto-reloads when you save changes.

## Maintenance

### Regular Updates

1. Update documentation as needed
2. Test locally with `mkdocs serve`
3. Commit and push changes
4. Verify deployment on GitHub

### Adding New Pages

1. Create a new `.md` file in `docs/en/` or appropriate subdirectory
2. Add it to the navigation in `mkdocs.yml`
3. Commit and push
4. Site rebuilds automatically

### Updating Navigation

Edit `mkdocs.yml` to reorganize the navigation structure. The format is:

```yaml
nav:
  - Page Title: path/to/file.md
  - Section Name:
    - Sub-page: path/to/subpage.md
```

### Re-crawling Original Site

If you need to update content from the original ASPX site:

1. Run the crawler: `python3 /home/ubuntu/crawler_v2.py`
2. Copy new/updated files to `docs/en/`
3. Update `mkdocs.yml` if new pages were added
4. Commit and push

## Performance Optimization

The built site is already optimized with:

- Minified CSS and JavaScript
- Compressed images
- Fast search indexing
- CDN delivery via GitHub Pages

For further optimization:

1. Compress images before adding them
2. Use descriptive alt text for accessibility
3. Keep markdown files well-organized
4. Monitor build times in GitHub Actions

## Security

- GitHub Pages automatically serves over HTTPS
- Custom domain is secured with HTTPS certificate (automatic)
- No sensitive data should be committed to the repository
- Repository can be public (content is public anyway)

## Backup and Recovery

To backup your site:

```bash
# Clone your repository
git clone https://github.com/USERNAME/inforouter-help.git backup-folder

# Or create a backup branch
git branch backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

## Support and Resources

- **MkDocs Documentation**: https://www.mkdocs.org/
- **Material Theme Docs**: https://squidfunk.github.io/mkdocs-material/
- **GitHub Pages Help**: https://docs.github.com/en/pages
- **GitHub Actions Docs**: https://docs.github.com/en/actions

## Next Steps

1. Create the GitHub repository
2. Push the code
3. Configure the custom domain
4. Wait for DNS propagation
5. Visit your site at https://help.inforouter.com
6. Share the link with your team!

---

**Questions?** Refer to the README.md for additional information or check the official documentation links above.
