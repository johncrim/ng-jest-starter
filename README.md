# Angular Jest Starter Project

This is an Angular starter project using Jest, with support for debugging Jest tests in 2 javascript debuggers: Visual Studio Code and Chrome Developer Tools.

This starter project contains a single library (`ui-lib`), and no angular apps. It contains both Karma tests (`*.karma-spec.ts`) and Jest tests (`*.spec.ts`), but no
Protractor or other e2e tests.

This project was created using `ng new`, then changes were made to use [`jest-preset-angular`](https://github.com/thymikee/jest-preset-angular); and changes were made to enable VS Code debugging and Chrome debugging. The git history for this project should show a minimal set of changes for adding this developer utility.

## Running Tests

Run Jest tests:

```sh
yarn test
```

Run Karma tests:

```sh
yarn karma
```

Run Karma tests in headless mode:

```sh
yarn karma:headless
```

## Debugging Jest tests in Visual Studio Code

1. In VS Code, set breakpoints in a test file or in Angular code - for example, you can add a breakpoint in `ui-lib.component.spec.ts` and/or `ui-lib.component.ts`.
2. Type `Ctrl+Shift+D` to view the Debug pane, then ensure that "Jest Current File" is selected in the launch configuration.
3. Open the test file you want to run (eg `ui-lib.component.spec.ts`)
3. Hit the F5 key to start debugging.
4. Wait for your breakpoint(s) to be hit.

## Troubleshooting Jest Debugging

Jest caches things aggressively, and while there seems to be some automatic cache invalidation it doesn't work in all cases - particularly changes to libraries or Jest configuration. Therefore, if changes don't seem to be picked up, run `yarn test --clearCache` to clear the Jest cache.

The other [Jest CLI parameters](https://jestjs.io/docs/en/cli.html) can be used when running `yarn test` - they are passed directly to jest. For example, you can use `yarn test --debug` to display information about your Jest configuration.

If your breakpoints aren't being hit, try adding a `debugger;` statement in the ts file where you want the debugger to break. This will trigger the debugger even if sourcemaps aren't working properly.

For other ideas, see [Jest's Troubleshooting page](https://jestjs.io/docs/en/22.0/troubleshooting).
