export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    if (counter === 16)
    {
      alert("Vous avez atteint 15")
      setCounter(0)
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))

  setCounter(0)

}
