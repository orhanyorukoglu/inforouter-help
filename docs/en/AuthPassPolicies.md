# Administrative Functions / Authentication and Password Policy Settings

Administrators can adjust the authentication and password policy settings for infoRouter.

To view or change the Authentication and Password Policy Settings perform the following.

1. Navigate to the "Control Panel" by clicking on the "Control Panel" tab.
2. Click on the "Authentication and Password Policy Settings" link in the "Control Panel" window.
3. The "Authentication and Password Policy Settings" window will appear.

The "Authentication and Password Policy Settings" window contains the following information:

NT Authentication Domain

This section dispays the LDAP authentication domain that is being used to authenticate some or all the infoRouter users. This setting can only be altered by editing the web.config file.

Login tracking

This section is used for user login auditing. If you wish to log successful or unsuccessful login attempts check the appropriate check boxes. If you wish to prevent automated login attempts, you can specify a delay that will be in effect between each login attempt. This can be specified in milliseconds.

* Track successful logins
* Track unsuccessful login attempts
* Apply delays between each login attempt

Password Policy

This section specifies the password policy you wish to have in effect. Please note that this only applies to infoRouter authenticated users and not user who are authenticated using LDAP.

Check the appropriate check boxes to reflect your preferred password settings.

* Password expiration period (in days)
* Minimum Password Length
* Passwords must include alpha characters (Aa-Zz)
* Passwords must include numeric characters (0-9)
* Passwords must include special characters ~!@#$%^ & \*()-\_+=
* Password cannot be the same as e-mail address
* Password cannot be the same as user name
* Check weak password list

Re-prompt user for password for the following actions

This section specifies selected actions in infoRouter where a password re-prompt is required to carry out the operation. This creates an addition layer of security.

* Delete libraries
* Delete documents or folders
* Delete users
* Change security
* Change owners
* Change classification status
* Perform workflow tasks
* Role Restrictions

Role Restrictions

This section specifies whether "Library managers" can edit the library policies. This setting can be controlled by the policy managers and the sytem administrator.

* Library Managers can edit polices

See Also

[E-mail and Notification Settings](EmailSettings.md)