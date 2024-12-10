# Project Setup Instructions

Follow these steps to set up and run this project on your device:

1. **Download or Clone the Repository**
   - Download the ZIP file of the project or clone it using the following command:
     ```bash
     git clone https://github.com/anand777sharma/ant_design_todo.git
     ```

2. **Navigate to the Project Directory**
   - Move into the project directory:
     ```bash
     cd <project_directory>
     ```

3. **Install Dependencies**
   - Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

4. **Run the Development Server**
   - Start the development server by running:
     ```bash
     npm run dev
     ```

5. **Access the Project**
   - Open your browser and go to the URL provided in the terminal (in my case `http://localhost:5173`).

You are now ready to use the project!
# ==========================================================================================================

**in this project the add taks api is working but the data is not showing as we are not manuplating the jasonplaceholder dumy backend**

# ===========================================================================================================


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
