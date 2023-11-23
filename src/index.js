import '@/styles/main.scss'

const DESK_WIDTH = 1025
const subtitle = document.querySelector('#subtitle')
const firstLink = document.querySelector('#first-link')
const secondLink = document.querySelector('#second-link')
const tech = document.querySelector('#tech')
const prod = document.querySelector('#prod')

if (window.innerWidth < DESK_WIDTH) {
  subtitle.textContent = 'Ваш успех зависит от ваших действий'
} else {
  subtitle.textContent =
    'Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий'
}

if (window.innerWidth < DESK_WIDTH) {
  firstLink.textContent = 'Записаться'
} else {
  firstLink.textContent = 'Записаться на консультацию'
}

if (window.innerWidth < DESK_WIDTH) {
  secondLink.textContent = 'Заказать звонок'
} else {
  secondLink.textContent = 'Бесплатная консультация'
}

if (window.innerWidth < DESK_WIDTH) {
  tech.textContent = 'техники'
} else {
  tech.textContent = 'техник для достижения целей'
}

if (window.innerWidth < DESK_WIDTH) {
  prod.textContent = 'продуктивности'
} else {
  prod.textContent = 'увеличение личной продуктивности'
}
