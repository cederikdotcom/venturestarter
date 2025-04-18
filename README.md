# VentureStarter

A simple tool that uses Claude to automatically generate GitHub project documentation scaffolding for new ventures.

## What is VentureStarter?

VentureStarter is a prompt template and instruction set for Claude that helps entrepreneurs quickly create standardized GitHub documentation for new venture projects. It's designed to handle the initial setup phase only, providing you with the core documentation files to get started.

## Getting Started

1. **Copy the prompt template** from `docs/prompt-template.md`
2. **Paste it into Claude** (works with Claude 3 models)
3. **Fill in your venture details** where indicated
4. **Copy the generated artifacts** to your GitHub repository structure

No installation, no dependencies, no maintenance - just a simple prompt to help you create consistent documentation for new ventures.

## Project Structure

VentureStarter creates the following files:

```
your-project/
├── README.md              # Developer instructions
├── docs/
│   ├── index.html         # Landing page for your venture
│   ├── salespitch.md      # Sales-focused document
│   ├── overview.md        # Marketing overview
│   ├── architecture.md    # Technical explanation
│   └── progress/
│       └── traction-update-[date].md  # Initial traction update
```

## Quick Launch with GitHub Pages

VentureStarter includes a landing page (`docs/index.html`) that you can quickly deploy using GitHub Pages. This gives you an instant website for your venture:

1. Go to your repository's Settings
2. Navigate to Pages under the Code and automation section
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" (or your default branch) and "/docs" folder
4. Click Save

Your venture's landing page will be live at `https://<username>.github.io/<repository-name>/` within minutes. This is a great way to quickly establish an online presence for your venture while you build out your main product.

## How It Works

1. **Fill in Your Venture Details**
   Answer a few questions about your new venture in our simple form.

2. **Generate Your Prompt**
   We'll create a specialized prompt for Claude AI based on your inputs.

3. **Paste into Claude**
   Copy the generated prompt and paste it into Claude to create your documentation.

4. **Copy to GitHub**
   Copy the artifacts Claude generates into your GitHub repository.

5. **Launch Your Site**
   Enable GitHub Pages to instantly launch your venture's landing page from the docs folder.

## How to Use

1. Create a new GitHub repository for your venture
2. Visit [Claude](https://claude.ai/) or use the Claude API
3. Use the prompt template from `docs/prompt-template.md`
4. Copy each generated artifact to the appropriate location in your repository

## What VentureStarter Is Not

VentureStarter is **deliberately minimal** and focused only on:
- Initial documentation setup
- Basic project structure
- Getting your GitHub project started quickly

It is **not**:
- A project management tool
- A development framework
- A continuous documentation system
- A replacement for proper product documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Inspired by the need for quick, consistent documentation when launching new ventures.
