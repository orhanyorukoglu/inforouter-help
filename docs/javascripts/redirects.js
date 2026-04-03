(function() {
    var path = window.location.pathname;

    // Map of old page names (lowercase) to new page names
    // Covers: renamed pages, shortened names, alternate naming conventions
    var nameMap = {
        // Case differences
        'accessinginforouter': 'AccessingInfoRouter',
        'howtocreatecustompropertysets': 'HowtoCreateCustomPropertySets',

        // Renamed pages (old site used different names)
        'portalsintro': 'Portals',
        'creatingportals': 'PortalAdministration',
        'customizingportals': 'PortalAdministration',
        'portaladmins': 'PortalAdmins',
        'versioncontrol': 'DocumentVersions',
        'documenttypes': 'CreatingDocumentTypes',
        'copymovedocuments': 'CopyingDocuments',
        'webdavdocuments': 'UsingWebdav',
        'downloadqueue': 'Documents',
        'emaildocuments': 'Documents',
        'docownership': 'TransferOwnership',
        'documentkeywords': 'DocumentProperties',
        'taggingdocuments': 'DefiningTags',
        'folderrules': 'FolderProperties',
        'compactfolder': 'FolderProperties',
        'deletingformtemplates': 'FormTemplates',
        'viewfolder': 'FolderProperties',
        'usingsavedsearches': 'CreatingSavedSearches',

        // Pages where old name doesn't exist on new site (GSC 404s, Apr 2026)
        'folderprompts': 'FolderProperties',
        'howtocreatedocuments': 'UploadingDocuments',
        'thumbnails': 'Documents',
        'completingdocuments': 'Documents',
        'folders': 'CreatingFolders',
        'sendto': 'Documents',

        // Discovered from GSC referring pages (not in original CSV)
        'deletedocument': 'DeletingDocuments',
        'deletedocuments': 'DeletingDocuments',
        'uploaddocument': 'UploadingDocuments',
        'uploaddocuments': 'UploadingDocuments',
        'deletefolder': 'DeletingFolders',
        'deletefolders': 'DeletingFolders',
        'deletelibrary': 'DeletingLibraries',
        'deletelibraries': 'DeletingLibraries',
        'deleteuser': 'DeletingUsers',
        'deleteusers': 'DeletingUsers',
        'deletecategory': 'DeletingCategories',
        'deletecategories': 'DeletingCategories',
        'copydocument': 'CopyingDocuments',
        'copydocuments': 'CopyingDocuments',
        'movedocument': 'MovingDocuments',
        'movedocuments': 'MovingDocuments',
        'movefolder': 'MovingFolders',
        'movefolders': 'MovingFolders',
        'editdocument': 'EditingDocuments',
        'editdocuments': 'EditingDocuments',
        'viewdocument': 'ViewDocument',
        'renamefolder': 'RenamingFolders',
        'renamefolders': 'RenamingFolders',
        'createfolder': 'CreatingFolders',
        'createfolders': 'CreatingFolders',
        'createlibrary': 'CreatingLibraries',
        'createlibraries': 'CreatingLibraries',
        'createcategory': 'CreatingCategories',
        'createcategories': 'CreatingCategories',
        'createtask': 'HowtoCreateTasks',
        'createtasks': 'HowtoCreateTasks',
        'completetask': 'HowtoCompleteTasks',
        'completetasks': 'HowtoCompleteTasks',
        'createworkflow': 'HowtoCreateWorkflowDefinitions',
        'advancedsearch': 'AdvancedSearch',
        'basicsearch': 'BasicSearch',
        'searchintro': 'SearchIntro',
        'searchoperators': 'SearchOperators',
        'checkin': 'CheckIn',
        'checkout': 'CheckOut',
        'auditlog': 'AuditLogControlPanel',
        'controlpanel': 'ControlPanel',
        'importexporttool': 'ImportExportTool',
        'formtemplatefields': 'FormTemplateFields',
        'formtemplatesintro': 'FormTemplatesIntro',
        'formtemplatevalidation': 'FormTemplateValidation',
        'archiveintro': 'ArchiveIntro',
        'archivingdocuments': 'ArchivingDocuments',
        'webdavintro': 'WebdavIntro',
        'webdavsetup': 'WebdavSetup',
        'usingwebdav': 'UsingWebdav',
        'documentauditing': 'DocumentAuditing',
        'documentretention': 'DocumentRetention',
        'documentversions': 'DocumentVersions',
        'folderretention': 'FolderRetention',
        'foldersecurity': 'FolderSecurity',
        'ldapsynchronization': 'LDAPSynchronization',
        'importingntusers': 'ImportingNTUsers',
        'localusergroups': 'LocalUserGroups',
        'usergroups': 'UserGroups',
        'usermanagers': 'UserManagers',
        'librarymanagers': 'LibraryManagers',
        'librarypolicies': 'LibraryPolicies',
        'librarymembers': 'LibraryMembers',
        'addingusers': 'AddingUsers',
        'addinglibrarymembers': 'AddingLibraryMembers',
        'portalusers': 'PortalUsers',
        'portaladministration': 'PortalAdministration',
        'mimetypes': 'MimeTypes',
        'managerecyclebin': 'ManageRecycleBin',
        'warehousemanagement': 'WarehouseManagement',
        'applicationsettings': 'ApplicationSettings',
        'emailsettings': 'EmailSettings',
        'emailscanner': 'EmailScanner',
        'hotfolders': 'HotFolders',
        'officeaddin': 'OfficeAddin',
        'scanstation': 'ScanStation',
        'taskredirection': 'TaskRedirection',
        'tasknotifications': 'TaskNotifications',
        'subscriptionnotifications': 'SubscriptionNotifications',
        'commentnotifications': 'CommentNotifications',
        'subscribing': 'Subscribing',
        'unsubscribing': 'Unsubscribing',
        'subscriptions': 'Subscriptions',
        'mysubscriptions': 'MySubscriptions',
        'mydocuments': 'MyDocuments',
        'myfavorites': 'MyFavorites',
        'mytasks': 'MyTasks',
        'myrecyclebin': 'MyRecycleBin',
        'mycheckedoutdocuments': 'MyCheckedOutDocuments',
        'recentdocuments': 'RecentDocuments',
        'personaldashboard': 'PersonalDashboard',
        'userprofile': 'UserProfile',
        'definingtags': 'DefiningTags',
        'creatingdocumenttypes': 'CreatingDocumentTypes',
        'disposition': 'Disposition',
        'rdschedules': 'RDSchedules',
        'retention': 'Retention',
        'inheritance': 'Inheritance',
        'loginlog': 'LoginLog',
        'authpasspolicies': 'AuthPassPolicies',
        'authentication': 'Authentication',
        'security': 'Security',
        'securityscenarios': 'SecurityScenarios',
        'notifications': 'Notifications',
        'workflowsintro': 'WorkflowsIntro',
        'authorreviews': 'AuthorReviews',
        'workflow-reports': 'Workflow-Reports',
        'workflowreports': 'Workflow-Reports',
        'transferownership': 'TransferOwnership',
        'administrators-user-group': 'Administrators-User-Group',
        'auditmanagers': 'AuditManagers',
        'policymanagers': 'PolicyManagers',
        'libraryusagescenarios': 'LibraryUsageScenarios',
        'custompropertysets': 'CustomPropertySets',
        'custompropertyintro': 'CustomPropertyIntro',
        'editingcustompropertysets': 'EditingCustomPropertySets',
        'applyingcustompropertysets': 'ApplyingCustomPropertySets',
        'systemconfiguration': 'SystemConfiguration',
        'publishing': 'Publishing',
        'reviewers': 'Reviewers',
        'documentshortcuts': 'DocumentShortcuts'
    };

    // Handle specific special pages first
    if (path.match(/\/en\/index\.htm$/i) || path.match(/\/en\/?$/)) {
        window.location.replace('/');
        return;
    }

    if (path.match(/\/en\/popup\.htm$/i)) {
        window.location.replace('/en/DocumentVersions/');
        return;
    }

    // Handle /en/PageName.aspx, .htm, or .asp patterns
    var match = path.match(/\/en\/([^\/]+)\.(aspx|asp|htm)$/i);
    if (match) {
        var pageName = match[1];
        var pageNameLower = pageName.toLowerCase();

        if (nameMap[pageNameLower]) {
            window.location.replace('/en/' + nameMap[pageNameLower] + '/');
            return;
        }

        window.location.replace('/en/' + pageName + '/');
        return;
    }
})();
