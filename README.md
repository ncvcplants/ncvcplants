# Seed & Soil

A simple, no-install plant showcase. Arabic is the starting language; visitors can switch to English or dark mode. The homepage has animated, swipeable plant cards and a regular card list. Every plant has its own shareable page, photo gallery, seven information groups, and QR code.

## Preview the website

Open `index.html` in a browser to look around on your computer. Photos and QR images need an internet connection. For QR codes to work for other people, publish the website first and print the QR code from the live plant page.

## Edit the plants

The plant list is near the top of `app.js`, inside the `plants` list. Each entry has a short web address (`slug`), Arabic name, English display name, other common names, and seven fact fields:

- `commonNames`
- `scientificName`
- `family`
- `botanicalDescription`
- `geographicDistribution`
- `ecologyReproduction`
- `otherUses`

The requested plant names are already listed. Their fact fields are intentionally empty for now, so the page says that information has not been added yet instead of guessing. Add information you have checked, between the quotation marks after a field name. The small comments beside the list and page code explain what those parts do.

Each card opens a separate address such as `plants/index.html?plant=artaa`. The part after `plant=` matches that plant's `slug`. To add a plant, copy one line in the list, change its slug and names, and give it its own entry. Do not reuse another plant's slug.

The three displayed photos are general placeholders, not identified photos of these species. To use your own pictures, replace the `image` and `gallery` photo IDs in the plant list with full public image addresses beginning with `https://`. The `gallery` list controls the pictures on the plant's page.

To edit the site on GitHub, open the file, select the pencil-shaped **Edit** button, make your change, then use GitHub's **Commit changes** button to save it. If you are new to GitHub, ask someone to help you check the change before publishing it.

## Publish with GitHub Pages

The changes are kept on a separate branch, so they will not appear on the repository's main page until that branch is reviewed and merged into `main`. Nothing here merges it automatically.

After the changes are on `main`, open the repository's **Settings → Pages** page. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save. GitHub will show the website address when it is ready. Open a plant page on that live website, scan its QR code with a phone to check it, then save or print the code for the seed display.

Each QR code contains that plant's own page address, so it remains easy to label and share. The QR image is created by an online QR service and needs an internet connection.
