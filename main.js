angular.module('modRush', [])

angular.module('modRush')
	.controller('goldRoller', ['$scope', function($scope){
		$scope.coordinates = []
		$scope.comments = {}
		$scope.markSpot = function(event) {
			$scope.markObject = {
				'coords' : { 
					'left': (event.clientX - 5).toString()+"px",
				  	'top': (event.clientY - 5).toString()+"px" 
				  },
				'left': (event.clientX - 5).toString()+"px",
				'top': (event.clientY - 5).toString()+"px",
				'comment':'',
				'showComment': false
			}
			$scope.coordinates.push($scope.markObject)
		}
		$scope.deleteSpot = function(index) {
			$scope.coordinates.splice(index, 1)
		}
		
		$scope.hideTextarea = false
		$scope.subComment = function(index) {
			$scope.comments.index = $scope.comments
			$scope.commentSpots.splice(index, 1)
			console.log(comments[index])
		}

		

		$scope.commentsOn = function(index) {
			$scope.showComment[index] = true
		}

		$scope.commentsOff = function(index) {
			$scope.showComment[index] = false
		}

	}])