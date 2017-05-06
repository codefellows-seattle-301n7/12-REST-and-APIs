'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    console.log("HEEEEYYYY!");
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    $.get('https://api.github.com/users/maslovai/repos?access_token=' + window.githubToken)
    .then(results => {
      console.log(repos);
      results.forEach(obj=> {
        repos.all.push(obj)
      })
      callback(repos);
    },
    error => {
      console.log(error);
    });
  }
  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);













//     $.ajax({
//       url: 'https://api.github.com/user/repos?type=owner',
//       method: 'GET',
//       headers: {
//       Authorization: `token ${githubToken}`
//       }
//     })
// .then(console.log
//   // data => data.map(repo=> $('#repo-template').append(`<p>data</p>`)),
//   // err => console.log(err)
// );
