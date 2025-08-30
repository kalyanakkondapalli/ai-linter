import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getAISuggestion(lintOutput) {
    const prompt = `Here is the linter output:\n${lintOutput}\nProvide actionable suggestions and reasoning.`;
    const response = await client.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300
    });
    return response.choices[0].message.content;
}