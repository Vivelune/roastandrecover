import { auth } from "@clerk/nextjs/server";
import { createShoppingAgent } from "@/lib/ai/shopping-agent";

export async function POST(request: Request) {
  const { messages } = await request.json();
  const { userId } = await auth();

  try {
    const agent = createShoppingAgent({ userId });
    const response = await agent.execute(messages);

    return new Response(
      JSON.stringify({ 
        role: "assistant", 
        content: response 
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 500 }
    );
  }
}