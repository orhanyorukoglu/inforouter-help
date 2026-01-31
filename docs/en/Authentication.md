# Security / User Authentication

All users must have a valid account in infoRouter before they can access its secure resources. infoRouter accounts are created by the System Administrator and are stored in infoRouter's own security database.

Your account is what identifies you in the infoRouter system. It allows you to check documents in and out, and it allows you to be granted permissions within the document and folder security framework.

LDAP Authentication:

In this mode, authentication is carried out by LDAP.

User accounts in LDAP can be imported and synchronized with infoRouter. When a user attempts to log into infoRouter, their credentials are passed on to and authenticated from LDAP not infoRouter. Account passwords are maintained and managed in LDAP so logins to infoRouter is possible as long as they are authenticated by LDAP. Click here to learn more about [Importing LDAP Users and Groups.](ImportingNTUsers.md)

infoRouter Authentication:

In this mode, authentication is carried out by infoRouter (even if they have been imported from LDAP). This mode is commonly used in environments that support a number of users who are not a part of an NT domain. (e.g. clients, vendors, etc.). All accounts are maintained inside infoRouter so changes to account passwords must be performed within infoRouter.

Mixed Security Authentication:

In this mode, some accounts can be authenticated from LDAP while other accounts are authenticated by infoRouter. The "Authentication Type" setting in the "User Properties" window determines whether a user is authenticated from Windows (LDAP) or infoRouter.

See also

[Document Security](DocumentSecurity.md)

[Folder Security](FolderSecurity.md)