
        var acc = document.getElementsByClassName("acordeon");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }



//Por El Chacal ([email protected])
var NS4 = (document.layers);
var IE4 = (document.all);
var win = window; // Con frames usar top.nombre.window;
var n = 0;

function BuscarPalabras(str)
{
var txt, i, found;
if (str == "")
return false;

if (NS4) {
if (!win.find(str))
while(win.find(str, false, true))
n++;
else
n++;

// No se encuentra en ninguna parte y envia un mensaje.
if (n == 0)
alert("No se encuentra.");
}

if (IE4) {
txt = win.document.body.createTextRange();
// Encuentra la coincidencia desde el inicio de pagina.
for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
txt.moveStart("character", 1);
txt.moveEnd("textedit");
}

// Si lo encuentra, marca el resultado y mueve la barra de desplazamiento
// para mostrarlo.
if (found) {
txt.moveStart("character", -1);
txt.findText(str);
txt.select();
txt.scrollIntoView();
n++;
}
// De otra manera regresa al inicio de la página para buscar otra coinsidencia
else {
if (n > 0) {
n = 0;
BuscarPalabras(str);
}
// No se encuentra en ninguna parte envia un mensaje.
else
alert("No se encontró.");
}
}
return false;
}

