app.directive('appInfo', function() { 
  return {
  	/*
		Restrict specifies how the directive will be used in the view. 
		The 'E' means it will be used as a new HTML element.
  	*/ 
    restrict: 'E',
    /*
		Scope specifies that we will pass information into this 
		directive through an attribute named info. 
		The = tells the directive to look for an attribute named info in the <app-info> element.
		The data in info becomes available to use in the template given by templateURL.
    */ 
    scope: { 
      info: '=' 
    },
    /*
		TemplateUrl specifies the HTML to use in order to display the data in scope.info
    */ 
    templateUrl: 'js/directives/templates/appInfo.html' 
  }; 
});
