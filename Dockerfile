# Ramuan Jitu Anti Kacuak - Docker Setup
# Build: docker build -t ramuan-jitu .
# Run: docker run -p 8000:8000 ramuan-jitu

FROM node:18-alpine

WORKDIR /app

# Copy aplikasi
COPY . .

# Install http-server globally
RUN npm install -g http-server

# Expose port
EXPOSE 8000

# Set environment untuk production
ENV NODE_ENV=production

# Start server
CMD ["http-server", "-p", "8000", "-g", "--cors"]
