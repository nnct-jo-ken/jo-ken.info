# jo-ken.info

情報技術研究部の公式サイト

## About

情報技術研究部の公式サイトのリポジトリです。

## Features

- Astro
- TypeScript
- vanilla-extract
- ESLint
  - `@shun-shobon/eslint-config` による包括的な設定が含まれています。
- Prettier
  - `@shun-shobon/prettier-config` による包括的な設定が含まれています。
- GitHub Actions

## Requirements

- Node.js
  - バージョンは`.nvmrc`で管理しています。Node.jsをインストールする際はnvmやasdfなどを用いてください。
- pnpm
  - バージョンは`package.json`の`packageManager`という項目で管理しています。corepackを用いるとこの項目を参照して自動的にバージョンを切り替えてくれるため、corepackを使用することをおすすめします。

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

### 型チェックの実行

```shell
pnpm type-check
```

### リンタの実行

```shell
pnpm lint
```

`lint:fix`で自動修正を行うこともできます。

### フォーマッタの実行

```shell
pnpm format
```

`format:check`で自動修正無しの実行を行うこともできます。
