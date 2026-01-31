# E-mail and Notification Settings

E-mail and Notification Settings in infoRouter

To view or change the E-mail and Notification Settings, perform the following.

1. Navigate to the infoRouter "Control Panel"
2. Click on the "E-mail and Notification Settings" link in the "Control Panel" window.
3. The E-mail and Notification Settings window will appear.

Please note that some of the settings can be changed from this screen but some settings are defined in the web.config file and must be changed there. This window simply shows/displays the settings in the web.config file.

The E-mail and Notification Settings parameters are as follows:

SMTP Settings:

SMTP Server Name:

This setting determines the SMTP Server Name that infoRouter is going to use when sending out e-mail notifications. This is "localhost" by default but you can specify a remote SMTP Server Name if you wish.

SMTP Server Port:

This setting is the SMTP Port number to be used in the SMTP Server specified above. It is Port 25 by default.

SMTP Connection Timeout:

This setting determines the time it should take to establish a connection with the SMTP Server specified. If this timeout is exceeded, the e-mail is aborted.

SMTP User Name:

This setting is the User name to be used when establishing a connection to the SMTP Server for SMTP Servers that require authentication.

SMTP Password:

This setting is the Password to be used when establishing a connection to the SMTP Server for SMTP Servers that require authentication.

System E-mail Address:

This setting is used when e-mails are sent out. This value appears in the "From" portion of the outgoing notification emails. If you do not specify this setting, your SMTP Server will most likely move infoRouter notification e-mails to the BAD MAIL folder.

Important Note:

Please check your SMTP Server Configuration parameters to make sure that the limit you set here matches the limit set there. Also note that a document will be doubled in size when sent as an e-mail.

Subscription Settings:

Enable E-mail Notifications:

This setting determines if infoRouter E-mail Notifications feature is enabled or not.

Allow E-mail Attachments:

Setting to determine if users can request subscription e-mails to be attached to their notification emails

Attachment Size Limit:

Setting to determine the size of the attachment. If not set, no limit is imposed, otherwise the specified number (in bytes) is imposed.

"Send To" Settings:

Enable "Send To" feature:

This setting determines if users can use the "Send To" feature to send out infoRouter documents via e-mail.

Allow E-mail Attachments:

This setting determines if users can attach documents using the send to features. If this is not allowed, the send to feature will send links to documents instead.

MS Outlook Integration:

Allow partial e-mail uploads:

This setting determines if users can choose to attach selected attachments when registering e-mails using the MS Outlook add-in.

See also for Administrators:

[SMTP Configuration on Windows 2003](https://www.infoRouter.com/downloads/V80/SMTP-Configuration-V80-Win2003.pdf)

[SMTP Configuration on Windows 2008](https://www.infoRouter.com/downloads/V80/SMTP-Configuration-V80-Win2008.pdf)

[Remote SMTP server configuration](https://www.infoRouter.com/downloads/V80/Remote-SMTP-Configuration-V80.pdf)

[SMTP Troubleshooting](https://www.infoRouter.com/downloads/V80/SMTP_Troubleshooting_V80.pdf)