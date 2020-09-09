class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const createdAt = user.created_at.slice(0, 10);
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-primary">Following: ${user.following}</span>

                <br><br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company} </li>
                    <li class="list-group-item">Website/Blog: ${user.blog} </li>
                    <li class="list-group-item">Location: ${user.location} </li>
                    <li class="list-group-item">Member Since: ${createdAt} </li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        
        `;
  }
  //show Repos

  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
        <div class="row">
            <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>

                <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                <span class="badge badge-success">Fork: ${repo.forks_count}</span>

            </div>
        </div>
    </div>
        `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  //show alert message
  showAlert(message, className) {
    //clear any remaining alert messages
    this.clearAlert();
    //create div
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));

    //get parentElement
    const container = document.querySelector(".searchContainer");
    const searchBox = document.querySelector(".search");
    container.insertBefore(div, searchBox);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  };
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
