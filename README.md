# Seed & Soil

A simple, no-install plant showcase. Arabic is the starting language; visitors can switch to English or dark mode. The homepage has animated, swipeable plant cards and a regular card list. Each plant page shows its common name, scientific name, and family beside the photo, with four collapsible information groups and a QR code.

## Preview the website

Open `index.html` in a browser to look around on your computer. Photos and QR images need an internet connection. For QR codes to work for other people, publish the website first and print the QR code from the live plant page.

## Edit the plants

The plant list is near the top of `app.js`. Each entry has a short internal key, Arabic name, and English display name. Botanical names, families, source links, and identification notes are in the `plantTaxonomy` and `botanicalProfiles` objects farther down in the same file.

The information groups are `botanicalDescription`, `geographicDistribution`, `ecologyReproduction`, and `otherUses`. The scientific name is also used to make each plant's shareable page address, for example `plants/index.html?plant=calligonum-comosum`. Older short addresses still open and are updated to the scientific-name address.

GBIF links identify the taxonomy source; some records include accepted-name notes because scientific names and synonyms can differ between references. A few species identifications need checking against the seed labels, and only the Qassim Flora profiles with matching names have locally sourced descriptions at this time. Other unverified descriptions are left blank rather than guessed. When adding facts, use paraphrased wording and add a source link to the plant's profile.

To add a plant, copy one line in the list, give it a unique internal key and names, then add its scientific name and family to `plantTaxonomy`. Use a matching GBIF record ID for the source link; add any directly verified descriptions and regional source URL to `botanicalProfiles`.

The three displayed photos are general placeholders, not identified photos of these species. To use your own pictures, replace the `image` and `gallery` photo IDs in the plant list with full public image addresses beginning with `https://`. The `gallery` list controls the pictures on the plant's page.

To edit the site on GitHub, open the file, select the pencil-shaped **Edit** button, make your change, then use GitHub's **Commit changes** button to save it. If you are new to GitHub, ask someone to help you check the change before publishing it.

## Publish with GitHub Pages

The changes are kept on a separate branch, so they will not appear on the repository's main page until that branch is reviewed and merged into `main`. Nothing here merges it automatically.

After the changes are on `main`, open the repository's **Settings → Pages** page. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save. GitHub will show the website address when it is ready. Open a plant page on that live website, scan its QR code with a phone to check it, then save or print the code for the seed display.

Each QR code contains that plant's own page address, so it remains easy to label and share. The QR image is created by an online QR service and needs an internet connection.

The center logo files are in `assets/`. The dark-text image is used in light mode, and the white-text image is used in dark mode. The featured deck starts from a different plant when the page loads, then follows the plant list in order; hold and drag to move across several cards.
