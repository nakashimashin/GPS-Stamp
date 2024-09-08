## 環境構築

```
// リポジトリをクローンする
git clone git@github.com:nakashimashin/GPS-Stamp.git

// docker imageを作成
docker compose build

// コンテナを立ち上げる
docker compose up
```

## ライブラリをインストール

```
// コンテナの中に入る
docker compose exec gps-stamp-frontend sh
// ライブラリをインストール
npm i { ライブラリ名 }
```
