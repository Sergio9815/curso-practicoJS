const coupons = [
  {
    name: 'JSCoupon',
    discount: 15
  },
  {
    name: 'PL-12345',
    discount: 25
  },
  {
    name: 'PlatziCoupon',
    discount: 45
  },
]

function descuentosConCupones(price, coupon) {
  const value = coupons.find((element) => element.name === coupon)
  const percentDiscount = 100 - value.discount
  const finalPrice = (price * percentDiscount) / 100
  return finalPrice;
}

const result = descuentosConCupones(100, 'JSCoupon')
console.log(result);