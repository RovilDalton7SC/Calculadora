function Sumar()
        {
            var n1, n2, suma;
            // Leer n1, n2
            n1 = document.getElementById("txtNro1").value;
            n2 = document.getElementById("txtNro2").value;
            suma = parseFloat(n1) + parseFloat(n2);
            // Escribir suma
            document.getElementById("lblResultado").innerHTML = "La suma es: " + suma;
        }

function Restar()
        {
            var n1, n2, resta;
            // Leer n1, n2
            n1 = document.getElementById("txtNro1").value;
            n2 = document.getElementById("txtNro2").value;
            resta = parseFloat(n1) - parseFloat(n2);
            
            document.getElementById("lblResultado").innerHTML = "La resta es: " + resta;
        }
        
function Multiplicar()
        {
            var n1, n2, mult;
            // Leer n1, n2
            n1 = document.getElementById("txtNro1").value;
            n2 = document.getElementById("txtNro2").value;
            mult = parseFloat(n1) * parseFloat(n2);
            
            document.getElementById("lblResultado").innerHTML = "La multilplicacion es: " + mult;
        }

function Dividir()
        {
            var n1, n2, div;
            // Leer n1, n2
            n1 = document.getElementById("txtNro1").value;
            n2 = document.getElementById("txtNro2").value;
            div = parseFloat(n1) / parseFloat(n2);
            
            document.getElementById("lblResultado").innerHTML = "La division es: " + div;
        }

function Factorial() {
            var n1;
            n1 = document.getElementById("txtNro1").value;
            var total = 1;
            for (i = 1; i <= parseInt(n1); i++) {
                total = total * i;
            }
            document.getElementById("lblResultado").innerHTML = "El factorial de"+n1+ " es :" + total;
        }

function Potencia()
        {
            var n1, n2, po;
            // Leer n1, n2
            n1 = document.getElementById("txtNro1").value;
            n2 = document.getElementById("txtNro2").value;
            po = parseFloat(n1) ** parseFloat(n2);
            
            document.getElementById("lblResultado").innerHTML = "La potencia es: " + po;
        }

function Seno()
        {
            var n1, sen;
            n1 = document.getElementById("txtNro1").value;
            n = parseFloat(n1);
            sen = Math.round(Math.sin(n));
            document.getElementById("lblResultado").innerHTML = "El Seno es: " + sen;
        }
        
function Tangente()
        {
            var n1, tang;
            n1 = document.getElementById("txtNro1").value;
            n = parseFloat(n1);
            tang = Math.tanh(n);
            document.getElementById("lblResultado").innerHTML = "La Tangente es: " + tang;
        }

function Inverso()
        {
            var n1;
            n1 = document.getElementById("txtNro1").value;
            inver = parseFloat(n1)**-1
            inver = `1/${n1}`
            document.getElementById("lblResultado").innerHTML = "El inverso es: " + inver;
        }

function Porcentaje()
        {
            var n1, n2, porcen, total;
            n1 = document.getElementById("txtNro1").value;
            n2 = document.getElementById("txtNro2").value;
            porcen = parseFloat(n2)/100;
            total = parseFloat(n1)* porcen;

            document.getElementById("lblResultado").innerHTML = "El porcentaje es:" + total;
        }

