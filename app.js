// Shared utilities and helpers

// Generate unique referral ID
export function generateReferralId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'BD';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Format currency
export function formatCurrency(amount) {
  return '€' + parseFloat(amount || 0).toFixed(2);
}

// Format date
export function formatDate(timestamp) {
  if (!timestamp) return '-';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Status labels in Bangla
export const statusLabels = {
  pending: 'অপেক্ষারত',
  shipped: 'পাঠানো হয়েছে',
  delivered: 'ডেলিভারি হয়েছে',
  cancelled: 'বাতিল'
};

// Status colors
export const statusColors = {
  pending: '#f59e0b',
  shipped: '#3b82f6',
  delivered: '#10b981',
  cancelled: '#ef4444'
};

// Show toast notification
export function showToast(message, type = 'success') {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.style.cssText = `
    position: fixed; bottom: 24px; right: 24px; z-index: 9999;
    padding: 14px 22px; border-radius: 12px; font-family: 'Hind Siliguri', sans-serif;
    font-size: 14px; font-weight: 500; color: white;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease;
    max-width: 300px;
  `;
  toast.textContent = message;

  const style = document.createElement('style');
  style.textContent = `@keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
  document.head.appendChild(style);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}
