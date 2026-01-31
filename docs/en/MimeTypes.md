# Managing MIME Types

Configure MIME types to ensure proper handling of file types in infoRouter.

---

## What Are MIME Types?

MIME (Multipurpose Internet Mail Extensions) types tell browsers how to handle different file formats. They ensure the correct application opens when users download documents.

---

## Built-in MIME Types

infoRouter includes common MIME types:

| Extension | MIME Type | Application |
|-----------|-----------|-------------|
| `.pdf` | application/pdf | Adobe Reader |
| `.docx` | application/vnd.openxmlformats... | Microsoft Word |
| `.xlsx` | application/vnd.openxmlformats... | Microsoft Excel |
| `.jpg` | image/jpeg | Image viewers |
| `.txt` | text/plain | Text editors |

---

## When to Add MIME Types

Add custom MIME types when:

- Your organization uses specialized applications
- Files have custom extensions
- Browsers don't recognize the file type

!!! example "Example Scenario"
    Your company uses a CAD application that creates `.xyz` files. Without a MIME type definition, browsers won't know how to handle these files.

---

## Adding Custom MIME Types

### Step 1: Locate Configuration File

Navigate to:
```
C:\infoRouter\config\
```

### Step 2: Edit Custom File

Edit `MimeTypes.Custom.xml` with a text editor (Notepad).

!!! warning "Do Not Edit MimeTypes.xml"
    The main `MimeTypes.xml` file may be overwritten during updates. Always use `MimeTypes.Custom.xml` for your customizations.

### Step 3: Add Entry

Reference `MimeTypes.xml` for format examples:

```xml
<MimeType Extension=".xyz" ContentType="application/x-xyz" />
```

### Step 4: Save and Restart

Save the file and restart the infoRouter application pool if needed.

---

## MIME Type Entry Format

| Attribute | Description |
|-----------|-------------|
| **Extension** | File extension (e.g., `.xyz`) |
| **ContentType** | MIME type string |
| **Icon** | Optional icon identifier |

---

## See Also

- [General Application Settings](ApplicationSettings.md)
- [Administrative Functions](AdminFunctions.md)