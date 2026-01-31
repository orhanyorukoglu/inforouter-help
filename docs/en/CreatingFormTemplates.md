# Creating Form Templates

Create HTML forms that users can fill out directly within infoRouter to generate documents.

---

## What Are Form Templates?

Form templates are HTML forms that allow users to create documents directly inside infoRouter without external applications. Data entered is saved in XML format for easy editing and searching.

---

## Benefits of Form Templates

| Benefit | Description |
|---------|-------------|
| :material-file-document-plus: **Direct creation** | Create documents inside infoRouter |
| :material-xml: **XML storage** | Form data saved in searchable XML format |
| :material-pencil: **Easy editing** | Edit documents using the same template |
| :material-swap-horizontal: **Flexible rendering** | Display documents using different templates |

---

## How to Create a Form Template

1. Create your HTML form using any HTML editor (Visual Studio, Dreamweaver, SublimeText, etc.)
2. Navigate to the **Form Templates** library in infoRouter
3. Click **New** → **Upload**
4. Upload your HTML form file

!!! success "Automatic Availability"
    Once uploaded, your form template automatically appears in the template list when users select **New** → **Document from Template**.

---

## Technical Requirements

!!! warning "Important Considerations"
    Follow these guidelines to ensure your form works correctly:

| Requirement | Details |
|-------------|---------|
| :material-close-circle: **No radio buttons** | Use dropdown/combo controls instead |
| :material-tag: **Form tags required** | Include proper `<form>` and `</form>` tags |
| :material-identifier: **Unique names** | All form control names must be unique |
| :material-test-tube: **Test first** | Verify form works before uploading |

---

## Best Practices

!!! tip "Getting Started"
    - Review the built-in form templates for examples
    - Keep forms simple and user-friendly
    - Use clear field labels
    - Test thoroughly before deployment

---

## Documentation

| Resource | Description |
|----------|-------------|
| :material-download: [Form Template Admin's Guide (PDF)](https://www.inforouter.com/downloads/V80/Form-Template-Admins-Guide-V80.pdf) | Complete technical reference |

---

## See Also

- [Form Templates Overview](FormTemplates.md)
- [Form Template Fields](FormTemplateFields.md)
- [Form Template Validation](FormTemplateValidation.md)