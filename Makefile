# Main Project Makefile - Web Application with NimsForest WebStack

# Include NimsForest Package Manager
include tools/nimsforestpm/MAKEFILE.nimsforestpm

# Include NimsForest WebStack
-include tools/nimsforestwebstack/Makefile.nimsforestwebstack

# Default target
.PHONY: help
help:
	@echo "=== Web Application with NimsForest WebStack ==="
	@echo ""
	@echo "Available commands:"
	@echo "  make help                    - Show this help message"
	@echo "  make serve                   - Start local development server"
	@echo "  make install-webstack        - Install NimsForest WebStack component"
	@echo "  make setup                   - Complete setup with webstack"
	@echo "  make init-webstack           - Initialize the webstack structure"
	@echo ""
	@echo "NimsForest Package Manager commands:"
	@echo "  make nimsforestpm-hello      - Check system compatibility"
	@echo "  make nimsforestpm-install    - Install NimsForest components"
	@echo ""
	@echo "NimsForest WebStack commands (if installed):"
	@echo "  make nimsforestwebstack-hello     - Analyze project status"
	@echo "  make nimsforestwebstack-setupenv  - Create .env configuration"
	@echo "  make nimsforestwebstack-init      - Initialize webstack"
	@echo "  make nimsforestwebstack-dev       - Start development environment"
	@echo ""

# Setup the webstack
.PHONY: setup
setup:
	@echo "=== Setting up NimsForest WebStack ==="
	@make install-webstack
	@echo "✓ Setup complete! The webstack is now integrated."

# Install webstack specifically
.PHONY: install-webstack
install-webstack:
	@echo "=== Installing NimsForest WebStack Component ==="
	@cd tools && git submodule add https://github.com/nimsforest/nimsforestwebstack.git nimsforestwebstack
	@echo "✓ WebStack component installed"
	@echo "Now run 'make nimsforestwebstack-init' to initialize"

# Initialize webstack
.PHONY: init-webstack
init-webstack:
	@echo "=== Initializing NimsForest WebStack ==="
	@echo "Setting up environment..."
	@export PROJECTDIR=$(shell pwd) && \
	cd tools/nimsforestwebstack && \
	make nimsforestwebstack-setupenv && \
	make nimsforestwebstack-hello && \
	make nimsforestwebstack-init
	@echo "✓ WebStack initialized successfully!"
	@echo "Run 'make nimsforestwebstack-dev' to start development environment"

# Local development server
.PHONY: serve
serve:
	@echo "=== Starting Local Development Server ==="
	@if command -v python3 >/dev/null 2>&1; then \
		echo "Starting server on http://localhost:8000"; \
		python3 -m http.server 8000; \
	elif command -v python >/dev/null 2>&1; then \
		echo "Starting server on http://localhost:8000"; \
		python -m SimpleHTTPServer 8000; \
	else \
		echo "Error: Python not found. Please install Python to run the development server."; \
		exit 1; \
	fi