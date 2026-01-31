# Login Log (Auditing Logins)

Track user login activity for security and compliance purposes.

---

## What Is the Login Log?

The login log records authentication events, capturing:

| Information | Description |
|-------------|-------------|
| :material-calendar: **Date** | When the login occurred |
| :material-clock: **Time** | Exact time of login |
| :material-account: **Username** | Who logged in |
| :material-check-circle: **Status** | Success or failure |

---

## Who Can Manage the Login Log?

| Role | Access |
|------|--------|
| System Administrator | :material-check: Enable/disable and view |
| Administrators group | :material-check: Enable/disable and view |
| Regular Users | :material-close: No access |

---

## Enabling/Disabling the Login Log

1. Navigate to **Control Panel**
2. Click **Authentication and Password Policy Settings**
3. Locate the **Login Tracking** section
4. Check or uncheck **Track successful logins**
5. Optionally enable **Track unsuccessful login attempts**
6. Save changes

---

## Viewing Login Logs

Login logs are stored as daily text files on the server:

1. Navigate to the infoRouter installation directory
   Example: `C:\infoRouter\`
2. Open the `Logs/Logins` subfolder
3. Each day has a separate log file

---

## Log File Format

Login log entries include:

```
Date, Time, Username, IP Address, Result
```

---

## Security Best Practices

!!! tip "Recommended Settings"
    - Enable tracking for **both** successful and failed logins
    - Review logs regularly for suspicious activity
    - Set up alerts for multiple failed login attempts
    - Archive logs for compliance requirements

---

## See Also

- [Authentication and Password Policies](AuthPassPolicies.md)
- [User Authentication](Authentication.md)
- [Audit Logs & Reports](AuditLogControlPanel.md)
- [Audit Managers](AuditManagers.md)