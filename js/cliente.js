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


const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}

const getUnits = async  () => {
    const endpoint = 'https://obtool.bustrax.io/unidades_negocio';
    try {
      const response = await fetch(endpoint, {
        headers: headers
      });
  
      // Verificar el estado de la respuesta
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      // Parsear la respuesta a JSON
      const data = await response.json();
      console.log(data, 'data')
      return data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }


  getUnits()




  async function populateSelectWithUnidades() {
    try {
      // Obtener los datos usando el método fetchData que definimos antes
      const data = await getUnits();
  
      // Obtener la referencia al elemento select
      const selectElement = document.getElementById('tipoCliente');
  
      // Iterar sobre los objetos del array "unidades" y crear las opciones
      data.contenido.forEach((unidad) => {
        const option = document.createElement('option');
        option.value = unidad.code; // Usamos el campo "code" como valor de la opción
        option.textContent = unidad.description; // Usamos el campo "description" como texto de la opción
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error('Error al llenar el select:', error);
    }
  }



const sendData =  async ( {  }) => {
            console.log('Enviar datos formulario')
}

