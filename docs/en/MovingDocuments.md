# Moving Documents

Relocate documents to different folders or libraries within infoRouter.

---

## Move vs Copy

| Operation | Original | Result |
|-----------|----------|--------|
| **Move** | Removed from source | Document relocated |
| **Copy** | Preserved | Two copies exist |

---

## How to Move a Document

### Method 1: Edit Menu

1. Select the document(s) by clicking the checkbox
2. Go to **Edit** → **Cut**
3. Navigate to the destination folder
4. Go to **Edit** → **Paste**

### Method 2: Right-Click Menu

1. Right-click on the document
2. Select **Cut**
3. Navigate to the destination folder
4. Right-click in the folder
5. Select **Paste**

---

## What Gets Moved

| Item | Moved |
|------|-------|
| :material-file-document: **Document content** | :material-check: Yes |
| :material-history: **Version history** | :material-check: Yes |
| :material-tag: **Properties** | :material-check: Yes |
| :material-comment: **Comments** | :material-check: Yes |
| :material-shield-lock: **Security settings** | :material-close: Inherits from destination |

---

## Permissions Required

| Source | Destination | Required |
|--------|-------------|----------|
| Full Control | Write | :material-check: Can move |
| Change only | Write | :material-close: Cannot move |
| Read only | — | :material-close: Cannot move |

---

## Moving to Different Libraries

You can move documents between libraries if you have appropriate permissions in both.

!!! warning "Cross-Library Moves"
    When moving to a different library:

    - Document inherits destination library policies
    - Security settings are reset to destination defaults
    - Verify you have necessary permissions in both libraries

---

## Moving Multiple Documents

1. Select multiple documents using checkboxes
2. Go to **Edit** → **Cut**
3. Navigate to destination
4. Go to **Edit** → **Paste**

---

## Restrictions

!!! danger "Cannot Move When"
    - Document is checked out
    - Document is in an active workflow
    - You don't have sufficient permissions
    - Retention policies prevent movement

---

## See Also

- [Copying Documents](CopyingDocuments.md)
- [Moving Folders](MovingFolders.md)
- [Document Properties](DocumentProperties.md)
- [Document Security](DocumentSecurity.md)
