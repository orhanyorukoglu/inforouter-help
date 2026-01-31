# Local User Groups

Local user groups are library-specific groups that exist only within a single library.

---

## Local vs Global Groups

| Feature | Local Groups | Global Groups |
|---------|--------------|---------------|
| **Scope** | Single library only | All libraries |
| **Visibility** | Library members | System-wide |
| **Created by** | Library Managers | System Administrators |
| **Use case** | Library-specific roles | Organization-wide roles |

---

## Who Can Manage Local Groups?

| Role | Can Manage |
|------|------------|
| System Administrator | :material-check: Yes |
| Administrators group | :material-check: Yes |
| User Managers | :material-check: Yes |
| Library Managers | :material-check: Yes (their library) |
| Regular Users | :material-close: No |

---

## Creating a Local User Group

1. Click **Control Panel**
2. Click **Libraries**
3. Select the library
4. Click **Local Groups**
5. Click **New** in the sidebar
6. Enter a group name
7. Click **OK**

---

## Adding Users to a Group

1. Select the group name from the list
2. Click **Add Member** in the sidebar
3. Select users by clicking their checkboxes
4. Click **OK**

---

## Removing Users from a Group

1. Select the group name from the list
2. Select the member(s) to remove
3. Click **Remove Member** in the sidebar
4. Confirm the removal

---

## Deleting a User Group

1. Click **Control Panel**
2. Click **Libraries**
3. Select the library
4. Click **Local Groups**
5. Select the group to delete
6. Click **Delete** in the sidebar
7. Click **OK** to confirm

!!! warning "Deletion Impact"
    Deleting a group removes all permissions assigned to that group. Ensure you reassign permissions before deleting.

---

## Common Local Group Uses

| Group Name | Purpose |
|------------|---------|
| Reviewers | Users who review documents |
| Publishers | Users who can publish content |
| Managers | Department leadership |
| Editors | Content editors |

---

## See Also

- [User Groups Overview](UserGroups.md)
- [Library Members](LibraryMembers.md)
- [Folder Security](FolderSecurity.md)
- [Document Security](DocumentSecurity.md)