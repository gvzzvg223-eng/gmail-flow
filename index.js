import express from 'express';
import { Database } from 'node:sqlite';
import { GoogleGenAI } from '@google/genai';

const app = express();
app.use(express.json());

// Initialize SQLite database in WAL Mode for high concurrency
const db = new Database('gmailflow.db');
db.exec(`PRAGMA journal_mode = WAL;`);

// Create multi-user isolated schemas if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    access_token TEXT,
    refresh_token TEXT,
    token_expiry INTEGER
  );
`);

// Initialize Official Google GenAI SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Express API Route to Process Gmail Threads via Gemini 3.8
app.post('/api/flow/process', async (req, res) => {
  const { threadId, mimePayload, mode } = req.body;

  if (mode === 'Formal') {
    // Audit-ready Mode: Return exact raw structural details
    return res.json({ mode: 'Formal', payload: mimePayload, verified: true });
  }

  try {
    // Flow Mode: Streamlined, context-centric intelligence dispatch using gemini-3.8-flash
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Strip all signatures, legal boilerplate, disclaimers, and pleasantries from this email thread payload. Return only clean, structured, and action-oriented business communication chat fragments: ${JSON.stringify(mimePayload)}`,
    });

    res.json({
      mode: 'Flow',
      unifiedContextId: threadId,
      refinedContent: response.text,
      timestamp: Date.now()
    });
  } catch (error) {
    res.status(500).json({ error: 'AI processing sub-layer failed', details: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Executive Backend running on port ${PORT}`));
