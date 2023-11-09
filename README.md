# Next.js Template

Next.js template with vanilla-extract, Storybook, and other tools

## About

Next.jsのプロジェクトテンプレートです。
Next.jsの開発に必要な周辺ツールやその設定を含んでいるため、このテンプレートを使用することで直ぐに開発を始めることができます。

## Features

- React + Next.js
- TypeScript
- vanilla-extract
- ESLint
  - `@shun-shobon/eslint-config` による包括的な設定が含まれています。
- Prettier
- Storybook
- GitHub Actions

## Commands

### インストール

```shell
pnpm install
```

### 開発サーバーの起動

```shell
pnpm dev
```

### ビルド

```shell
pnpm build
```

### 本番サーバーの起動

```shell
pnpm start
```

### Storybookの起動

```shell
pnpm storybook
```

### リンタの実行

```shell
pnpm lint
```

`lint:<ツール名>`で各ツールを個別に実行することもできます。

### リンタの自動修正

```shell
pnpm lint-fix
```

`lint-fix:<ツール名>`で各ツールを個別に実行することもできます。

## License

MITライセンスです。詳しくは[LICENSE](./LICENSE)をご覧ください。
