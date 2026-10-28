# Yasaman Hajnorouzali — Academic Website

A simple, responsive academic homepage inspired by the reference website. It uses **plain HTML, CSS, and a little JavaScript**; no hosting subscription, build process, or external libraries are required.

## Preview locally

Open `index.html` in a browser. All styles, images, and scripts are included in this folder.

## Publish for free on GitHub Pages

1. Sign in to [GitHub](https://github.com/).
2. Create a **public** repository named `YOUR-GITHUB-USERNAME.github.io` (replace the placeholder with your *exact* GitHub username).
3. Upload **the contents of this folder** into the repository root, not the enclosing folder. The homepage should be `index.html` in the root.
4. Commit the files.
5. Go to **Settings → Pages → Build and deployment**. Set Source to **Deploy from a branch**, choose `main` and `/(root)`, then Save.
6. Open `https://YOUR-GITHUB-USERNAME.github.io/`. GitHub may need several minutes to publish.

This can also be published to a normal GitHub repository with a URL that includes the repository name. This design uses relative paths and works in either setup.

## Customize the site

**Your photo (important)**
- The current picture is an explicit `YH` illustration placeholder, **not a photo of you** and not the person in the screenshot.
- Place your own portrait in the `assets` directory, e.g. `assets/profile.jpg`.
- In `index.html`, search for `assets/profile-placeholder.svg`, replace with `assets/profile.jpg`, and change the `alt` text to `Portrait of Yasaman Hajnorouzali`.

**Your academic links**
- The LinkedIn profile and three publication DOI links were checked against public pages.
- The **Google Scholar** icon currently links to a Google Scholar *search for your name*, not to a verified scholar profile. Replace its `href` once you have your Google Scholar profile link.
- No GitHub account URL was assumed. Add a GitHub icon/link only when you know your username. You can copy the icon pattern in `.profile-links`.

**CV and privacy**
- `assets/Yasaman-Hajnorouzali-Public-CV.pdf` is a copy of the supplied CV with the phone number redacted. It is linked from the header profile icons and the **View CV** button.
- The original CV containing your phone number is **not** included in the website package. Review all personal details in the public CV before posting.
- Everything you publish to GitHub Pages is accessible to others on the internet.

**Text and visuals**
- Edit `index.html` for headings, summaries, projects, publication lists, and contact details.
- Adjust fonts, colors, spacing, and breakpoints in `styles.css`.
- Replace the conceptual article illustrations (`assets/paper-*.svg`) with your own figures or graphical abstracts if you have permission to use them.
- The third paper is labelled **2023**, matching the *Asian Journal of Control* published issue (volume 25), although it first appeared online in January 2022.

## Folder structure

```
index.html
styles.css
script.js
.nojekyll
README.md
assets/
  favicon.svg
  profile-placeholder.svg
  paper-curvature.svg
  paper-control.svg
  paper-hil.svg
  Yasaman-Hajnorouzali-Public-CV.pdf
```

## Notes

This is an independent design in the spirit of the example—not a copy of the reference site's source files or photo. There are no trackers, external JavaScript dependencies, or web fonts.
