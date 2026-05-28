// Grab the form and the success message
const form = document.getElementById('portfolio-form');
const successMsg = document.getElementById('form-success');

// Listen for the submit button click
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the page from reloading
  
  // Gather all the form data
  const formData = new FormData(form);
  
  // Send the data to Web3Forms
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.status === 200) {
      // If successful, show the green message and clear the form
      successMsg.style.display = 'block';
      form.reset();
      
      // Hide the success message after 5 seconds
      setTimeout(() => { 
        successMsg.style.display = 'none'; 
      }, 5000);
    } else {
      alert("Something went wrong. Please check your internet connection and try again!");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Something went wrong!");
  });
});
const form = document.getElementById('portfolio-form');

form.addEventListener('submit', function(e) {
  // 1. Stop the form from actually sending anything
  e.preventDefault(); 
  
  // 2. Instantly replace the entire form with your funny message!
  form.innerHTML = `
    <div style="text-align: center; padding: 2rem; background: var(--bg2, #111); border: 2px dashed #c8f04a; border-radius: 12px; animation: fadeIn 0.5s;">
      <h3 style="color: #c8f04a; font-size: 1.8rem; margin-bottom: 1rem;">Gotcha! 😂</h3>
      <p style="color: #f0ede8; font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">
        Why did you fill out all of this? I gave you my social media links right next to this! Come follow me there, buddy.
      </p>
      <p style="color: #888; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
        I made you type all that out for absolutely nothing because this message isn't going anywhere and no one can see it! 
        Thanks for reading this too, and giving me your attention. Ha ha ha!
      </p>
      <p style="color: #c8f04a; font-weight: bold; font-size: 1.2rem;">
        I know how to keep clients engaged and reading.<br>Book me now! 🚀
      </p>
    </div>
  `;
});
function submitForm() {
  // 1. Grab the giant div that holds all your input boxes
  const formContainer = document.querySelector('.contact-form');

  // 2. Instantly delete everything inside it and drop the joke message
  formContainer.innerHTML = `
    <div style="text-align: center; padding: 2rem; background: #111111; border: 2px dashed #c8f04a; border-radius: 12px; animation: fadeIn 0.5s;">
      <h3 style="color: #c8f04a; font-size: 1.8rem; margin-bottom: 1rem;">Gotcha! 😂</h3>
      <p style="color: #f0ede8; font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">
        Why did you fill out all of this? I gave you my social media links right next to this! Come follow me there, buddy.
      </p>
      <p style="color: #888888; font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
        I made you type all that out for absolutely nothing because this message isn't going anywhere and no one can see it! 
        Thanks for reading this too, and giving me your attention. Ha ha ha!
      </p>
      <p style="color: #c8f04a; font-weight: bold; font-size: 1.2rem;">
        I know how to keep clients engaged and reading.<br>Book me now! 🚀
      </p>
    </div>
  `;
}