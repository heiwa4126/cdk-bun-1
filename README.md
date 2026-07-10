# cdk-bun-1

AWS CDK (TypeScript) を全部 bun でやるテスト。

TypeScript, ts-node, jest なし。esbuild あり

```console
$ bun -v
1.3.14
$ cdk --version
2.1129.0 (build 629ca49)
```

## 動かし方

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

# おわったら消す
bun run destroy
```

## メモ

cdk.json の
`"@aws-cdk/aws-lambda:useCdkManagedLogGroup": false`
で、ロググループの自動生成を止めています。
命名規則やライフサイクル、削除ポリシーを制御したいので。
