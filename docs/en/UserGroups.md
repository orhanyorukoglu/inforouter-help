# User Groups

User groups are logical groupings of users that make security assignment and document distribution easier. Instead of assigning permissions to individual users, you can assign permissions to a group.

---

## Group Types

infoRouter supports three types of user groups:

| Type | Scope | Description |
|------|-------|-------------|
| :material-earth: **Global User Groups** | System-wide | Can be used in all libraries |
| :material-shield-account: **System User Groups** | System-wide | Define administrative roles |
| :material-library: **Local User Groups** | Single library | Only available within one library |

---

## Global User Groups

Global groups are defined at the system level and can be applied across all libraries.

### Creating a Global User Group

1. Click **Control Panel**
2. Click **Global User Groups**
3. Click **New** in the sidebar
4. Enter a name for the group
5. Check **"Private user group"** to hide member list (optional)
6. Click **OK**

### Adding Users to a Global Group

1. Select the group from the list
2. Click **Add Member** in the sidebar
3. Check the boxes for users to add
4. Click **OK**

---

## Local User Groups

Local groups are defined within a library and can only be used in that library.

### Creating a Local User Group

1. Click **Control Panel**
2. Click **Libraries**
3. Select the library
4. Click **Local Groups**
5. Click **New** in the sidebar
6. Enter a name for the group
7. Check **"Private user group"** to hide member list (optional)
8. Click **OK**

### Adding Users to a Local Group

1. Select the group from the list
2. Click **Add Member** in the sidebar
3. Check the boxes for users to add
4. Click **OK**

---

## System User Groups (Roles)

System user groups define administrative roles with special privileges:

| Role | Description |
|------|-------------|
| [Administrators](Administrators-User-Group.md) | Full system access |
| [Audit Managers](AuditManagers.md) | Manage audit logs |
| [Policy Managers](PolicyManagers.md) | Manage retention policies |
| [User Managers](UserManagers.md) | Create and manage users |
| [Library Managers](LibraryManagers.md) | Manage specific libraries |
| [Portal Administrators](PortalAdmins.md) | Manage portal configurations |
| [Category Administrators](CategoryAdministrators.md) | Manage categories and saved searches |

---

## Deleting a User Group

1. Navigate to the User Group list (Global or Local)
2. Select the group to delete
3. Click **Delete** in the sidebar
4. Click **OK** to confirm

---

## Security Considerations

!!! warning "Who Can Manage Groups"
    Only the following can create and manage **global** user groups:

    - System Administrator
    - Members of the Administrators system user group
    - Members of the User Managers system user group

---

## See Also

- [Users](Users.md)
- [Local User Groups](LocalUserGroups.md)
- [User Managers](UserManagers.md)
- [Library Managers](LibraryManagers.md)
