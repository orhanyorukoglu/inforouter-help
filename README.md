# infoRouter Help Documentation - MkDocs Version

This is the MkDocs-based version of the infoRouter Help Documentation, migrated from the original ASPX-based website.

## Project Structure

```
inforouter-help-mkdocs/
├── docs/
│   ├── index.md                 # Home page
│   ├── en/                      # All documentation pages (114 pages)
│   ├── images/                  # All images and media (51 files)
│   └── assets/                  # Additional assets
├── mkdocs.yml                   # MkDocs configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## Setup Instructions

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. **Clone or download this repository**

```bash
cd inforouter-help-mkdocs
```

2. **Create a virtual environment (recommended)**

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

Or manually install:

```bash
pip install mkdocs mkdocs-material
```

## Local Development

### Build and serve locally

```bash
mkdocs serve
```

The site will be available at `http://localhost:8000`

### Build static site

```bash
mkdocs build
```

This creates a `site/` directory with the static HTML files.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Create a new repository on GitHub named `inforouter-help` (or your preferred name)
2. Clone it locally or add it as a remote to this project

### Step 2: Configure for GitHub Pages

1. Update `mkdocs.yml` with your repository URL:

```yaml
site_url: https://help.inforouter.com/
repo_url: https://github.com/yourusername/inforouter-help
```

2. Create a `.github/workflows/deploy.yml` file for automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.x
      - run: pip install mkdocs mkdocs-material
      - run: mkdocs gh-deploy --force
```

### Step 3: Deploy

Push your changes to GitHub:

```bash
git add .
git commit -m "Initial MkDocs migration"
git push origin main
```

GitHub Actions will automatically build and deploy to the `gh-pages` branch.

### Step 4: Configure Custom Domain

1. In your GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Under "Custom domain", enter: `help.inforouter.com`
   - Check "Enforce HTTPS"

2. Update your DNS records:
   - Add a CNAME record pointing `help.inforouter.com` to `yourusername.github.io`
   - Or use GitHub's IP addresses for an A record (see GitHub Pages documentation)

3. GitHub will automatically create a `CNAME` file in the gh-pages branch

## Configuration

### Customization

Edit `mkdocs.yml` to customize:

- **Site name and description**: Update `site_name` and `site_description`
- **Theme colors**: Modify the `palette` section
- **Navigation structure**: Update the `nav` section
- **Analytics**: Add your Google Analytics ID in the `extra` section
- **Logo and favicon**: Replace image files in `docs/images/`

### Adding New Pages

1. Create a new markdown file in `docs/en/` or appropriate subdirectory
2. Add it to the navigation in `mkdocs.yml`
3. Rebuild and deploy

### Updating Content

1. Edit markdown files in `docs/`
2. Images are in `docs/images/`
3. Test locally with `mkdocs serve`
4. Commit and push to deploy

## Search Functionality

The Material theme includes built-in search functionality. It:

- Indexes all pages automatically
- Provides instant search suggestions
- Works offline (no external dependencies)
- Supports multiple languages

## Maintenance

### Regular Updates

To keep the documentation current:

1. Update content files as needed
2. Add new pages following the existing structure
3. Keep images organized in the `images/` directory
4. Test changes locally before pushing

### Re-crawling the Original Site

If you need to update content from the original ASPX site:

1. Run the crawler script: `python3 crawler_v2.py`
2. Review the changes
3. Update the MkDocs project with new content
4. Deploy as usual

## Troubleshooting

### Build errors

- Ensure all markdown files are valid
- Check that image paths are correct
- Verify `mkdocs.yml` syntax (YAML is whitespace-sensitive)

### Deployment issues

- Check GitHub Actions logs in your repository
- Ensure the `gh-pages` branch exists
- Verify custom domain DNS settings

### Search not working

- Rebuild the site: `mkdocs build`
- Clear browser cache
- Check browser console for errors

## Support

For issues or questions:

- Check the [MkDocs documentation](https://www.mkdocs.org/)
- Review the [Material theme documentation](https://squidfunk.github.io/mkdocs-material/)
- See the original [infoRouter Support Portal](https://support.inforouter.com)

## License

This documentation is provided by infoRouter. All rights reserved.

## Migration Notes

- **Original site**: help.inforouter.com (ASPX-based)
- **New site**: help.inforouter.com (GitHub Pages + MkDocs)
- **Pages migrated**: 114 out of 134 pages successfully extracted
- **Images included**: 51 images (16MB)
- **Migration date**: January 2026
- **Theme**: Material for MkDocs

### What's Improved

- Markdown-based content for easier maintenance
- Modern, responsive Material Design theme
- Built-in search functionality
- Version control via Git
- Automated deployment via GitHub Actions
- Better mobile experience
- Faster page load times
- SEO-friendly structure

---

**Last Updated**: January 31, 2026
