# jo-ken.info

![](./public/og-image.jpg)

情報技術研究部の公式サイト

## About

情報技術研究部の公式サイトのリポジトリです。

## Features

- Astro
- TypeScript
- Tailwind CSS
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

http://localhost:4321/ で開発サーバーが起動します。ホットリロード対応なので、ソースコードを編集すると自動的に再更新されます。

### ビルド

```shell
pnpm build
```

`dist/`にビルド結果が出力されます。これが本番サーバーにデプロイされます。

### ビルド成果物の確認

```shell
pnpm start
```

`dist/`の中身を確認することができます。

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

## Deployment

デプロイはGitHub Actionsによって自動的に行われます。
masterブランチにpushされると、自動的にビルドが行われ、GitHub Pagesにデプロイされます。

## Continuous Integration

リモートにpushされると、GitHub Acgtionsによって以下の処理が自動的に行われます。

- 型チェック+リンタ+フォーマットの実行
- ビルド

これによって、コードが常に動作することを保証しています。

また、Depndabotによって依存パッケージのアップデートPRが自動的に作成されます。
Mergeする際にはPRのコメントで `@dependabot merge` とコメントしてください。
CIが失敗している場合は、手動でPRを修正してください。
