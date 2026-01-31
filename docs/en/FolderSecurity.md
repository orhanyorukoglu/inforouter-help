# Folder Security

infoRouter allows you to assign folder-level permissions that control access to folders and their contents. To assign folder permissions, you must have **Full Control** rights to the folder.

---

## Permission Levels

| Permission | Description |
|------------|-------------|
| **No Access** | Cannot access the folder |
| **List** | Can see folder contents but not open documents |
| **Read** | Can view documents in the folder |
| **Add** | Can create documents but not view existing ones |
| **Add and Read** | Can create and view documents |
| **Change** | Can modify documents and properties |
| **Full Control** | Complete access including security changes |

---

## Permissions Matrix

| Capability | No Access | List | Read | Add | Add & Read | Change | Full Control |
|------------|:---------:|:----:|:----:|:---:|:----------:|:------:|:------------:|
| List folder contents | | :material-check: | :material-check: | :material-check: | :material-check: | :material-check: | :material-check: |
| View Documents | | | :material-check: | | :material-check: | :material-check: | :material-check: |
| Create Documents | | | | :material-check: | :material-check: | :material-check: | :material-check: |
| Create & Read Documents | | | | | :material-check: | :material-check: | :material-check: |
| Change Properties | | | | | | :material-check: | :material-check: |
| Change Permissions | | | | | | | :material-check: |
| Take Ownership | | | | | | | :material-check: |
| Delete Folder | | | | | | | :material-check: |

---

## How to Assign Folder Permissions

1. Navigate to the folder
2. Click the **Action** icon and choose **Folder Properties**
3. Click **Folder Security**
4. Select users from the list
5. Choose the access level from the dropdown
6. Click **Add**
7. The selected users will be added with the chosen permission level

---

## Permission Inheritance

!!! tip "Automatic Inheritance"
    When you assign permissions to a folder, those permissions are automatically inherited by all documents and subfolders contained within it.

Setting the inheritance option while assigning permissions dramatically reduces the time needed to apply security to child folders.

:material-arrow-right: Learn more: [Permission Inheritance](Inheritance.md)

---

## Using No Access

The **No Access** permission is used when:

- A group has been granted access to a folder
- You need to exclude a specific member from that folder

!!! note "Individual vs Group Permissions"
    Permissions given to individuals **supersede** permissions given to user groups.

**Example:**

- User Group A has **Read** permissions to a folder
- User A is in User Group A
- User A has been given **Full Control** permissions individually
- **Result:** User A has Full Control, not Read

:material-arrow-right: Learn more: [User Groups](UserGroups.md)

---

## Full Control Implications

!!! warning "Important"
    Users with **Full Control** at the parent folder level can:

    - Delete or change any subfolders regardless of subfolder permissions
    - Set or alter security on any subfolders

---

## See Also

- [Document Security](DocumentSecurity.md)
- [Permission Inheritance](Inheritance.md)
- [User Groups](UserGroups.md)
- [Security Scenarios](SecurityScenarios.md)
