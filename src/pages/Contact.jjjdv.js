import wixCRM from 'wix-crm';

$w.onReady(() => {
  $w('#contactForm').onSubmit(() => {
    const { name, email, message } = $w('#contactForm').value;

    wixCRM.emailContact('CONTACT_FORM', {
      fields: {
        name,
        email,
        message,
      },
    })
    .then(() => {
      $w('#successMessage').text = "Thank you for reaching out!";
    })
    .catch(() => {
      $w('#errorMessage').text = "Something went wrong. Please try again.";
    });
  });
});
