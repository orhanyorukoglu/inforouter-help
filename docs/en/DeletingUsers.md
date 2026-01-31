# Deleting Users

Remove user accounts when they are no longer needed, such as when employees leave the organization.

---

## Who Can Delete Users?

| Role | Can Delete |
|------|------------|
| System Administrator | :material-check: Yes |
| User Managers group | :material-check: Yes |

---

## How to Delete a User

1. Click **Control Panel**
2. Click **Manage Users**
3. Select the user you want to delete
4. Click **Delete** in the left sidebar
5. Confirm the deletion

---

## When Deletion is Blocked

!!! warning "Deletion Not Allowed"
    infoRouter may prevent user deletion in certain circumstances:

    | Condition | Resolution |
    |-----------|------------|
    | User has checked out documents | Force check-in or wait for user to check in |
    | User has active tasks | Transfer tasks to other users first |

---

## Checking User Activity

Before deleting a user, verify their activity:

1. Navigate to **Control Panel**
2. Click **Manage Users**
3. Select the user
4. Click **Properties** in the left sidebar
5. Review the sidebar links for:
    - Documents and folders owned
    - Checked out documents
    - Active tasks
    - Subscriptions

:material-arrow-right: Learn more: [User Profile](UserProfile.md)

---

## What Happens to User Content?

!!! info "Content Preservation"
    When you delete a user who owns documents or folders:

    - infoRouter warns you about owned content
    - Deletion is still allowed
    - Documents and folders are **kept intact**

---

## Best Practices

!!! tip "Before Deleting"
    Consider transferring the user's documents and folders to another user before deletion.

    :material-arrow-right: [Transferring Ownership](TransferOwnership.md)

---

## See Also

- [Users](Users.md)
- [Adding Users](AddingUsers.md)
- [User Profile](UserProfile.md)
- [Transferring Ownership](TransferOwnership.md)
