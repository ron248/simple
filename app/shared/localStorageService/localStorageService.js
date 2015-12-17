app.factory('localStorage', function($window){
    return{
        set: function(key, value){
            $window.localStorage[key] = JSON.stringify(value);
        },
        get: function(key){
            try{
                return JSON.parse($window.localStorage[key]);
            }
            catch(err){
                $window.localStorage[key] = JSON.stringify([]);
            }
        }
    }
})