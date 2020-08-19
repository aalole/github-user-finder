// search input
const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

// search input eventListener
searchUser.addEventListener("keyup", (e) => {
  const userInput = e.target.value;
  if (userInput !== "") {
    // console.log(userInput)
    // make http call
    github.getUser(userInput).then((data) => {
     
      if (data.profile.message === "Not Found") {
        //alert Not Found
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear the userInput
    ui.clearProfile();
  }
});
