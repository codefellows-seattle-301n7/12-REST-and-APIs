'use strict';
// console.log('hello from repo.js')
(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    $.get('https://api.github.com/user?access_token=' + window.gitToken)
    .then(user => {
      $.get(user.repos_url + '?access_token=' + window.gitToken)
        .then(repoArr => {
          repos.all = Array.from(repoArr);
          callback(repos);
        });
    }), error => {
      console.log(error);
    };
  }, error => {
    console.log(error);
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
