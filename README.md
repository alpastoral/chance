# Chance

Static site for [Chance](https://www.figma.com/design/GHNGTgKidUwgi6MU881a3j/Chance) — built from the Figma frame and hosted on GitHub Pages.

Live at **https://alpastoral.github.io** once Pages is enabled.

## Local preview

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Fonts (trial)

The site uses trial font files in `assets/fonts/`:

| Role | File |
|------|------|
| Display (`CHANCE`, `archive`) | `ABCAsfalt-CondensedRegular-Trial.otf` |
| Body / nav | `SansPlomb_TRIAL-CondensedLight.otf` |
| Bold emphasis | `SansPlomb_TRIAL-CondensedBold.otf` |
| Quote | `CordierScript-Linked-Trial.otf` |

**Before making the repo public:** confirm each foundry’s trial EULA allows web embedding and redistribution. When you purchase licenses, replace the files in `assets/fonts/` and update `@font-face` rules in `styles.css` if filenames change.

## GitHub Pages

The site is committed locally at `~/Projects/jasonjudechan.github.io` on branch `main`. To publish:

### 1. Create the repo (one time)

On GitHub, create a **public** repository named exactly **`alpastoral.github.io`** under the **alpastoral** account. Do not initialize with a README (this folder already has one).

### 2. Push

```bash
cd ~/Projects/jasonjudechan.github.io
git remote set-url origin https://github.com/alpastoral/alpastoral.github.io.git
git push -u origin main
```

If prompted, sign in with GitHub (HTTPS) or configure an SSH key for `git@github.com:alpastoral/alpastoral.github.io.git`.

### 3. Enable Pages

Repo → **Settings** → **Pages** → Source: **Deploy from branch** → `main` / `/ (root)`.

Wait a few minutes for **https://alpastoral.github.io** to go live.

## Custom domain (Namecheap)

When your vanity domain is ready:

1. **GitHub:** Settings → Pages → **Custom domain** → enter your domain → save → enable **Enforce HTTPS**.
2. Add a `CNAME` file at the repo root with your domain (e.g. `chance.example.com` or `www.chance.example.com`).
3. **Namecheap DNS:**
   - **Subdomain** (`www` or `@` via CNAME where supported): CNAME → `alpastoral.github.io`
   - **Apex** (`@`): A records to GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or redirect apex → `www` via Namecheap URL Redirect.

DNS can take up to 24–48 hours to propagate.

## Structure

```
index.html          Page markup
styles.css          Layout and typography
assets/fonts/       Trial webfonts
assets/images/      Figma-exported artwork and glyphs
```
