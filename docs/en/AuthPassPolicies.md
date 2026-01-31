# Authentication and Password Policies

Configure authentication methods and password requirements to secure your infoRouter system.

---

## Accessing Policy Settings

1. Click the **Control Panel** tab
2. Click **Authentication and Password Policy Settings**
3. The settings window appears

---

## NT Authentication Domain

| Setting | Description |
|---------|-------------|
| **LDAP Domain** | Displays the LDAP authentication domain used to authenticate infoRouter users |

!!! info "Configuration File"
    The LDAP domain setting can only be changed by editing the `web.config` file directly.

---

## Login Tracking

Track login activity for security auditing and brute-force prevention.

| Option | Description |
|--------|-------------|
| :material-check-circle: **Track successful logins** | Log all successful login attempts |
| :material-alert-circle: **Track unsuccessful login attempts** | Log failed login attempts |
| :material-timer: **Apply delays between login attempts** | Prevent automated login attacks (specify delay in milliseconds) |

---

## Password Policy

!!! warning "Applies to infoRouter Authentication Only"
    Password policies only apply to users authenticated by infoRouter, not users authenticated via LDAP.

### Password Requirements

| Requirement | Description |
|-------------|-------------|
| **Password expiration period** | Number of days before password must be changed |
| **Minimum password length** | Minimum number of characters required |
| **Alpha characters** | Require letters (Aa-Zz) |
| **Numeric characters** | Require numbers (0-9) |
| **Special characters** | Require symbols (~!@#$%^&*()-_+=) |
| **Cannot match email** | Password cannot be the same as email address |
| **Cannot match username** | Password cannot be the same as username |
| **Weak password check** | Check against list of common weak passwords |

---

## Password Re-Prompt

Add an extra layer of security by requiring users to re-enter their password for sensitive operations.

| Action | Description |
|--------|-------------|
| :material-library-minus: **Delete libraries** | Require password to delete libraries |
| :material-file-remove: **Delete documents or folders** | Require password for deletions |
| :material-account-remove: **Delete users** | Require password to delete user accounts |
| :material-shield-lock: **Change security** | Require password for security changes |
| :material-account-switch: **Change owners** | Require password to transfer ownership |
| :material-tag-edit: **Change classification status** | Require password for classification changes |
| :material-checkbox-marked: **Perform workflow tasks** | Require password for workflow actions |

---

## Role Restrictions

| Setting | Description |
|---------|-------------|
| **Library Managers can edit policies** | Allow or prevent Library Managers from modifying library policies |

!!! note "Control Access"
    This setting is controlled by Policy Managers and the System Administrator.

---

## See Also

- [User Authentication](Authentication.md)
- [E-mail and Notification Settings](EmailSettings.md)
- [Policy Managers](PolicyManagers.md)
- [General Application Settings](ApplicationSettings.md)