$(function() {
  var limit = 4           // how many repos to list
  var login = 'lachie' // your username
  $.getJSON('http://github.com/api/v1/json/' + login + '?callback=?', function(data) {
    var repos = $.grep(data.user.repositories, function() {
      return !this.fork
    })
    repos.sort(function(a, b) {
      return b.watchers - a.watchers
    })
    $.each(repos.reverse().slice(0, limit), function() {
      $('#repos').append('<li class="repo"><a href="' + this.url + '">&nbsp;- ' + this.name + '</a></li>')
    })
  })        
})
