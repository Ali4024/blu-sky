
const form = document.getElementById('bookingForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const flight = document.getElementById('flight').value;

  if (flight === '') {
    alert('Please select a flight class.');
    return;
  }

  // Redirect to the appropriate page based on the selected flight class
  switch (flight) {
    case 'economic-degree':
     window.location.href = "index (2).HTML";
      break;
    case 'flight2':
      window.location.href = 'business_details.html';
      break;
    case 'flight3':
      window.location.href = 'first_class_details.html';
      break;
    default:
      alert('Invalid flight class.');
  }
});