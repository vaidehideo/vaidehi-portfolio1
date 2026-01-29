import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as llm from "./_core/llm";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("chatbot.chat", () => {
  it("returns a response from the AI assistant", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // Mock the LLM response
    vi.spyOn(llm, "invokeLLM").mockResolvedValue({
      choices: [
        {
          message: {
            role: "assistant",
            content: "Vaidehi has 10+ years of experience in software engineering.",
          },
          finish_reason: "stop",
          index: 0,
        },
      ],
      usage: {
        prompt_tokens: 100,
        completion_tokens: 50,
        total_tokens: 150,
      },
      id: "test-id",
      model: "test-model",
      object: "chat.completion",
      created: Date.now(),
    });

    const result = await caller.chatbot.chat({
      messages: [
        {
          role: "user",
          content: "Tell me about Vaidehi's experience",
        },
      ],
    });

    expect(result).toHaveProperty("message");
    expect(typeof result.message).toBe("string");
    expect(result.message).toContain("experience");
  });

  it("handles empty message array", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.spyOn(llm, "invokeLLM").mockResolvedValue({
      choices: [
        {
          message: {
            role: "assistant",
            content: "Hi! I'm Vaidehi's Virtual Representative.",
          },
          finish_reason: "stop",
          index: 0,
        },
      ],
      usage: {
        prompt_tokens: 50,
        completion_tokens: 20,
        total_tokens: 70,
      },
      id: "test-id-2",
      model: "test-model",
      object: "chat.completion",
      created: Date.now(),
    });

    const result = await caller.chatbot.chat({
      messages: [],
    });

    expect(result).toHaveProperty("message");
    expect(typeof result.message).toBe("string");
  });

  it("handles LLM errors gracefully", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    vi.spyOn(llm, "invokeLLM").mockRejectedValue(new Error("LLM service unavailable"));

    await expect(
      caller.chatbot.chat({
        messages: [
          {
            role: "user",
            content: "Test question",
          },
        ],
      })
    ).rejects.toThrow();
  });
});
