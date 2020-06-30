window.onload=function(){
    var tanto = document.getElementById('tanto')
    var de = document.getElementById('de')
    var resultado = document.getElementById('resultado')
    var form = document.getElementById('calcularCalculo')

    function Porcentaje (tanto, de) {
       console.log(tanto / 100 * de)
    }

    form.addEventListener('submit', function() {
        if (!tanto.value || de.value) {
            alert('No seas pelotudo y pone números en los inputs')
        } else {
        var x = tanto.value
        var y = de.value

        x = x.toString()
        y = y.toString()
        }

        console.log(x / 100 * y)
    })
}