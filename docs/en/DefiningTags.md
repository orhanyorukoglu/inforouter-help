# Administrative Functions / Defining and managing document tags

Tagging allows you to mark documents as they are in a particular point in time. When you choose to tag a document or multiple documents, the current version of the document at that time is marked with a special tag and a datetime stamp. This allows you to determine at a later point in time the state of the document at the time it was tagged.

The system administrator can define tags by editing a special configuration file located in the config directory of the infoRouter application path. The file that must be edited is called tagdefs.xml

To create or edit tags, perform the following:

1. Navigate to the infoRouter installation path. Example: c:\infoRouter\config.
2. Edit the document called tagdefs.xml with notepad.
3. Add or edit the existing tags and save the file.
4. Navigate to the infoRouter Control Panel and click on the link labeled "Flush Application Cache and Settings". This will force infoRouter to reload the system settings. The newly defined tag structure will now be in effect.