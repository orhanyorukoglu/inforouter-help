# Deleting Libraries

Remove entire document libraries when they are no longer needed.

---

## Who Can Delete Libraries?

| Role | Can Delete |
|------|------------|
| System Administrator | :material-check: Yes |
| Administrators group | :material-check: Yes |
| Library Managers | :material-close: No |
| Regular Users | :material-close: No |

---

## How to Delete a Library

1. Navigate to the **Control Panel**
2. Click **Libraries** to display the list
3. Select the library to delete by clicking on it
4. From the menu, choose **Delete Library**
5. Review the confirmation window showing library statistics
6. Click **OK** to confirm

---

## Confirmation Information

Before deletion, infoRouter displays statistics about the library:

| Statistic | Description |
|-----------|-------------|
| **Total Documents** | Number of documents that will be deleted |
| **Total Folders** | Number of folders in the library |
| **Total Size** | Storage space occupied |
| **Member Count** | Number of library members |

---

## Deletion Restrictions

!!! danger "Cannot Delete When"
    - Library contains checked-out documents
    - Documents are involved in active workflows
    - Retention policies prevent deletion

---

## Important Considerations

!!! warning "Permanent Operation"
    Deleting a library permanently removes:

    - All documents and versions
    - All folders and subfolders
    - All security settings
    - All audit logs for the library
    - All library-specific user groups

---

## Best Practices

!!! tip "Before Deleting"
    - Archive the library first if you may need the content later
    - Export important documents
    - Verify no checked-out documents exist
    - Review retention requirements
    - Notify library members

---

## See Also

- [Creating Libraries](CreatingLibraries.md)
- [Archiving Libraries](ArchivingLibraries.md)
- [Library Managers](LibraryManagers.md)
- [Libraries Overview](Libraries.md)