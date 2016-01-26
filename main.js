angular.module('modRush', [])

angular.module('modRush')
	.controller('goldRoller', ['$scope', function($scope){
		$scope.coordinates = []
		$scope.showText= true
		$scope.markSpot = function(event) {
			$scope.spot = {
				'left': event.clientX.toString()+"px",
				'top': event.clientY.toString()+"px",
				'message': {{comment}}
			}
			$scope.coordinates.push($scope.spot)
		}
		$scope.deleteSpot = function(index) {
			$scope.coordinates.splice(index, 1)
		}
		$scope.submitComment = function(event) {
			$scope.showText = false
			$scope.coordinates[$scope.coordinates.length - 1].message = 'textarea data'
			// pass data from textarea into function
			// modify spot object while it is in $scope.coordinates
		}

		// to do: format textarea div
	}])