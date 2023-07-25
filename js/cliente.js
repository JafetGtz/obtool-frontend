function guardar() {
  var unidadNegocio = document.getElementById("unidadNegocio").value;
  var codigoPlanta = document.getElementById("codigoPlanta").value;
  var descripcion = document.getElementById("descripcion").value;
  var tipoCliente = document.getElementById("tipoCliente").value;
  var estado = document.getElementById("estado").value;

  // Aquí puedes agregar la lógica para guardar los datos en el servidor o hacer lo que necesites con los valores recopilados.
  console.log("Unidad de Negocio:", unidadNegocio);
  console.log("Código Clave de Planta:", codigoPlanta);
  console.log("Descripción:", descripcion);
  console.log("Tipo de Cliente:", tipoCliente);
  console.log("Estado:", estado);
  if (
    unidadNegocio === "" ||
    codigoPlanta === "" ||
    descripcion === "" ||
    tipoCliente === "" ||
    estado === ""
  ) {
    alert("Por favor, completa todos los campos.");
    return;
  }
}
