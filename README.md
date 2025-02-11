# React Bootstrap Box

A versatile React component designed to apply Bootstrap utility classnames based on provided props.

## License
Licensed under MIT. Totally free for private or commercial projects.

## Getting Started

To install this package use npm:

```bash
npm install bootstrap react-bootstrap-box
```

## Usage

### Including Bootstrap CSS

First, ensure Bootstrap CSS is included in your project:

```tsx
// index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Using the Box Component

In your App.tsx, or any other component, the Box component can be used:

```tsx
// App.tsx
import React from 'react';
import { Box } from 'react-bootstrap-box';

function App() {
    return (
        <Box bg="primary" color="white" m="2" p="5">
            Hello, world!
        </Box>
    );
}

export default App;
```

## Local Development

For local development, use Yalc to install this package in your project.

Yalc is a tool for managing local development of npm packages. It allows you to work on this package locally and test it in other projects without publishing to the npm registry.

To use yalc, you need to install it globally on your machine. You can do this using npm:

```bash
npm install yalc -g
```

### Installing the Package with Yalc

First, navigate to the project directory where you want to use this package and run:

```bash
yalc add react-bootstrap-box
```

This will install the package from the local Yalc store. You can now use it in the project as you would with any other npm package.

### Updating the Package with Yalc

After publishing changes to this package to the local Yalc store, navigate to the project directory and run:

```bash
yalc update react-bootstrap-box
```

This will update the installed version of this package in the project.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds production files in your `dist/` folder. It generates CommonJS, ES Modules, as well as TypeScript declaration files.

### `npm run build:cjs`

Builds CommonJS (CJS) modules for the project.

### `npm run build:esm`

Builds ES Modules (ESM) for the project.

### `npm run build:types`

Generates TypeScript declaration files.

### `npm run clean`

Removes the `dist/` folder to ensure a clean build.

### `npm run format`

Formats the code using Prettier according to the rules defined in package.json.

### `npm run storybook`

Runs the Storybook component explorer. Open http://localhost:6006 to view it in the browser.

### `npm run build:storybook`

Builds Storybook as a static web application. Useful for deploying to a static hosting service or sharing with others.

### `npm run test`

Runs the test suite for the project using Jest.

### `npm run test:watch`

Runs the test suite in watch mode, re-running tests when files change.

### `npm run test:coverage`

Runs the test suite and generates a coverage report.

### `npm run yalc:publish`

Publishes the package to the local Yalc store for local development.

### `npm run yalc:push`

Publishes updates to the package in the local Yalc store and pushes the changes to linked projects.
