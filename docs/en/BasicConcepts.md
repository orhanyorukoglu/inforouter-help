# Basic Concepts

Before you start using infoRouter, familiarize yourself with these fundamental concepts.

![infoRouter Basic Concepts](../images/IRGUI.jpg)

## Libraries

**Libraries** are root-level folders that serve as isolated work areas in infoRouter.

!!! info "Key Points about Libraries"
    - Libraries appear on the left side of the screen (labeled **1** in the image above)
    - Only library members can see or access a library
    - Members are assigned by System Administrators or User Managers

Libraries provide isolated environments where groups of users can:

- Work collaboratively
- Store and organize documents
- Manage access permissions

:material-arrow-right: Learn more: [Document Libraries](Libraries.md)

---

## Folders

**Folders** are containers used to store and organize documents within libraries.

| Feature | Description |
|---------|-------------|
| **Organization** | Group related documents together |
| **Security** | Apply specific permissions per folder |
| **Nesting** | Create subfolders for hierarchical organization |
| **Multiple Formats** | Store any file type |

!!! tip "Folder Security"
    Access to folders is controlled by security permissions. Users can be granted or denied access to individual folders independent of library membership.

:material-arrow-right: Learn more: [Working with Folders](MovingFolders.md)

---

## Documents Pane

The **Documents Pane** displays on the right side of the screen (labeled **2** in the image above).

infoRouter manages all types of electronic documents in their **native format**:

- Microsoft Office files (Word, Excel, PowerPoint)
- PDF documents
- Images and graphics
- Audio and video files
- CAD drawings
- Any other electronic file type

!!! note "Native Format Storage"
    infoRouter does not convert or modify your documents. Files are stored exactly as created by their source applications.

:material-arrow-right: Learn more: [Working with Documents](Documents.md)

---

## Custom Properties (Metadata)

**Custom Property Sets** are user-defined fields that can be attached to:

- :material-file-document: Documents
- :material-folder: Folders
- :material-account: Users

### Common Uses

| Use Case | Example |
|----------|---------|
| **Document Classification** | Project name, department, status |
| **Search Enhancement** | Find documents by custom criteria |
| **Compliance Tracking** | Retention dates, approval status |
| **Business Metadata** | Customer ID, invoice number, case number |

:material-arrow-right: Learn more: [Custom Properties](CustomPropertyIntro.md)

---

## Portals

**Portals** are customizable web pages that serve infoRouter content to users.

!!! example "Portal Use Cases"
    - **Partner portals** — Share documents with external partners
    - **Department portals** — Provide team-specific content
    - **Customer portals** — Deliver documents to clients
    - **Employee portals** — Company-wide document access

Portals can be personalized and designed to provide specific content without requiring users to navigate the full document library.

:material-arrow-right: Learn more: [infoRouter Portals](Portals.md)

---

## Content Searching

infoRouter provides powerful **full-text search** capabilities similar to internet search engines.

### Searchable Content

- Document text content
- File names
- Custom properties
- Metadata

!!! tip "Expanding Search Capabilities"
    Install third-party **iFilters** to index additional file formats beyond the defaults.

:material-arrow-right: Learn more: [Searching for Documents](AdvancedSearch.md)

---

## Version Control

infoRouter automatically maintains **multiple versions** of documents.

### How Version Control Works

```mermaid
graph LR
    A[Check Out] --> B[Edit Document]
    B --> C[Check In]
    C --> D[New Version Created]
    D --> E[Previous Versions Retained]
```

| Action | Result |
|--------|--------|
| **View document** | Displays the published version |
| **Check out** | Delivers the latest version for editing |
| **Check in** | Creates a new version, retains previous |
| **Revert** | Restore any previous version |

!!! success "Never Lose Work"
    All versions are retained until explicitly cleaned up by an authorized user. You can always revert to a previous version if needed.

:material-arrow-right: Learn more: [Document Versions](DocumentVersions.md)

---

## See Also

- [Getting Started](GettingStarted.md)
- [The Work Area](WorkArea.md)
- [Document Libraries](Libraries.md)
