var app = angular.module('N2WApp', []);

function N2WCtrl($scope) {

  var PERMS = {
    allCases: {
      "1": ["1"],
      "2": ["a", "b", "c", "2"],
      "3": ["d", "e", "f", "3"],
      "4": ["g", "h", "i", "4"],
      "5": ["j", "k", "l", "5"],
      "6": ["m", "n", "o", "6"],
      "7": ["p", "q", "r", "s", "7"],
      "8": ["t", "u", "v", "8"],
      "9": ["w", "x", "y", "z", "9"],
      "0": ["0"]
    },
    expandArrays: function(a, b) {
      var result = [];
      a.forEach(function(ae) {
        b.forEach(function(be) {
          result.push(ae + be);
        });
      });
      return result;
    }
  };

  PERMS.calculate = function(numberString) {
    console.log('calc');
    if (numberString.length === 1) {
      return PERMS.allCases[numberString];
    }
    var currentCases = PERMS.allCases[numberString[0]];
    var remainingCases = PERMS.calculate(numberString.slice(1));
    return PERMS.expandArrays(currentCases, remainingCases);
  };

  $scope.words = [];

  $scope.validateInput = function() {
    $scope.invalidInput = !$scope.numberInput.match(/^[\d -]+$/);
  };

  $scope.processWords = function(numberString) {
    $scope.words = PERMS.calculate(numberString);
  }

}

app.controller('N2WCtrl', N2WCtrl);