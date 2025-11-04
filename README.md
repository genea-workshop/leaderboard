# 🧩 Setup Instructions for Local Development

## **Step 1: Install NVM (Node.js Version Manager)**

- **Windows:**  
  Download and run the [NVM for Windows installer](https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe).

- **macOS / Linux:**  
  Follow the instructions in the [official NVM repository](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

---

## **Step 2: Set Up Node.js and Install Dependencies**

```bash
nvm install 20.19.5
nvm use 20.19.5
npm install
```

---

## **Step 3: Launch the Local Development Server**
```
npm run dev
```

The development server will start, and any code changes will automatically trigger a live update in your browser.

## **Step 4: Deploy Changes to the Live Website**
Just commit and push your changes to the repository, and the website will be automatically updated by the configured Github Actions workflow.