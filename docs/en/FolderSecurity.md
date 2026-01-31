# Folder Security

infoRouter allows you to assign folder level permissions. To assign folder level permissions, you must have "Full Control" rights to the folder.

Levels of folder permissions:

* No Access
* List
* Read
* Add
* Add and read
* Change
* Full Control

When you assign permissions to a folder, those same permissions will be automatically inherited by any documents or folders contained in the folder. You may assign permissions to "Users", "User Groups" and the "Everyone" group.

To assign permissions to a folder, perform the following:

* Navigate to the folder. Click on the "Action" icon and choose the "Folder Properties" menu.
* In the "Folder Properties" window, click on "Folder Security".
* In the "Folder Security" window, select users from the first list.
* Make sure that you also select the appropriate access type from the drop down list box.
* Click on "Add".
* The selected users will be added to the security list with the permission level selected.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Permissions | No Access | List | Read | Add | Add&Read | Change | Full Control |
| List folder contents |  | X | X | X | X | X | X |
| View Documents |  |  | X |  | X | X | X |
| Create Documents |  |  |  | X | X | X | X |
| Create & Read Documents |  |  |  |  | X | X | X |
| Change Properties |  |  |  |  |  | X | X |
| Change Permissions |  |  |  |  |  |  | X |
| Take Ownership |  |  |  |  |  |  | X |
| Delete Folder |  |  |  |  |  |  | X |

The "No Access" right is the same as not including a user in the access list. It is used in instances where permission is given to a user group or the "Everyone" group and you wish to exclude a member of the group from the assigned security.

Permissions given to individuals supersede the permissions given to user groups.

Example:

* User Group A has been given "READ" permissions to a folder
* User A is in User Group A
* User A has been given "Full Control" permissions to the folder.
* User A will have "Full Control" permissions to the folder NOT "READ"

Learn more about this issue in [User Groups](UserGroups.md).

Permission Inheritance:

Setting this option while assigning folder permissions allows you to specify that a folder should inherit its permission list from its parent folder. This is optional, but recommended, because it dramatically reduces the time needed to apply security to child folders. Learn more about this issue in
[Inheritance](Inheritance.md).

**Note:** Groups or users granted "Full Control" at the parent folder level can delete or change any sub-folders, regardless of the permissions protecting the folder. Any user with "Full Control" rights can set or alter the security at any of the subfolders.