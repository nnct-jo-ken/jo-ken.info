# jo-ken.info

情報技術研究部の公式サイト

## About

情報技術研究部の公式サイト(になる予定)のリポジトリです。

## Features

- React + Next.js
- TypeScript
- vanilla-extract
- ESLint
  - `@shun-shobon/eslint-config` による包括的な設定が含まれています。
- Prettier
- Storybook
- GitHub Actions

現在、多くの設定は @shun-shobon 製のパッケージによって提供していますが、今後独自の設定に移行する予定です。

## Requirements

- Node.js
  - バージョンはasdfによって`.tool-versions`で管理しています。Node.jsをインストールする際はasdfを使用するようにお願いします。
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

### Storybookの起動

```shell
pnpm storybook
```

### Storybookを使用したテスト

コマンド実行前にStorybookを起動しておく必要があります。

```shell
pnpm test:storybook
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
