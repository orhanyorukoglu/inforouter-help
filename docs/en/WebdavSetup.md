# How to setup WebDAV on your workstation

Setting up WebDAV on your workstation will allow you to access infoRouter documents and folders directly from Windows File Explorer or Mac Finder window bypassing the infoRouter user interface.

How to setup WebDAV on a Mac:

1. Launch Finder.
2. Click on the GO menu.
3. Click on the "Connect to Server" menu item.
4. Enter the infoRouter server URL
5. Click on the "Connect" button to complete the operation.

URL Examples:

```

		http://(servername)/dav
		http://(servername)/inforouter/dav
		or
		if the server is local, enter the network path:
		\\infoRouter\dav
		
	
```

How to setup WebDAV on Windows 10:

1. Launch Windows Explorer.
2. Right click on Network
3. Choose the "Map Network Drive" option
4. Pick a drive letter such as Z:
5. Click on the link that reads "Connect to a web site that you can use to store your documents and pictures".
6. This will launch the "Add Network Location" wizard.
7. Click on the "Next" button.
8. Click on the "Choose a custom network location" link.
9. Click on the "Next" button.
10. Enter the "Internet or network address" information which is the infoRouter DAV path.

How to setup WebDAV on Windows 8:

1. Launch Windows Explorer.
2. Right click on Network
3. Choose the "Map Network Drive" option
4. Pick a drive letter such as Z:
5. Click on the link that reads "Connect to a web site that you can use to store your documents and pictures".
6. This will launch the "Add Network Location" wizard.
7. Click on the "Next" button.
8. Click on the "Choose a custom network location" link.
9. Click on the "Next" button.
10. Enter the "Internet or network address" information which is the infoRouter DAV path.

Note:

Since the introduction of MS Office Add-in and the various tools such as the GUI Import/Export tool, we do not recommend heavy usage of the WebDAV functionality. Microsoft's implementation of WebDAV across various Windows platforms such as XP, Vista, Windows 7 and Windows 8.x is not consistent. Adding to the mix, the differences in MS Office versions, WebDAV has become increasingly difficult to manage on a consistent basis.