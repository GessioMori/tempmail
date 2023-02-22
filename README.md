# TempMail

[GO TO APP](https://tempmail.gm5.tech/)

This repository contains the source code for the TempMail app. It is built using Vite, React and TypeScript.

## Features

- Customization with TailwindCSS and Phosphor Icons (mobile friendly);
- Client side store with Zustand;
- GraphQL queries and mutations with Apollo Client;
- Auto generated types and hooks with graphQL-codegen;

## Instalation

### Prerequisites

- Node.js (v16.19.0);
- yarn (v1.22.19)

1. Clone this repository;

```bash
git clone https://github.com/GessioMori/tempmail.git
```

2. Install the dependencies with:

```bash
cd tempmail
yarn
```

3. Generate the Apollo Client hooks and types with (there should be a `schema.graphql` file at ./src/graphql):

```bash
yarn codegen
```

4. Start the development server with:

```bash
yarn dev
```

5. Build the project with:

```bash
yarn build
```

## Environment variables

The following environment variables are required:

- `VITE_URI`: the URI of the API;

## Roadmap

- [x] Project setup;
- [x] Build main layout using TailwindCSS;
- [x] Client data store with Zustand;
- [x] Data fetching with Apollo Client;
- [x] Show desktop notifications;
- [ ] E2E tests with Vitest and React Testing Library;
- [ ] Allow multiple email addresses;
- [ ] Implement pagination

## Lighthouse Report

![Lighthouse report](./images/lighthouse.png)
