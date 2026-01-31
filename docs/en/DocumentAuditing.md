# Document Auditing

Track and review all activities performed on documents for compliance and security purposes.

---

## What Is Document Auditing?

Document auditing records every action taken on a document, creating a complete history of who did what and when.

---

## Audited Events

| Event | Description |
|-------|-------------|
| :material-eye: **View** | Document was opened or viewed |
| :material-download: **Download** | Document was downloaded |
| :material-file-lock: **Check Out** | Document was checked out |
| :material-file-check: **Check In** | Document was checked in |
| :material-pencil: **Edit** | Document properties were modified |
| :material-shield-edit: **Security Change** | Permissions were modified |
| :material-account-switch: **Ownership Change** | Owner was transferred |
| :material-file-multiple: **New Version** | New version was created |
| :material-delete: **Delete** | Document was deleted |
| :material-file-send: **Workflow** | Document entered a workflow |

---

## Viewing Document Audit Logs

1. Navigate to the document
2. Click the **Action** icon
3. Select **Document Properties**
4. Click **Audit Log** in the sidebar

---

## Audit Log Information

Each audit entry contains:

| Field | Description |
|-------|-------------|
| **Date/Time** | When the action occurred |
| **User** | Who performed the action |
| **Action** | Type of activity |
| **Details** | Additional information about the action |
| **IP Address** | Where the action originated |

---

## Enabling Auditing

Document auditing must be enabled at the library level:

1. Go to **Library Properties**
2. Click **Policies**
3. Enable the audit events you want to track
4. Click **Save**

!!! warning "Library Setting"
    Auditing settings are configured per library. If auditing is not enabled for an event type, those actions will not be logged.

---

## Who Can View Audit Logs?

| Role | Access |
|------|--------|
| Audit Managers | :material-check: All audit logs |
| Library Managers | :material-check: Their library's logs |
| Document Owners | :material-check: Their document's logs |
| Regular Users | :material-close: No access |

---

## See Also

- [Audit Logs & Reports (Control Panel)](AuditLogControlPanel.md)
- [Audit Managers](AuditManagers.md)
- [Library Policies](LibraryPolicies.md)
- [Document Properties](DocumentProperties.md)
