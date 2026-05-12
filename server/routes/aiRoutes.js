const express = require("express");
const router = express.Router();

const client = require("../services/openrouterService");

router.post("/career", async (req, res) => {
  try {
    console.log("Request received");

    const { prompt } = req.body;

    console.log("Prompt:", prompt);

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:free",

      temperature: 0.7,
      max_tokens: 300,

      messages: [
        {
          role: "system",
          content: `
You are PathForge AI, an expert AI career mentor.

Your job:
- Help students choose career paths
- Suggest skills and technologies
- Generate learning roadmaps
- Give clear and structured responses

Always format responses using this structure:

1. Career Recommendation
2. Why This Career Fits
3. Skills Required
4. Learning Roadmap
5. Recommended Projects
6. Career Tips

Keep responses:
- clean
- modern
- beginner friendly
- well formatted

Use bullet points where possible.
Avoid large paragraphs.
`,
        },

        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log("Response received");

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
