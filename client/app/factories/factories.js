angular.module('pledgr.factories', [])

.factory('Auth', function($http, $window) {
  var signup = function(data) {
    console.log(data);
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: data
    })
    .then(function(resp) {
      $window.sessionStorage.token = resp.data.token;
    });
  };

  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function(resp) {
      $window.sessionStorage.token = resp.data.token;
    });
  };

  return {
    signup: signup,
    signin: signin
  };
})

.factory('SMS', function($http) {
  var sendCode = function(data) {
    console.log(data);
    return $http({
      method: 'POST',
      url: '/api/sms/send',
      data: data
    })
    .then(function(resp) {
      return resp.data.sent;
    });
  };

  var verifyCode = function(data) {
    console.log(data);
    return $http({
      method: 'POST',
      url: '/api/sms/verify',
      data: data
    })
    .then(function(resp) {
      return resp.data.found;
    });
  };

  return {
    sendCode: sendCode,
    verifyCode: verifyCode
  };
});
