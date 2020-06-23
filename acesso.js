function getList() {
	alert("acess");
	var texto;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange= function() {
		if(this.readyState==4 && this.status!=200) {
			alert("Erro");
		} if(this.readyState==4 && this.status==200) {
			var content = this.responseText;
			var value = JSON.parse(content);
			
			alert(value);
			
			texto = Object.values(value);
			
			alert(texto);
			
			var p = document.getElementById("cep");
			p.innerHTML = texto;
		}
	}
	xhttp.open("GET","https://viacep.com.br/ws/01001000/json/",true);
	xhttp.send();
	
}
getList();
