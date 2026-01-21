# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a microfrontends architecture demonstration using React, Tailwind CSS, and Webpack Module Federation. The project demonstrates runtime integration of multiple independent React applications that can be developed, deployed, and run separately.

## Development Commands

**Start all applications:**
```bash
npm run dev
```
This starts all three applications concurrently:
- Host: http://localhost:3000
- Header remote: http://localhost:3001
- Content remote: http://localhost:3002

**Start individual applications:**
```bash
npm run dev:host      # Start only host app (port 3000)
npm run dev:header    # Start only header app (port 3001)
npm run dev:content   # Start only content app (port 3002)
```

**Install dependencies:**
```bash
npm install           # Installs for all workspaces
```

**Build for production:**
```bash
npm run build --workspace=host
npm run build --workspace=header
npm run build --workspace=content
```

## Architecture

### Microfrontend Structure

The project uses **Webpack Module Federation** for runtime code sharing. There are three independent applications:

1. **Host Application** (`/host`, port 3000)
   - Container application that orchestrates microfrontends
   - Consumes remote components from header and content apps
   - Does not expose any components

2. **Header Remote** (`/header`, port 3001)
   - Exposes: `Header` component via `./Header`
   - Provides navigation and branding
   - Can run standalone or be consumed by host

3. **Content Remote** (`/content`, port 3002)
   - Exposes: `ContentCard` component via `./ContentCard`
   - Provides reusable card components
   - Can run standalone or be consumed by host

### Module Federation Configuration

**Host consumes remotes:**
```javascript
remotes: {
  header: 'header@http://localhost:3001/remoteEntry.js',
  content: 'content@http://localhost:3002/remoteEntry.js',
}
```

**Remotes expose components:**
- Header exposes: `'./Header': './src/components/Header'`
- Content exposes: `'./ContentCard': './src/components/ContentCard'`

**Shared dependencies:**
- React and ReactDOM are shared as singletons across all apps
- Prevents duplicate React instances
- Ensures consistent state management

### Key Technical Patterns

**Async Boundary Pattern:**
Each app uses `index.js` → `bootstrap.js` pattern to handle async chunk loading required by Module Federation.

**Dynamic Imports:**
Host uses `React.lazy()` and `Suspense` to load remote components:
```javascript
const Header = lazy(() => import('header/Header'));
const ContentCard = lazy(() => import('content/ContentCard'));
```

**Independent Development:**
- Each microfrontend has its own webpack config, dev server, and dependencies
- Changes hot-reload independently
- Can be developed without running other apps

## Tech Stack

- **React 18**: UI framework
- **Webpack 5**: Build tool with Module Federation plugin
- **Tailwind CSS**: Utility-first CSS framework
- **Babel**: JSX transformation
- **npm workspaces**: Monorepo management

## File Structure

```
interns/
├── package.json                 # Root workspace config
├── host/                        # Container application
│   ├── src/
│   │   ├── index.js            # Entry point (imports bootstrap)
│   │   ├── bootstrap.js        # Actual React mount point
│   │   ├── App.jsx             # Main app component
│   │   └── index.css           # Tailwind directives
│   ├── webpack.config.js       # Module Federation + remotes config
│   └── tailwind.config.js
├── header/                      # Header microfrontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx      # Exposed component
│   │   ├── index.js
│   │   ├── bootstrap.js
│   │   └── App.jsx             # Standalone app
│   └── webpack.config.js       # Exposes Header component
└── content/                     # Content microfrontend
    ├── src/
    │   ├── components/
    │   │   └── ContentCard.jsx # Exposed component
    │   ├── index.js
    │   ├── bootstrap.js
    │   └── App.jsx             # Standalone app
    └── webpack.config.js       # Exposes ContentCard component
```

## Adding New Microfrontends

To add a new microfrontend:

1. Create new directory in root (e.g., `/footer`)
2. Add to workspaces in root `package.json`
3. Create `package.json` with dependencies
4. Create `webpack.config.js` with ModuleFederationPlugin:
   - Set unique `name` and `port`
   - Configure `exposes` for shared components
   - Add to `shared` dependencies (React, ReactDOM)
5. Set up Tailwind and PostCSS configs
6. Create React app structure with bootstrap pattern
7. Add remote to host's webpack config:
   ```javascript
   remotes: {
     footer: 'footer@http://localhost:3003/remoteEntry.js',
   }
   ```
8. Import and use in host app with `React.lazy()`

## Modifying Exposed Components

When modifying components in `header/src/components/Header.jsx` or `content/src/components/ContentCard.jsx`:
- Changes are hot-reloaded automatically
- Host app will reflect changes immediately (if dev server is running)
- Each remote can also be tested standalone on its own port
