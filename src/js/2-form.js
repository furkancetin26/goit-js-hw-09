const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';
let formData = {};

form.addEventListener('input', (event) => {
if (event.target.name === "email" || event.target.name === "message") {
   formData[event.target.name] = event.target.value;
   localStorage.setItem(key, JSON.stringify(formData))
}
})

const savedData = localStorage.getItem(key);

if(savedData){
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    formData = parsedData;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();  // Sayfanın yeniden yüklenmesini engelle
  
    // Veriyi konsola yazdır
    console.log({
      email: form.elements.email.value,
      message: form.elements.message.value,
    });
  
    // Formu ve localStorage'ı temizle
    localStorage.removeItem(key);
    form.reset();
  });