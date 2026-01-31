# General Application Settings

Application settings allow System Administrators to configure and customize infoRouter behavior.

---

## Accessing Application Settings

1. Click the **Control Panel** tab
2. Click **General Application Settings**
3. The Application Settings window appears

!!! info "Configuration Location"
    Some settings can be changed from this screen, but most settings are defined in the `web.config` file and must be changed there. This window displays the current settings from the configuration file.

---

## Application Settings Reference

### Core Settings

| Setting | Description |
|---------|-------------|
| **Application URL** | Base URL for infoRouter (e.g., `http://[server]/infoRouter`). Critical for email notifications to work properly |
| **Temporary Folder** | Path infoRouter uses for uploads and downloads. Ensure infoRouter has **Full Control** permissions |

!!! warning "Application URL"
    The Application URL must be set correctly for email functions to work. If incorrect, links in notification emails will not function properly.

---

### Indexing Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Index Server** | Enable/disable Index Server as the indexing engine | — |
| **Index Catalog** | Name of the Index Server Catalog | `WHINDEX` |

---

### Upload Settings

| Setting | Description | Notes |
|---------|-------------|-------|
| **File Upload Limit** | Maximum file size for uploads (in bytes) | Set to `0` for no limit |
| **Maximum Document Size** | Maximum file size that can be created | — |
| **File Upload Time Out** | Timeout value in seconds | Time before page gives up waiting |

---

### Feature Settings

| Setting | Description |
|---------|-------------|
| **Allow Ownership Transfer** | Whether users can transfer ownership of documents and folders to others |
| **WebDAV** | Enable or disable WebDAV functionality |
| **Enable Add-in Downloads** | Whether users can download optional add-in modules from Tools > Add-ins menu |

---

### Search Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Search Page Size** | Number of documents per page in search results | `20` |

---

## See Also

- [E-mail and Notification Settings](EmailSettings.md)
- [Authentication and Password Policies](AuthPassPolicies.md)
- [Administrative Functions](AdminFunctions.md)