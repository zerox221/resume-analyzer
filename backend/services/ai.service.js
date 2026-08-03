const { GoogleGenAI } = require("@google/genai");
const generateInterviewPrompt = require("./prompt");

require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function genrateInterviewReport(resume, selfDescription, jobDescription) {
  const prompt = generateInterviewPrompt(resume,selfDescription,jobDescription);
  console.log("prompt = ",prompt);
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  });
  return response.text;
}



module.exports =  genrateInterviewReport ;
