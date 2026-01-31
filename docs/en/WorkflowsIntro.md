# Introduction to infoRouter Workflows

The workflow features of infoRouter allow authors or authorized users to submit documents to pre-defined workflows.

This functionality has been vastly improved over the past several releases it now includes complex workflows that may consist of multiple tasks (parallel and serial). It is now possible to edit documents while they are in workflows taking this functionality beyond a simple document approval system.

As you will see in later sections, you may create a series of steps and create a series of tasks for each step. Every task in a step is completed before the workflow moves on to the next step. Task definitions determine what task is performed at each step and what must be done to complete the task.

At the beginning of each step a series of task notifications are sent to the selected users who have been assigned tasks at that step of the workflow.

Each user must perform all the pre-determined task requirements before a task can be marked complete.

As determined by the task definition users may stop or break the workflow cycle sending the document back to the submitter or simply perform the task. The usual Approval/Reject task behaves exactly the same as before where a Reject vote stops the workflow and sends the document back to the original submitter. An Approve vote will advance the document to the next step or task.

Please read this document for a comprehensive overview of the infoRouter Workflow system:

[Workflow Administrator's Guide](https://www.infoRouter.com/downloads/V80/infoRouter_Workflows.pdf)

See also:

[Reviewers or Tasks Assignees](Reviewers.md)

[Author Reviews](AuthorReviews.md)