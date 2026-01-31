# Search Operators

Use operators to create more precise and powerful searches.

---

## Boolean Operators

Combine search terms with Boolean logic:

| Operator | Description | Example |
|----------|-------------|---------|
| **AND** | Both terms required | `budget AND report` |
| **OR** | Either term matches | `invoice OR receipt` |
| **NOT** | Exclude term | `policy NOT draft` |

---

## Phrase Search

Search for exact phrases using quotes:

| Syntax | Description |
|--------|-------------|
| `"annual report"` | Finds exactly "annual report" |
| `"project alpha"` | Finds exactly "project alpha" |

---

## Wildcard Operators

Use wildcards for partial matches:

| Wildcard | Description | Example |
|----------|-------------|---------|
| `*` | Multiple characters | `doc*` finds document, documentation |
| `?` | Single character | `te?t` finds test, text |

!!! warning "Performance"
    Leading wildcards (e.g., `*tion`) may impact search performance.

---

## Comparison Operators

Use with numeric and date fields in Advanced Search:

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Equals | Amount = 500 |
| `>` | Greater than | Date > 2024-01-01 |
| `<` | Less than | Size < 1000000 |
| `>=` | Greater than or equal | — |
| `<=` | Less than or equal | — |

---

## Combining Operators

Create complex queries by combining operators:

| Query | Finds |
|-------|-------|
| `budget AND (Q1 OR Q2)` | Budget documents for Q1 or Q2 |
| `report AND NOT draft` | Reports that aren't drafts |
| `"project alpha" AND invoice` | Project Alpha invoices |

---

## Tips for Using Operators

!!! tip "Best Practices"
    - Use AND to narrow results
    - Use OR to broaden results
    - Use NOT to exclude unwanted matches
    - Use quotes for multi-word concepts
    - Test complex queries incrementally

---

## See Also

- [Basic Search](BasicSearch.md)
- [Advanced Search](AdvancedSearch.md)
- [Search Introduction](SearchIntro.md)
- [Ignored Keywords](IgnoredKeywords.md)
