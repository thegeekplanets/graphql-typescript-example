# GraphQL TypeScript Example with TypeGraphQL and Apollo Server

This is a sample GraphQL server built using TypeScript, TypeGraphQL, and Apollo Server that demonstrates core GraphQL concepts such as queries, mutations, and field resolvers — all without a database. The project covers how to create types, input types, dynamic field resolvers, and provides scripts to build, develop, and run the application.


## Features

- Type-safe GraphQL schema using TypeGraphQL decorators
- Query all products and fetch one by ID
- Add and remove products with mutations
- Field resolver for dynamically computed fields (e.g., discounted price)
- Clean build output setup with TypeScript compiler
- Development mode with hot reload using `ts-node-dev`


## Prerequisites

- Node.js >= 16
- npm or yarn


## Available Commands

| Command          | Description                              |
|------------------|----------------------------------------|
| `npm run dev`    | Start server in dev mode with hot reload |
| `npm run build`  | Clean `/build` and compile TypeScript   |
| `npm start`      | Run the compiled production server      |
| `npm run clean`  | Remove `/build` directory                |


## Notes

- `discountedPrice` is dynamically computed at runtime via a field resolver.
- Keep your source files inside `/src` directory to match `tsconfig.json` settings.
- Ensure `reflect-metadata` is imported at the project entry point (usually `index.ts`).
- Adjust the Apollo Server URL and port if needed in `index.ts`.


Feel free to open issues or submit PRs for improvements!



