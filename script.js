var app = angular.module('N2WApp', []);

function N2WCtrl($scope) {
  $scope.letterSets = {
    1: [],
    2: ['A','B','C'],
    3: ['D','E','F'],
    4: ['G','H','I'],
    5: ['J','K','L'],
    6: ['M','N','O'],
    7: ['P','Q','R','S'],
    8: ['T','U','V'],
    9: ['W','X','Y','Z']
  };

  $scope.words = [
    {text: "WORD1"},
    {text: "WORD2"},
    {text: "WORD3"},
    {text: "WORD4"}
  ];

  $scope.numberInput = '';

  $scope.validateInput = function() {
    $scope.invalidInput = !$scope.numberInput.match(/^[\d -]+$/);
  }



  $scope.processNumber = function() {
    var outputWord = [];
    for (var i = 1; i < $scope.numberInput.length + 1; i++) {
      for (var j = 0; j < $scope.letterSets[i].length; j++) {
        console.log($scope.letterSets[i][j]);
        outputWord[j] = $scope.letterSets[i][j];
      }

    }
    console.log(outputWord);


    $scope.words.push({ text: $scope.numberInput });
    // console.log($scope.words);
  }

}




app.controller('N2WCtrl', N2WCtrl);