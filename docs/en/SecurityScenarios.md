# Security Scenarios and Best Practices

Follow this guide when setting up infoRouter security for the first time or creating new libraries.

---

## Security Implementation Steps

### Step 1: Create Users

Create user accounts from the Control Panel.

| Action | Location |
|--------|----------|
| Create users | Control Panel → Manage Users |

:material-arrow-right: [Creating Users](AddingUsers.md)

---

### Step 2: Create Global User Groups (Optional)

Global groups simplify library membership assignment.

| Action | Location |
|--------|----------|
| Create global groups | Control Panel → Global User Groups |

:material-arrow-right: [User Groups](UserGroups.md)

---

### Step 3: Create Libraries

Create libraries for different functional areas:

| Library Example | Purpose |
|-----------------|---------|
| Accounting | Financial documents |
| Marketing | Campaign materials |
| Sales | Proposals and contracts |
| Human Resources | HR policies and records |

!!! info "Library Isolation"
    Libraries are isolated work areas. Non-members cannot see or access library content.

:material-arrow-right: [Creating Libraries](CreatingLibraries.md)

---

### Step 4: Assign Library Members

Add users and groups as library members.

---

### Step 5: Create Local Users (Optional)

For users who only need access to one library, create them as local users.

:material-arrow-right: [Users Overview](Users.md)

---

### Step 6: Create Local User Groups

!!! tip "Best Practice"
    Local user groups are **essential** for good security:

    - Assign security to groups, not individuals
    - When users change roles, simply update group membership
    - Revoke access by removing from group

:material-arrow-right: [Local User Groups](LocalUserGroups.md)

---

### Step 7: Create Folder Structure

Design your folder hierarchy to match your workflow.

| Guideline | Recommendation |
|-----------|----------------|
| **Depth** | Maximum 6-7 levels |
| **Names** | Descriptive but not too long |
| **Path length** | Keep under 250 characters total |

!!! warning "Path Limitations"
    File system exports are limited to 250 characters for the full path including document name.

:material-arrow-right: [Creating Folders](CreatingFolders.md)

---

### Step 8: Assign Folder Security

| Recommendation | Details |
|----------------|---------|
| **Plan first** | Think through your security structure |
| **Minimize Full Control** | Use minimum necessary permissions |
| **"Add" permission** | Allows users to create and access their own documents |

:material-arrow-right: [Folder Security](FolderSecurity.md)

---

### Step 9: Assign Document Security

| Best Practice | Benefit |
|---------------|---------|
| **Use groups** | Easier to manage than individual assignments |
| **Role-based** | Access follows job function |
| **Easy revocation** | Remove from group to remove access |

:material-arrow-right: [Document Security](DocumentSecurity.md)

---

## Summary: Security Best Practices

| Practice | Why |
|----------|-----|
| :material-account-group: **Use groups** | Easier management, cleaner revocation |
| :material-shield-half-full: **Minimum permissions** | Reduce risk, follow least-privilege |
| :material-folder-network: **Plan folder structure** | Reflects workflow, supports security |
| :material-test-tube: **Test access** | Verify before going live |

---

## See Also

- [Security Overview](Security.md)
- [Folder Security](FolderSecurity.md)
- [Document Security](DocumentSecurity.md)
- [User Groups](UserGroups.md)
- [Permission Inheritance](Inheritance.md)