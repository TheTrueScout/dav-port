

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offset = window.innerHeight / 2 - target.offsetHeight / 2;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});


// form

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const phoneNumber = document.getElementById('phone');
const emailAddress = document.getElementById('email');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');




function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br>
    Email: ${emailAddress.value}<br>
    Phone Number: ${phoneNumber.value}<br>
    Message: ${mess.value}`;


    Email.send({
      SecureToken : "385365aa-c8a4-4e26-b842-e738c32e564f",
      To : 'reeko3d@gmail.com',
      From : "reeko3d@gmail.com",
      Subject : subject.value,
      Body : bodyMessage
  }).then(
    message => {
      if (message == 'OK') {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully.",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll('.item');

  for (const item of items) {
    if (item.value === '') {
      item.classList.add('error');
      item.parentElement.classList.add('error');
      item.parentElement.parentElement.classList.add('error');
      item.previousElementSibling.classList.add('error');

      item.classList.remove('success');
      item.parentElement.classList.remove('success');
      item.parentElement.parentElement.classList.remove('success');
      item.previousElementSibling.classList.remove('success');
    }

    if (item.value != '') {

      item.classList.add('success');
      item.parentElement.classList.add('success');
      item.parentElement.parentElement.classList.add('success');
      item.previousElementSibling.classList.add('success');

      item.classList.remove('error');
      item.parentElement.classList.remove('error');
      item.parentElement.parentElement.classList.remove('error');
      item.previousElementSibling.classList.remove('error');
    }

    if (emailAddress != '') {
      checkEmail();
    };

    emailAddress.addEventListener('keyup', () => {
      checkEmail();
    });

    if (phoneNumber != '') {
      checkPhone();
    };

    phoneNumber.addEventListener('keyup', () => {
      checkPhone();
    });

    item.addEventListener('keyup', () => {
      if (item.value !== '') {
        item.classList.remove('error');
        item.parentElement.classList.remove('error');
        item.parentElement.parentElement.classList.remove('error');
        item.previousElementSibling.classList.remove('error');

        item.classList.add('success');
        item.parentElement.classList.add('success');
        item.parentElement.parentElement.classList.add('success');
        item.previousElementSibling.classList.add('success');
      } else {
        item.classList.remove('success');
        item.parentElement.classList.remove('success');
        item.parentElement.parentElement.classList.remove('success');
        item.previousElementSibling.classList.remove('success');

        item.classList.add('error');
        item.parentElement.classList.add('error');
        item.parentElement.parentElement.classList.add('error');
        item.previousElementSibling.classList.add('error');
      }
    })
  }


}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTextEmail = document.querySelector('.error-text.email')

  if (!emailAddress.value.match(emailRegex)) {
    emailAddress.classList.remove('success');
    emailAddress.parentElement.classList.remove('success');
    emailAddress.parentElement.parentElement.classList.remove('success');
    emailAddress.previousElementSibling.classList.remove('success');
    
    emailAddress.classList.add('error');
    emailAddress.parentElement.classList.add('error');
    emailAddress.parentElement.parentElement.classList.add('error');
    emailAddress.previousElementSibling.classList.add('error');

    if (emailAddress.value != '') {
        errorTextEmail.innerText = 'Please enter a valid email.'
    } else {
      errorTextEmail.innerText = "Email can't be blank."
    }


  } else {
    emailAddress.classList.remove('error');
    emailAddress.parentElement.classList.remove('error');
    emailAddress.parentElement.parentElement.classList.remove('error');
    emailAddress.previousElementSibling.classList.remove('error');

    emailAddress.classList.add('success');
    emailAddress.parentElement.classList.add('success');
    emailAddress.parentElement.parentElement.classList.add('success');
    emailAddress.previousElementSibling.classList.add('success');
  }
};

function checkPhone() {
  const phoneRegex = /\d/

  if (phoneNumber.value.match(phoneRegex)) {

    phoneNumber.classList.add('success');
    phoneNumber.parentElement.classList.add('success');
    phoneNumber.parentElement.parentElement.classList.add('success')
    phoneNumber.previousElementSibling.classList.add('success')
  } else {
    phoneNumber.classList.remove('success');
    phoneNumber.parentElement.classList.remove('success');
    phoneNumber.parentElement.parentElement.classList.remove('success')
    phoneNumber.previousElementSibling.classList.remove('success')
  }
}

form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  checkInputs();

  if (!fullName.classList.contains('error') 
    && !emailAddress.classList.contains('error') 
    && !subject.classList.contains('error') 
    && !mess.classList.contains('error')) {
      sendEmail();

      form.reset();
      return false;
  }

})