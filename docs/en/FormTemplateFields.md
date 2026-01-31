# Form Template Fields

Learn about the field types available when creating HTML form templates for infoRouter.

---

## Supported Field Types

| Field Type | HTML Element | Description |
|------------|--------------|-------------|
| :material-form-textbox: **Text Input** | `<input type="text">` | Single-line text entry |
| :material-form-textarea: **Text Area** | `<textarea>` | Multi-line text entry |
| :material-form-dropdown: **Dropdown** | `<select>` | Selection from predefined options |
| :material-checkbox-marked: **Checkbox** | `<input type="checkbox">` | Yes/No selections |
| :material-eye-off: **Hidden** | `<input type="hidden">` | Hidden values |

!!! warning "Not Supported"
    **Radio buttons** are not supported. Use dropdown lists (`<select>`) instead.

---

## Field Naming Requirements

| Requirement | Details |
|-------------|---------|
| :material-identifier: **Unique names** | Each field must have a unique `name` attribute |
| :material-alphabetical: **No special characters** | Avoid special characters in names |
| :material-case-sensitive: **Case sensitive** | Field names are case-sensitive |

---

## Example Field Syntax

### Text Input

```html
<input type="text" name="CustomerName" size="40">
```

### Text Area

```html
<textarea name="Description" rows="5" cols="40"></textarea>
```

### Dropdown List

```html
<select name="Priority">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
</select>
```

### Checkbox

```html
<input type="checkbox" name="Approved" value="Yes"> Approved
```

---

## Field Attributes

| Attribute | Purpose |
|-----------|---------|
| `name` | Field identifier (required) |
| `value` | Default or selected value |
| `size` | Display width for text inputs |
| `maxlength` | Maximum character limit |
| `rows`, `cols` | Dimensions for text areas |

---

## Best Practices

!!! tip "Form Design Tips"
    - Use descriptive field names that indicate content
    - Keep field names consistent across templates
    - Test all fields before uploading templates
    - Review built-in templates for examples

---

## See Also

- [Form Templates Overview](FormTemplates.md)
- [Creating Form Templates](CreatingFormTemplates.md)
- [Form Template Validation](FormTemplateValidation.md)
