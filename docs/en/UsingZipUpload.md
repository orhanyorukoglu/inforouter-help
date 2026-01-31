# Using ZIP Uploads

Upload ZIP archives to infoRouter for automatic extraction. This allows you to upload multiple files and folders in a single operation while preserving the folder structure.

---

## How ZIP Upload Works

When you upload a ZIP file using this feature:

1. The ZIP file is uploaded to infoRouter
2. infoRouter extracts the contents automatically
3. Folders and files are created matching the ZIP structure
4. The original ZIP file is not kept (only extracted contents)

!!! tip "Preserves Structure"
    The folder hierarchy inside the ZIP file is preserved during extraction, making this ideal for uploading organized document sets.

---

## How to Upload a ZIP File

1. Navigate to the destination folder
2. Click **New** > **Zip File**
3. Click **Browse** to select your ZIP file
4. Click **Upload**
5. Wait for extraction to complete

---

## What Gets Created

| ZIP Contents | Result in infoRouter |
|--------------|---------------------|
| Folders | Corresponding folders created |
| Files | Documents created in respective folders |
| Nested structures | Full hierarchy preserved |

---

## Use Cases

| Scenario | Benefit |
|----------|---------|
| :material-folder-multiple: **Project folders** | Upload entire project structure at once |
| :material-backup-restore: **Backup restoration** | Restore archived documents |
| :material-transfer: **Migration** | Move document sets from other systems |
| :material-package: **Batch upload** | Upload many files efficiently |

---

## Limitations

!!! warning "Considerations"
    - Very large ZIP files may take time to process
    - Duplicate file names in the same folder may be renamed
    - Security permissions are inherited from the destination folder

---

## ZIP vs Regular Upload

| Feature | ZIP Upload | Regular Upload |
|---------|-----------|----------------|
| **Multiple files** | :material-check: Yes (unlimited) | :material-check: Yes (batch) |
| **Folder structure** | :material-check: Preserved | :material-close: Flat |
| **File types** | All from ZIP | Select individually |
| **Metadata** | Inherits folder settings | Can set per file |

---

## See Also

- [Uploading Documents](UploadingDocuments.md)
- [Creating Folders](CreatingFolders.md)
- [Import/Export Tool](ImportExport.md)
