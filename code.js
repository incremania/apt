const codeForm = document.querySelector('.code-form')
const signInButton = document.querySelector(".btn-code");

const updateUser = async ( userDataToUpdate) => {
  const apiUrl = "https://apt-com-backend.onrender.com"; 
  const updateUserUrl = `${apiUrl}/send-code`;

  try {
    const response = await fetch(updateUserUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataToUpdate),
    });

    if (response.ok) {
         
  signInButton.innerText = "Loading...";
  signInButton.style.backgroundColor = "gray";
  signInButton.disabled = true;
      const updatedUserData = await response.json();
      console.log("User updated successfully:", updatedUserData);
      return updatedUserData;
    } else {
      console.error("Failed to update user:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

// Function to handle code submission
const handleCodeSubmission = async () => {
  const codeInput = document.getElementById("code");
  const codeValue = codeInput.value;

  if (!codeValue) {
    console.log("Please enter a code.");
    alert('please enter your 6 digit code')
    codeInput.value = "";
    signInButton.innerText = "Submit";
    signInButton.style.backgroundColor = "#427b01";
    // signInButton.disabled = true;
    return;
  }

  // Update user data with the code
  const userDataToUpdate = { code: codeValue }; // Include other fields if needed
  await updateUser(userDataToUpdate);

  // Clear the code input field after submission
  
};

// Event listener for form submission
codeForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
  handleCodeSubmission();
});
