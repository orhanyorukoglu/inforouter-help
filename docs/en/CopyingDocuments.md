# Copying Documents

Create copies of documents in different locations while preserving the original.

---

## How to Copy a Document

### Method 1: Edit Menu

1. Select the document(s) by clicking the checkbox
2. Go to **Edit** → **Copy**
3. Navigate to the destination folder
4. Go to **Edit** → **Paste**

### Method 2: Right-Click Menu

1. Right-click on the document
2. Select **Copy**
3. Navigate to the destination folder
4. Right-click in the folder
5. Select **Paste**

---

## What Gets Copied

| Item | Copied |
|------|--------|
| :material-file-document: **Document content** | :material-check: Yes |
| :material-tag: **Properties** | :material-check: Yes |
| :material-history: **Version history** | :material-close: No (current version only) |
| :material-shield-lock: **Security settings** | :material-close: No (inherits from destination) |
| :material-comment: **Comments** | :material-close: No |

!!! info "New Document Created"
    The copy is a completely new document with its own properties, security, and version history. Changes to the copy do not affect the original.

---

## Copy vs Move

| Operation | Original | Result |
|-----------|----------|--------|
| **Copy** | Preserved | Two copies exist |
| **Move** | Removed | Document relocated |

---

## Copying to Different Libraries

You can copy documents between libraries if you have:

- **Read** access to the source document
- **Write** access to the destination folder

!!! warning "Cross-Library Copies"
    When copying to a different library, the document will inherit the destination library's policies and security settings.

---

## See Also

- [Moving Documents](MovingDocuments.md)
- [Uploading Documents](UploadingDocuments.md)
- [Document Properties](DocumentProperties.md)
- [Document Security](DocumentSecurity.md)
