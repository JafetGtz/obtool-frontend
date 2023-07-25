function iniciar_sesion() {
  // Obtiene los valores de los campos de usuario y contraseña
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  // Comprueba si los campos están vacíos
  if (usuario.length === 0 || password.length === 0) {
    // Muestra la alerta de advertencia
    mostrarAlerta('Los campos no pueden estar vacios');
  } else {
    login(usuario, password);
  }

  // Si los campos no están vacíos, redirige a la página dashboard.html enviando los parámetros
}

const login = async (usuario, password) => {
  var formData = new FormData();
  formData.append("usuario", usuario);
  formData.append("password", password);

  try {
    const response = await fetch("https:ruta-de-login", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // La solicitud fue exitosa, redirige al dashboard
      window.location.href = "dashboard.html";
    } else {
      // La solicitud no fue exitosa, muestra un mensaje de error
      mostrarAlerta("Error en el inicio de sesión.");
      window.location.href = "dashboard.html";
    }
  } catch (error) {
    // Error de red o algo salió mal con la solicitud
    mostrarAlerta("Error en la conexión.");
    console.error("Error:", error);
    window.location.href = "dashboard.html";
  }
};

function mostrarAlerta(mensaje) {
  var alertaHTML = `
    <div class="alert alert-warning text-center" role="alert">
      <i class="material-icons opacity-10">warning</i>
      <br>
      ${mensaje}
    </div>
    `;
  document.getElementById("alerta").innerHTML = alertaHTML;
  document.getElementById("alerta").style.display = "block";

  setTimeout(function () {
    document.getElementById("alerta").style.display = "none";
  }, 2000);
  return;
}
