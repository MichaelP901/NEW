document.addEventListener('DOMContentLoaded', () => {

    // Check for error message in query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const errorMessage = urlParams.get('error');
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-message').style.display = "block";

    }

  
});