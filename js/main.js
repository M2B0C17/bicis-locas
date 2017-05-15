function validateForm(){
	/* Escribe tú código aquí */

	//Nombre y Apellido
	var valor = document.getElementById("name").value;
	if( valor == null || valor.length == 0  /*|| /{A-Z}/.test(valor) valor != valor.charAt(0).toUpperCase()*/){ // revisar! no funciona :S
	 /*alert("Ingrese su NOMBRE");*/
	 var span = document.createElement("span");
	 var valorNombre = document.getElementById("name");
	 var valorPadre = valorNombre.parentNode;
	 valorPadre.appendChild(span);

	 var crearTexto = document.createTextNode("holi");
	 span.appendChild(crearTexto);
	 return span;
	}else {
		alert("holi");
	}

/*
	var valorAp = document.getElementById("lastname").value;
	if( valorAp == null || valorAp.length == 0 || /{a-z}/.test(valorAp)){
	alert("Ingrese su APELLIDO");
	}

	// Correo
	var valorCo = document.getElementById("input-email").value;
	if( valorCo == null || valorCo.length == 0 || valorCo != /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valorCo)){
	alert("Ingrese su ...@gmail.com");
	}

	// Contraseña
*/
}
