🚧 Development in progress 🚧

# Editor.js Tool — starter kit package

Single command helper to generate a Tool template.

## Usage

Use `create` command to generate Tool's starter kit.

```
npm create @editorjs/tool <tool-name>
yarn create @editorjs/tool <tool-name>
```

## Development

New project files will be used from `template` folder. You can work in this folder as in generated project: upgrade dependencies, add new files, run build and dev commands.

In templates there is a variable that will be replaced with user's input:

- `VAR_TOOL_NAME` — tool name

### Local testing

To test the package locally, you have to create a symlink to the global `node_modules` folder. Use the package to generate a new tool. And then you need to unlink local package.

#### Linking

Run the following command in the root of this package repository:

```
npm link
yarn link
```

In the folder where you want to create a new tool, link the local package:

```
npm link @editorjs/create-tool
yarn link @editorjs/create-tool
```

#### Usage

Use this tool as usual:

```
npm create @editorjs/tool <tool-name>
yarn create @editorjs/tool <tool-name>
```

#### Unlinking

To unlink the local package run the following in tool's parent folder where I had to link it earlier:

```
npm unlink @editorjs/create-tool
yarn unlink @editorjs/create-tool
```

And then unlink the package in the root of this package repository:

```
npm unlink @editorjs/create-tool
yarn unlink @editorjs/create-tool
```
