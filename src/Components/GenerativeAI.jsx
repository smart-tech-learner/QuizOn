import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateResponseForPrompts = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Exception in generateResponseForPrompts::: ", error);
  }
};
