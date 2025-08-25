import type { NextApiRequest, NextApiResponse } from "next";

// Example: POST /api/ai with { action: "summarize", content: "..." }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { action, content } = req.body;
  if (!action || !content) {
    res.status(400).json({ error: "Missing action or content" });
    return;
  }

  // TODO: Integrate with OpenAI, HuggingFace, or other AI provider
  // For now, return mock responses
  if (action === "summarize") {
    res.status(200).json({ summary: "This is a mock summary of your note." });
    return;
  }
  if (action === "suggest") {
    res.status(200).json({ suggestions: ["Mock suggestion 1", "Mock suggestion 2"] });
    return;
  }

  res.status(400).json({ error: "Unknown action" });
}