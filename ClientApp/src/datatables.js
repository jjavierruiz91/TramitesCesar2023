


setTimeout(function () {
	$('#table_id').DataTable({

		"columnDefs": [{
			"targets": 0
		}],
		language: {
			"sProcessing": "Procesando...",
			"sLengthMenu": "Mostrar _MENU_ resultados",
			"sZeroRecords": "No se encontraron resultados",
			"sEmptyTable": "Ningún dato disponible en esta tabla",
			"sInfo": "Mostrando resultados _PAGE_ de _PAGES_",
			"sInfoEmpty": "Mostrando resultados del 0 al 0",
			"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
			"sSearch": "Buscar:",
			"sLoadingRecords": "Cargando...",
			"oPaginate": {
				"sFirst": "Primero",
				"sLast": "Último",
				"sNext": "Siguiente",
				"sPrevious": "Anterior"
			},
		}
	});
}, 3000);





 
// Custom filtering function which will search data in column four between two values
 

