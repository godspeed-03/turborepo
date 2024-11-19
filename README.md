# Turborepo starter

This is a custom starter template for Turborepo with Tailwind css and shadcn UI.

| ![Turborepo](https://user-images.githubusercontent.com/4060187/106504110-82f58d00-6494-11eb-87b7-a16d4f68bc5a.png) |
|---------------------------------------------------------------------------------------------------------------|
| ![React](./Public/react.svg)  ![Next.js](./Public/next.svg)  ![shadcn](https://avatars.githubusercontent.com/u/139895814?s=100)  ![tailwind](https://avatars.githubusercontent.com/u/67109815?s=100) | 



## What is Truborepo ?

[Turborepo](https://turbo.build) is a high-performance monorepo build system designed to manage multiple projects within a single repository efficiently. It optimizes builds, testing, and deployments by leveraging caching, parallel processing, and incremental builds. Turborepo is especially useful for large-scale projects or teams working on interconnected codebases, ensuring consistency and faster development cycles.

![Turborepo](./Public/Turborepo-banner.png)

## To create an offical starter Turborepo

Run the following command:

```sh
npx create-turbo@latest myprojectname
#0R
pnpm dlx create-turbo@latest myprojectname
```

## To work with this custom template
Fork this repo and dont forget to star it ⭐.

```sh
git clone https://github.com/{your_user_name/{your_repo_name}.git
```
NOTE : THis repo used `pnpm` as package manager.

```sh
cd {your_repo_name}

pnpm install
```
### To run the devleopment server
```sh
pnpm dev
```
### To lint
```sh
pnpm lint
```
### To build
```sh
pnpm build
```



## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `shop`: another [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by all `web` `shop` and `docs` applications and contains `shadcn` packages
- `@repo/tailwind-config`: a tailwind configuration shared by all `web` `shop` `docs` and `ui` in package applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind](https://tailwindcss.com) for inline-classes
- [Shadcn](https://ui.shadcn.com) as UI components

### Tailwind configuration  `@repo/tailwind-config`
This folder contains all the tailwind configuration whcih can be used in any apps or workspace folder :

![demo-img](https://cdn.hashnode.com/res/hashnode/image/upload/v1732014148887/842ca7f9-91d8-49b6-b79e-35520ce3d476.png)

- `package.json` : A file for specification of the pakges and exports from the internal folder
- `globals.css` : Contains all the css for shadcn and Tailwind
- `style.tsx` : Import `globals.css` and export to be consumed by all workspaces
- `postcss.config.js` : contains all configuration of post css
- `tailwind.config.js` : contains all configuration of `Tailwind CSS` and `Shadcn UI`



#### How to import `postcss.config.js` and `tailwind.config.js` into any work space
First specify the package to be used into nay work spcae
- Go to `pakage.json` file
- Under `devDependencies` add

    ![pakage.json](https://cdn.hashnode.com/res/hashnode/image/upload/v1732018022122/4870cfe0-146f-422a-b952-61d582323882.png)

``` sh
"@repo/tailwind-config": "workspace:*"
```
- now add these files accordingly with the name give below

#### `postcss.config.js` 
``` cjs
/** @type {import('postcss-load-config').Config} */
module.exports = require("@repo/tailwind-config/postcssConfig")

```

![Tailwind-demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1732014719782/7c5bdf37-6582-44db-937b-71cbc8399de6.png)


#### `tailwind.config.js`
``` cjs
/** @type {import('tailwindcss').Config} */

const config = require("@repo/tailwind-config/tailwindConfig")


module.exports = {
    ...config,
    content : [
        "./app/**/*.tsx", //For app folder
        //or
        "./src/**/*.tsx" //For src folder
        "../../packages/ui/**/*.tsx", //for UI folder
    ]
}
```


### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd {your_repo_name}
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
