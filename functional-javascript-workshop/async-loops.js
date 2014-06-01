function loadUsers(userIds, load, done) {
  var users = [],
      pending = userIds.length;

  userIds.forEach(function(id, index) {
    load(id, function(result) {
      users[index] = result;
      pending--;
      if(pending === 0)
        done(users);
    });
  });
}

module.exports = loadUsers;
