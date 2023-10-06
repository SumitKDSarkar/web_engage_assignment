function displayUserData(data) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  data.forEach((user) => {
    const userInfoDiv = document.createElement("div");
    userInfoDiv.classList.add("user-info");

    if (user.id % 2 === 0) {
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("info-item");
      nameDiv.textContent = `Name: ${user.name}`;

      const emailDiv = document.createElement("div");
      emailDiv.classList.add("info-item");
      emailDiv.textContent = `Email: ${user.email}`;

      const usernameDiv = document.createElement("div");
      usernameDiv.classList.add("info-item");
      usernameDiv.textContent = `Username: ${user.username}`;

      const catchPhrase = user.company.catchPhrase.substring(0, 15);
      const catchPhraseDiv = document.createElement("div");
      catchPhraseDiv.classList.add("info-item");
      catchPhraseDiv.textContent = `CatchPhrase: ${catchPhrase}`;

      userInfoDiv.appendChild(nameDiv);
      userInfoDiv.appendChild(emailDiv);
      userInfoDiv.appendChild(usernameDiv);
      userInfoDiv.appendChild(catchPhraseDiv);
    } else {
      const oddDiv = document.createElement("div");
      oddDiv.classList.add("odd-info");
      oddDiv.textContent = `I'm Odd - The Zipcode and Geo of cityname ${user.address.city} is: ${user.address.zipcode} and ${user.address.geo.lat}, ${user.address.geo.lng}`;
      userInfoDiv.appendChild(oddDiv);
    }

    userList.appendChild(userInfoDiv);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    displayUserData(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
