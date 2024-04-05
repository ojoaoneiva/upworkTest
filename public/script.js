function renderComponentContent(quantity) {
    var mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    for (var i = 1; i <= quantity; i++) {
        var component = document.createElement('div');
        component.classList.add('component');

        var h2 = document.createElement('h2');
        h2.textContent = i;
        component.appendChild(h2);

        mainContent.appendChild(component);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var quantityInput = document.getElementById('quantityInput');

    function loadComponentContent() {
        var quantity = quantityInput.value.trim() === '' ? 3 : parseInt(quantityInput.value);
        renderComponentContent(quantity);
    }

    quantityInput.addEventListener('input', loadComponentContent);

    loadComponentContent();
});