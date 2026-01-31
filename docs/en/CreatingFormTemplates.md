# Form Templates / Creating Form Templates

infoRouter form templates feature allows you to create standard (with a few special extras) HTML forms using your favorite HTML
editor such as Visual Studio, Dreamweaver, SublimeText etc. and use them inside of infoRouter.

Any HTML Form uploaded into a specific area in infoRouter automatically appears as an option when the New / Document from Template menu
option is chosen.

This eliminates the need to create a document outside infoRouter and upload it into infoRouter. Using form templates, you can create
documents directly inside of infoRouter.

When a document is created using one of these templates, infoRouter automatically separates the contents from the visual elements of the form and saves the form content in XML format.

This XML format is used for various purposes, the most important being for future editing.

Documents created using such templates can be edited using the same template.

Another advantage packed in to this feature is that a document created in one Form Template can be rendered using another Form Template. For more information on this topic, refer to [Document Rendering Options](RenderingOptions.md).

To create a new Form Template:

1. Create your HTML Form using your favorite HTML editing tool.
2. Navigate to the library called "Form Templates" in infoRouter.
3. Click on the "NEW" menu item and select "Upload"
4. Upload your HTML form into this folder.

Now that you have uploaded your form template, this form template will automatically appear in a list of templates that can be used when
the "New Document" from "Template" menu is chosen.

Important technical considerations & warnings:

1. Do not use the radio button control in your forms because they are not supported. Use drop down combo controls instead.
2. Make sure that your form includes the proper begin FORM and end FORM tags.
3. Check your form to make sure that the names used for the controls on your form are unique.
4. Test your form prior to uploading it into infoRouter.
5. Look at the built-in form templates for hints.

Technical Reference Guide:

[Form Template Admin's Guide](https://www.inforouter.com/downloads/V80/Form-Template-Admins-Guide-V80.pdf)

See also:

[Form Template Scenarios](FormTemplateScenarios.md)