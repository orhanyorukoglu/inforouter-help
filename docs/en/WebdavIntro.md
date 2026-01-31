# WebDAV / Introduction to infoRouter WebDAV

WebDAV (Web Distributed Authoring and Versioning) is an extension to the HTTP/1.1 protocol that allows clients to perform remote web content authoring operations. *Source:* WebDAV.org

There are a handful of applications that support this protocol. infoRouter fully supports this protocol to provide an alternative interface to access infoRouter.

The WebDAV interface allows users to access infoRouter documents and folders using the Windows File Explorer.

There are a few differences worth noting:

The "Check In" and "Check Out" operations are automatic and there is no interface to explicitly "Check Out" or "Check In" a document. This is done automatically when you open an infoRouter document for editing in editing tools that are WebDAV compliant. Once again, there are a handful of editing tools that are compliant. Examples of WebDAV compliant client tools are; MS Word, MS Excel, MS PowerPoint etc.

As of Version 7.5.81 of infoRouter we have introduced many alternatives to WebDAV.

The MS Office integration introduced in earlier versions continues to be a strong alternative to WebDAV. In fact the Office Add-in tool supports many features that WebDAV cannot support.

The new Import/Export Tool introduced as a client side GUI application is once again a quick way to pull documents out of or push documents into infoRouter. This tool uses our Web Services API at its foundation and provides fast communications with the infoRouter server.