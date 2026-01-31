# E-mail and Notification Settings

Configure SMTP and notification settings for infoRouter's email capabilities.

---

## Accessing E-mail Settings

1. Navigate to the **Control Panel**
2. Click **E-mail and Notification Settings**
3. The settings window appears

!!! info "Configuration File"
    Some settings can be changed from this screen; others are defined in the `web.config` file. This window displays all current settings.

---

## SMTP Settings

### Server Configuration

| Setting | Description | Default |
|---------|-------------|---------|
| **SMTP Server Name** | Server for sending notifications | `localhost` |
| **SMTP Server Port** | Port number for SMTP connection | `25` |
| **SMTP Connection Timeout** | Max time to establish connection | — |

### Authentication

| Setting | Description |
|---------|-------------|
| **SMTP User Name** | Username for servers requiring authentication |
| **SMTP Password** | Password for servers requiring authentication |

### System Address

| Setting | Description |
|---------|-------------|
| **System E-mail Address** | "From" address on outgoing emails |

!!! warning "Required Setting"
    You must specify the System E-mail Address. Without it, your SMTP server will likely move infoRouter emails to the BAD MAIL folder.

---

## Subscription Settings

| Setting | Description |
|---------|-------------|
| **Enable E-mail Notifications** | Turn email notifications on/off |
| **Allow E-mail Attachments** | Allow documents as email attachments |
| **Attachment Size Limit** | Maximum attachment size (in bytes) |

!!! tip "Size Consideration"
    Documents approximately double in size when sent as email attachments. Ensure your SMTP server limits match your settings here.

---

## "Send To" Settings

| Setting | Description |
|---------|-------------|
| **Enable "Send To" feature** | Allow users to email documents |
| **Allow E-mail Attachments** | Attach documents vs. send links only |

---

## MS Outlook Integration

| Setting | Description |
|---------|-------------|
| **Allow partial e-mail uploads** | Let users select which attachments to include when registering emails via Outlook add-in |

---

## Administrator Documentation

| Resource | Description |
|----------|-------------|
| :material-download: [SMTP Configuration - Windows 2003 (PDF)](https://www.infoRouter.com/downloads/V80/SMTP-Configuration-V80-Win2003.pdf) | Setup for Windows Server 2003 |
| :material-download: [SMTP Configuration - Windows 2008 (PDF)](https://www.infoRouter.com/downloads/V80/SMTP-Configuration-V80-Win2008.pdf) | Setup for Windows Server 2008 |
| :material-download: [Remote SMTP Configuration (PDF)](https://www.infoRouter.com/downloads/V80/Remote-SMTP-Configuration-V80.pdf) | Using external SMTP servers |
| :material-download: [SMTP Troubleshooting (PDF)](https://www.infoRouter.com/downloads/V80/SMTP_Troubleshooting_V80.pdf) | Resolving email issues |

---

## See Also

- [Notifications Overview](Notifications.md)
- [Subscriptions](Subscriptions.md)
- [E-mail Scanner](EmailScanner.md)
- [General Application Settings](ApplicationSettings.md)