# WebDAV Interface

WebDAV (Web Distributed Authoring and Versioning) is an extension to HTTP that allows clients to perform remote web content authoring operations. infoRouter fully supports WebDAV to provide an alternative way to access documents.

---

## What is WebDAV?

The WebDAV interface allows you to access infoRouter documents and folders using **Windows File Explorer** — treating infoRouter like a network drive.

!!! info "Source"
    WebDAV is an industry standard protocol. Learn more at [WebDAV.org](https://www.webdav.org)

---

## Key Differences from Web Interface

| Feature | WebDAV | Web Interface |
|---------|--------|---------------|
| **Check In/Out** | Automatic | Manual |
| **Access Method** | Windows Explorer | Web browser |
| **Drag & Drop** | :material-check: Yes | Limited |
| **Advanced Features** | Limited | Full access |

!!! note "Automatic Version Control"
    In WebDAV, Check In and Check Out operations are automatic — there's no explicit interface to check documents in or out. This happens automatically when you open and save documents.

---

## Compatible Applications

WebDAV works with applications that support the protocol:

- Microsoft Word
- Microsoft Excel
- Microsoft PowerPoint
- Other WebDAV-compliant tools

---

## Alternative Options

As of Version 7.5.81, infoRouter offers several alternatives to WebDAV:

| Option | Description |
|--------|-------------|
| **[MS Office Add-in](OfficeAddin.md)** | Direct integration with Office applications, supports more features than WebDAV |
| **[Import/Export Tool](ImportExport.md)** | GUI application for bulk document transfer using Web Services API |
| **Web Interface** | Full-featured browser-based access |

!!! tip "Recommended"
    The MS Office Add-in provides better functionality than WebDAV for most use cases, including support for features that WebDAV cannot provide.

---

## See Also

- [Setting Up WebDAV](WebdavSetup.md)
- [Using WebDAV](UsingWebdav.md)
- [MS Office Add-in](OfficeAddin.md)
- [Import/Export Tool](ImportExport.md)
