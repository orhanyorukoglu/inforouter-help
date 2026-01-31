# Administrative Functions / Importing & Synchronizing LDAP Users with infoRouter

All users must have a valid account in infoRouter before they can use it. infoRouter user accounts are created by
users with Administrator priveledges and are stored in infoRouter's own security database.

Your user account is what identifies you both to the system and to other users. It allows you to check documents in
and out, and it allows you to be granted permissions within the document and folder security framework.

The System Administrator can reduce the time it takes to add infoRouter user accounts by importing users directly from
your existing LDAP user database.

Users imported from LDAP are automatically authenticated from LDAP. LDAP users will still have to log into infoRouter
however, their passwords are not kept in infoRouter so when their passwords are updated in LDAP infoRouter can still
authenticate them by calling on the LDAP Server.

When an LDAP authenticated user logs in, infoRouter makes a call to the LDAP database to verify the authenticity of
this user. This way, the user only maintains one set of user ids and password between the two systems.

To import LDAP Users, your system administrator must install a stand-alone tool called "LDAP Synchronization Manager".
For more help on this tool, please navigate to the [infoRouter support page](https://support.inforouter.com)

See also:

[LDAP Authentication](https://www.infoRouter.com/downloads/V80/infoRouter_LDAP_Authentication.pdf)

[LDAP Synchronization Manager](https://www.infoRouter.com/downloads/V80/infoRouter_LDAP_Synchronization_Manager.pdf)