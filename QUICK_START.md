# Quick Start Guide

Get your infoRouter Help site up and running in 5 minutes!

## Local Testing (2 minutes)

```bash
# Navigate to project
cd inforouter-help-mkdocs

# Install dependencies
pip install -r requirements.txt

# Start local server
mkdocs serve
```

Visit `http://localhost:8000` - your site is live!

## Deploy to GitHub Pages (3 minutes)

### 1. Create GitHub Repository
- Go to https://github.com/new
- Name it: `inforouter-help`
- Make it **Public**
- Click **Create repository**

### 2. Push Your Code

```bash
cd inforouter-help-mkdocs

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/inforouter-help.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **gh-pages** branch
5. Click **Save**

### 4. Set Custom Domain

1. Still in **Settings** → **Pages**
2. Enter custom domain: `help.inforouter.com`
3. Check **Enforce HTTPS**
4. Click **Save**

### 5. Update DNS

In your domain registrar:
- Create CNAME record
- Name: `help`
- Value: `YOUR_USERNAME.github.io`
- Save

**Wait 5-30 minutes for DNS to propagate**

### 6. Done! 🎉

Visit `https://help.inforouter.com` - your site is live!

## Making Changes

```bash
# Edit files in docs/
# Then:
git add .
git commit -m "Update content"
git push origin main

# Site rebuilds automatically in 1-2 minutes
```

## Key Files

| File | Purpose |
|------|---------|
| `mkdocs.yml` | Site configuration (navigation, theme, etc.) |
| `docs/index.md` | Home page |
| `docs/en/*.md` | All documentation pages |
| `docs/images/` | All images and media |
| `README.md` | Full documentation |
| `DEPLOYMENT_GUIDE.md` | Detailed deployment instructions |

## Customization

### Change Site Name
Edit `mkdocs.yml`:
```yaml
site_name: Your New Name
```

### Change Colors
Edit `mkdocs.yml` theme section:
```yaml
theme:
  palette:
    - scheme: default
      primary: red  # Change color
```

### Add New Page
1. Create `docs/en/newpage.md`
2. Add to `mkdocs.yml` navigation
3. Push changes

### Update Navigation
Edit the `nav` section in `mkdocs.yml`

## Search

Built-in search is automatic! Users can:
- Click the search icon (top right)
- Type to find pages
- See instant suggestions
- Works offline

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Site not showing | Wait for DNS (up to 48 hours) |
| Build fails | Check `mkdocs.yml` syntax (YAML is whitespace-sensitive) |
| Images missing | Verify paths are relative: `../images/name.jpg` |
| Search not working | Clear browser cache, rebuild site |

## Need Help?

- **MkDocs Docs**: https://www.mkdocs.org/
- **Material Theme**: https://squidfunk.github.io/mkdocs-material/
- **GitHub Pages**: https://docs.github.com/en/pages
- **Full Guide**: See `DEPLOYMENT_GUIDE.md`

## What's Included

✅ 114 documentation pages  
✅ 51 images and media files  
✅ Modern Material Design theme  
✅ Built-in search  
✅ Mobile responsive  
✅ Automatic GitHub Actions deployment  
✅ HTTPS support  
✅ Custom domain ready  

---

**You're all set!** Your infoRouter Help documentation is ready to deploy. 🚀
