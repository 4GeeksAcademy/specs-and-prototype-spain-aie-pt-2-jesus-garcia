function openModal(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(overlay) {
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function fillModalFromTrigger(trigger, overlay) {
  const body = overlay.querySelector('[data-modal-body]');
  if (!body) return;

  for (const [key, value] of Object.entries(trigger.dataset)) {
    if (key.startsWith('field') && key.length > 5) {
      const field = key[5].toLowerCase() + key.slice(6);
      const el = body.querySelector(`[data-field="${field}"]`);
      if (el) el.textContent = value;
    }
  }

  const itemsRaw = trigger.dataset.items;
  if (itemsRaw) {
    try {
      const items = JSON.parse(itemsRaw);
      const list = overlay.querySelector('[data-modal-items]');
      if (list) {
        list.innerHTML = items.map(item => `
          <div class="flex items-center justify-between bg-surface-container-highest p-md clip-octagon">
            <span>${item.skill}</span><span class="font-code-sm">${item.price}</span>
          </div>
        `).join('');
      }
    } catch (e) {
      console.error('Invalid items JSON', e);
    }
  }
}

function initModalSystem() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(closeModal);
    }
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-modal]');
    if (trigger) {
      e.preventDefault();
      const overlayId = trigger.dataset.modal;
      const overlay = document.getElementById(overlayId);
      if (!overlay) return;

      fillModalFromTrigger(trigger, overlay);
      openModal(overlayId);
    }
  });

  document.addEventListener('click', (e) => {
    const overlay = e.target.closest('.modal-overlay');
    if (overlay && e.target === overlay) {
      closeModal(overlay);
    }
  });

  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.modal-close');
    if (closeBtn) {
      const overlay = closeBtn.closest('.modal-overlay');
      if (overlay) closeModal(overlay);
    }
  });
}

document.addEventListener('DOMContentLoaded', initModalSystem);
