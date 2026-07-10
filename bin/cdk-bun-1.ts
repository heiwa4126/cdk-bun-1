#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { CdkBun1Stack } from "../lib/cdk-bun-1-stack";

function getStackName(baseStackName: string, rawSuffix?: string): string {
	return rawSuffix ? `${baseStackName}-${rawSuffix}` : baseStackName;
}

const app = new cdk.App();
const rawSuffix = process.env.STACK_SUFFIX?.trim();

new CdkBun1Stack(app, getStackName("CdkBun1Stack", rawSuffix), {
	/* If you don't specify 'env', this stack will be environment-agnostic.
	 * Account/Region-dependent features and context lookups will not work,
	 * but a single synthesized template can be deployed anywhere. */
	/* Uncomment the next line to specialize this stack for the AWS Account
	 * and Region that are implied by the current CLI configuration. */
	// env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
	/* Uncomment the next line if you know exactly what Account and Region you
	 * want to deploy the stack to. */
	// env: { account: '123456789012', region: 'us-east-1' },
	/* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
