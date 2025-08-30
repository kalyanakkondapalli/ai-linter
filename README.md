# AI-Powered Linter

An AI-enhanced linter for **Python** and **JavaScript**, providing both standard linting feedback and AI-powered suggestions with reasoning.

---

## Overview

- **Python**: Runs `pylint` and uses AI to suggest improvements and explanations.
- **JavaScript**: Runs `ESLint` and uses AI to provide contextual feedback.
- Optional: Can be integrated as an **ESLint plugin** for automatic AI suggestions during ESLint runs.
- AI suggestions require an **OpenAI API key**.

---

## Setup

### 1. OpenAI API Key

Set your OpenAI API key as an environment variable:

**Windows (PowerShell)**
```powershell
setx OPENAI_API_KEY "your_api_key_here"
```

**Linux/macOS**
```bash
export OPENAI_API_KEY="your_api_key_here"
```

---

## Python Usage (Local)

1. Navigate to the Python folder:
```bash
cd python
```

2. Install dependencies:
```bash
pip install -r requirements.txt
# If requirements.txt does not exist:
pip install pylint openai
```

3. Run the AI linter on a Python file:
```bash
python -m ai_linter.linter path/to/file.py
```

You’ll see **pylint output** and **AI suggestions with reasoning**.

---

## JavaScript Usage (Published on npm)

1. Install globally:
```bash
npm install -g ai-linter
```

2. Lint a JS file:
```bash
ai-linter path/to/file.js
```

3. Output includes:
- **ESLint results**
- **AI suggestions with explanations**

---

## Optional: ESLint Plugin for Automatic AI Feedback

If you want AI suggestions every time ESLint runs:

1. Install plugin locally (not published yet):
```bash
# From root of your repo
npm install ./js
```

2. Update `.eslintrc.js`:
```javascript
module.exports = {
    plugins: ["ai-linter"],
    rules: {
        "ai-linter/ai-suggest": "warn"
    }
};
```

3. Run ESLint:
```bash
npx eslint path/to/file.js
```

You’ll get both **ESLint warnings** and **AI-powered suggestions**.

---

## Development

- Clone the repository:
```bash
git clone <your-repo-url>
```

- Python:
```bash
cd python
pip install -r requirements.txt
python -m ai_linter.linter path/to/file.py
```

- JavaScript:
```bash
cd js
npm install
node bin/cli.js path/to/file.js
```

---

## Notes

- AI suggestions depend on your OpenAI API quota.
- Python linter is **local only** (not on PyPI yet).
- JS linter is **published on npm** for easy global installation.
- Plugin mode for ESLint is optional; otherwise, use `ai-linter` CLI directly.
