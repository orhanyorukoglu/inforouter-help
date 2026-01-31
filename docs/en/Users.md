# Users

All users must have a valid account in infoRouter before they can access the system (except Anonymous users). User accounts are stored in infoRouter's security database.

!!! info "User Identity"
    Your user account identifies you to both the system and other users. Only users with valid accounts can be granted permissions within the document and folder security framework.

---

## User Types

infoRouter supports four types of users:

| Type | Description |
|------|-------------|
| :material-account: **Regular Users** | Full-featured accounts with assigned credentials |
| :material-account-outline: **Anonymous Users** | Unauthenticated access to public content |
| :material-eye: **Read Only Users** | Can view but not modify content |
| :material-account-box: **Local Users** | Accounts limited to a single library |

---

## Regular Users

Standard users with full capabilities within their assigned permissions.

| Feature | Description |
|---------|-------------|
| :material-check: Assigned user ID and password | |
| :material-check: Can be audited and tracked | |
| :material-check: Access anonymous libraries + assigned libraries | |
| :material-check: Create, edit documents based on security | |
| :material-check: Activities limited by assigned permissions | |

---

## Anonymous Users

Anonymous users exist automatically when Anonymous Libraries are created — they are not individually created.

| Feature | Description |
|---------|-------------|
| :material-close: No user ID or password | Access without logging in |
| :material-close: Cannot be audited or tracked | |
| :material-close: Cannot be assigned security | |
| :material-check: Can view Anonymous Libraries only | |
| :material-check: Can read documents in Anonymous Libraries | |

---

## Read Only Users

Users who can view content but cannot make any changes.

| Feature | Description |
|---------|-------------|
| :material-check: Assigned user ID and password | |
| :material-check: Can be audited and tracked | |
| :material-check: Access anonymous libraries + assigned libraries | |
| :material-check: Maximum security level is **Read** | |
| :material-close: Cannot edit, delete, or modify documents/folders | |
| :material-close: Cannot create new documents or folders | |

---

## Local Users

Users created within a specific library, limited to that library only.

| Feature | Description |
|---------|-------------|
| :material-check: Assigned user ID and password | |
| :material-check: Can be audited and tracked | |
| :material-check: Access ONE library (where created) + anonymous libraries | |
| :material-close: Cannot access other libraries | |
| :material-check: Create, edit based on assigned permissions | |

!!! tip "When to Use Local Users"
    Local users are ideal for external parties (clients, vendors) who need access to a specific project library but should not see other organizational content.

---

## Who Can Create Users?

| User Type | Created By |
|-----------|------------|
| Regular Users | System Administrator, Administrators group, User Managers |
| Read Only Users | System Administrator, Administrators group, User Managers |
| Local Users | System Administrator, Library Managers |

---

## Additional Resources

| Resource | Description |
|----------|-------------|
| :material-download: [LDAP Authentication (PDF)](https://www.infoRouter.com/downloads/V80/infoRouter_LDAP_Authentication.pdf) | Configure LDAP authentication |
| :material-download: [LDAP Sync Manager (PDF)](https://www.infoRouter.com/downloads/V80/infoRouter_LDAP_Synchronization_Manager.pdf) | Synchronize users from LDAP |

---

## See Also

- [Adding Users](AddingUsers.md)
- [Deleting Users](DeletingUsers.md)
- [User Groups](UserGroups.md)
- [Importing Users & User Groups](ImportingNTUsers.md)
