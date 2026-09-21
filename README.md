# GmailFlow — Workspace Evolution v2

GmailFlow is an executive, context-centric operating layer built directly on top of Google Workspace APIs. Instead of treating communication as fragmented silos, GmailFlow anchors the entire workflow to the root of a conversation: **`unifiedContextId = Gmail Thread ID`**.

This system seamlessly unifies emails, structural Google Drive attachments, and Google Calendar events into a single, cohesive business-intelligence interface powered by server-side Gemini AI.

---

## 🌟 Core Architecture & Capabilities

### 1. Dual Interface Modes: Flow vs. Formal
* **Flow Mode:** The default intelligence layout. It uses Gemini AI to dynamically strip out email fluff, signatures, legal disclaimers, and pleasantries—delivering a pure, structured, and action-oriented business chat bubble.
* **Formal Mode:** Restores the absolute raw truth. It displays the full multi-part MIME payload, sender domains, exact original text, and verification footprints (DKIM/SPF) for rigorous compliance, auditing, and certainty.

### 2. Multi-User Database Layer (SQLite Connection)
* Replaced loose in-memory states with a persistent, high-performance **SQLite Database (WAL Mode)**.
* Implemented complete multi-user isolation to ensure data partitions and secure OAuth credentials never overlap.

### 3. Proactive Background Token Auto-Refresh
* Features built-in background cron-like renewal of Google OAuth2 access keys. 
* If a token is detected to expire within 5 minutes, it transparently refreshes using the secure hardware/database-persisted refresh token, ensuring uninterrupted long-term executive workflows.

### 4. Robust Recursive MIME Parsing
* Upgraded the payload decoder into an optimized, deeply-recursive **MIME structural parser**.
* Capable of traversing complex nested multi-part structures (alternative, mixed, and related blocks) up to 25 layers deep without ever dropping data or causing server crashes.

### 5. Governed Human-in-the-Loop Dispatches
* Implemented a zero-trust execution framework. No mutating API action (sending an email or creating a meeting) is allowed blindly by AI.
* Every transaction requires a cryptographic confirmation token backed by a distinct preview panel showing **What will happen, Why it will happen, and the supporting Evidence Trace**.

---

## 📁 Repository Directory Tree

```text
GmailFlow/
├── package.json               # Full modern dependencies (React 18, Google GenAI, SQLite)
├── vite.config.js             # Client development server & proxy routing
├── index.html                 # Entry point with complete RTL & localized scaffolding
├── .env.example               # Secret key mapping (Gemini API & Google Cloud Console Console)
├── .gitignore                 # Strict production ignoring criteria
├── README.md                  # Comprehensive Project documentation
├── server/
│   └── index.js               # Production-grade Express Backend with persistent DB and OAuth
└── src/
    ├── main.jsx               # React bootstrapping layer
    ├── App.jsx                # Premium, hyper-responsive corporate dark interface
    ├── ConfirmDialog.jsx      # Governed action validation overlay
    └── styles.css             # Elegant, constrained minimalist dark theme styling
```

---

## 🧠 Technology Stack & Integration Footprint

* **Frontend:** React 18, Vite, Lucide Icons, Locale-aware Intl APIs.
* **Backend:** Node.js, Express, `node:sqlite` Native Storage Engine.
* **AI Engine:** `@google/genai` (Official SDK) calling **`gemini-2.5-flash`** with automated candidate model fallbacks.
* **Cloud Infrastructure Sync:** Gmail API, Google Drive API, Google Calendar OAuth 2.0 Client.

---

## 📄 License & Compliance

Distributed under the **MIT License**. Engineered for elite efficiency, absolute transparency via data tracing, and zero structural reliance on general chatbot templates.
