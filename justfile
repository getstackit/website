# Default recipe
default: help

# Setup the development environment (install dependencies)
setup: install
	@echo "✅ Setup complete! You can now run 'just dev' to start the development server."

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install

# Development server with hot reload
dev:
	@if [ ! -d node_modules ]; then \
		echo "⚠️  Dependencies not installed. Running 'just install' first..."; \
		just install; \
	fi
	npm run dev

# Build the website for production
build:
	@if [ ! -d node_modules ]; then \
		echo "⚠️  Dependencies not installed. Running 'just install' first..."; \
		just install; \
	fi
	npm run build

# Run the production server
run: build
	npm start

# Clean build artifacts
clean:
	rm -rf .next out node_modules/.cache

# Test the build (lint and type check)
test:
	@if [ ! -d node_modules ]; then \
		echo "⚠️  Dependencies not installed. Running 'just install' first..."; \
		just install; \
	fi
	npm run build

# Lint code
lint:
	@if [ ! -d node_modules ]; then \
		echo "⚠️  Dependencies not installed. Running 'just install' first..."; \
		just install; \
	fi
	npm run lint

# Format code
format:
	@if [ ! -d node_modules ]; then \
		echo "⚠️  Dependencies not installed. Running 'just install' first..."; \
		just install; \
	fi
	npm run lint -- --fix

# Deploy to static hosting (exports to 'out' directory)
export: build
	@echo "Static files exported to 'out' directory"

# Show help
help:
	@echo "Available commands:"
	@echo "  just setup     - Install dependencies (setup development environment)"
	@echo "  just install   - Install dependencies"
	@echo "  just dev       - Run development server with hot reload"
	@echo "  just build     - Build the website for production"
	@echo "  just run       - Build and run the production server"
	@echo "  just test      - Test the build (lint and type check)"
	@echo "  just lint      - Lint code"
	@echo "  just format    - Format code"
	@echo "  just clean     - Remove build artifacts"
	@echo "  just export    - Export static files for deployment"
