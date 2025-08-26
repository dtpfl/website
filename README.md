# SoulsSpeedruns Wiki

<p align="center">
  <img src="src/images/SoulsSpeedrunsLogo.png" alt="SoulsSpeedruns Logo" width="200">
</p>

## 📚 Where to Find Your Documentation

**For non-technical users:** All the content that appears on your website is stored in the **[`src/content/docs`](/src/content/docs)** folder. Think of this as your website's "content library" - when you want to add new information, edit existing guides, or update any text on your site, you'll work with files in this folder.

- **`src/content/docs`** = This is where all your website's text, guides, and information lives
- When you edit files here, your website automatically updates
- This is the main place you'll need to know about if you want to manage your website's content

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
