// Function to open a specific tab
function openTab(event, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => content.style.display = 'none');
  
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach((button) => button.classList.remove('active'));
  
    // Show the clicked tab's content and add active class to the clicked button
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }
  
  // Open the Home tab by default on page load
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab-btn').click();
  });
  