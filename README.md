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
│   ├── salespitch.md      # Sales-focused document
│   ├── overview.md        # Marketing overview
│   ├── architecture.md    # Technical explanation
│   └── progress/
│       └── traction-update-[date].md  # Initial traction update
```

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
