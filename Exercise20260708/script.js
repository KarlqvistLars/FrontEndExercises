document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('atgardaModal');

    // Kontrollera att modalen och Bootstrap existerar
    if (modalElement && typeof bootstrap !== 'undefined') {
        const bsModal = new bootstrap.Modal(modalElement);

        // Hämta bara åtgärda-knapparna inuti tabellens body
        const actionButtons = document.querySelectorAll('tbody .btn-action');

        actionButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault(); // Stoppa eventuella standardbeteenden

                // Hämta data från den klickade knappens attribut
                const plats = this.getAttribute('data-bs-plats');
                const fel = this.getAttribute('data-bs-fel');

                // Tryck in rätt text i modalens tomma taggar
                document.getElementById('modalPlatsText').textContent = plats;
                document.getElementById('modalFelText').textContent = fel;

                // Nollställ textfältet för kommentarer
                const kommentarFalt = document.getElementById('atgardaKommentar');
                if (kommentarFalt) kommentarFalt.value = '';

                // Öppna modalen!
                bsModal.show();
            });
        });
    }
});