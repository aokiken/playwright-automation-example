# playwright-automation-example

## Installation

```shell
$ yarn install
$ yarn playwright install chromium
```

## Usage

### Run scripts

```shell
$ yarn run ts-node ./scripts/example.ts
```

#### Run with debug mode

```shell
$ PWDEBUG=1 yarn run ts-node ./scripts/example.ts
$ PWDEBUG=console yarn run ts-node ./scripts/example.ts
```

- `PWDEBUG=1` をつけると、console が表示されたりブラウザが表示されるモードになります
- `PWDEBUG=console` をつけると、headfulモードで実行されます

