

# MadiroHack

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@madiro-hack/mylib`.

## Running Angular App

Run `npm start` to start frontend part. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
The code for angular can be found in apps/dday

## Running Backend API

Run `npx nx serve api` to start nestjs Api. Navigate to http://localhost:3000/api and make sure you can see the "hello world" message. The app will automatically reload if you change any of the source files.
The code for angular can be found in apps/api

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Further help for Nx

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

