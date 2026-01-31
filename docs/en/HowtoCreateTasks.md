# How to Create Tasks

Assign tasks to users at the document level to track work items and responsibilities.

---

## Task Types

| Type | Description |
|------|-------------|
| :material-file-document: **Document-level** | Tasks assigned to specific documents |
| :material-sitemap: **Workflow-level** | Tasks created as part of workflow definitions |

This section covers document-level task creation.

---

## Creating a Document Task

### Step 1: Select the Document

1. Navigate to the document
2. Select the checkbox, or click the **Action** icon
3. Click **Create Task** from the **Tools** menu (or Action menu)

### Step 2: Configure Task Settings

The Create Task window appears with these options:

| Setting | Description |
|---------|-------------|
| **Priority** | Task urgency level |
| **Send Notice** | Email notification to assignees |
| **Due Date** | When task must be completed |
| **Start Time Span** | Delay before task can start |
| **Reminder Date** | When to send reminder |
| **Assignee** | User responsible for task |
| **Instructions** | What the assignee should do |

### Step 3: Set Task Permissions

Task permissions control what the assignee can do:

| Permission | Description |
|------------|-------------|
| :material-calendar-edit: **Postponement** | Allow changing due date |
| :material-flag-triangle: **Priority change** | Allow changing priority |
| :material-calendar-check: **Finish date** | Allow setting completion date |

### Step 4: Set Task Requirements

Define what must be done before marking complete:

| Requirement | Description |
|-------------|-------------|
| :material-eye: **View document** | Must open the document |
| :material-comment: **Add comment** | Must add a comment |
| :material-checkbox-marked: **Approve/Reject** | Must make a decision |
| :material-upload: **Upload attachment** | Must attach a file |

!!! info "Validation"
    All requirements are validated. infoRouter verifies each requirement is met before the task can be marked complete.

### Step 5: Save

Click **OK** to create the task. The assignee will be notified if notifications are enabled.

---

## See Also

- [My Tasks](MyTasks.md)
- [How to Complete Tasks](HowtoCompleteTasks.md)
- [Task Notifications](TaskNotifications.md)
- [Workflows Introduction](WorkflowsIntro.md)