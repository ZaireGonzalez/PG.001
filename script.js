document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.module-btn');
    const tableContainer = document.getElementById('table-container');
    const tableTitle = document.getElementById('table-title');
    const dataTable = document.getElementById('data-table');

    const data = {
        venta: [
            ["Producto", "Cantidad", "Precio"],
            ["Tomate", "10", "$20"],
            ["Papa", "5", "$10"]
        ],
        anulacion: [
            ["ID", "Motivo", "Fecha"],
            ["001", "Error de registro", "2024-11-26"],
            ["002", "Cliente canceló", "2024-11-25"]
        ],
        cierre: [
            ["Fecha", "Total Ventas", "Total Anulaciones"],
            ["2024-11-25", "$200", "$50"]
        ],
        configuracion: [
            ["Parámetro", "Valor"],
            ["Tasa IVA", "16%"],
            ["Descuento", "10%"]
        ],
        provedor: [
            ["Proveedor", "Producto", "Contacto"],
            ["Agrícola S.A.", "Tomate", "123-456-7890"]
        ],
        inventario: [
            ["Producto", "Stock", "Precio Unitario"],
            ["Tomate", "50", "$2"],
            ["Papa", "30", "$1"]
        ],
    };

    modules.forEach(module => {
        module.addEventListener('click', () => {
            const tableKey = module.dataset.table;
            const tableData = data[tableKey];
            
            tableTitle.textContent = module.textContent;
            renderTable(tableData);

            tableContainer.classList.remove('hidden');
        });
    });

    function renderTable(data) {
        const [headers, ...rows] = data;
        
        const thead = dataTable.querySelector('thead');
        const tbody = dataTable.querySelector('tbody');

        thead.innerHTML = `<tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>`;
        tbody.innerHTML = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
    }
});
