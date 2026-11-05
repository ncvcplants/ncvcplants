# Seed & Soil

A small, no-install plant and seed showcase. The homepage has swipeable plant cards above the complete plant-card list, with search and type filters. Select a card to open its own page with a photo gallery, growing notes, and a QR code.

The site opens in Arabic and can be switched to English, including a right-to-left Arabic layout. Use the dark-mode button to change the colors. On the homepage, swipe through featured plant cards, then browse the full collection in a regular card list. Select a swipe card or a card in the list to open that plant's page.

## See the site

Open `index.html` in a web browser to preview the collection on your computer. The photos and QR code need an internet connection. A QR code uses the address of the page you opened, so use the code from the live website after publishing—not the preview on your computer.

## Put your plants on the site

The plant list and all the words on the plant pages live in `app.js`. Open that file in GitHub and choose the pencil icon to edit it. Each plant has a name, type, short description, photos, and four information groups. Replace the sample details with your own, then save your change.

To replace a sample plant, edit its entry in `app.js` and keep its `slug` the same. The `slug` is the short web address for its page; for example, the sunflower page is `plants/sunflower/`. To add a new plant, copy an existing entry and give it a new slug, then copy one of the folders in `plants/` and rename the copy to match. In the copied `index.html`, change the page title and the `data-plant` value to the new slug. If you would rather not do that setup yourself, you can start by replacing the four sample plants without changing their slugs.

Photo IDs in the sample list are from Unsplash. To use your own online photos, replace an `image` or `gallery` value with its full public image URL (one that starts with `https://`). Keep the list of `gallery` photos to show several pictures on the plant page.

## Publish it free with GitHub Pages

1. Sign in to GitHub and open this repository, `ncvcplants/ncvcplants`. The new site changes must be added to the `main` branch before visitors can see them; if they are still waiting in a proposed change, ask the person helping you to review and merge it first.
2. Select **Settings**, then **Pages** in the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**. Choose the `main` branch and the `/(root)` folder, then select **Save**.
4. Wait a minute or two. GitHub will show your website address on the Pages settings screen. It will look like `https://ncvcplants.github.io/ncvcplants/`.
5. Open that address on your phone to check it. Each plant has its own page, for example `https://ncvcplants.github.io/ncvcplants/plants/sunflower/`.

If GitHub asks to confirm or publish your changes, follow the on-screen prompts. Changes can take a short time to appear on the live site.

## Make QR labels for your seed display

After the site is live, open a plant's page on the website. Its QR code is shown beside the growing notes. Scan it with your phone to check that it opens the right page, then right-click the code on a computer (or press and hold on a phone) to save the image for printing on that seed's label. Each plant's code links directly to its own page, so visitors do not have to search the collection.

You do not need to install anything or know how to program to change plant names and descriptions. If you want to add more plants, ask someone to help with the one-time folder-copy step above.
