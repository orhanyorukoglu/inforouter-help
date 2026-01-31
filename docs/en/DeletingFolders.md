# Deleting Folders

Remove folders and their contents from infoRouter.

---

## Who Can Delete Folders?

| Role | Can Delete |
|------|------------|
| Folder owner | :material-check: Yes |
| Users with Full Control | :material-check: Yes |
| Library Managers | :material-check: Yes |
| Users with Read/Write only | :material-close: No |

---

## How to Delete a Folder

### Method 1: Edit Menu

1. Select the folder by clicking the checkbox
2. Go to **Edit** → **Delete**
3. Confirm the deletion

### Method 2: Right-Click

1. Right-click on the folder
2. Select **Delete**
3. Confirm the deletion

---

## What Happens When You Delete a Folder

| Item | Behavior |
|------|----------|
| :material-folder: **Folder** | Moved to Recycle Bin |
| :material-folder-multiple: **Subfolders** | All subfolders deleted |
| :material-file-document-multiple: **Documents** | All documents in folder deleted |
| :material-shield-lock: **Security settings** | Removed with folder |

!!! warning "Contents Deleted"
    Deleting a folder deletes **all contents** including subfolders and documents. Review folder contents before deleting.

---

## Deletion Restrictions

!!! danger "Cannot Delete When"
    - Folder contains checked-out documents
    - Documents are involved in active workflows
    - Retention policies prevent deletion
    - You don't have sufficient permissions

---

## Recovery Options

| Option | Description |
|--------|-------------|
| :material-delete-restore: **Recycle Bin** | Deleted folders go to Recycle Bin |
| :material-undo: **Restore** | Restore folder and contents from Recycle Bin |
| :material-delete-forever: **Permanent** | Empty Recycle Bin for permanent deletion |

---

## Best Practices

!!! tip "Before Deleting"
    - Review folder contents for important documents
    - Check if documents are checked out
    - Verify no active workflows involve folder documents
    - Consider moving important documents first

---

## See Also

- [My Recycle Bin](MyRecycleBin.md)
- [Folder Properties](FolderProperties.md)
- [Creating Folders](CreatingFolders.md)
- [Moving Folders](MovingFolders.md)
