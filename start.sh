#!/bin/bash

# Ramuan Jitu Anti Kacuak - Quick Start Setup
# Script ini memudahkan setup dan jalanin aplikasi

set -e

echo "🎰 Ramuan Jitu Anti Kacuak - Setup"
echo "===================================="
echo ""

# Check if running on Mac or Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
    OPEN_CMD="open"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OPEN_CMD="xdg-open"
else
    OPEN_CMD="start"
fi

# Check if Node/npm installed
if ! command -v node &> /dev/null; then
    echo "⚠️  Node.js tidak ditemukan. Install dari https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js terdeteksi: $(node --version)"
echo "✓ npm terdeteksi: $(npm --version)"
echo ""

# Check if http-server installed globally
if ! command -v http-server &> /dev/null; then
    echo "📦 Installing http-server..."
    npm install -g http-server
fi

# Minta input dari user
echo "Pilih opsi:"
echo "1) Start local server (port 8000)"
echo "2) Start dengan auto-open browser"
echo "3) Start dengan custom port"
echo ""
read -p "Pilih (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting server pada http://localhost:8000..."
        echo "Tekan Ctrl+C untuk stop"
        echo ""
        http-server -p 8000 --cors
        ;;
    2)
        echo ""
        echo "🚀 Starting server dan buka browser..."
        http-server -p 8000 --cors &
        sleep 2
        $OPEN_CMD http://localhost:8000/index.html
        wait
        ;;
    3)
        read -p "Masukkan port (default 8000): " port
        port=${port:-8000}
        echo ""
        echo "🚀 Starting server pada http://localhost:$port..."
        http-server -p $port --cors
        ;;
    *)
        echo "Pilihan tidak valid"
        exit 1
        ;;
esac
