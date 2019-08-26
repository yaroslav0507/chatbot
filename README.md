#### - Development

`npm run dev` - start dev-server with hot-reload (ts-loader)

`npm run dev:dashboard` - start dev-server with `webpack-dashboard`

#### - Type checking

`npm run tsc` - entire project type-check

`npm run tsc:watch` - fast incremental type-checking in watch mode

#### - Production Bundling (`dist/` folder)

`npm run clean` - clean dist

`npm run build` - build dist bundle

#### - Install http-server globally to test production build

`npm install http-server -g` 

`http-server ./dist` - to serve the dist folder

#### - Utility & Git Hooks

`npm run reinstall` - reinstall all dependencies (useful when switching branch) (note: use `reinstall:win` on Windows)

`npm run lint` - run linter (tslint)

`npm run precommit` - pre commit git hook - linter

`npm run prepush` - pre push git hook - linter, tests and check types

#### - Deployment

~~`npm run deploy` - commit and push all changes found in `/dist` folder to "gh-pages" branch~~

---
