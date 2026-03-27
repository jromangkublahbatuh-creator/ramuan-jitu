@echo off
REM Ramuan Jitu Anti Kacuak - Quick Start Setup (Windows)
REM Script ini memudahkan setup dan jalanin aplikasi

cls
echo.
echo 🎰 Ramuan Jitu Anti Kacuak - Setup (Windows)
echo ============================================
echo.

REM Check if Node.js installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Node.js tidak ditemukan. Install dari https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✓ Node.js terdeteksi: %NODE_VERSION%
echo ✓ npm terdeteksi: %NPM_VERSION%
echo.

REM Check if http-server installed globally
where http-server >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing http-server...
    call npm install -g http-server
)

REM Show menu
echo.
echo Pilih opsi:
echo 1) Start local server (port 8000)
echo 2) Start dengan auto-open browser
echo 3) Start dengan custom port
echo.
set /p choice="Pilih (1-3): "

if "%choice%"=="1" (
    cls
    echo.
    echo 🚀 Starting server pada http://localhost:8000...
    echo Browser akan otomatis membuka...
    echo.
    start http://localhost:8000/index.html
    timeout /t 2 /nobreak
    http-server -p 8000 --cors
)
if "%choice%"=="2" (
    cls
    echo.
    echo 🚀 Starting server dan buka browser...
    echo.
    start http://localhost:8000/index.html
    timeout /t 2 /nobreak
    http-server -p 8000 --cors
)
if "%choice%"=="3" (
    set /p port="Masukkan port (default 8000): "
    if "%port%"=="" set port=8000
    cls
    echo.
    echo 🚀 Starting server pada http://localhost:%port%...
    echo.
    start http://localhost:%port%/index.html
    timeout /t 2 /nobreak
    http-server -p %port% --cors
)

pause
