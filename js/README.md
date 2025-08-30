# AI-Powered JS Linter

Lint JavaScript files with AI-powered suggestions using ESLint and OpenAI.

## Installation

### From npm (global)
```bash
npm install -g ai-linter
```

### Usage
```bash
ai-linter path/to/file.js
```

The tool will show ESLint output and provide AI-powered suggestions with reasoning.

## Development
```bash
git clone <your-repo-url>
cd js
npm install
node bin/cli.js path/to/file.js
```

## Publishing to npm
1. Login to npm: `npm login`
2. Update `package.json` as needed.
3. Publish: `npm publish --access public`