# How to Access infoRouter

Accessing the infoRouter Document Management System is simple - just open your web browser and navigate to the URL provided by your administrator.

## URL Formats

The infoRouter URL typically follows one of these formats:

| Format | Example |
|--------|---------|
| Virtual Directory | `http://servername/infoRouter` |
| Dedicated Website | `http://inforouter.yourcompany.com` |
| Custom DNS | `http://documents` or `http://dms` |

!!! tip "Don't know your URL?"
    Contact your system administrator to get the correct URL for your organization's infoRouter installation.

## Installation Types

### Virtual Directory Installation

If infoRouter was installed as a **virtual directory**, the URL consists of:

- **Server name** - The name of the web server hosting infoRouter
- **Virtual directory** - Usually `infoRouter` (the default name)

**Example:** `http://myserver/infoRouter`

### Dedicated Website Installation

Your administrator may have configured infoRouter as a **dedicated website** with its own domain or subdomain.

**Examples:**
- `http://inforouter.acme.com`
- `https://documents.yourcompany.com`
- `http://dms.internal.local`

## Accessing infoRouter

1. Open your web browser (Chrome, Firefox, Edge, or Safari recommended)
2. Type the infoRouter URL in the address bar
3. Press ++enter++

You will be greeted by the **default portal** page.

## Logging In

To access documents and folders, you must authenticate:

1. Click the **"Member Login"** link on the portal page
2. Enter your **username** and **password**
3. Click **"Login"**

!!! info "Authentication Methods"
    Depending on your organization's configuration, you may authenticate using:

    - **infoRouter credentials** - Username and password created in infoRouter
    - **Windows/LDAP authentication** - Your network domain credentials

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Page not found | Verify the URL with your administrator |
| Cannot connect | Check your network connection |
| Login failed | Verify your username and password |
| Account locked | Contact your administrator |

## See Also

- [How to Login](Login.md)
- [The infoRouter Work Area](WorkArea.md)
- [User Authentication](Authentication.md)
