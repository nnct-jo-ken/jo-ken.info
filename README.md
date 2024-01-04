# jo-ken.info

情報技術研究部の公式サイト

## About

情報技術研究部の公式サイト(になる予定)のリポジトリです。

## Features

- Astro
- TypeScript
- vanilla-extract
- ESLint
  - `@shun-shobon/eslint-config` による包括的な設定が含まれています。
- Prettier
  - `@shun-shobon/prettier-config` による包括的な設定が含まれています。
- GitHub Actions

現在、多くの設定は @shun-shobon 製のパッケージによって提供していますが、今後独自の設定に移行する予定です。

## Requirements

- Node.js
  - バージョンは`.tool-versions`で管理しています。Node.jsをインストールする際はasdf/rtxを使用するようにお願いします。
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
