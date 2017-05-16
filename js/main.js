function validateForm(){
	/* Escribe tú código aquí */

	//Nombre y Apellido
		 var valor = document.getElementById("name").value;
		 if( valor == null || valor.length == 0  || valor != valor.charAt(0).toUpperCase()){ // test.() Este método devuelve verdadero si se encuentra una coincidencia, de lo contrario devuelve false.
		/* var span = document.createElement("span");
		 var valorNombre = document.getElementById("name");
		 var valorPadre = valorNombre.parentNode;
		 valorPadre.appendChild(span);

		 var crearTexto = document.createTextNode("Ingresa tu nombre");
		 span.appendChild(crearTexto);
	 	 return span; */
		 alert("Ingrese su NOMBRE");


		var valorAp = document.getElementById("lastname").value;
		if( valorAp == null || valorAp.length == 0 || valorAp != /{a-z}/.test(valorAp)){
		/* var span1 = document.createElement("span");
		 var valorApellido = document.getElementById("apellido");
		 var valorPadre1 = valorApellido.parentNode;
		 valorPadre1.appendChild(span1);

		 var crearTexto = document.createTextNode("Ingresa tu apellido");
		 span.appendChild(crearTexto);
	 	 return span1; */
		alert("Ingrese su APELLIDO");
		}

		// Correo
		var valorCo = document.getElementById("input-email").value;
		if( valorCo == null || valorCo.length == 0 || valorCo != /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valorCo)){
		/* var span2 = document.createElement("span");
		 var valorCorreo = document.getElementById("correo");
		 var valorPadre2 = valorCorreo.parentNode;
		 valorPadre2.appendChild(span2);

		 var crearTexto = document.createTextNode("Ingresa tu correo");
		 span.appendChild(crearTexto);
		 return span2; */
		alert("Ingrese su ...@gmail.com");
		}

		// Contraseña
		var valorContra = document.getElementById("input-password").value;
		if( valorContra == null || valorContra.length == 0 || valorContra != /{6}/.test(valorCo) || valorContra == "password" || valorContra == "123456" || valorContra == "098754"){
		/* var span2 = document.createElement("span");
		 var valorCorreo = document.getElementById("correo");
		 var valorPadre2 = valorCorreo.parentNode;
		 valorPadre2.appendChild(span2);

		 var crearTexto = document.createTextNode("Ingresa tu correo");
		 span.appendChild(crearTexto);
		 return span2; */
		alert("Ingrese una CONTRASEÑA valida");
		}

		// Impresion
		var impre = document.getElementById("impresionF");


		if(valor.length == 0 & valorAp.length == 0 & valorCo.length == 0 & valorContra.length == 0){
			alert("Ingrese sus datos");
		}else{
			var seleccion = document.getElementById("seleccionF").value;
			var twitter = document.getElementById("input-social").value;
			var texto = ( "Nombre: " + valor + "<br>Apellido: " + valorAp + "<br>Correo: " + valorCo + "<br>Contraseña: " + valorContra + "<br>" + seleccion + "<br>" + twitter);
			impre.innerHTML = texto;
		}
}
