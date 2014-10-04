angular.module("ghcp").directive("usgaRating", function () {
	var REGEX = /^\d{2,3}\.\d$/;
	return {
		require: 'ngModel',
		link: function (scope, elm, attrs, ctrl) {
			ctrl.$parsers.unshift(function (value) {
				if (REGEX.test(value)) {
					var rating = parseFloat(value);
					if (rating >= 60.0 && rating <= 89.9) {
						ctrl.$setValidity('rating', true);
						return rating;
					}
				}
				ctrl.$setValidity('rating', false);
				return undefined;
			});
		}
	};
});
