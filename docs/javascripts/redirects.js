(function() {
    // Only run on 404 pages
    if (document.querySelector('h1') && document.querySelector('h1').textContent.trim() === 'Page Not Found') {
        var path = window.location.pathname;

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
            'downloadqueue': 'intro',
            'emaildocuments': 'Documents',
            'docownership': 'DocumentProperties',
            'documentkeywords': 'DocumentProperties',
            'taggingdocuments': 'DocumentProperties',
            'folderrules': 'FolderProperties',
            'compactfolder': 'FolderProperties',
            'deletingformtemplates': 'FormTemplates',
            'usingzipupload': 'UploadingDocuments',
            'creatingdocuments': 'CreatingDocuments',
            'viewfolder': 'FolderProperties',
            'periodicreviews': 'PeriodicReviews'
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

        // Handle general /en/PageName.aspx or /en/PageName.htm patterns
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
    }
})();
