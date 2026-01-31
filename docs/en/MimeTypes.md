# Administrative Functions / Managing MIME Types

MIME Types allow infoRouter and your browser to correctly identify the type of document the user is trying to download. With known MIME types, your browser knows to launch the appropriate application when you choose to open the document.

For your convenience, infoRouter provides a wide variety of commonly used MIME Types. If your organization uses documents or files generated with applications not widely used, the System Administrator may need to identify a new MIME Type.

For example, your company may use a specialized drawing application that generates files with an ".xyz" extension. In this case, the System Administrator would need to identify a new MIME type so that infoRouter will know which application should be associated with that file extension.

To add a MIME Type, perform the following:

1. Navigate to the infoRouter installation Path example: c:\infoRouter\config.
2. Edit the document called MimeTypes.Custom.xml with notepad.
3. If you need help on the format of this file, look at MimeTypes.xml.
4. Do NOT edit the MimeTypes.xml file. This file may be overwritten by the Live Update program from time to time.
5. The MimeTypes.Custom.xml however is never updated and can be controlled directly by you.