document.getElementById('form2').addEventListener('submit', e => {
  e.preventDefault();
  grecaptcha.ready(() => {
    grecaptcha.execute('SITE_KEY', {action: 'form2'}).then(token => {
      document.querySelector('#form2 [name="g-recaptcha-response"]').value = token;
      document.getElementById('form2').submit();
    });
  });
});
