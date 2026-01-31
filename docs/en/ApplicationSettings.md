# Administrative Functions / General Application Settings

infoRouter Document Management Software application settings allow System Administrators to alter the behavior of infoRouter.

To view or change the Application Settings, perform the following.

1. Navigate to the "Control Panel" by clicking on the "Control Panel" tab.
2. Click on the "General Application Settings" link in the "Control Panel" window.
3. The "Application Settings" window will appear.

Please note that some of the settings can be changed from this screen but most settings are defined in the web.config file and must be changed there. This window simply shows/displays the settings in the web.config file.

The application setting parameters are as follows:

Application URL:

This setting is very important. It must be set correctly for e-mail functions to work properly. Set this value as http://[server name]/infoRouter. If not set correctly, the links provided in outgoing notification e-mails will not function properly.

Index Server:

This setting determines if infoRouter is to use Index Server as its indexing engine.

Index Catalog:

This is the name of the Index Server Catalog that was created. Default Value = WHINDEX

Temporary Folder:

This setting determines the path infoRouter will use on a temporary basis during uploads and downloads. Make sure that infoRouter has "Full Control" in this path.

File Upload Limit:

This setting determines the maximum file size that can be uploaded into infoRouter. Setting it to 0 would impose no limit. Any other setting (in bytes) would enforce this limit.

Maximum Document Size:

This setting determines the maximum file size that can be created in infoRouter.

File Upload Time Out:

This setting determines the File upload timeout value. When set (in seconds) would determine the time that a page would wait until it gives up.

Allow Ownership Transfer:

This setting determines whether a user can transfer ownership of his/her documents and folders to others.

WebDAV:

This setting determines whether the WebDAV feature is enabled or disabled.

Enable Add-in downloads:

This setting determines whether users can download the optional add-in modules from the tools - add-ins menu. When disabled, this menu does not appear to users.

Search Page Size:

This setting determines the number of documents returned on each page of search results. The default values is 20

See Also

[E-mail and Notification Settings](EmailSettings.md)