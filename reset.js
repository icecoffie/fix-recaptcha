let submitting = false;

function guard(widgetId, buttonEl) {
  if (submitting) return false;   // ignore the second click entirely
  submitting = true;
  buttonEl.disabled = true;
  grecaptcha.execute(widgetId);
  return true;
}

document.getElementById('form1').addEventListener('submit', e => {
  e.preventDefault();
  guard(widgetId1, e.submitter);
});
document.getElementById('form2').addEventListener('submit', e => {
  e.preventDefault();
  guard(widgetId2, e.submitter);
});

// in each callback, on success submit; on any error, release the lock
function onSubmitForm1(token){ /* AJAX post, then: */ }
function onSubmitForm2(token){ /* AJAX post, then: */ }

// call this after an AJAX submit finishes OR fails, so the user isn't stuck
function release(widgetId, buttonEl) {
  submitting = false;
  buttonEl.disabled = false;
  grecaptcha.reset(widgetId);   // tokens are single-use + expire in ~2 min
}
