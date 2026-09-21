import React from 'react';

export default function ConfirmDialog({ isOpen, actionDetails, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 9999 }}>
      <div style={{ backgroundColor: '#111827', border: '1px solid #dc2626', borderRadius: '12px', maxWidth: '500px', width: '100%', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
        <h3 style={{ color: '#ef4444', fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ⚠️ Governed AI Dispatch Confirmation
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 16px 0' }}>
          Zero-trust threshold reached. AI is requesting mutation authorization on your Google Workspace API layer.
        </p>
        
        <div style={{ backgroundColor: '#1f2937', padding: '12px', borderRadius: '8px', fontSize: '13px', marginBottom: '20px', borderLeft: '3px solid #ef4444' }}>
          <p style={{ margin: '0 0 6px 0', color: '#e2e8f0' }}><strong>Action:</strong> {actionDetails.actionType}</p>
          <p style={{ margin: '0 0 6px 0', color: '#e2e8f0' }}><strong>Target:</strong> {actionDetails.target}</p>
          <p style={{ margin: 0, color: '#94a3b8' }}><strong>Trace Evidence:</strong> {actionDetails.evidence}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onCancel} style={{ backgroundColor: 'transparent', color: '#94a3b8', border: '1px solid #374151', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>
            Reject Action
          </button>
          <button onClick={onConfirm} style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
            Authorize Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
