app.factory('userFactory', [function() {
  function UserConstructor() {
    var users = [
      {
      name: "Mike"
    },
      {
      name: "Jim",
      }
  ];
    this.index = function(functionPassedByControllerAsAnArgToIndex) {
      if (typeof(functionPassedByControllerAsAnArgToIndex) === 'function') {
        functionPassedByControllerAsAnArgToIndex(users);
      }
    };
    this.create = function(newUser, functionPassedByControllerAsAnArgToCreate) {
      if (typeof(newUser) === 'object') {
        users.push(newUser)
      }
      if (typeof(functionPassedByControllerAsAnArgToCreate) === 'function') {
        functionPassedByControllerAsAnArgToCreate(users);
      }
    };
    this.update = function(updateUser, idx, functionPassedByControllerAsAnArgToUpdate) {
      if (users[idx]) {
        for (var key in updateUser) {
          users[idx][key] = updateUser[key];
        }
      }
      if (typeof(functionPassedByControllerAsAnArgToUpdate) === 'function') {
        functionPassedByControllerAsAnArgToUpdate(users[idx]);
      }
    }
    this.show = function(idx, functionPassedByControllerAsAnArgToShow) {
      if (typeof(functionPassedByControllerAsAnArgToShow) === 'function') {
        functionPassedByControllerAsAnArgToShow(users[idx]);
      }
    }
    this.delete = function(idx, functionPassedByControllerAsAnArgToDelete) {
      if (users[idx]) {
        users.splice(idx, 1);
      }
      if (typeof(functionPassedByControllerAsAnArgToDelete) === 'function') {
        functionPassedByControllerAsAnArgToDelete(users);
      }
    }
  }

return (new UserConstructor());
}]);
