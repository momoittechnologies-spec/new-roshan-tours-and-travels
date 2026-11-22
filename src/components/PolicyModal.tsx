import React, { useEffect } from 'react';
import { X, FileText } from 'lucide-react';
import { LEGAL_POLICIES } from '../data/travelData';

export type PolicyType = 'privacy' | 'terms' | 'cancellation' | null;

interface PolicyModalProps {
  policyType: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (policyType) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [policyType, onClose]);

  if (!policyType) return null;

  const policy = LEGAL_POLICIES[policyType];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#102D29] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-ring"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#C8A45D] text-xs font-bold uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Official Policy Document</span>
          </div>
          <h3 id="policy-modal-title" className="text-xl sm:text-2xl font-bold font-serif-title">
            {policy.title}
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Last Updated: {policy.lastUpdated} • New Roshan Tours & Travels Kadapa
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-[#26332F]/85 leading-relaxed whitespace-pre-line">
          {policy.content}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500">
          <span>Kadapa Office Verification: +91 90590 57239</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#174C40] hover:bg-[#102D29] text-white font-bold px-4 py-2 rounded-lg transition-colors focus-ring"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
