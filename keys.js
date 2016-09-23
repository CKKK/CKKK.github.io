// This module stores the parse keys
// It is in .gitignore in order to keep them secret
// You will need to sign up for parse and use your own keys
// Accounts are free at www.parse.com
//
// The keys can be accessed by including the keys module and 
// calling KeySvc.key1, KeySvc.key2
angular.module('keys', [])

.factory('KeySvc', function() {
    return {
        //App Key
        key1:"ZVQPgkiNjlJ7Sz05HOv9tbjKysjCZpDB8iV8mSQI",
        //JavaScript Key
        key2:"UPQQogWQZAEUtAcVQoqkaWtBcIy9P9BNdwHQ5Y26",
        //REST API Key
        key3:"m16xqSt6DjlDpiTVeXRwhOpCgIG4rf6ioxLWNFrH"
    };
});
