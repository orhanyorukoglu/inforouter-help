# infoRouter Security Scenarios

Follow the best practices guide below when setting up infoRouter for the first time or every time you create a new document library.

A Simple Security Implementation:

1. Create Users

First create your users from the infoRouter Control Panel / Manage Users screen. For more on this topic, click [Creating users](Users.md)

2. Create Global User Groups (optional)

Now create Global users Groups from the infoRouter Control Panel / Global user groups screen. Global user groups can become very handy when you assign library members. For more on this topic, click [Creating User Groups](UserGroups.md)

3. Create Libraries

Create libraries for different functional areas such as accounting, marketing, sales and human resources. Remember that libraries are isolated work areas for a group of [members] users. For more on this topic, click [Creating Libraries](Libraries.md)

4. Make individual users and/or Global User Groups, members of libraries.
5. Create Local Library Users (optional).

If you wish to create users that can only be a member of one library and you do not plan on making these users members of other libraries, creating them as local users may be a very good idea. For more on this topic, click [Creating Local Users](Users.md)

6. Create Local User Groups.

Local users groups are essential to a good security implementation. Instead of having to assign each individual user their own set of security permissions, assigning security to a group of individuals is a much better option. It is much easier to assign a particular user to a user group and manage security based on the group. As long as the right users are made members of a user group, its members can access the areas of infoRouter based on the permissions assigned to the group. If they leave the user group, their rights are automatically revoked. For more on this topic, click [Creating Local User Groups](UserGroups.md)

7. Create Folders within the Library

Create folders and sub-folders inside libraries in a way that reflects the way you work. Creating the folder structure correctly is very important. Do not create sub-folders that are deeper than 6-7 levels. Try to keep the names of folders descriptive but not too long. Keep in mind that when you try to export folders and documents out of infoRouter on to the file system, the file system does not support more than 250 characters for a path. The 250 character limit includes the path and the document name. For more on this topic, click [Creating Folders](CreateFolder.md)

8. Assign folder security

Assigning the correct folder security is very important. Make sure that you spend time thinking through your structure and how you intend implement the correct security for all library users. Do not go overboard with "Full Control". Remember that a simple "Add" permission for a user allows the user to create documents and access those documents. For more on this topic, click [Folder Security](FolderSecurity.md)

9. Assign document security

Try to use user group security more than individual security assignments. Making sure that a group of users with a specific role get access to documents and folders makes more sense than individual users. If a user leaves a particular role and no longer should access certain documents, it will be more difficult to hunt down the individual documents this user has access. Whereas the removal of the user from a user group can give you the same effect in a painless way. For more on this topic, click [Document Security](DocumentSecurity.md)