'use strict';

function GitHub () {
  this.updateStars = function update (tag, stars) {
    document.getElementById(tag).innerHTML = stars + ' &#9733;';
  };
  this.allStars = function all () {
    return document.getElementsByClassName('github-stars');
  };
  this.loadStars = function (tag, user, repo) {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (this.status <= 400) {
        var json = JSON.parse(this.response);
        var stars = json.stargazers_count;
        self.updateStars(tag, stars);
      }
    };
    xhr.open('GET', 'https://api.github.com/repos/' + user + '/' + repo);
    xhr.send();
  };
  this.getStars = function getStars () {
    [].forEach.call(this.allStars(), function (item) {
      this.loadStars(item.id, item.dataset.githubuser, item.dataset.githubrepo);
    }.bind(this));
  };
};

document.addEventListener('DOMContentLoaded', function () {
  new GitHub().getStars();
}, false);
