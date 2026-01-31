# Warehouse Management

Monitor disk space usage and document distribution across your infoRouter storage warehouse.

---

## Accessing Warehouse Status

1. Click **Control Panel**
2. Click **Warehouse Status**

---

## Warehouse Status Sections

### Disk Usage

| Information | Description |
|-------------|-------------|
| :material-harddisk: **Physical drives** | All drives participating in the warehouse |
| :material-chart-pie: **Space used** | Current disk space consumption |
| :material-chart-donut: **Space available** | Remaining capacity on each drive |

!!! warning "Monitor Regularly"
    Check disk space usage regularly to ensure physical drives have enough capacity. Running out of space can prevent document uploads and affect system performance.

### Warehouse Paths

| Information | Description |
|-------------|-------------|
| :material-folder-multiple: **Path locations** | Directory paths configured for document storage |
| :material-database: **Space per path** | Disk space used by infoRouter on each path |
| :material-file-multiple: **Document distribution** | How documents are spread across paths |

---

## Best Practices

!!! tip "Capacity Planning"
    - Set up monitoring alerts for disk space thresholds
    - Plan for capacity increases before reaching limits
    - Consider adding additional warehouse paths as storage needs grow

---

## See Also

- [Control Panel Overview](ControlPanel.md)
- [Application Settings](ApplicationSettings.md)
- [System Configuration](SystemConfiguration.md)