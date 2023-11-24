const nameCheck = (input) => /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(input.value.trim())

const telephoneCheck = (input) =>
  /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/.test(input.value)

const formValidate = (form) => {
  let errors = 0
  const nameInput = form.querySelector('.user-name')
  const phoneInput = form.querySelector('.user-phone')
  const checkboxInput = form.querySelector('#checkbox')

  if (!nameCheck(nameInput)) {
    nameInput.classList.add('error')
    errors++
  }

  if (!telephoneCheck(phoneInput)) {
    phoneInput.classList.add('error')
    errors++
  }

  if (checkboxInput.checked === false) {
    checkboxInput.classList.add('error-checkbox')
    errors++
  }

  return errors
}

const form = document.querySelector('#user-data')

form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  let errors = formValidate(form)
  if (errors === 0) {
    let formData = new FormData(form)
    console.log(formData)
    // let response = fetch('mail.php', {
    //   method: 'POST',
    //   body: formData,
    // })
    // if (response.ok) {
    //   console.log('форма отправлена успешно')
    // } else {
    //   alert('Не удается установить соединение. Поробуйте еще раз')
    // }
  }
})
