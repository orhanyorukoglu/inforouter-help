# Creating Libraries

Libraries are the top-level containers in infoRouter. Only System Administrators and members of the Administrators group can create and delete libraries.

---

## How to Create a Library

### Step 1: Access Library Management

1. Navigate to the **Control Panel**
2. Click **Libraries** to see existing libraries
3. Click **New Library** in the left sidebar

### Step 2: Configure Basic Settings

| Setting | Description |
|---------|-------------|
| **Name** | Enter a name for the new library |
| **Use as template** | Optionally copy structure from an existing library |
| **Allow Anonymous Access** | Create as an Anonymous Library |
| **Hidden Library** | Hide from regular view (only visible with folder options set) |
| **Welcome Message** | Text included in library invitation emails |

### Step 3: Add Members

1. Click **Next** to continue the wizard
2. Select **global users** to add as library members
3. Click **Next**
4. Select **global user groups** to add as library members
5. Click **Next**

### Step 4: Assign Security

The Folder Security window allows you to assign permissions to the selected users and groups.

---

## Using Template Libraries

!!! tip "Template Libraries"
    Use the **"Use another library as a template"** option to copy an existing library's structure. This is useful when you regularly create libraries with the same folder structure.

!!! warning "Large Templates"
    Creating a library from a template with many folders and documents may take a long time.

---

## Creating a Template Library

To create a reusable template:

1. Create a new library
2. Build your desired folder and subfolder structure
3. Add any standard documents you want in every new library
4. **Do NOT** specify any members (keeps the template hidden from regular users)
5. Use this library as a template when creating new libraries

---

## Library Options

| Option | Description |
|--------|-------------|
| :material-earth: **Anonymous Library** | Public access without login |
| :material-eye-off: **Hidden Library** | Not visible in default view |
| :material-content-copy: **Template-based** | Copy structure from existing library |

---

## See Also

- [Document Libraries](Libraries.md)
- [Library Members](LibraryMembers.md)
- [Adding Library Members](AddingLibraryMembers.md)
- [Deleting Libraries](DeletingLibraries.md)
- [Library Policies](LibraryPolicies.md)
