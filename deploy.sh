#!/bin/bash

echo "🚀 MCP Website Deployment Script"
echo "================================="
echo ""

# Check if vite.config.js has been updated
if grep -q "'/mcp-group-m/'" vite.config.js; then
    echo "⚠️  WARNING: Please update vite.config.js with your repository name!"
    echo "   Current: base: '/mcp-group-m/'"
    echo "   Change to: base: '/your-repo-name/'"
    echo ""
    read -p "Have you updated vite.config.js? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Please update vite.config.js and run this script again."
        exit 1
    fi
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the site
echo "🔨 Building website..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "Your site will be available at:"
    echo "https://YOUR-USERNAME.github.io/your-repo-name/"
    echo ""
    echo "Note: It may take 2-3 minutes for GitHub Pages to update."
else
    echo "❌ Deployment failed! Check the error messages above."
    exit 1
fi
