#!/usr/bin/env python3
"""
generate_redirects.py - Run after 'mkdocs build' to create redirect files.

Creates HTML redirect pages at old .aspx and .htm paths so that GitHub Pages
serves a 200 response with a meta-refresh redirect instead of a 404.
This is critical for SEO: Googlebot sees 404 and drops the page from the index,
but a 200 + meta-refresh redirect passes link equity to the new URL.

Usage:
    mkdocs build
    python generate_redirects.py

Or add to your CI/CD pipeline after the build step.
"""

import os

SITE_DIR = "site"  # MkDocs default output directory
BASE_URL = "https://help.inforouter.com"

REDIRECT_TEMPLATE = """<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <link rel="canonical" href="{url}">
    <meta http-equiv="refresh" content="0; url={url}">
    <script>location.href="{url}"+(window.location.hash||"")</script>
</head>
<body>
<p>This page has moved. You are being redirected to <a href="{url}">{url}</a>.</p>
</body>
</html>
"""

# -----------------------------------------------------------------------
# Redirect map: (old_filename, new_page_name)
#
# old_filename is the file to create under site/en/
# new_page_name is the MkDocs page directory name under /en/
#
# This covers every URL reported as 404 in Google Search Console
# plus common variations that might appear in the future.
# -----------------------------------------------------------------------

# nameMap from redirects.js - maps lowercase old name -> correct new page name
NAME_MAP = {
    # Case differences
    'AccessingInforouter': 'AccessingInfoRouter',
    'HowToCreateCustomPropertySets': 'HowtoCreateCustomPropertySets',

    # Renamed pages
    'PortalsIntro': 'Portals',
    'CreatingPortals': 'PortalAdministration',
    'CustomizingPortals': 'PortalAdministration',
    'PortalAdmins': 'PortalAdministration',
    'VersionControl': 'DocumentVersions',
    'DocumentTypes': 'CreatingDocumentTypes',
    'CopyMoveDocuments': 'CopyingDocuments',
    'DownloadQueue': 'Documents',
    'Downloadqueue': 'Documents',
    'EmailDocuments': 'Notifications',
    'FolderRules': 'FolderProperties',
    'CompactFolder': 'FolderProperties',
    'DeletingFormTemplates': 'FormTemplates',
    'UsingSavedSearches': 'CreatingSavedSearches',
    'AuditLog': 'AuditLogControlPanel',
    'DeleteFolder': 'DeletingFolders',

    # Pages that don't exist on new site at all
    'FolderPrompts': 'FolderProperties',
    'HowtoCreateDocuments': 'UploadingDocuments',
    'Thumbnails': 'Documents',
    'CompletingDocuments': 'Documents',
    'Folders': 'CreatingFolders',
    'SendTo': 'Documents',
    'URLs': 'Documents',
    'CreatingDocuments': 'UploadingDocuments',
}

# Pages where old name == new name (just need extension stripped).
# These pages exist on the new site at /en/PageName/
DIRECT_PAGES = [
    'AddingLibraryMembers', 'LocalUserGroups', 'ManageRecycleBin',
    'FolderRetention', 'Users', 'CreatingCategories',
    'SubscriptionNotifications', 'TransferOwnership', 'ArchiveIntro',
    'LibraryPolicies', 'AccessingInfoRouter', 'Disposition',
    'EmailSettings', 'ScanStation', 'Subscribing', 'HotFolders',
    'DeletingLibraries', 'EditingDocuments', 'CategoryAdministrators',
    'MimeTypes', 'ViewDocument', 'AuditManagers',
    'EditingCustomPropertySets', 'Modules', 'PolicyManagers',
    'DocumentComments', 'PersonalDashboard', 'Administrators-User-Group',
    'MenuFilter', 'CustomPropertyIntro', 'MovingFolders',
    'Workflow-Reports', 'CommentNotifications', 'TasksIntro',
    'WorkflowsIntro', 'DeletingUsers', 'RDSchedules',
    'AuthPassPolicies', 'HowtoCreateCustomPropertySets',
    'Unsubscribing', 'GettingStarted', 'Authentication',
    'LibraryMembers', 'IgnoredKeywords', 'Login', 'BasicConcepts',
    'CreatingFormTemplates', 'LoginLog',
]


def create_redirect_file(old_path, new_url):
    """Create an HTML redirect file at old_path pointing to new_url."""
    full_path = os.path.join(SITE_DIR, old_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)

    # Don't overwrite existing files (real content takes priority)
    if os.path.exists(full_path):
        return False

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(REDIRECT_TEMPLATE.format(url=new_url))
    return True


def main():
    if not os.path.isdir(SITE_DIR):
        print(f"Error: '{SITE_DIR}' directory not found. Run 'mkdocs build' first.")
        return

    created = 0
    skipped = 0

    # Build complete redirect list
    redirects = []

    # 1. Pages with name changes
    for old_name, new_name in NAME_MAP.items():
        target = f"/en/{new_name}/"
        for ext in ['.aspx', '.htm']:
            redirects.append((f"en/{old_name}{ext}", target))

    # 2. Direct pages (same name, just strip extension)
    for name in DIRECT_PAGES:
        target = f"/en/{name}/"
        for ext in ['.aspx', '.htm']:
            redirects.append((f"en/{name}{ext}", target))

    # 3. Special pages
    redirects.append(("en/popup.htm", "/en/DocumentVersions/"))
    redirects.append(("en/index.htm", "/"))

    # Create all redirect files
    for old_path, target in redirects:
        if create_redirect_file(old_path, target):
            created += 1
        else:
            skipped += 1

    print(f"Redirect files created: {created}")
    print(f"Skipped (file exists): {skipped}")
    print(f"Total processed: {created + skipped}")


if __name__ == "__main__":
    main()
