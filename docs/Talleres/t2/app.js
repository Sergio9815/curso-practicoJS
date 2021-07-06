//  PRECIOS Y DESCUENTOS
// ---------------------------------------------------------------------------

function calcularDescuentos(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento
  const precioTotal = (precio * porcentajePrecioDescuento) / 100
  return precioTotal;
}

const btn_CalcularDesc = document.getElementById('CalcularDesc')
const result = document.getElementById('main__result')

btn_CalcularDesc.addEventListener('click', function descuentos() {
  const precio = document.getElementById('inputPrecio')
  const desc = document.getElementById('inputDesc')
  let data = calcularDescuentos(parseFloat(precio.value), parseFloat(desc.value))

  result.innerHTML = `PRECIO A PAGAR: <br> $ ${data.toFixed(2)}`
})
