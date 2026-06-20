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

echo "Checking status..."
systemctl status portfolio --no-pager

echo "Portfolio deployed."
