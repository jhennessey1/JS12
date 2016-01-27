angular.module('modRush', [])

angular.module('modRush')
	.controller('goldRoller', ['$scope', function($scope){
		$scope.coordinates = []
		$scope.markSpot = function(event) {
			$scope.spot = {
				'left': event.clientX.toString()+"px",
				'top': event.clientY.toString()+"px",
			}
			console.log("spot!")
			$scope.coordinates.push($scope.spot)
			console.log($scope.coordinates)
		}
		$scope.deleteSpot = function(index) {
			$scope.coordinates.splice(index, 1)
		}
		
	}])