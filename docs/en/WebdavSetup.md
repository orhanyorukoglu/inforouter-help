# WebDAV Setup

Set up WebDAV on your workstation to access infoRouter documents directly from Windows Explorer or Mac Finder.

---

## WebDAV URL Format

Use one of these URL formats to connect:

| Format | Example |
|--------|---------|
| **Standard** | `http://servername/dav` |
| **With path** | `http://servername/inforouter/dav` |
| **Network path** | `\\servername\dav` |

!!! info "Replace Server Name"
    Replace `servername` with your actual infoRouter server address.

---

## Setup on macOS

1. Launch **Finder**
2. Click **Go** menu
3. Select **Connect to Server** (or press `⌘K`)
4. Enter the infoRouter WebDAV URL
5. Click **Connect**
6. Enter your infoRouter credentials when prompted

---

## Setup on Windows 11/10

1. Open **File Explorer**
2. Right-click on **This PC** (or **Network**)
3. Select **Map network drive**
4. Choose a drive letter (e.g., `Z:`)
5. Click **Connect to a Web site that you can use to store your documents and pictures**
6. Click **Next** on the wizard welcome screen
7. Select **Choose a custom network location**
8. Click **Next**
9. Enter the infoRouter WebDAV URL
10. Click **Next** and complete the wizard

---

## Setup on Windows 8

1. Open **File Explorer**
2. Right-click on **Network**
3. Select **Map network drive**
4. Choose a drive letter (e.g., `Z:`)
5. Click **Connect to a Web site that you can use to store your documents and pictures**
6. Click **Next** on the wizard
7. Select **Choose a custom network location**
8. Click **Next**
9. Enter the infoRouter WebDAV URL
10. Complete the wizard

---

## Important Considerations

!!! warning "Alternative Methods Recommended"
    For the best experience, consider using these alternatives instead of WebDAV:

    - **[Office Add-in](OfficeAddin.md)** — Direct integration with Microsoft Office
    - **[Import/Export Tool](ImportExportTool.md)** — GUI-based bulk operations

    Microsoft's WebDAV implementation varies across Windows versions and Office versions, which can cause inconsistent behavior.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Connection fails | Verify the URL and server availability |
| Authentication errors | Check credentials and user permissions |
| Slow performance | WebDAV can be slower than native interfaces |
| Files won't open | Try the Office Add-in instead |

---

## See Also

- [WebDAV Introduction](WebdavIntro.md)
- [Using WebDAV](UsingWebdav.md)
- [Office Add-in](OfficeAddin.md)