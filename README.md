# Nerfies Page Starter

This repo is a refactored version of the [Nerfies' Page](https://github.com/nerfies/nerfies.github.io), which feautres a MDX based writing website following the style of [Nerfies' Page](https://nerfies.github.io).

This README will guide you through setting up and deploying your site.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **pnpm**: Install via npm with the command:
  ```bash
  npm install -g pnpm
  ```

## Getting Started

### 1. Fork the Repository

First, fork the repository to your own GitHub account by clicking the "Fork" button on the repository page.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone <your-forked-repo-url>
cd <repository-name>
```

### 3. Install Dependencies

Use pnpm to install the necessary dependencies:

```bash
pnpm install
```

### 4. Modify Content

Edit the content of your site by modifying the `contents/index.mdx` file. This is where you'll write the main content for your academic paper website.

And for previewing your site locally, run the following command:

```bash
pnpm run develop
```

### 5. Configure the Site

Before deploying, make sure to update the `siteMetadata` and `pathPrefix` in `gatsby-config.mjs` to match your desired URL path:

```javascript
siteMetadata: {
  title: `Nerfies Page Stater`,
  siteUrl: `https://zivmax.github.io/nerfies-page-stater/`,
},
pathPrefix: `/nerfies-page-stater`,
```

### 6. Deploy the Site

To deploy the site, run the following command:

```bash
pnpm run deploy
```

This will build your site and push the generated files to the `pages` branch of your forked repository.

### 7. Set up the GitHub Pages Branch

Finally, set up the `pages` branch as the source for GitHub Pages in your repository settings:

1. Go to the repository settings.
2. Click the "Pages" in "Code and automation" section.
3. Select the `pages` branch as the source.
