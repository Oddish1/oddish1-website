# Oddish1.com

Welcome to the codebase for my new personal website, [oddish1.com](https://oddish1.com)! Moved from a static HTML/CSS site to a more dynamic site currently utilizing Node.js, Express.js, React.js, and PostgreSQL, all deployed via docker compose in a vps.

## Folder Structure

```
package.json --> declares project metadata, dependencies, scripts, configuration. used by npm to manage project
package-lock.json --> auto generated to lock exact versions of installed dependencies ensuring consisten installs (DO NOT EDIT MANUALLY)
public/ --> static assets (images, CSS, etc)
README.md --> the document you're reading right now!
routes/ --> express routers
utils/ --> utilites used throughout the app
views/ --> HTML
prisma/
.env --> environment variables
server.ts --> entry point
```

## Features

- Custom navigation bar with animated, styled buttons
- Dynamic theming wiht light/dark mode support
- Blog system (planned)
- Development tracking system (planned)
- Stopwatch/timer modal (planned)
- Instagram-like gallery system (planned)
- User login with commenting & like support built into the blog posts and gallery posts (planned)

## Environment Variables

Using environment variables is important to maintain security of your applications both in development and production. For this project I am using a `.env` file, in the repository there is an example file provided (`.env.example`) with the variables that are needed, you will just have to adjust the values. Below is what the example file looks like, just make sure to change the values and rename the file to `.env` before you run the dev server or build the docker image.

```
DATABASE_HOST=your-database-here
POSTGRES_USER=your-database-user-here
POSTGRES_PASSWORD=your-password-here
POSTGRES_DB=your-database-name-here
```

## Development Setup

I am not using currently using docker for development. You will need an existing database, just make sure your environment variables are set up correctly using a `.env` file as explained above. You will also need a database and user that already matches the ones you have listed in your `.env` file.

1. **Clone the repository:**
```bash
git clone https://github.com/Oddish1/oddish1-website.git
cd oddish1-website
```
2. **Install dependencies:**
```
npm install
```
3. **Set environment variables:**
Follow the instructions above in [[README#Environment Variables]] to set your environment variables correctly.
4. **Run the dev server:**
```
npm run dev
```
5. Visit `http://localhost:3000` to explore!

## Production Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Oddish1/oddish1-website.git
cd oddish1-website
```
2. **Set environment variables:**
Follow the instructions above in [[README#Environment Variables]] to set your environment variables correctly.
2. **Build the docker image:**
```bash
docker compose build --no-cache
```
3. **Start the Docker containers:**
```bash
docker compose up
```
You can also use the `-d` flag to run it in detached mode.

## Contributing

This is a personal creative project, but if you have feedback or ideas, feel free to open up an issue or fork it for inspiration!
