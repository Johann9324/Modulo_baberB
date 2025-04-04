
// Datos de ejemplo para el inventario
let inventory = [
    { id: 1, name: "Mascarilla Facial", quantity: 30, description: "Tijeras profesionales para corte de cabello." },
    { id: 2, name: "Cuchilla", quantity: 15, description: "Maquinilla eléctrica para cortar el cabello." },
    { id: 3, name: "Shampoo", quantity: 50, description: "Champú especial para cabello masculino." },
    { id: 4, name: "Tijeras", quantity: 25, description: "Tijeras finas para recortar barba." }
];

// Función para cargar los productos al iniciar
function loadInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';

    inventory.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-quantity">Cantidad: ${product.quantity}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-actions">
                <button onclick="removeProduct(${product.id})">Eliminar</button>
            </div>
        `;
        inventoryList.appendChild(productCard);
    });
}

// Función para agregar un nuevo producto
function addProduct() {
    const name = document.getElementById('new-product-name').value;
    const quantity = document.getElementById('new-product-quantity').value;
    const description = document.getElementById('new-product-description').value;

    if (!name || !quantity || !description) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const newProduct = {
        id: inventory.length + 1,
        name: name,
        quantity: parseInt(quantity),
        description: description
    };

    inventory.push(newProduct);
    loadInventory(); // Recargar el inventario
    clearForm(); // Limpiar los campos
}

// Función para eliminar un producto
function removeProduct(productId) {
    inventory = inventory.filter(product => product.id !== productId);
    loadInventory(); // Recargar el inventario
}

// Función para limpiar el formulario de agregar producto
function clearForm() {
    document.getElementById('new-product-name').value = '';
    document.getElementById('new-product-quantity').value = '';
    document.getElementById('new-product-description').value = '';
}

// Cargar el inventario al iniciar
loadInventory();
