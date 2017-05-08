app.factory('wallFactory', ['$http', function($http){
    var factory = {};
    factory.getMessages = function(callback) {
        $http.get('/messages')
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.enter = function(user, callback){
        $http.post("/user/create", user)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    ///////
    factory.createMessage = function(message, id, callback){
        $http.post("/messages/"+id+"/create", message)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
    }
    ///////////
    factory.createComment = function(comment, user_id, message_id, callback){
        $http.post('/'+user_id+'/messages/'+message_id+'/create', comment)
        .then(function(returned_data){
            if(typeof(callback) == "function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }


    return factory;
}])
