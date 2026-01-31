# System Configuration

System configuration encompasses the settings and options that control how infoRouter operates across your organization.

---

## Configuration Areas

### Application Settings

Core system settings including:

| Setting | Description |
|---------|-------------|
| :material-earth: **Site Settings** | URL, site name, default portal |
| :material-upload: **Upload Limits** | Maximum file sizes |
| :material-clock: **Session Settings** | Timeout and security options |
| :material-magnify: **Search Settings** | Indexing and search behavior |

:material-arrow-right: [Application Settings](ApplicationSettings.md)

---

### Email Configuration

Configure email notifications:

| Setting | Description |
|---------|-------------|
| :material-server: **SMTP Server** | Mail server settings |
| :material-email: **From Address** | Default sender address |
| :material-format-letter-case: **Email Templates** | Notification formatting |

:material-arrow-right: [Email Settings](EmailSettings.md)

---

### Authentication

Configure how users authenticate:

| Method | Description |
|--------|-------------|
| :material-database: **infoRouter Auth** | Internal authentication |
| :material-server: **LDAP/Active Directory** | External directory authentication |
| :material-merge: **Mixed Mode** | Combination of both |

:material-arrow-right: [Authentication](Authentication.md)

---

### Storage Management

Monitor and manage document storage:

| Area | Description |
|------|-------------|
| :material-harddisk: **Warehouse Paths** | Storage locations |
| :material-chart-pie: **Disk Usage** | Space monitoring |

:material-arrow-right: [Warehouse Management](WarehouseManagement.md)

---

### Security Policies

Configure security-related settings:

| Area | Description |
|------|-------------|
| :material-lock: **Password Policies** | Complexity and expiration |
| :material-shield-key: **Login Policies** | Lockout and restrictions |

:material-arrow-right: [Auth Policies](AuthPassPolicies.md)

---

## Accessing Configuration

1. Click **Control Panel**
2. Select the appropriate configuration section
3. Make changes
4. Save settings

!!! warning "Administrator Only"
    System configuration is restricted to System Administrators and members of the Administrators group.

---

## See Also

- [Control Panel](ControlPanel.md)
- [Application Settings](ApplicationSettings.md)
- [Administrative Functions](AdminFunctions.md)
