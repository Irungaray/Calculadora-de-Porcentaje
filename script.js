    var tanto = document.getElementById('tanto')
    var de = document.getElementById('de')
    var resultado = document.getElementById('resultado')
    var form = document.getElementById('calcularCalculo')

    form.addEventListener('submit', function(event) {
        if (!tanto.value || !de.value) {
            alert('No seas pelotudo y pone números en los inputs')
        } else {
        var x = parseFloat(tanto.value)
        var y = parseFloat(de.value)

        var porcentajeFinal = x * y / 100

        resultado.innerText = ("El " + x + "% de " + y + " es: " + porcentajeFinal + "%")
        }

        event.preventDefault()
    })