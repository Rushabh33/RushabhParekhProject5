export const addDefaultSrc = (e, placeHolderImage) => {
  e.target.src = placeHolderImage;
}

export const toggleClassList = (element, className) => {
  console.log(element, className)
  element.classList.toggle(`${className}`)
}