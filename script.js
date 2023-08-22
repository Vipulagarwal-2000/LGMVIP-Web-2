document.addEventListener("DOMContentLoaded", function () {
  const registerButton = document.getElementById("registerButton");
  const clearButton = document.getElementById("clearButton");
  const identityCard = document.getElementById("identityCard");
  const identityContent = document.querySelector(".identity-content");
  const registeredData = [];

  registerButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skillsSelect = document.getElementById("skills");
    const selectedSkills = Array.from(skillsSelect.options).filter(option => option.selected).map(option => option.value);
    const imageInput = document.getElementById("image");
    const image = imageInput.files.length > 0 ? imageInput.files[0] : null;
    const resumeInput = document.getElementById("resume");
    const resume = resumeInput.files.length > 0 ? resumeInput.files[0] : null;

    registeredData.push({ name, email, website, gender, skills: selectedSkills, image, resume });
    updateIdentityCard();
    document.getElementById("registrationForm").reset();
  });

  clearButton.addEventListener("click", function () {
    document.getElementById("registrationForm").reset();
  });

  function updateIdentityCard() {
    identityContent.innerHTML = "";
    for (let i = 0; i < registeredData.length; i++) {
      const dataEntry = document.createElement("div");
      dataEntry.className = "data-entry";
      const imageUrl = registeredData[i].image ? URL.createObjectURL(registeredData[i].image) : "";
      const resumeLink = registeredData[i].resume ? `<a href="${URL.createObjectURL(registeredData[i].resume)}" target="_blank">View Resume</a>` : "No Resume";
      dataEntry.innerHTML = `
        <div class="data-content">
          <h3>Data Entry ${i + 1}</h3>
          <p><strong>Name:</strong> ${registeredData[i].name}</p>
          <p><strong>Email:</strong> ${registeredData[i].email}</p>
          <p><strong>Website:</strong> ${registeredData[i].website}</p>
          <p><strong>Gender:</strong> ${registeredData[i].gender}</p>
          <p><strong>Skills:</strong> ${registeredData[i].skills.join(", ")}</p>
          <p><strong>Resume:</strong> ${resumeLink}</p>
          <button class="delete-button" data-index="${i}">Delete</button>
        </div>
        <div class="data-image">
          <img src="${imageUrl}" alt="Passport Photo">
        </div>
      `;
      identityContent.appendChild(dataEntry);
    }
    identityCard.style.display = "block";

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
      button.addEventListener("click", function () {
        const dataIndex = button.getAttribute("data-index");
        registeredData.splice(dataIndex, 1);
        updateIdentityCard();
      });
    });
  }
});
