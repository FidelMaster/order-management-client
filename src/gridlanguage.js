export default class {
  static options = {
    filterType: "checkbox",
    selectableRowsHideCheckboxes: true,
    selectableRows: "none",
    print: false,
    textLabels: {
      body: {
        noMatch: "No se encontraron datos",
        toolTip: "Ordenar",
        columnHeaderTooltip: (column) => `Ordenar por ${column.label}`,
      },
      pagination: {
        next: "Siguiente",
        previous: "Anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Descargar",
        print: "Imprimir",
        viewColumns: "Ver Columnas",
        filterTable: "Filtrar tabla",
      },
      filter: {
        all: "TODOS",
        title: "FILTROS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Mostrar Columnas",
        titleAria: "Mostrar/Ocultar Columnas",
      },
      selectedRows: {
        text: "fila(s) seleccionada",
        delete: "Borrar",
        deleteAria: "Borrar filas seleccionadas",
      },
    },
  };
}
