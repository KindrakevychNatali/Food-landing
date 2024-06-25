# **Food Landing**

## **Table of Contents**

- [**Description**](#description)
- [**Features**](#features)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Scripts**](#scripts)
- [**Dependencies**](#dependencies)
- [**DevDependencies**](#devdependencies)
- [**License**](#license)

## **Description**

This project is configured to use Webpack as the module bundler and Babel to transpile modern JavaScript for browser compatibility. It also includes a JSON server for API simulation during development.

## **Features**

- Webpack for module bundling
- Babel for JavaScript transpilation
- CSS and style loaders for styling
- JSON server for development API
- Polyfills for broader browser compatibility

## **Installation**

1. Clone the repository:
    ```sh
    git clone https://github.com/KindrakevychNatali/food-landing.git
    ```
2. Navigate to the project directory:
    ```sh
    cd food-landing
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## **Usage**

1. To build the project:
    ```sh
    npm run build
    ```
2. To start the JSON server:
    ```sh
    json-server --watch db.json
    ```

## **Scripts**

- `test`: Echoes an error message (placeholder for actual tests).
- `build`: Runs Webpack to bundle the project.

## **Dependencies**

- `@babel/polyfill`: ^7.12.1
- `es6-promise`: ^4.2.8
- `nodelist-foreach-polyfill`: ^1.2.0

## **DevDependencies**

- `@babel/cli`: ^7.21.0
- `@babel/core`: ^7.23.5
- `@babel/preset-env`: ^7.23.5
- `babel-loader`: ^9.1.3
- `core-js`: ^3.30.1
- `css-loader`: ^6.8.1
- `html-webpack-plugin`: ^5.5.4
- `json-server`: ^0.16.3
- `mini-css-extract-plugin`: ^2.7.6
- `style-loader`: ^3.3.3
- `webpack`: ^5.89.0
- `webpack-cli`: ^5.1.4

## **License**

This project is licensed under the ISC License.
