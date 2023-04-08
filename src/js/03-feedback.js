import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputForm, 500));
refs.textarea.addEventListener('input', throttle(onInputForm, 500));

populateForm();

function onInputForm() {
  formData = {
    email: refs.input.value.trim(),
    message: refs.textarea.value   
  };
  // console.log('email:', refs.input.value);
  // console.log('message:', refs.textarea.value);
 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  formData = JSON.parse(savedMessage);

  if (savedMessage) {
    refs.input.value = formData.email;
    refs.textarea.value = formData.message;
    // console.log(savedMessage);
  }  
}

function onFormSubmit(evt) {
  evt.preventDefault();
  
  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }
  console.log('Отправляем форму', formData);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}





