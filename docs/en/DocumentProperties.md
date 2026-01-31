# Documents / Document Properties

To view the properties of a document, click on the "Action" icon and choose the "Document Properties" menu.

In the "Document Properties" window, you will see the following information presented.

Name:

Name of the document

Note: You should not name documents using any of the following special characters:
  
 ( \ , / , : , \* , ? , " , < , > , | )

Description:

Description of the document

Update Instructions:

Any text entered in this field will be displayed in the body of the e-mail message that is sent out to subscribers.

Importance:

The importance level of the document. This field can be set to the following:

* Low
* Normal
* High
* Vital

Document Source:

A free form field that you can use to indicate the source of the document. It is generally used to describe the original source of the document.

Document Language:

A drop-down list of languages you can choose from to indicate the language of the document.

Author:

Use this field to give credit to the original author of the document. A document could be imported into infoRouter but can originally be authored by someone other than the user doing the import.

Owner:

The owner of the document. This field indicates who the current owner of the document is. The user name seen here may does not necessarily mean that this user is the actual author or the first person to create the document in infoRouter. It is possible for one user to own a document and another taking the ownership of a document.

Document ID:

The Document ID is a unique identifier used internally by infoRouter. Using this document number, System Administrators can easily locate this document on the server.

Checksum:

A calculated value based on content and size that is unique to each document. It used to verify the authenticity of a document.

Format:

The MIME type of a document. Example: Word, Excel, PowerPoint and PDF documents are all considered to be in the "Office Document" format.

Register Date:

The date on which the document was first created in infoRouter. This field cannot be edited or changed by users.

Registered By:

The user who registered the document into infoRouter originally. This information cannot be edited.

Creation Date:

The creation date of the document. This date refers to the creation date in infoRouter. The document may have ben created outside of infoRouter much earlier than this date.

Modification Date:

Date and time of last modification (if any). It is not possible for infoRouter to capture the modification date for documents uploaded through the web interface. Some of the tools such as the Import Export tool is able to access this information so the real modification date can be captured in these instances. When a document is checked out and checked back into infoRouter, the modification date is recorded as the date it was checked in.

Modified By:

The user who modified the document.

Size:

Document size (in bytes)

Folder:

The name of the folder where the document is located

Document Type:

Document types are or extension

infoRouter Document Types are used to categorize documents into logical groups. (Example: Financial Document, Letter, Memo, Resume etc.)

More on this topic in [Creating Document Types](CreatingDocumentTypes.md)

Checked Out By:

Name of user that currently has the document checked out (if any)

Check Out Date:

The date when this document was checked out (if any)

Keywords:

Displays the existing keywords associated with the document (if any)

Workflow status:

This section shows the status of the document if it is currently in a workflow.

Publishing rules:

The publishing rules section allows you to pick a particular version of the document to publish.
  
 When users click on a document in infoRouter, the published version of the document is shown.
  
 By default, the latest version of the document is the published version however you have the choice of specifying a different version to publish.
  
 More on this topic in [Publishing](Publishing.md)

Percent Complete:

Document state in percent values.
  
 If this attribute is set to 100%, the "Completion Date" attribute will automatically be set to the current date. When this is done, the document will be considered complete and infoRouter will prevent edits to this document.

Completion Date:

Date and time of when the document was marked complete.
  
 Completed documents cannot be checked out. Setting this attribute will automatically set the Percent Complete attribute to 100%.

Classification Level:

Classification level refers to the level of sensitivity or secrecy assigned to a document.

Supported Classification levels are:

* No markings
* Declassified
* Confidential
* Secret
* Top Secret

Downgrade On:

The date on which the document is to be downgraded from a higher classification level.

This is a task type that can be assigned to users.

Declassify On:

The date on which the document is to be declassified. This is a task type that can be assigned to users.

Retention & Disposition Settings

The date until which the document needs to be retained.
  
 If this attribute is set, it will prevent users from deleting this document until this date or until this date is altered.

Disposition Date:

The date on which the document is to be destroyed.

Expiration:

The date on which the document becomes obsolete or simply expires.

ISO/Periodic review:

This section shows the periodic review schedule for the document if the document is subject to such a review. You can create periodic review tasks for documents to ensure they are reviewed on a regular basis.

More on this topic in [Publishing](PeriodicReviews.md)

Tags:

This section shows the different tag values that may have been applied to this document.

Rendering Options:

This section allows you to view documents in different formats. Not all document formats can be rendered in different formats.

Custom Properties:

Displays the existing custom properties that have been applied to this document. This section also allows you to apply new custom property values to this document.

![document properties](../images/document-properties.png)