# Document Publishing

Publishing controls which version of a document is displayed to users when they view or download it. This allows you to work on new versions while users continue to see the stable, approved version.

---

## How Publishing Works

| Version Type | Description |
|--------------|-------------|
| :material-eye: **Published Version** | The version users see when viewing the document |
| :material-file-edit: **Latest Version** | The most recent version (may be unpublished) |

!!! tip "Working Draft"
    You can check out a document, create multiple versions, and only publish when the content is finalized. Users continue to see the last published version.

---

## Setting Publishing Rules

1. Select the document
2. Click **Action** > **Set Publishing Rules**
3. Choose the version to publish
4. Click **OK**

---

## Publishing Options

| Option | Description |
|--------|-------------|
| **Always Latest** | Automatically publish newest version |
| **Specific Version** | Publish a specific version number |
| **Approval-Based** | Publish only after workflow approval |

---

## Unpublished Documents

Documents can be marked as unpublished to hide them from certain users:

| User Type | Can See Unpublished |
|-----------|---------------------|
| Document Owner | :material-check: Yes |
| Users with Change rights | :material-check: Yes |
| Users with Full Control | :material-check: Yes |
| Anonymous users | :material-close: No |
| Read-only users | :material-close: No (if library policy hides them) |

---

## Library Policy Settings

Library policies can control publishing behavior:

- **Hide unpublished documents** from anonymous/read-only users
- **Require document type** before publishing
- **Require approval** before publishing

:material-arrow-right: [Library Policies](LibraryPolicies.md)

---

## See Also

- [Document Versions](DocumentVersions.md)
- [Library Policies](LibraryPolicies.md)
- [Introduction to Workflows](WorkflowsIntro.md)
