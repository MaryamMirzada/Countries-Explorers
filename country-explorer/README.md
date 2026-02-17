# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🌍 React Countries Explorer

A **React** project that fetches country data from an **external API** and allows users to search for countries by name and filter them by continent. The project displays each country's **flag and name**.  

---

## Features

- Fetches country data from an **external API**  
- **Search input** for country names  
- **Filter select** for continents  
- Displays **country flag and name**  
- Built entirely with **React**  

---

## API Endpoints Used

The project fetches country data from the REST Countries API:

**Get all countries.**:
https://restcountries.com/v3.1/all

(Optional) You can also filter by continent or name via endpoints if needed:
https://restcountries.com/v3.1/region/{region}
https://restcountries.com/v3.1/name/{name}


## Screenshots

**Home Page:**  
![Home](./Screenshot/code.png)

**Search & Filter Results:**  
![Results](./Screenshot/result.png)