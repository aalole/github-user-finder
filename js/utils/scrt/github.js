class Github {
  constructor() {
    this.client_id = "81bb964c1317436baa79";
    this.client_secret = "b440c0df3fa73cfc44654878e8e66cb7ca35bb64";
    this.repos_count = 6;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

	const profile = await profileResponse.json();
	const repos = await repoResponse.json();

    return {
	  profile,
	  repos 
    };
  }
}
