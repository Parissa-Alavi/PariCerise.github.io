const selectedItems = [];

const itemButtons = document.querySelectorAll('.add-item');
const selectedItemsField = document.getElementById('selectedItems');
const orderForm = document.getElementById('orderForm');

function updateSelectedItems() {
  selectedItemsField.value = selectedItems.length
    ? selectedItems.map((item) => `- ${item.name} (${item.price})`).join('\n')
    : 'No items selected yet.';
}

itemButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = button.dataset.price;

    const found = selectedItems.find((item) => item.name === name);

    if (!found) {
      selectedItems.push({ name, price });
      button.textContent = 'Added';
      button.disabled = true;
      button.style.opacity = '0.7';
    }

    updateSelectedItems();
  });
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const name = formData.get('name')?.toString().trim() || 'Friend';
  const contact = formData.get('contact')?.toString().trim() || 'Not provided';
  const pickup = formData.get('pickup')?.toString().trim() || 'Campus location';
  const notes = formData.get('notes')?.toString().trim() || 'No extra notes';
  const items = selectedItems.length
    ? selectedItems.map((item) => `- ${item.name} (${item.price})`).join('\n')
    : 'No items selected';

  const rawMessage = [
    `Hello Paricerise!`,
    '',
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Pickup location: ${pickup}`,
    '',
    'Items:',
    items,
    '',
    `Notes: ${notes}`,
    '',
    'Thank you!'
  ].join('\n');

  const whatsappText = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/41791234567?text=${whatsappText}`;

  window.open(whatsappUrl, '_blank');
  alert('Your order message has been prepared in WhatsApp. Please edit the final number if needed in script.js.');
});
