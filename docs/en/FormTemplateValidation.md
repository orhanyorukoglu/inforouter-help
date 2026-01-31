# Form Template Validation

Ensure data quality by adding validation rules to form template fields.

---

## Types of Validation

| Validation Type | Description |
|-----------------|-------------|
| :material-asterisk: **Required fields** | Field must have a value |
| :material-format-text: **Text patterns** | Match specific formats (email, phone) |
| :material-numeric: **Numeric ranges** | Minimum/maximum values |
| :material-counter: **Length limits** | Minimum/maximum characters |

---

## Implementing Required Fields

Mark a field as required using HTML attributes:

```html
<input type="text" name="CustomerName" required>
```

Or use JavaScript validation:

```javascript
function validateForm() {
    if (document.forms["myform"]["CustomerName"].value == "") {
        alert("Customer Name is required");
        return false;
    }
}
```

---

## Common Validation Patterns

### Email Address

```html
<input type="email" name="Email"
       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
```

### Phone Number

```html
<input type="tel" name="Phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```

### Numeric Only

```html
<input type="number" name="Quantity" min="1" max="100">
```

---

## Best Practices

!!! tip "Validation Tips"
    - Provide clear error messages
    - Validate on the client side for user experience
    - Test all validation rules before deployment
    - Use HTML5 validation attributes when possible

---

## See Also

- [Form Templates Overview](FormTemplates.md)
- [Form Template Fields](FormTemplateFields.md)
- [Creating Form Templates](CreatingFormTemplates.md)
