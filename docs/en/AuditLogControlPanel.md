# Audit Logs & Reports (Control Panel)

The Control Panel Audit Log provides a comprehensive view of logged events across all libraries in infoRouter.

---

## Available Audit Logs

| Log Type | Events Tracked |
|----------|----------------|
| :material-file-plus: **New Documents and Folders** | Creation of new items |
| :material-file-multiple: **New Versions** | Document version additions |
| :material-file-lock: **Checked Out Documents** | Document check-out events |
| :material-file-check: **Check Ins** | Document check-in events |
| :material-file-remove: **Version Deletes** | Removed document versions |
| :material-delete: **Folder and Document Deletes** | Deleted items |
| :material-shield-account: **Security Audit Log** | Security permission changes |
| :material-account-switch: **Ownership Changes** | Document/folder ownership transfers |

---

## Viewing System Audit Logs

1. Navigate to the **Control Panel**
2. Click **Audit Logs & Reports**
3. The Audit Log window appears
4. Select the log type you want to view
5. Specify a **date range** to narrow the report
6. Click **Show** to display the log

---

## Filtering Options

| Filter | Description |
|--------|-------------|
| **Log Type** | Select specific event type to view |
| **Date Range** | Narrow results to a specific time interval |
| **Library** | View events from specific libraries |

---

## Important Considerations

!!! warning "Library-Level Logging"
    Audit logs can be turned on or off for each individual library. If logging for a specific event type is not enabled in a library, those events will not be captured—even when viewing reports from the Control Panel.

!!! tip "Enable Logging"
    To ensure complete audit trails, verify that logging is enabled in each library's policies for the events you need to track.

---

## See Also

- [Document Audit Log](DocumentAuditing.md)
- [Audit Managers](AuditManagers.md)
- [Library Policies](LibraryPolicies.md)