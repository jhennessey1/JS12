angular.module('modRush', [])

angular.module('modRush')
	.controller('goldRoller', ['$scope', function($scope){
		$scope.goldSpots = []
		$scope.markSpot = function(event) {
			var offset = 10
			var x = event.clientX - offset
			var y = event.clientY - offset
			var notes = ""

			$scope.goldSpots.push({x: x, y: y, notes: notes, showNote: false, showInput: true})
			// console.log($scope.goldSpots)
		}
		$scope.deleteMark = function(index) {
			if($scope.goldSpots[index].notes !== "") {
				$scope.goldSpots.splice(index, 1)
			}
		}

		$scope.displayNote = function(index) {
			if($scope.goldSpots[index].notes !== "") {
				$scope.goldSpots[index].showNote = true
			}
		}

		$scope.hideNote = function(index) {
			if($scope.goldSpots[index].notes !== "") {
				$scope.goldSpots[index].showNote = false
			}
		}

		$scope.addNote = function(index, placeNote) {
			$scope.goldSpots[index].notes = placeNote
			$scope.goldSpots[index].showInput = false
		}

	}])











