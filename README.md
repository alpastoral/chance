# Chance

Static site for [Chance](https://www.figma.com/design/GHNGTgKidUwgi6MU881a3j/Chance) — built from the Figma frame and hosted on GitHub Pages.

Live at **https://alpastoral.github.io**

## Local preview

Open `index.html` in a browser, or serve locally:

```bash
cd ~/Projects/Chance
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Fonts

The site uses licensed font files in `assets/fonts/`:

| Role | File |
|------|------|
| Display (`CHANCE`, `archive`) | `ABCAsfalt-CondensedRegular.otf` |
| Body / nav | `SansPlomb-CondensedLight.otf` |
| Bold emphasis | `SansPlomb-CondensedBold.otf` |
| Quote | `CordierScript-Linked.otf` |

## GitHub Pages

This project lives at **`~/Projects/Chance`**. It pushes to the GitHub User Pages repo **`alpastoral/alpastoral.github.io`** (that repo name is required for https://alpastoral.github.io).

```bash
cd ~/Projects/Chance
git push origin main
```

Enable Pages: repo → **Settings** → **Pages** → deploy from **`main`** / **root**.

## Custom domain (Namecheap)

When your vanity domain is ready:

1. **GitHub:** Settings → Pages → **Custom domain** → enter your domain → enable **Enforce HTTPS**.
2. Add a `CNAME` file at the repo root with your domain (e.g. `www.yourdomain.com`).
3. **Namecheap DNS:**
   - **Subdomain** (`www`): CNAME → `alpastoral.github.io`
   - **Apex** (`@`): A records to GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or redirect apex → `www` via Namecheap URL Redirect.

DNS can take up to 24–48 hours to propagate.

## Structure

```
Chance/
├── index.html
├── styles.css
├── assets/
│   ├── fonts/
│   └── images/
└── README.md
```
