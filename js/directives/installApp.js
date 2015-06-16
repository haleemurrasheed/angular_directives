app.directive('installApp', function() {
	return {
  		restrict: 'E',
    		scope: {},
    		templateUrl: 'js/directives/templates/installApp.html',
    		/*
    		  The link is used to create interactive directives 
          that respond to user actions. 
    		*/

        /*
          Scope refers to the directive's scope.
          Any new properties attached to $scope will become 
          available to use in the directive's template.
        */

        /*
          Element refers to the directive's HTML element.
        */

        /*
          Attrs contains the element's attributes.
        */
    		link: function(scope, element, attrs) {
    			scope.buttonText = "Install",
      			scope.installed = false,
      
      			scope.download = function() {
      				element.toggleClass('btn-active');
        			if(scope.installed) {
        				scope.buttonText = "Install";
          				scope.installed = false;
        			} else {
        				scope.buttonText = "Uninstall"; 
      					scope.installed = true;
        			}
      			}
    		}
  	}
});
