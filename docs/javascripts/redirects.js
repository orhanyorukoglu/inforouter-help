(function() {
    var path = window.location.pathname;

    // Map of old page names (lowercase) to new page names
    var nameMap = {
        'accessinginforouter': 'AccessingInfoRouter',
        'howtocreatecustompropertysets': 'HowtoCreateCustomPropertySets',
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
        'usingzipupload': 'UsingZipUpload',
        'creatingdocuments': 'CreatingDocuments',
        'viewfolder': 'FolderProperties',
        'periodicreviews': 'PeriodicReviews',
        'usingsavedsearches': 'CreatingSavedSearches'
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

    // Handle /en/PageName.aspx or /en/PageName.htm patterns
    var match = path.match(/\/en\/([^\/]+)\.(aspx|htm)$/i);
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
