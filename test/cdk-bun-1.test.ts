import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { test } from "bun:test";
import { CdkBun1Stack } from "../lib/cdk-bun-1-stack";

test("synthesizes the Lambda, URL and log group", () => {
	const app = new App();
	const stack = new CdkBun1Stack(app, "MyTestStack");
	const template = Template.fromStack(stack);

	template.resourceCountIs("AWS::Lambda::Function", 1);
	template.hasResourceProperties("AWS::Lambda::Function", {
		Runtime: "nodejs24.x",
	});

	template.resourceCountIs("AWS::Lambda::Url", 1);
	template.hasResourceProperties("AWS::Lambda::Url", {
		AuthType: "NONE",
	});

	template.resourceCountIs("AWS::Logs::LogGroup", 1);
	template.hasResourceProperties("AWS::Logs::LogGroup", {
		RetentionInDays: 7,
	});
});
