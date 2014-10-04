angular.module("ghcp").controller("ghcpCtrl", function ($scope, $window) {
	var testData = [
	    {id: 1, strokes: 81, rating: 69.8, slope: 114, playedOn: new Date(2014, 4, 24), differential: 15.1},
	    {id: 2, strokes: 85, rating: 69.8, slope: 114, playedOn: new Date(2014, 4, 25), differential: 12.1},
		    {id: 3, strokes: 82, rating: 69.8, slope: 114, playedOn: new Date(2014, 4, 26), differential: 8.1},
		    {id: 4, strokes: 79, rating: 69.8, slope: 114, playedOn: new Date(2014, 4, 27), differential: 9.1},
		    {id: 5, strokes: 76, rating: 69.8, slope: 114, playedOn: new Date(2014, 4, 28), differential: 6.1},
 		{id: 6, strokes: 75, rating: 70.2, slope: 117, playedOn: new Date(2014, 4, 29), differential: 4.6},
	];
	
	$scope.id = 100; // until local storage is used
	
	var DEFAULT_SLOPE = 113;
	
	$scope.init = false;
	$scope.editedScore = null;
	
	$scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.opened = true;
	};

	// TODO:
	$scope.index = function () {
		return 8.2;
	};
	
	$scope.listScores = function () {
		$scope.scores = testData;
	};
	
	$scope.createScore = function () {
		var date = new Date();
		var score = {
			id: null,
			strokes: null,
			rating: null,
			slope: DEFAULT_SLOPE,
			playedOn: new Date(date.getFullYear(), date.getMonth(), date.getDate())
		};
		$scope.editedScore = score;
		$scope.init = true;
	};
	
	$scope.editScore = function (score) {
		$scope.editedScore = score;
		$scope.init = true;
	};
	
	$scope.saveScore = function (score) {
		if (!score.id) {
			score.id = $scope.id;
			$scope.id = $scope.id + 1;
			$scope.scores.unshift(score);
		}
		$scope.differential(score);
		$scope.editedScore = null;
		// process index and use local storage
	};
	
	$scope.differential = function (score) {
		score.differential = (score.strokes - score.rating) * DEFAULT_SLOPE / score.slope;
	};
	
	$scope.cancelEdit = function () {
		$scope.editedScore = null;
	};
	
	$scope.deleteScore = function (score) {
		if ($window.confirm("Are you sure you want to delete this score ?")) {
			$scope.scores.splice($scope.scores.indexOf(score), 1);
		}
	};
	
	$scope.listScores();
});
