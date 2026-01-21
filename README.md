# Microfrontends Example

A demonstration of microfrontend architecture using React and Webpack Module Federation. This project showcases how to build and integrate multiple independent frontend applications that work together seamlessly.

## 🏗️ Architecture

This repository contains three microfrontend applications:

- **Host** (Port 3000) - The container application that orchestrates and loads the remote microfrontends
- **Header** (Port 3001) - A remote microfrontend that exposes a Header component
- **Content** (Port 3002) - A remote microfrontend that exposes content components

The applications communicate using [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/), allowing them to share code and dependencies at runtime.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd microfrontends-example
```

### 2. Install Dependencies

Install all dependencies for the root project and all workspaces:

```bash
npm run install:all
```

Or simply:

```bash
npm install
```

This will install dependencies for all three microfrontend applications (host, header, and content) using npm workspaces.

### 3. Run the Applications

#### Option A: Run All Applications Concurrently (Recommended)

Start all three microfrontends simultaneously:

```bash
npm run dev
```

This command will start:
- Host application at [http://localhost:3000](http://localhost:3000)
- Header microfrontend at [http://localhost:3001](http://localhost:3001)
- Content microfrontend at [http://localhost:3002](http://localhost:3002)

#### Option B: Run Applications Individually

You can also run each application separately in different terminal windows:

**Terminal 1 - Host:**
```bash
npm run dev:host
```

**Terminal 2 - Header:**
```bash
npm run dev:header
```

**Terminal 3 - Content:**
```bash
npm run dev:content
```

### 4. Access the Application

Open your browser and navigate to:
- **Main Application**: [http://localhost:3000](http://localhost:3000)

The host application will automatically load the Header and Content microfrontends.

## 📦 Project Structure

```
microfrontends-example/
├── host/                    # Container application
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── components/
│   ├── public/
│   ├── webpack.config.js
│   └── package.json
├── header/                  # Header microfrontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── components/
│   │       └── Header.jsx
│   ├── public/
│   ├── webpack.config.js
│   └── package.json
├── content/                 # Content microfrontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── components/
│   │       └── ContentCard.jsx
│   ├── public/
│   ├── webpack.config.js
│   └── package.json
├── package.json            # Root package with workspace configuration
└── README.md
```

## 🛠️ Available Scripts

### Root Level Scripts

- `npm run dev` - Start all microfrontends concurrently
- `npm run dev:host` - Start only the host application
- `npm run dev:header` - Start only the header microfrontend
- `npm run dev:content` - Start only the content microfrontend
- `npm run install:all` - Install dependencies for all workspaces

### Individual Application Scripts

Each microfrontend (host, header, content) has its own scripts:

- `npm run start --workspace=<app-name>` - Start the development server
- `npm run build --workspace=<app-name>` - Build for production

## 🔧 Technology Stack

- **React** 18.2.0 - UI library
- **Webpack 5** - Module bundler with Module Federation
- **Babel** - JavaScript transpiler
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Webpack Dev Server** - Development server with hot reload

## 🌐 Port Configuration

| Application | Port | URL |
|------------|------|-----|
| Host | 3000 | http://localhost:3000 |
| Header | 3001 | http://localhost:3001 |
| Content | 3002 | http://localhost:3002 |

## 🔍 How Module Federation Works

The host application consumes remote modules from the header and content applications:

```javascript
// host/webpack.config.js
remotes: {
  header: 'header@http://localhost:3001/remoteEntry.js',
  content: 'content@http://localhost:3002/remoteEntry.js',
}
```

The header and content applications expose their components:

```javascript
// header/webpack.config.js
exposes: {
  './Header': './src/components/Header',
}
```

## 🐛 Troubleshooting

### Port Already in Use

If you encounter a "port already in use" error:

1. Stop any running instances of the applications
2. Check for processes using the ports: `lsof -i :3000` (or 3001, 3002)
3. Kill the process: `kill -9 <PID>`

### Module Federation Errors

If you see module federation errors:

1. Ensure all three applications are running
2. Clear browser cache and reload
3. Check that the ports in webpack.config.js match the running applications

### Dependencies Issues

If you encounter dependency issues:

```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf host/node_modules header/node_modules content/node_modules
npm install
```

## 📝 License

ISC

## 👤 Author

shivaprasad.ks@clear.in

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Note**: Make sure all three applications (host, header, and content) are running for the microfrontend architecture to work properly. The host application depends on the remote modules from header and content applications.
