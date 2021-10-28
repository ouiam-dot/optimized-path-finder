## Demo: [visit app](https://optimized-path-finder-1a74f.web.app/)
![Demo](demo/demo.gif)

## Overview
The aim of this web application is to:
- Find the shortest path between two squares/points in a grid.
- Find the least number of turns on a path.
- Avoid walls(Non walkable squares/points) on a path.
- Visualize all paths.

## Quick start

In the project directory, you can run:

```bash
npm install 
```
Then: 
```bash
npm start
```
## How it works
![stack](demo/stackkk.jpg)

The application is:

1. boostraped with [Create React App](https://github.com/facebook/create-react-app).

2. automately deployed and hosted to Firebase hosting: CI/CD (Continuous Integration/ Continuous Deployment) pipeline using GitHub actions.

3. calling the path finder algorithm through firebase cloud functions.

<script src="https://gist.github.com/ouiam-dot/b93a2fac701dfe70bb9cbc821ae2c72f"></script>


