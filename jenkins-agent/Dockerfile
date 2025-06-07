FROM node:18-bullseye

# Install dependencies
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk curl unzip && \
    npm install -g allure-commandline && \
    npx playwright install --with-deps

# Set environment for Jenkins
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

WORKDIR /workspace
