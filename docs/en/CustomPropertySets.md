# Custom Property Sets Examples

See how Custom Property Sets enable powerful document organization and search capabilities.

---

## Example 1: Project Documents

### Scenario

You manage documents for multiple customer projects and need to find documents by project details.

### Custom Property Set: "Project"

| Field | Type | Example Value |
|-------|------|---------------|
| Project Name | Text | Website Redesign |
| Customer Name | Text | ACME Corporation |
| Section | Dropdown | Design, Development, Testing |
| Country | Text | United States |
| Contract Date | Date | 2024-01-15 |

### Searching

Using Advanced Search, specify the "Project" custom property and enter values:

- **Customer Name**: `ACME Corporation`
- **Section**: `Development`

infoRouter returns only documents matching these criteria.

---

## Example 2: Invoice Management

### Scenario

You manage invoices across multiple folders and need to find specific invoices quickly.

### Custom Property Set: "Invoice"

| Field | Type | Example Value |
|-------|------|---------------|
| Invoice Number | Text | INV-2024-0542 |
| Invoice Amount | Number | 1,500.00 |
| Invoice Date | Date | 2024-03-15 |
| Customer Name | Text | ACME Inc. |
| Payment Status | Dropdown | Pending, Paid, Overdue |

### Searching

Search for invoices where:

- **Customer Name**: `ACME Inc.`
- **Invoice Amount**: Greater than `$1,300.00`

Only documents matching these criteria are returned.

---

## Assigning Custom Properties

Custom Property Sets can be assigned to documents and folders:

1. Open the document or folder **Properties**
2. Select the Custom Property Set to apply
3. Fill in the property fields
4. Click **OK** to save

!!! tip "Editing Properties"
    Click the **Edit** button in the Properties window to modify custom property values at any time.

---

## Searching with Custom Properties

1. Open **Advanced Search**
2. Select a Custom Property Set from the dropdown
3. The window expands to show all property fields
4. Enter values for any fields you want to search by
5. Click **Search**

---

## See Also

- [Custom Properties Introduction](CustomPropertyIntro.md)
- [How to Create Custom Property Sets](HowtoCreateCustomPropertySets.md)
- [Applying Custom Property Sets](ApplyingCustomPropertySets.md)
- [Editing Custom Property Sets](EditingCustomPropertySets.md)
- [Advanced Search](AdvancedSearch.md)