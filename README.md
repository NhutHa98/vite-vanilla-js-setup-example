# 🚀 Vite Project

A modern frontend development setup using **Vite** with vanilla JavaScript and Sass support.

[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-1.89.2-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

## 📋 Table of Contents

- [🚀 Vite Project](#-vite-project)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠️ Prerequisites](#️-prerequisites)
  - [🚀 Getting Started](#-getting-started)
  - [📁 Project Structure](#-project-structure)
  - [🔧 Scripts](#-scripts)
  - [🌊 Spring Boot Integration](#-spring-boot-integration)
    - [1. 🔧 Create a ViteHelper Bean](#1--create-a-vitehelper-bean)
    - [2. 🌐 Use in Thymeleaf Templates](#2--use-in-thymeleaf-templates)
    - [🎯 Benefits of This Setup](#-benefits-of-this-setup)
  - [🤝 Contributing](#-contributing)

## ✨ Features

- ⚡ **Lightning Fast** - Powered by Vite for instant HMR
- 🎨 **Sass Support** - Write beautiful styles with Sass/SCSS
- 📦 **ES Modules** - Modern JavaScript module system
- 🔥 **Hot Module Replacement** - See changes instantly
- 🏗️ **Optimized Build** - Production-ready builds with tree-shaking

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view your application.

## 📁 Project Structure

```
vite-project/
├── 📄 index.html          # Main HTML entry point
├── 📦 package.json        # Project dependencies
├── ⚙️ vite.config.js      # Vite configuration
├── 📁 public/             # Static assets
│   └── vite.svg
├── 📁 src/                # Source code
│   ├── 📄 main.js         # Main JavaScript entry
│   ├── 🎨 style.css       # Global styles
│   ├── 📁 assets/         # Asset files
│   ├── 📁 bundle/         # Bundled components
│   ├── 📁 components/     # UI components
│   └── 📁 styles/         # Style files
└── 📁 build/              # Built files (generated)
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🔥 Start development server with HMR |
| `npm run build` | 📦 Build for production |
| `npm run preview` | 👀 Preview production build locally |

## 🌊 Spring Boot Integration

For seamless integration with Spring Boot applications, use the ViteHelper utility:

### 1. 🔧 Create a ViteHelper Bean

```java
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component("vite")
public class ViteHelper {
    
    private final Environment env;
    
    public ViteHelper(Environment env) {
        this.env = env;
    }
    
    public String url(String path) {
        if (env.acceptsProfiles("dev")) {
            // Development: Proxy to Vite dev server
            return "http://localhost:5173/" + path;
        } else {
            // Production: Serve from built assets
            return "/" + path;
        }
    }
}
```

### 2. 🌐 Use in Thymeleaf Templates

```html
<!-- Include your main JavaScript module -->
<script type="module" th:src="${@vite.url('src/main.js')}"></script>

<!-- Include stylesheets -->
<link rel="stylesheet" th:href="${@vite.url('src/style.css')}">
```

### 🎯 Benefits of This Setup

- **🔄 Hot Reloading** in development
- **📦 Optimized Bundles** in production  
- **🔀 Seamless Environment Switching**
- **🏗️ No Build Step Required** in development

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">

**Made with ❤️ using [Vite](https://vitejs.dev/)**

</div>