# @rexovolt/revolt.js

![@rexovolt/revolt.js](https://img.shields.io/npm/v/@rexovolt/revolt.js) <!-- ![revolt-api](https://img.shields.io/npm/v/revolt-api?label=Revolt%20API) -->

**revolt.js** is a direct implementation of the entire Revolt API and provides a way to authenticate and start communicating with Revolt servers. This repository is a fork of revolt.js v6 with various API updates.

## Example Usage (Javascript / ES6)

```javascript
import { Client } from "revolt.js";

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "hello") {
        message.channel.sendMessage("world");
    }
});

client.loginBot("..");
```

### Important note

If you're using Node 18 or earlier, you must specify `--experimental-specifier-resolution=node` when running your code (for example, `node --experimental-specifier-resolution=node index.js`).

If you're using Node 19 or later, you'll need to use a custom loader. Install `commonjs-extension-resolution-loader` using your preferred package manager (e.g. `yarn add commonjs-extension-resolution-loader`), then specify `--loader=commonjs-extension-resolution-loader` when running your code (for example, `node --loader=commonjs-extension-resolution-loader index.js`).

## Example Usage (CommonJS)

```javascript
const { Client } = require("revolt.js");

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "hello") {
        message.channel.sendMessage("world");
    }
});

client.loginBot("..");
```

## Example Usage (Typescript)

```typescript
import { Client } from "revolt.js";

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user!.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "hello") {
        message.channel!.sendMessage("world");
    }
});

client.loginBot("..");
```

## MobX

MobX is used behind the scenes so you can subscribe to any change as you normally would, e.g. with `mobx-react(-lite)` or mobx's utility functions.

```typescript
import { autorun } from 'mobx';

[..]

client.once('ready', () => {
    autorun(() => {
        console.log(`Current username is ${client.user!.username}!`);
    });
});
```

## Revolt API Types

All `revolt-api` types are re-exported from this library under `API`.

```typescript
import { API } from "revolt.js";

// API.Channel;
// API.[..];
```
