# Workflows / How to Create a Workflow Definition

Workflows are defined at the library level by the System Administrator and members of the "Administrators" system user group and by Library Managers.

When a workflow is created, the workflow becomes available only in that library effective from the folder it was defined and below. So if you would like the workflow you create to be available in the entire library, please define the workflow at the library folder level. If you would like the workflow to be available at a certain folder, create the workflow on that folder.

Once the workflow is defined, users can then choose to submit their documents to any one of the defined workflows that are available.

To create a workflow definition, perform the following:

1. Click on the "Workflow Definitions" menu located under the main "Tools" menu.
2. Click on the "New" menu to create a new workflow definition
3. Specify a name for the workflow. Notice that the "Active Folder Path" will default to your current location. You may choose to select another folder such as the library folder
   so that the workflow becomes available throughout the entire library.
4. Optionally you can specify a folder path for the document to be moved into once the workflow ends.
5. The "On End URL" is the web service call that will be invoked once the workflow ends. This allows the transfer of control to a custom procedure where custom actions can be carried out.
6. The "Hide" checkbox allows the workflow to stay hidden from the infoRouter interface mainly to prevent direct submissions to this workflow.
7. The "Supervisor Users" prompt allows workflow designers to choose individual users as supervisors for this workflow.
8. The "Supervisor Groups" prompt allows workflow designers to choose user groups as supervisors for this workflow.
9. Click "Ok" to create the workflow.

Now you must create workflow steps.

1. Select the workflow you just created and click on the "Workflow Steps" menu. Doing so will display the Workflow steps window where you must define at least one step for the workflow.
2. Click on the "Add Step" menu to create a new step
3. All you are required to do for each step is to specify a step name.

Finally, you must add a task or tasks to each step in the workflow.

1. Select a step and click on the "Add Task" menu to display the new task window.
2. Choose from a list of users to assign this task. You may decide not to specify any users at this step so the submitter can decide on who must perform the task.
3. Specify a Task name.
4. Specify the task rule. This option is only relevant in cases where more than one user is selected for the task.
5. Set the priority of the task.
6. Specify a deadline (in days). When the task is not performed in the specified number of days, the task is escalated to the supervisor.
7. Specify the Task Instructions.
8. Select a supervisor from the pop up screen by clicking on the button labeled "select".
9. Specify when the supervisor of the task will receive a past due notification.
10. Set the Task Permissions.
11. Set the Task Requirements.

For a comprehensive overview on how to create workflows please refer to
  
[infoRouter Workflows](https://www.infoRouter.com/downloads/V80/infoRouter_Workflows.pdf)