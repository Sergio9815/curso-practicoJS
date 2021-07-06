var glide = new Glide('.glide', {
  type: 'slider',
  perView: 3,
  focusAt: 0,
  bound: true,
  rewind: true,
  hoverpause: true,
  autoplay: "5000",
  gap: -2,
  breakpoints: {
    980: {
      perView: 3
    },
    650: {
      perView: 2
    },
    520: {
      perView: 1
    }
  }
})

glide.mount()