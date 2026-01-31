# Document Security

infoRouter provides granular security controls at the document level. You can assign different permission levels to individual users and groups for each document.

---

## Permission Levels

| Permission | Description |
|------------|-------------|
| **No Access** | Cannot view or access the document |
| **Read** | Can view the document |
| **Change** | Can view and modify the document |
| **Full Control** | Complete access including security changes |

!!! info "Cumulative Rights"
    Access rights are cumulative — each level includes all rights from the previous level plus additional capabilities.

---

## Permissions Matrix

| Capability | No Access | Read | Change | Full Control |
|------------|:---------:|:----:|:------:|:------------:|
| View Document | | :material-check: | :material-check: | :material-check: |
| Change Document | | | :material-check: | :material-check: |
| Change Properties | | | :material-check: | :material-check: |
| Delete Document | | | | :material-check: |
| Change Permissions | | | | :material-check: |
| Take Ownership | | | | :material-check: |

---

## How to Assign Document Permissions

1. Click the **Action** icon on the document
2. Select **Security**
3. In the Security window, click **Change Permissions**
4. Select users from the list on the left
5. Choose the access level from the dropdown (default is "Full Control")
6. Click **Add**
7. The selected users will be added with the chosen permission level

---

## Permission Inheritance

!!! tip "Default Behavior"
    New documents automatically inherit permissions from their parent folder. Authors can modify these inherited permissions if needed.

When authors change document permissions, they can only grant access to users who are **members of the library** where the document resides.

---

## Using No Access

The **No Access** permission is equivalent to not including a user in the access list. It's useful when:

- A group has been granted access to a folder
- You need to exclude a specific member of that group from accessing a particular document

:material-arrow-right: Learn more: [User Groups](UserGroups.md)

---

## Folder vs Document Permissions

!!! warning "Important"
    Folder permissions take precedence over document permissions, but not automatically.

**Example:**

- User A has **Full Control** rights at the folder level
- User A has **No Access** permissions to a specific document
- When User A tries to access the document: **Access Denied**
- However, User A can still modify the document's permissions or take ownership due to folder-level Full Control

---

## See Also

- [Folder Security](FolderSecurity.md)
- [User Groups](UserGroups.md)
- [Security Scenarios](SecurityScenarios.md)
- [Permission Inheritance](Inheritance.md)
