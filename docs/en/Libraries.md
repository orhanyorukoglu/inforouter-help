# Document Libraries

Libraries are root-level folders that serve as isolated work environments in infoRouter. They can be created and managed by the System Administrator or delegated [Library Managers](LibraryManagers.md).

!!! info "Library Isolation"
    Only members of a library can navigate inside it or even see that it exists. This provides complete privacy for departmental or project-based document management.

---

## Library Membership

Users and User Groups are assigned as "Members" to libraries by the System Administrator or Library Managers.

!!! tip "Multiple Memberships"
    Users and User Groups can be members of multiple libraries simultaneously.

### Local Users

The System Administrator and Library Managers can create **Local Users** within libraries:

| Feature | Description |
|---------|-------------|
| **Scope** | Only visible in the library where they were created |
| **Access** | Cannot cross into other libraries through memberships |
| **Capabilities** | Same functions as regular users, but limited to their library |

---

## Library Types

infoRouter supports two types of libraries:

| Type | Description | Access |
|------|-------------|--------|
| :material-lock: **Common Libraries** | Private work areas for authorized members only | Requires login and membership |
| :material-earth: **Anonymous Libraries** | Public document areas accessible without login | Anyone can view (subject to security) |

### Anonymous Libraries

Anonymous libraries are used to publish public documents where anyone can access them without logging in or being defined as an infoRouter user.

!!! note "Anonymous Access Limitations"
    - Anonymous users can **view** documents (subject to security)
    - Only **logged-in users** can edit documents

---

## Common Uses for Libraries

| Use Case | Example |
|----------|---------|
| :material-account-group: **Private Work Groups** | Human Resources department with documents only they can access |
| :material-shield-lock: **Sensitive Documents** | Legal department keeping contracts separate from general documentation |
| :material-account-multiple: **External Access** | Customers, partners, and vendors accessing specific areas via anonymous libraries |

:material-arrow-right: Learn more: [Library Usage Scenarios](LibraryUsageScenarios.md)

---

## See Also

- [Creating Libraries](CreatingLibraries.md)
- [Library Members](LibraryMembers.md)
- [Library Managers](LibraryManagers.md)
- [Local User Groups](LocalUserGroups.md)
- [Deleting Libraries](DeletingLibraries.md)