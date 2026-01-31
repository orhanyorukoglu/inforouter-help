# Defining Document Tags

Document tags mark documents at a specific point in time, capturing their version state for future reference.

---

## What Are Document Tags?

Tags are markers that record the state of a document at a particular moment. When you tag a document:

- The **current version** is marked
- A **timestamp** is recorded
- You can later identify what the document looked like at that time

!!! info "Version Snapshots"
    Tags act like version snapshots, allowing you to track document states across time—useful for releases, milestones, or audits.

---

## Common Tag Uses

| Tag Type | Purpose |
|----------|---------|
| Release | Mark documents for a product release |
| Approved | Tag approved document versions |
| Milestone | Mark project milestone documents |
| Audit | Tag documents at audit checkpoints |
| Archive | Mark versions before archiving |

---

## Managing Tags

Tags are defined by editing a configuration file on the server.

### How to Create or Edit Tags

1. Navigate to the infoRouter installation path
   Example: `C:\infoRouter\config`
2. Open `tagdefs.xml` in a text editor (Notepad)
3. Add or modify tag definitions
4. Save the file
5. Go to **Control Panel** → **Flush Application Cache and Settings**

!!! warning "Server Access Required"
    Modifying tag definitions requires access to the server file system. Only System Administrators should perform this task.

---

## Applying Tags

After tags are defined, users can apply them to documents:

1. Select one or more documents
2. From the **Tools** menu, select **Tag**
3. Choose the appropriate tag
4. Confirm the operation

---

## See Also

- [Document Versions](DocumentVersions.md)
- [Document Properties](DocumentProperties.md)
- [Administrative Functions](AdminFunctions.md)