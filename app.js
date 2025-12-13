// ── Utilities ───────────────────────────────────────
export function escapeHTML(str) {
  if (typeof str !== 'string') return str || '';
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

export function formatCurrency(n) {
  return '$' + parseFloat(n || 0).toFixed(2);
}

// ── Modal Management ────────────────────────────────
export function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'flex';

  // Auto-reset known modals
  if (id === 'customerModal') {
    ['customerName', 'customerEmail', 'customerPhone', 'customerAddress'].forEach(fieldId => {
      const el = document.getElementById(fieldId);
      if (el) el.value = '';
    });
  } else if (id === 'productModal') {
    ['productName', 'productCategory', 'productPrice', 'productStock', 'productBarcode', 'productDescription'].forEach(fieldId => {
      const el = document.getElementById(fieldId);
      if (el) el.value = '';
    });
  }
}

export function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

// ── Global Modal Setup (call once per page) ────────
export function setupModalListeners() {
  // Close via [data-modal] buttons
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(btn.dataset.modal);
    });
  });

  // Close by clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target.id);
    }
  });
}

// ── Nav Active State ────────────────────────────────
export function setActivePage() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const tabName = currentPage === 'index' ? 'dashboard' : currentPage;
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabName);
  });
}