let widgetId1, widgetId2;

window.onRecaptchaLoad = function () {
  widgetId1 = grecaptcha.render('recaptcha1', {
    sitekey: 'YOUR_SITE_KEY',
    size: 'invisible',
    callback: onSubmitForm1,   // fires after token retrieved for form 1
  });
  widgetId2 = grecaptcha.render('recaptcha2', {
    sitekey: 'YOUR_SITE_KEY',
    size: 'invisible',
    callback: onSubmitForm2,
  });
};

// trigger the correct widget on each form's submit
document.getElementById('form1').addEventListener('submit', e => {
  e.preventDefault();
  grecaptcha.execute(widgetId1);      // <-- pass the ID
});
document.getElementById('form2').addEventListener('submit', e => {
  e.preventDefault();
  grecaptcha.execute(widgetId2);      // <-- pass the ID
});

function onSubmitForm1(token){ document.getElementById('form1').submit(); }
function onSubmitForm2(token){ document.getElementById('form2').submit(); }
