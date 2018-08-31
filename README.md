## Project build basing on gulp, webpack for js (live reload enabled)

### 1. Project description

This project is a live reload builder for scss, pug, js.

### 2. How to install

* Clone git repository
* Install node.js, npm 5, gulp-cli, webpack
* All packages required are described in package.json file

### 3. Structure used in the project (you can change to yours as applicable)

#### dist - resulting files
* css
* js
* img

#### app - source files
* images
* scripts
* styles
* templates
* fonts

### 4. Content 

* Please feel free to use your own content

### 5. Available commands after installation
* npm i - install dependencies to your local folder
* gulp - run local server with life reload
* gulp build - build project to dist folder
* gulp clean - delete dist folder
* gulp styles - compile styles and minify css code, add auto-prefixes
* gulp scripts - check, compile, minify js code
* gulp templates - compile pug to html from src to dist
