  document.addEventListener("DOMContentLoaded", function() {
    // Select the container div
    var container = document.querySelector('.open_position');

    // Check if it contains the "No open positions." text
    if (container.querySelector('.w-dyn-empty')) {
      // Hide the container if the "No open positions." text is present
      container.style.display = 'none';
    } else {
      // Show the container if it has other content
      container.style.display = 'block';
    }
  });
