import type { APIGatewayProxyEventV2, Context } from "aws-lambda";
import { describe, expect, it } from "bun:test";
import { handler } from "../lambda/app1/index";

const mockEvent = {} as APIGatewayProxyEventV2;
const mockContext = {} as Context;

describe("lambda/app1 handler", () => {
	it("200 を返す", async () => {
		const result = await handler(mockEvent, mockContext, () => {});
		expect(result).toBeDefined();
		expect(result).toMatchObject({ statusCode: 200 });
	});

	it("body に message が含まれる", async () => {
		const result = await handler(mockEvent, mockContext, () => {});
		expect(result).toBeDefined();
		const body = JSON.parse((result as { body: string }).body);
		expect(body).toMatchObject({ message: "hello world" });
	});
});
