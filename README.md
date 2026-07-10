# cdk-bun-1

AWS CDK (TypeScript) を全部 bun でやるテスト。

TypeScript, ts-node, jest なし (esbuild あり)

```sh
bun ci

# ローカルで
bun run list
bun run synth

# デプロイ
aws login
bun run deploy

# おわったら消す
bun run destroy
```

## メモ

cdk.jsonの
`"@aws-cdk/aws-lambda:useCdkManagedLogGroup": false`
で、ロググループの自動生成を止めています。
命名規則やライフサイクル、削除ポリシーを制御したいので。
