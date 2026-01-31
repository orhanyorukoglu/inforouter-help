# System Recycle Bin Management

Manage deleted documents across all users from the central System Recycle Bin.

---

## System vs User Recycle Bin

| Feature | User Recycle Bin | System Recycle Bin |
|---------|------------------|-------------------|
| **Scope** | Individual user's deletions | All deletions system-wide |
| **Access** | Each user | Administrators only |
| **After user empties** | Items removed | Items still visible |

!!! info "Central Repository"
    Even when users empty their personal recycle bins, deleted items remain in the System Recycle Bin until purged by administrators.

---

## Who Can Access?

| Role | Access |
|------|--------|
| System Administrator | :material-check: Full access |
| Administrators group | :material-check: Full access |
| Regular Users | :material-close: No access |

---

## Restoring Deleted Documents

When documents need to be recovered:

1. Navigate to the **Control Panel**
2. Click **System Recycle Bin**
3. Enter search criteria to find the document
4. Click **Find**
5. Select the document or folder
6. Click **Restore**

!!! tip "Cross-User Deletions"
    When User A deletes User B's document (with Full Control permission), the item goes to User A's recycle bin. User B must contact an administrator to restore it from the System Recycle Bin.

---

## Manual Purging

To permanently delete and reclaim disk space:

1. Navigate to the **Control Panel**
2. Click **Search in Recycle Bin**
3. Set date range in **Date Deleted** section
4. Click **Find**
5. Select documents/folders to purge
6. Click **Empty**

!!! danger "Permanent Deletion"
    Purged documents cannot be recovered. Verify selections before purging.

---

## Automatic Purging

Configure automatic cleanup to prevent storage bloat:

1. Navigate to the **Control Panel**
2. Click **General Application Settings**
3. Scroll to **System Recycle Bin Settings**
4. Enable or disable automatic purging
5. Set retention period (days before automatic deletion)
6. Save changes

| Setting | Description |
|---------|-------------|
| **Enable auto-purge** | Turn automatic cleanup on/off |
| **Retention period** | Days deleted items are kept |

---

## Best Practices

!!! tip "Recycle Bin Management"
    - Schedule regular reviews of the System Recycle Bin
    - Set reasonable automatic purge intervals
    - Document restoration requests for audit purposes
    - Balance storage costs with recovery needs

---

## See Also

- [My Recycle Bin](MyRecycleBin.md)
- [Deleting Documents](DeletingDocuments.md)
- [Deleting Folders](DeletingFolders.md)
- [General Application Settings](ApplicationSettings.md)