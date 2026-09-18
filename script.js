const basket = [];

const addButtons = document.querySelectorAll('.add-item');
const basketItems = document.getElementById('basketItems');
const basketTotal = document.getElementById('basketTotal');
const clearBasketButton = document.getElementById('clearBasket');
const orderForm = document.getElementById('orderForm');
const year = document.getElementById('year');

// Replace this placeholder number before publishing.
const WHATSAPP_NUMBER = '41791234567';

function formatCHF(value) {
  return `CHF ${value.toFixed(0)}`;
}

function getBasketTotal() {
  return basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderBasket() {
  if (!basket.length) {
    basketItems.innerHTML = '<p class="empty-basket">Your basket is empty. Add a flavour above to get started.</p>';
    basketTotal.textContent = 'CHF 0';
    return;
  }

  basketItems.innerHTML = basket
    .map(
      (item, index) => `
        <div class="basket-item">
          <div>
            <strong>${item.name}</strong>
            <small>${item.unit} · ${formatCHF(item.price)} each</small>
          </div>
          <div class="quantity-control" aria-label="Quantity for ${item.name}">
            <button type="button" data-action="decrease" data-index="${index}" aria-label="Decrease ${item.name}">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase" data-index="${index}" aria-label="Increase ${item.name}">+</button>
          </div>
        </div>
      `
    )
    .join('');

  basketTotal.textContent = formatCHF(getBasketTotal());
}

function addToBasket(name, price, unit) {
  const existingItem = basket.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    basket.push({ name, price, unit, quantity: 1 });
  }

  renderBasket();
}

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const unit = button.dataset.unit;

    addToBasket(name, price, unit);

    const originalLabel = button.textContent;
    button.textContent = 'Added ✓';
    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 850);
  });
});

basketItems.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const index = Number(button.dataset.index);
  const action = button.dataset.action;
  const item = basket[index];

  if (!item) return;

  if (action === 'increase') {
    item.quantity += 1;
  }

  if (action === 'decrease') {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      basket.splice(index, 1);
    }
  }

  renderBasket();
});

clearBasketButton.addEventListener('click', () => {
  basket.splice(0, basket.length);
  renderBasket();
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!basket.length) {
    alert('Please add at least one product to your basket first.');
    return;
  }

  const formData = new FormData(orderForm);
  const name = formData.get('name')?.toString().trim() || 'Friend';
  const contact = formData.get('contact')?.toString().trim() || 'Not provided';
  const pickup = formData.get('pickup')?.toString().trim() || 'To be confirmed';
  const notes = formData.get('notes')?.toString().trim() || 'No extra note';

  const itemLines = basket.map(
    (item) => `- ${item.quantity} × ${item.name} (${item.unit}) — ${formatCHF(item.price * item.quantity)}`
  );

  const rawMessage = [
    'Hello PariCerise! 🍒',
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Preferred pickup area: ${pickup}`,
    '',
    'Order:',
    ...itemLines,
    '',
    `Estimated total: ${formatCHF(getBasketTotal())}`,
    '',
    `Note: ${notes}`,
    '',
    'Could you please confirm availability and pickup details? Thank you!'
  ].join('\n');

  const whatsappText = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

if (year) {
  year.textContent = new Date().getFullYear();
}

renderBasket();
