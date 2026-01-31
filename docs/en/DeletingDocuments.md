# Deleting Documents

Remove documents from infoRouter when they are no longer needed.

---

## Who Can Delete Documents?

| Role | Can Delete |
|------|------------|
| Document owner | :material-check: Yes |
| Users with Full Control | :material-check: Yes |
| Library Managers | :material-check: Yes |
| Users with Read/Write only | :material-close: No |

---

## How to Delete a Document

### Method 1: Edit Menu

1. Select the document(s) by clicking the checkbox
2. Go to **Edit** → **Delete**
3. Confirm the deletion

### Method 2: Action Menu

1. Click the **Action** icon on the document row
2. Select **Delete**
3. Confirm the deletion

### Method 3: Right-Click

1. Right-click on the document
2. Select **Delete**
3. Confirm the deletion

---

## What Happens to Deleted Documents

| Feature | Behavior |
|---------|----------|
| :material-delete-restore: **Recycle Bin** | Deleted documents go to the Recycle Bin |
| :material-history: **Versions** | All versions are moved to Recycle Bin |
| :material-undo: **Recovery** | Documents can be restored from Recycle Bin |
| :material-delete-forever: **Permanent** | Empty Recycle Bin for permanent deletion |

!!! info "Recycle Bin"
    Deleted documents are not immediately removed. They go to the Recycle Bin where they can be restored if needed.

---

## Deletion Restrictions

!!! warning "Cannot Delete When"
    - Document is currently checked out
    - Document is involved in an active workflow
    - Retention policies prevent deletion
    - You don't have sufficient permissions

---

## Deleting Multiple Documents

1. Select multiple documents using checkboxes
2. Go to **Edit** → **Delete**
3. Review the list of documents to be deleted
4. Confirm the deletion

---

## Permanent Deletion

To permanently delete documents:

1. Delete the document (moves to Recycle Bin)
2. Navigate to **My Recycle Bin**
3. Select the document(s)
4. Click **Delete Permanently** or **Empty Recycle Bin**

!!! danger "Permanent Deletion"
    Permanently deleted documents cannot be recovered. Ensure you have backups if needed.

---

## See Also

- [My Recycle Bin](MyRecycleBin.md)
- [Document Properties](DocumentProperties.md)
- [Document Security](DocumentSecurity.md)
- [Document Retention](DocumentRetention.md)
