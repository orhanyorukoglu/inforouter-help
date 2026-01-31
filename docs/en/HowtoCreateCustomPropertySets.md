# Creating Custom Property Sets

Define custom metadata fields for documents, folders, and users.

---

## Who Can Create Custom Property Sets?

| Role | Can Create |
|------|------------|
| System Administrator | :material-check: Yes |
| Administrators group | :material-check: Yes |
| Regular Users | :material-close: No |

---

## Step 1: Create the Property Set

1. Navigate to the **Control Panel**
2. Click **Custom Properties**
3. Click **New** in the left sidebar
4. Enter the property set details:

| Field | Description |
|-------|-------------|
| **Name** | Internal identifier (no spaces or special characters) |
| **Caption** | Display name shown to users |
| **Applies to** | Check Documents, Folders, and/or Users |
| **Private** | Only visible to logged-in users |
| **Library** | Select specific library or "Global - No restriction" |

5. Click **OK** to create the property set header

---

## Step 2: Define Fields

After creating the property set, the Custom Property Fields window appears.

### Available Field Types

| Field Type | Description | Use Case |
|------------|-------------|----------|
| :material-form-textbox: **Text Box** | Free-form text entry | Names, descriptions |
| :material-form-dropdown: **Combo Box** | Predefined selection list | Status, categories |
| :material-radiobox-marked: **Radio Button** | On/Off toggle | Yes/No values |
| :material-checkbox-marked: **Check Box** | Check/uncheck value | Conditions, flags |
| :material-database-search: **Lookup** | Database-driven values | External data |

### Adding Fields

1. Enter the field name
2. Select the control type
3. Configure field-specific options
4. Click **Add**
5. Repeat for all fields

!!! info "Combo Box Options"
    When selecting Combo Box, click the **Options** button to define the list of values users can choose from.

---

## Creating Lookup Fields

Lookup fields pull data from external databases.

### Configuration Steps

1. Add a new field with **Lookup** control type
2. Click the **Parameters** icon next to the field
3. Configure database connection:

| Parameter | Description |
|-----------|-------------|
| Database Type | SQL Server, Oracle, etc. |
| Server Name | Database server address |
| User Name | Database login |
| Password | Database password |
| SQL Statement | Query to retrieve values |

### SQL Query Examples

**Basic query:**
```sql
SELECT CITY FROM CITIES
```

**With column alias:**
```sql
SELECT CITYNAME AS 'CITY' FROM CITIES
```

!!! important "Column Names"
    The column name returned by the query must match the custom property field name.

**Multiple fields:**
```sql
SELECT CITY, STATE, ZIP FROM CSZ
```

**User input filtering:**
```sql
SELECT CITY, STATE, ZIP FROM CSZ
WHERE CITY LIKE '<%=VALUE%>%'
```

!!! tip "Dynamic Filtering"
    The `<%=VALUE%>` placeholder is replaced with what the user types, enabling auto-complete functionality.

---

## Testing Lookup Fields

1. Click **Save** to save your configuration
2. Execute the test query when prompted
3. If rows appear, the lookup field is configured correctly

---

## See Also

- [Custom Properties Introduction](CustomPropertyIntro.md)
- [Custom Property Sets Examples](CustomPropertySets.md)
- [Editing Custom Property Sets](EditingCustomPropertySets.md)
- [Applying Custom Property Sets](ApplyingCustomPropertySets.md)