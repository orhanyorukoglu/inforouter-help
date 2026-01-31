# Subscription Notifications

Automatic email notifications sent to users who subscribe to documents or folders.

---

## How Notifications Work

| Subscription Type | Triggers Notification When |
|-------------------|---------------------------|
| :material-file-document: **Document** | Document is edited or updated |
| :material-folder: **Folder** | Any document in folder is edited or added |

---

## Automatic Notifications

Subscribers automatically receive notifications when:

| Event | Notification |
|-------|--------------|
| :material-pencil: **Document edited** | All document subscribers notified |
| :material-file-plus: **Document added** | All folder subscribers notified |
| :material-file-multiple: **New version** | All document subscribers notified |
| :material-tag-edit: **Properties changed** | Based on subscription settings |

---

## Manual Distribution

Publishers can manually trigger notifications:

1. Navigate to document **Properties**
2. Click **Distribute**
3. All subscribers receive a notification with link to the current version

!!! tip "When to Use"
    Manual distribution is useful when you want to ensure all subscribers are aware of an important update, or when you want to notify them about a document without making changes.

---

## Notification Content

Subscription notification emails include:

| Field | Description |
|-------|-------------|
| **Document name** | What was changed |
| **Change type** | What happened (edit, new version, etc.) |
| **Changed by** | Who made the change |
| **Date/Time** | When the change occurred |
| **Link** | Direct link to the document |

---

## Managing Notification Preferences

Control how you receive notifications in your [User Profile](UserProfile.md):

| Setting | Options |
|---------|---------|
| **Frequency** | Instant, Daily digest, None |
| **Format** | HTML or Plain text |
| **Attachments** | Include document or link only |

---

## See Also

- [Subscribing to Documents and Folders](Subscribing.md)
- [Unsubscribing](Unsubscribing.md)
- [My Subscriptions](MySubscriptions.md)
- [Notifications Overview](Notifications.md)
- [User Profile](UserProfile.md)