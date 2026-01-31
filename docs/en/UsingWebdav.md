# Using WebDAV

Access infoRouter documents directly from Windows File Explorer using WebDAV.

---

## Getting Started

1. [Set up a WebDAV connection](WebdavSetup.md) to your infoRouter server
2. Click on your WebDAV folder in Windows Explorer
3. You'll see Anonymous Libraries and a **"Click here to Login"** folder
4. Click the login folder to authenticate
5. Enter your infoRouter credentials

---

## Navigating in WebDAV

| Action | How |
|--------|-----|
| **Open folder** | Click or double-click folder |
| **Open document** | Double-click to launch in native app |
| **View contents** | Navigate through folder structure |

!!! info "Familiar Interface"
    WebDAV works just like regular Windows folders. Documents open in their native applications (Word, Excel, etc.).

---

## Working with Documents

### Creating Documents

1. Launch your application (e.g., Microsoft Word)
2. Create your document content
3. Click **File** → **Save** (or **Save As**)
4. Navigate to your WebDAV folder
5. Select a library and folder
6. Click **OK** to save

!!! tip "Direct Creation"
    With WebDAV, you can create documents directly in infoRouter without uploading separately.

### Editing Documents

1. Navigate to the document in WebDAV
2. Double-click to open
3. Make your changes
4. Save (creates new version in infoRouter)

### Deleting Documents

1. Navigate to the file or folder
2. Select it (click once)
3. Press **Delete** key
4. Confirm deletion

---

## Security

!!! warning "Permissions Apply"
    All WebDAV operations respect infoRouter security:

    - You can only access libraries you're a member of
    - Folder and document permissions are enforced
    - Save operations require appropriate write permissions

---

## Available Operations

| Operation | Via WebDAV |
|-----------|------------|
| :material-eye: View documents | :material-check: Yes |
| :material-pencil: Edit documents | :material-check: Yes |
| :material-file-plus: Create documents | :material-check: Yes |
| :material-delete: Delete items | :material-check: Yes |
| :material-folder-plus: Create folders | :material-check: Yes |
| :material-folder-move: Move items | :material-check: Yes |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Can't connect | Verify WebDAV URL and credentials |
| Can't save | Check folder permissions |
| Slow performance | Large folders may take time to load |

---

## See Also

- [WebDAV Introduction](WebdavIntro.md)
- [WebDAV Setup](WebdavSetup.md)
- [Office Add-in](OfficeAddin.md)
- [Uploading Documents](UploadingDocuments.md)