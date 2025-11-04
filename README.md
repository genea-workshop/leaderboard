# GENEA Leaderboard

This project is a sleek, polished website for the GENEA Leaderboard, which ranks AI models that animate speaking 3D characters. It measures two key dimensions: motion realism and speech-gesture alignment.

The application is built with React, TypeScript, and Tailwind CSS, and uses Vite for local development and production builds.

## Local Development

For instructions on how to install dependencies, run the local development server, and build the project for production, please see **[build.md](./build.md)**.

## Deployment to GitHub Pages

You can easily deploy this static website to GitHub Pages for free.

### Step 1: Push Your Code

Commit and push all your project files (including the Vite configuration files) to the `main` branch of your GitHub repository.

### Step 2: Build the Project

Before deploying, you must create a production build.

1.  **Important:** Make sure you have correctly set the `base` path in `vite.config.ts` to match your repository name, as described in `build.md`.
2.  Run the build command locally:
    ```bash
    npm run build
    ```
    This will create a `dist` directory containing your website's static files.

### Step 3: Configure GitHub Pages

1.  In your GitHub repository, go to the **Settings** tab.
2.  In the left sidebar, click on **Pages**.
3.  Under the "Build and deployment" section, for the **Source**, select **Deploy from a branch**.
4.  Under "Branch", select your `main` branch and the `/dist` folder.
5.  Click **Save**.

### Step 4: Access Your Site

That's it! GitHub Pages will now deploy the contents of your `dist` folder. This process might take a few minutes.

Once it's live, you'll see the URL for your deployed website at the top of the Pages settings, typically in the format:

`https://<your-username>.github.io/<your-repository-name>/`

---
### Troubleshooting

**My deployed site is showing a 404 error or assets are not loading.**

This is almost always caused by an incorrect `base` path in `vite.config.ts`. Double-check that the `base` value is a string that starts and ends with a slash and exactly matches your repository name (e.g., `/my-cool-leaderboard/`). After fixing it, you must run `npm run build` again, commit, and push the updated `dist` folder to see the changes.