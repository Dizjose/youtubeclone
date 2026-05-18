# Clon de YouTube

Aplicación web responsive inspirada en YouTube, desarrollada con **HTML, CSS y JavaScript Vanilla**, enfocada en una arquitectura limpia, estructura modular del código y separación de componentes de interfaz.

Este proyecto fue creado como práctica para mejorar habilidades de frontend, manipulación del DOM y organización del código utilizando ES Modules.

---

## Características

- 🎥 Grilla de videos renderizada dinámicamente desde datos en JavaScript
- 📱 Diseño completamente responsive (desktop y móvil)
- 📂 Arquitectura modular en JavaScript (ES Modules)
- 🎛 Sidebar con funcionalidad de abrir/cerrar
- 🔍 Sistema de categorías con interacción de UI
- ⚡ Helpers reutilizables para manipulación del DOM
- 🎨 Interfaz moderna en modo oscuro inspirada en YouTube
- 🧩 Estructura basada en componentes (video cards, sidebar, tabs)

---

## Arquitectura del Proyecto

El proyecto está organizado utilizando un enfoque modular:

- **data/** → Datos estáticos (lista de videos)
- **components/** → Componentes de interfaz reutilizables (video cards)
- **modules/** → Lógica de la aplicación (sidebar, responsive, tabs)
- **utils/** → Funciones auxiliares reutilizables (atajos para el DOM)
- **main.js** → Punto de entrada principal de la aplicación

---

## Cómo Funciona

1. `main.js` inicializa la aplicación cuando ocurre `DOMContentLoaded`
2. Los datos de videos se importan desde `data/videos.js`
3. Las tarjetas de video se renderizan dinámicamente en el DOM
4. Los módulos de UI manejan:
   - Apertura/cierre del sidebar
   - Comportamiento responsive
   - Interacción de tabs/categorías

---

## Diseño Responsive

La interfaz se adapta automáticamente a diferentes tamaños de pantalla:

- Desktop: Sidebar visible por defecto
- Mobile: Sidebar colapsable
- La grilla se ajusta automáticamente utilizando CSS Grid

---

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox + Grid)
- JavaScript Vanilla (ES Modules)
- Font Awesome (íconos)
- Google Fonts (Roboto)

---

## Objetivo del Proyecto

Este proyecto fue desarrollado para practicar:

- Arquitectura modular en JavaScript
- Manipulación del DOM
- Desarrollo de interfaces basadas en componentes
- Organización limpia del código
- Técnicas de diseño responsive


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# YouTube Clone

A responsive YouTube-like web application built with **HTML, CSS and Vanilla JavaScript**, focusing on clean architecture, modular code structure and UI component separation.

This project was created as a practice to improve frontend skills, DOM manipulation, and code organization using ES Modules.

---

## Features

- Video grid dynamically rendered from JS data
- Fully responsive layout (desktop & mobile)
- Modular JavaScript architecture (ES Modules)
- Sidebar with toggle functionality
- Category tabs system (UI interaction)
- Clean and reusable DOM helpers
- Modern dark UI inspired by YouTube
- Component-based structure (video cards, sidebar, tabs)

---

## Architecture Overview

The project is structured using a **modular approach**:

- **data/** → Static data (videos list)
- **components/** → UI building blocks (video cards)
- **modules/** → Application logic (sidebar, resize, tabs)
- **utils/** → Reusable helper functions (DOM shortcuts)
- **main.js** → Application entry point (initialization)

---

## How It Works

1. `main.js` initializes the app on DOMContentLoaded
2. Video data is imported from `data/videos.js`
3. Video cards are dynamically rendered into the DOM
4. UI modules handle:
   - Sidebar toggle
   - Responsive behavior
   - Tabs interaction

---

## Responsive Design

The layout adapts to different screen sizes:

- Desktop: Sidebar visible by default
- Mobile: Sidebar collapsible
- Grid adjusts automatically using CSS Grid

---

## Tech Stack

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (ES Modules)
- Font Awesome (icons)
- Google Fonts (Roboto)

---

## Purpose of the Project

This project was built to practice:

- Modular JavaScript architecture
- DOM manipulation
- Component-based UI thinking
- Clean code organization
- Responsive design techniques