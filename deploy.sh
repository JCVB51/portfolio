#!/usr/bin/env bash
set -e

cd /srv/www/portfolio

echo "Pulling latest changes..."
git pull

echo "Installing dependencies..."
npm install

echo "Building Next.js app..."
npm run build

echo "Restarting portfolio service..."
sudo systemctl restart portfolio

echo "Reloading Caddy..."
sudo systemctl reload caddy

echo "Checking local Next.js..."
curl -I http://127.0.0.1:3000 | head -n 1

echo "Checking Caddy reverse proxy..."
curl -I http://localhost:8080 | head -n 1

echo "Portfolio deployed."
