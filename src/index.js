import '@/styles/main.scss'
import 'bootstrap/dist/js/bootstrap.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

// Определяем содержимое DOM элементов исходя из размеров экрана
const DESK_WIDTH = 1025
const subtitle = document.querySelector('#subtitle')
const firstLink = document.querySelector('#first-link')
const secondLink = document.querySelector('#second-link')
const tech = document.querySelector('#tech')
const prod = document.querySelector('#prod')

if (window.innerWidth < DESK_WIDTH) {
  subtitle.textContent = 'Ваш успех зависит от ваших действий'
  firstLink.textContent = 'Записаться'
  secondLink.textContent = 'Заказать звонок'
  tech.textContent = 'техники'
  prod.textContent = 'продуктивности'
} else {
  subtitle.textContent =
    'Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий'
  firstLink.textContent = 'Записаться на консультацию'
  secondLink.textContent = 'Бесплатная консультация'
  tech.textContent = 'техник для достижения целей'
  prod.textContent = 'увеличение личной продуктивности'
}

// Получаем сумму цифр даты и вставляем ее в DOM
const numberDomElement = document.querySelector('#numberDate')
let xhr1 = new XMLHttpRequest()
xhr1.open('GET', 'date.php', false)
xhr1.send()
const numberDate = xhr1.responseText

numberDomElement.textContent = `${numberDate}+`

// Получаем курс фунта стрерлинга
const moneyDomElement = document.querySelector('#money')
let xhr2 = new XMLHttpRequest()
xhr2.open('GET', 'gbr.php', false)
xhr2.send()
const moneyValue = xhr2.responseText
moneyDomElement.textContent = `${moneyValue}%`

// Валидация формы
const nameInput = document.querySelector('.user-name')
const phoneInput = document.querySelector('.user-phone')
const checkboxInput = document.querySelector('#checkbox')

if (localStorage.name) {
  nameInput.value = localStorage.name
}

if (localStorage.telephone) {
  phoneInput.value = localStorage.telephone
}

const nameCheck = (input) => /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(input.value.trim())

const telephoneCheck = (input) =>
  /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/.test(input.value)

const formValidate = () => {
  let errors = 0

  if (!nameCheck(nameInput)) {
    nameInput.classList.add('error')
    errors++
  } else {
    localStorage.setItem('name', nameInput.value)
  }

  if (!telephoneCheck(phoneInput)) {
    phoneInput.classList.add('error')
    errors++
  } else {
    localStorage.setItem('telephone', phoneInput.value)
  }

  if (checkboxInput.checked === false) {
    checkboxInput.classList.add('error-checkbox')
    errors++
  }

  return errors
}

const form = document.querySelector('#user-data')
const order = new bootstrap.Offcanvas('#offcanvasExample1')
const succesMsg = new bootstrap.Offcanvas('#offcanvasExample2')

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  let errors = formValidate(form)
  if (errors === 0) {
    let formData = new FormData(form)
    let response = fetch('send.php', {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      order.hide()
      succesMsg.show()
    } else {
      alert('Не удается установить соединение. Поробуйте еще раз')
    }
  }
})
