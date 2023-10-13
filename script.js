// Function to hide the preloader
function hidePreloader() {
    var preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 500); // Adjust the delay as needed
  }
  
  // Attach an event listener to run the hidePreloader function when the page is fully loaded.
  window.addEventListener('load', hidePreloader);

  function showPreloader() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'flex'; // Display the preloader
  }
  
  // Attach an event listener to run the showPreloader function when the page starts loading.
  document.addEventListener('DOMContentLoaded', showPreloader);

  // Function to show the preloader
function showPreloader() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'flex'; // Display the preloader
  
    // Hide the preloader and show the page content after a delay
    setTimeout(function () {
      preloader.style.display = 'none';
      document.body.style.visibility = 'visible'; // Show the page content
    }, 2000); // Adjust the delay as needed
  }
  
  // Attach an event listener to run the showPreloader function when the page starts loading.
  document.addEventListener('DOMContentLoaded', showPreloader);
  