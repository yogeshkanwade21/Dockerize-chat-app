# Using latest Node.js runtime as a parent image
FROM node:latest

# Setting the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that the app runs on
EXPOSE 4000

# Command to run the app (start script in package.json)
CMD ["npm", "run", "dev"]