# Form Templates

Create documents directly in infoRouter using HTML-based form templates without external applications.

---

## What Are Form Templates?

Form Templates are HTML forms uploaded to infoRouter that allow users to create structured documents by filling in fields. The data is stored in XML format for easy editing and searching.

---

## Benefits of Form Templates

| Benefit | Description |
|---------|-------------|
| :material-form-textbox: **Direct creation** | Create documents without external software |
| :material-format-list-checkbox: **Standardization** | Enforce consistent document formats |
| :material-xml: **Structured data** | Form data stored as searchable XML |
| :material-pencil: **Easy editing** | Edit using the same template |
| :material-swap-horizontal: **Flexible rendering** | Display using different templates |

---

## How Form Templates Work

```mermaid
flowchart LR
    A[User selects template] --> B[Fill out form]
    B --> C[Submit]
    C --> D[Data saved as XML]
    D --> E[Document stored in infoRouter]
```

---

## Using Form Templates

### Creating a Document from Template

1. Navigate to the destination folder
2. Click **New** → **Document from Template**
3. Select a template from the list
4. Fill in the form fields
5. Click **Submit**

### Editing a Template-Based Document

1. Navigate to the document
2. Click **Action** → **Edit**
3. The form template opens with current values
4. Make changes
5. Click **Submit** to save

---

## Built-in Templates

infoRouter includes several pre-built form templates as examples:

| Template | Description |
|----------|-------------|
| Simple Form | Basic text input fields |
| Contact Form | Name, email, phone fields |
| Expense Report | Line items with calculations |

---

## Creating Custom Templates

Form templates are HTML files created using standard HTML editors. See [Creating Form Templates](CreatingFormTemplates.md) for details.

---

## See Also

- [Creating Form Templates](CreatingFormTemplates.md)
- [Form Template Fields](FormTemplateFields.md)
- [Form Template Validation](FormTemplateValidation.md)
- [Uploading Documents](UploadingDocuments.md)
