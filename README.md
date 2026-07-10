# cdk-bun-1

AWS CDK (TypeScript) を全部 [Bun](https://bun.com/) でやるテスト。

TypeScript, ts-node, jest なし。esbuild あり(これはいまのところ難しい)

```console
$ bun -v
1.3.14
$ cdk --version
2.1129.0 (build 629ca49)
```

## 動かし方

AWS Lambda Functions URLs を 1 個デプロイする。
中身は "hello world".

```sh
bun ci

# ローカルで最初の動作確認
bun run list
bun run synth # cdk.out 以下に CFn が合成される

# 編集後テスト
bun run test

# デプロイ
aws login
bun run deploy
## URLが表示されるのでブラウザなどで開く

# おわったら消す
bun run destroy
```

### スタック名サフィックス

環境変数 `STACK_SUFFIX` を設定すると、スタック名の末尾にサフィックスが付きます。

[Bun は自動で .env を読む](https://bun.com/docs/runtime/environment-variables#setting-environment-variables)
ので、`.env` に書くといいでしょう。

```sh
# .env
STACK_SUFFIX=dev
```

- `STACK_SUFFIX` が未設定または空文字 ⇒ スタック名: `CdkBun1Stack`
- `STACK_SUFFIX=dev` ⇒ スタック名: `CdkBun1Stack-dev`

## メモ

cdk.json の
`"@aws-cdk/aws-lambda:useCdkManagedLogGroup": false`
で、ロググループの自動生成を止めています。
命名規則やライフサイクル、削除ポリシーを制御したいので。
