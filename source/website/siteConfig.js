/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: "User1",
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: "https://static.wixstatic.com/media/fdf981_f83aa90bb02b4c239dc556818f978a89~mv2_d_3300_2624_s_4_2.png/v1/crop/x_176,y_498,w_2743,h_1613/fill/w_474,h_272,al_c,q_85,usm_0.66_1.00_0.01/fdf981_f83aa90bb02b4c239dc556818f978a89~mv2_d_3300_2624_s_4_2.webp",
        infoLink: "/",
        pinned: true
    }
];

const siteConfig = {
    title: "4541 Cavineers", // Title for your website.
    tagline: "Cav Standards",
    url: "https://cavineers.github.io", // Your website URL
    baseUrl: "/CavStandards/", // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: "cav-standards",
    organizationName: "4541 Cavineers",
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { page: "index", label: "Home" },
        { doc: "home", label: "Docs" },
        // { doc: "doc4", label: "API" },
        // { page: "help", label: "Help" },
        { blog: true, label: "Blog" }
    ],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    headerIcon: "img/logo.png",
    footerIcon: "img/logo.png",
    favicon: "img/logo.png",

    /* Colors for website */
    colors: {
        primaryColor: "#A60000",
        secondaryColor: "#3c0b13"
    },

    /* Custom fonts for website */
    /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} FRC Team 4541 Cavineers`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: "default"
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ["https://buttons.github.io/buttons.js"],

    // On page navigation for the current documentation page.
    onPageNav: "separate",
    // No .html extensions for paths.
    cleanUrl: false,

    // Open Graph and Twitter card images.
    ogImage: "img/undraw_online.svg",
    twitterImage: "img/undraw_tweetstorm.svg",

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    enableUpdateBy: true,

    // Show documentation's last update time.
    enableUpdateTime: true

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
