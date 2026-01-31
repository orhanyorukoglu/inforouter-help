# User Authentication

All users must have a valid account in infoRouter before they can access secure resources. Accounts are created by the System Administrator and stored in infoRouter's security database.

!!! info "Why Authentication Matters"
    Your account identifies you in the infoRouter system. It allows you to:

    - Check documents in and out
    - Be granted permissions within the security framework
    - Track your activity and document ownership

---

## Authentication Methods

infoRouter supports three authentication modes:

| Mode | Description | Best For |
|------|-------------|----------|
| :material-server: **LDAP Authentication** | Credentials verified by LDAP/Active Directory | Organizations with existing directory services |
| :material-database: **infoRouter Authentication** | Credentials verified by infoRouter's database | External users (clients, vendors, partners) |
| :material-merge: **Mixed Authentication** | Some users via LDAP, others via infoRouter | Organizations with both internal and external users |

---

## LDAP Authentication

In LDAP mode, authentication is handled by your organization's directory service.

**Key features:**

- User accounts in LDAP can be imported and synchronized with infoRouter
- Credentials are passed to LDAP for verification
- Passwords are maintained and managed in LDAP
- Login works as long as LDAP authenticates the user

:material-arrow-right: Learn more: [Importing LDAP Users and Groups](ImportingNTUsers.md)

---

## infoRouter Authentication

In this mode, infoRouter handles all authentication internally (even for users imported from LDAP).

**Key features:**

- All accounts are maintained inside infoRouter
- Password changes must be performed within infoRouter
- Commonly used for external users not part of an NT domain

!!! tip "When to Use"
    This mode is ideal for clients, vendors, partners, or anyone who doesn't have an account in your organization's directory.

---

## Mixed Security Authentication

Mixed mode allows different authentication methods for different users.

**Key features:**

- Some accounts authenticate via LDAP
- Other accounts authenticate via infoRouter
- The **"Authentication Type"** setting in User Properties determines which method applies to each user

!!! example "Use Case"
    Internal employees authenticate via Active Directory, while external contractors authenticate via infoRouter accounts.

---

## See Also

- [How to Login](Login.md)
- [Document Security](DocumentSecurity.md)
- [Folder Security](FolderSecurity.md)
- [Importing LDAP Users](ImportingNTUsers.md)