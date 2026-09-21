import React, { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('Flow'); // Default to Intelligence Flow Mode
  const [threadId, setThreadId] = useState('XYZ-123-ALPHA');
  const [loading, setLoading] = useState(false);
  const [refinedOutput, setRefinedOutput] = useState(
    "Gemini AI: Client agreed to the production budget terms. Action item: Send the finalized SOW by EOD Tuesday."
  );

  const toggleMode = () => {
    setLoading(true);
    setTimeout(() => {
      if (mode === 'Flow') {
        setMode('Formal');
        setRefinedOutput("RAW MIME DATA: From: client@corp.com\nSubject: Re: Budget\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=corp.com...\n\nDear Team, We formally approve the $50k budget proposal sent yesterday. Let's move to the contract phase.");
      } else {
        setMode('Flow');
        setRefinedOutput("Gemini AI: Client agreed to the production budget terms. Action item: Send the finalized SOW by EOD Tuesday.");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#f3f4f6', minHeight: '100vh', fontFamily: 'sans-serif', padding: '24px' }}>
      <header style={{ borderBottom: '1px solid #1e293b', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#38bdf8' }}>⚡ GmailFlow Operating Layer</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Context-centric executive intelligence connected via Gemini 2.5 Flash</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#64748b', block: 'block' }}>UNIFIED CONTEXT ID</span>
              <strong style={{ color: '#e2e8f0', fontSize: '16px' }}>{threadId}</strong>
            </div>
            <button 
              onClick={toggleMode}
              style={{
                backgroundColor: mode === 'Flow' ? '#0284c7' : '#475569',
                color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s'
              }}
            >
              Switch to {mode === 'Flow' ? 'Formal Mode 📋' : 'Flow Mode ✨'}
            </button>
          </div>

          <div style={{ backgroundColor: '#1f2937', borderRadius: '8px', padding: '16px', minHeight: '120px', whiteSpace: 'pre-wrap', borderLeft: mode === 'Flow' ? '4px solid #38bdf8' : '4px solid #94a3b8' }}>
            {loading ? <p style={{ color: '#64748b' }}>Recalibrating workflow architecture...</p> : <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6' }}>{refinedOutput}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
