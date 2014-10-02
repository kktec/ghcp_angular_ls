angular.module("ghcp")
	.controller("ghcpCtrl", function ($scope) {
		var testData = [
		    {id: 1, strokes: 81, rating: 69.8, slope: 114, playedOn: '2014-05-24', differential: 15.1},
		    {id: 2, strokes: 85, rating: 69.8, slope: 114, playedOn: '2014-05-25', differential: 12.1},
    		    {id: 3, strokes: 82, rating: 69.8, slope: 114, playedOn: '2014-05-26', differential: 8.1},
    		    {id: 4, strokes: 79, rating: 69.8, slope: 114, playedOn: '2014-05-27', differential: 9.1},
    		    {id: 5, strokes: 76, rating: 69.8, slope: 114, playedOn: '2014-05-28', differential: 6.1},
     		{id: 6, strokes: 75, rating: 70.2, slope: 117, playedOn: '2014-05-29', differential: 4.6},
    		    
		];
		
		$scope.id = 100;
		
		var DEFAULT_SLOPE = 113;
		
		$scope.index = function () {
			return 8.2;
		};
		
		$scope.listScores = function () {
			$scope.scores = testData.reverse();
		};
		
		$scope.createScore = function (score) {
			var s = score || {};
			s.playedOn = "2014-10-01";
			$scope.editedScore = s;
		};
		
		$scope.editScore = function (score) {
			$scope.editedScore = score;
		};
		
		$scope.saveScore = function (score) {
			if (!score.id) {
				score.id = $scope.id;
				$scope.id = $scope.id + 1;
				$scope.scores.unshift(score);
			}
			$scope.differential(score);
			$scope.editedScore = null;
		};
		
		$scope.differential = function (score) {
			score.differential = (score.strokes - score.rating) * DEFAULT_SLOPE / score.slope;
		};
		
		$scope.cancelEdit = function () {
			$scope.editedScore = null;
		};
		
		$scope.deleteScore = function (score) {
			$scope.scores.splice($scope.scores.indexOf(score), 1);
		};
		
		$scope.listScores();
	});