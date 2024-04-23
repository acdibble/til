# List files

You can use the `-l` flag to have ripgrep list the files it is searching without
showing if there are any matches inside:

```shell
$ rg -g '*' -l "hello world"
rust/include_str!.md
javascript/chunking-a-string.md
node_modules/.pnpm/debug@4.3.4/node_modules/debug/README.md
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/wasi.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/util.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/https.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/cluster.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/url.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/http2.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/http.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/console.d.ts
node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/sea.d.ts
```

Here is a helpful
[user guide](https://github.com/BurntSushi/ripgrep/blob/d922b7ac114c24d6800ae5f79d2967481f380c83/GUIDE.md).
