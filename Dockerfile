FROM node:20.5.1

# root から 'node' ユーザーに切り替え
USER node

# ワーキングディレクトリを設定します。
WORKDIR /home/node/workspace