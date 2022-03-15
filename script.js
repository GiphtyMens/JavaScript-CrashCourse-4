fetch("http://localhost:3000/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// asyncronous(takes longer time to perform), syncronous(normal time to run)
const url = "http://localhost:3000/users";

// Getting allUser
async function getAllUsers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
// getAllUsers();
// interpulate ${}
// Getting a section or one data
async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}

// getUser(2);

// Getting data we created on our own
let user = {
  firstName: "John",
  lastName: "Doe",
  userName: "JohnDoe",
  email: "john.doe@gmail.com",
  gender: "male",
};
// by default it is GET but we use POST here
// Ways of sending data includes in block, in text, video, image etc but we want in json form
// JASON.stringify means convert it in a big string for us to use
async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
// createUser(user);

const data = {
    email: "john.doe5@email.com",
};

// in UPDATE we need to first GET the information first
// updateUser
async function updateUser(userId, userData) {
    const response = await fetch(`${url}/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  updateUser(10, data);
  
// Delete function
async function deleteUser(userId, userData) {
    const response = await fetch(`${url}/${userId}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  // updateUser(data);
  

