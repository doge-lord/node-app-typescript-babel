# Node app with Babel and Typescript

### NPM Scripts

| Command    | description                                                        |
| ---------- | ------------------------------------------------------------------ |
| build      | Transpile source code using Babel                                  |
| emit-type  | Emit type declarations for publishing                              |
| clean      | Cleans dist folder                                                 |
| start      | Builds the app and run dist/index.js                               |
| test       | Run tests using Jest                                               |
| format     | Formats code and fixes fixable lint error with Prettier and ESLint |
| lint       | Runs linter (ESLint)                                               |
| type-check | Runs type-checker (Typescript)                                     |

## Other Features

#### Absolute Imports

With a directory structure like this

```
src
 |-- entities
 |    |- entityA.ts
 |    `- entityB.ts
 |
 |-- controllers
 |    `- controllerA.ts
 |
 `-- index.ts
```

You may import entityA using absolute paths to avoid "../../" imports

```ts
import { EntityA } from "entities/entityA";

// Your code here
```

#### Prettier

#### ESLint

#### Testing with Jest
