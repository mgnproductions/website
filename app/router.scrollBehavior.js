export default function (to, from, savedPosition) {
  console.log('this is the hash', to.hash)
  return new Promise((resolve, reject) => {
    if (to.hash) {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          behavior: 'smooth',
          offset: { y: 150 },
        })
      }, 10)
    }
  })
}
