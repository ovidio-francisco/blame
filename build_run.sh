#!/bin/bash

# Stop the script if any command fails
set -e

# Navigate to frontend and build the React app
cd frontend
npm run build

# Copy build files to Spring Boot static directory
rm -rf ../backend/src/main/resources/static/*
cp -r build/* ../backend/src/main/resources/static/



# Navigate to backend and run the Spring Boot application
cd ../backend
mvn spring-boot:run
