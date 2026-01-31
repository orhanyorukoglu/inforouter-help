# Checking Documents Out

The Check Out process reserves a document for editing, preventing other users from making changes while you work on it. This is fundamental to infoRouter's version control system.

!!! info "Why Check Out?"
    Checking out a document ensures that no one else can modify the same document while you're working on it, preventing conflicting changes and maintaining document integrity.

---

## How to Check Out a Document

### Method 1: Action Menu

1. Click the **Action** icon on the document row
2. Select **Check Out**
3. The document will be downloaded to your computer

### Method 2: Edit Menu

1. Select the document by clicking its checkbox
2. Go to **Edit** → **Check Out**
3. The document will be downloaded to your computer

---

## What Happens When You Check Out

When you check out a document:

| Action | Result |
|--------|--------|
| Document is locked | Other users cannot check out the same document |
| File is downloaded | A copy is saved to your local computer |
| Status changes | Document shows as "Checked Out" with your name |
| Other users can view | The published version remains available for reading |

!!! tip "Check Out Location"
    By default, documents are downloaded to your browser's download folder. You can then move or copy the file to your preferred working location.

---

## Working with Checked Out Documents

While a document is checked out to you:

- Edit the document using its native application (Word, Excel, etc.)
- Save your changes locally
- When finished, [Check In](CheckIn.md) the document to create a new version

!!! warning "Don't Forget to Check In"
    Remember to check in your document when you're done editing. This releases the lock and makes your changes available to others.

---

## Viewing Checked Out Status

To see who has a document checked out:

1. Look at the **Status** column in the Documents Panel
2. Or view the document's **Properties**

---

## Canceling a Check Out

If you decide not to make changes:

1. Click the **Action** icon on the document
2. Select **Undo Check Out**
3. The document is released without creating a new version

!!! note "Undo vs Check In"
    - **Undo Check Out**: Releases the lock, discards your local changes
    - **Check In**: Creates a new version with your changes

---

## See Also

- [Check In Documents](CheckIn.md)
- [Document Versions](DocumentVersions.md)
- [Working with Documents](Documents.md)
- [My Checked Out Documents](MyCheckedOutDocuments.md)
