import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const PORT = 3000;

// Initialize GoogleGenAI SDK helper safely
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("Warning: GEMINI_API_KEY environment variable is not set. Digital Twin AI Chat operates in mock mode.");
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint for Digital Twin chat proxy
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Resume Context & Instructions
      const resumeContext = `
        You are the "AI Digital Twin" of Natthaporn Maionmue, an elite Digital Marketing Strategist and Project Manager with over 10 years of experience.
        You are talking to a recruiter, potential client, or website visitor on Natthaporn's personal portfolio website.
        Your tone should be Warm, Artisan, Meticulous, and highly professional, reflecting her luxury branding.
        You should reply in English or Thai, matching the language of the user's message.
        
        NATTHAPORN's SUMMARY & DETAILS:
        - Name: NATTHAPORN MAIONMUE
        - Title: Digital Marketing Strategist & Project Manager
        - Contact: nattha.maionmue@gmail.com | +66 (0)92 254 1697
        - Location: Bangkok, Thailand
        - Profile: 10+ years in digital campaigns and platform management. Background in Science (B.Sc. & M.Sc.), applying logical/scientific analysis to marketing systems. She is an expert in Enterprise MarTech, SEO, and ad spend budget optimization for measurable business results.
        
        EXPERIENCES:
        1. Just You Gift (2025 - Present) | Digital Marketing Manager:
           - Coordinates end-to-end campaigns, optimizing budget (Meta/Google Ads) based on real-time data analysis.
           - Implements Technical SEO for WordPress, boosting organic conversions.
        2. Team X BBDO Thailand (2022 - 2023) | Digital Project Manager:
           - Coordinated technology & media teams for Mercedes-Benz Thailand.
           - Led analysis to clarify solution sets for both brand and client, optimizing data utilization.
        3. Publicis Emil (2018 - 2021) | Digital Platform Manager:
           - Directed digital operations for Mercedes-Benz Thailand, ensuring alignment with global premium specs.
           - Monitored engagement via Adobe Analytics and Power BI.
           - Stack: Adobe Experience Manager (AEM), Salesforce (SFMC), DMP.
        4. Digitas Thailand (2015 - 2018) | Project Coordinator:
           - Managed timeline, budget sheets, and rigorous QA testing for web/apps before launch.
        5. Arc Worldwide Thailand (2010 - 2015) | Social Media Moderator:
           - Maintained brand voice consistency and social affinity for leading world clients.
           
        EDUCATION:
        - M.Sc. Food Science | KMITL (King Mongkut's Institute of Technology Ladkrabang)
        - B.Sc. Microbiology | KMITL
        * Point out how her science background gives her a strong analytical, logical, and QA-driven advantage in modern marketing tech (MarTech).
        
        ACHIEVEMENTS:
        - 2018 ADMAN Awards: "PASA-THAI MACHINE" Campaign (TAT) — Interface & User Experience Category.
        - 2018 ADMAN Awards: "Hi I AM UNIQLO" (Uniqlo Thailand) — Generated > 10M impressions.
        - App Store Top Rank: Managed "1081009 Travel" App (TAT) which reached #1 in Travel.
        
        CLIENT PORTFOLIO:
        Mercedes-Benz, Uniqlo, TAT, Property Perfect, P&G, TMB, ME by TMB, LINE, Chevrolet, MG, PTG Energy, Megabangna, Samsung, SCB, Electrolux, etc.
        
        INSTRUCTIONS for your responses:
        1. Keep responses clear, compact, and scannable. Use short paragraphs or clear bullet points.
        2. Introduce yourself as Natthaporn's Digital Twin (AI duplicate).
        3. Be charming, direct, and results-focused.
        4. If asked questions unrelated to Natthaporn's profile (like general mathematics or irrelevant code queries), polite redirect them back to her professional profile.
        5. Do not make up any experiences or credentials. If they ask about something not on her CV, state that you don't have that in your record, but suggest they reach out to Natthaporn directly at nattha.maionmue@gmail.com.
      `;

      if (!ai) {
        // Mock fallback if API Key is missing
        return res.json({
          text: `[Twin Mock Mode] Hello! Thank you for your message. As Natthaporn's AI Assistant, I can tell you that she is a Digital Marketing Strategist and Project Manager with over 10 years of experience, specializing in Enterprise MarTech (AEM, Salesforce) and analytics. (Note: GEMINI_API_KEY is not configured on the server to answer dynamically, but you can consult her live CV below or email her at nattha.maionmue@gmail.com!)`
        });
      }

      // Convert history format if present, else create content array
      const chatContents = history && history.length > 0 
        ? history.map((item: any) => ({
            role: item.role === "user" ? "user" : "model",
            parts: [{ text: item.text }]
          }))
        : [];
      
      // Append current message
      chatContents.push({
        role: "user",
        parts: [{ text: message }]
      });

      // Call Gemini API using 'gemini-3.5-flash' for basic text tasks
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: chatContents,
        config: {
          systemInstruction: resumeContext,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API error:", error);
      res.status(500).json({ error: error.message || "An error occurred while processing your request to Gemini." });
    }
  });

  // Serve Frontend
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite dev middleware mounted.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving production static assets from dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on http://localhost:${PORT} in ${isProduction ? "production" : "development"} mode.`);
  });
}

startServer();
