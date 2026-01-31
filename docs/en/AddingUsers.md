# Adding Users

Create user accounts in infoRouter to give people access to the document management system.

---

## Who Can Create Users?

| Role | Can Create | User Type |
|------|------------|-----------|
| System Administrator | :material-check: Yes | Global and Local |
| Administrators group | :material-check: Yes | Global and Local |
| User Managers | :material-check: Yes | Global and Local |
| Library Managers | :material-check: Yes | Local only |

---

## How to Add a User

### Step 1: Access User Management

1. Click the **Control Panel** tab
2. Click **Manage Users**
3. The list of existing users is displayed
4. Click **New** in the menu bar

### Step 2: Enter User Information

| Field | Description |
|-------|-------------|
| **User Name** | Unique login identifier |
| **First Name** | User's first name |
| **Last Name** | User's last name |
| **E-mail Address** | Used for notifications |
| **User Status** | Enabled by default |
| **Password** | Initial password |
| **Confirm Password** | Re-enter password |
| **Authentication Type** | LDAP (NTLM) or infoRouter |

!!! info "Authentication Type"
    Depending on your application settings, you may need to choose between LDAP authentication and infoRouter authentication.

    :material-arrow-right: Learn more: [User Authentication](Authentication.md)

### Step 3: Click OK

The User Properties page will appear.

### Step 4: Assign Group Memberships

1. Click **Global Group Memberships**
2. Click **Add**
3. Select the groups for the user
4. Click **OK**

### Step 5: Assign Library Memberships

1. Click **Library Membership**
2. Add the user to at least one library

!!! warning "Library Access Required"
    Users need library membership to access documents. Make sure to assign at least one library.

---

## See Also

- [Users](Users.md)
- [Deleting Users](DeletingUsers.md)
- [User Groups](UserGroups.md)
- [Library Members](LibraryMembers.md)
- [User Authentication](Authentication.md)
