import { 
  GoogleGenerativeAI, 
  SchemaType, 
  type FunctionDeclaration,
  type Schema
} from "@google/generative-ai";
import { searchProducts, productSearchSchema } from "./tools/search-products";
import { getMyOrders, getMyOrdersSchema } from "./tools/get-my-orders";

// Initialize with the API Key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

interface ShoppingAgentOptions {
  userId: string | null;
}

export function createShoppingAgent({ userId }: ShoppingAgentOptions) {
  const isAuthenticated = !!userId;
  
  // Instructions
  const baseInstructions = `You are a friendly shopping assistant for Roast&Recover...`;
  const instructions = isAuthenticated
    ? baseInstructions + `\n\n## Orders\nUse getMyOrders to check order history.`
    : baseInstructions + `\n\n## Orders\nUser not signed in. Ask them to sign in.`;

  // Tool Definitions
  const tools: FunctionDeclaration[] = [
    {
      name: "searchProducts",
      description: "Search for products in the collection.",
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          query: { type: SchemaType.STRING, description: "Search term" },
          category: { 
            type: SchemaType.STRING, 
            enum: ["gifting-editions", "ritual-objects", "titanium-collection", "tea-ceremony", "coffee-ritual"] 
          } as Schema,
        },
      }
    }
  ];

  if (isAuthenticated) {
    tools.push({
      name: "getMyOrders",
      description: "Retrieve order history for the current user.",
      parameters: {
        type: SchemaType.OBJECT,
        properties: {
          status: { 
            type: SchemaType.STRING, 
            enum: ["paid", "shipped", "delivered", "cancelled"] 
          } as Schema
        }
      }
    });
  }

  async function execute(messages: any[]) {
    // FIX: Update the model name to gemini-3-flash-preview
    // Using gemini-1.5-flash as a fallback if your project doesn't have access to preview yet
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3-flash-preview", 
      tools: [{ functionDeclarations: tools }],
      systemInstruction: instructions
    });

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content || "" }]
    }));

    const chat = model.startChat({ history });

    // Handle empty messages array or empty content safely
    const lastUserMessage = messages[messages.length - 1]?.content || "";
    
    try {
      const result = await chat.sendMessage(lastUserMessage);
      const response = result.response;
      const calls = response.functionCalls();

      if (calls && calls.length > 0) {
        const call = calls[0];
        let functionData;

        if (call.name === "searchProducts") {
          const args = productSearchSchema.parse(call.args);
          functionData = await searchProducts(args);
        } else if (call.name === "getMyOrders" && isAuthenticated) {
          const args = getMyOrdersSchema.parse(call.args);
          functionData = await getMyOrders(userId, args);
        }

        if (functionData) {
          const finalResult = await chat.sendMessage([{
            functionResponse: {
              name: call.name,
              response: functionData
            }
          }]);
          return finalResult.response.text();
        }
      }

      return response.text();
    } catch (error) {
      console.error("Chat error:", error);
      throw error;
    }
  }

  return { execute };
}