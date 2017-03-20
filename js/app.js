var myAppModule = angular.module('myApp', ['ui.tinymce']);
myAppModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
    });
}]);

myAppModule.controller('TinyMceController', function($scope) {
    $scope.tinymceModel = 'Initial content';

    $scope.getContent = function() {
        console.log('Editor content:', $scope.tinymceModel);
    };

    $scope.setContent = function() {
        $scope.tinymceModel = 'Time: ' + (new Date());
    };

    $scope.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };
});

/*myAppModule.controller('itemMenu', function($scope){
   var navItems =  [
       {sports: [{name: 'Tennis'}]},
       {casino: [{name: 'Slots'}]},
       {poker: [{name: 'Holdem'}]},
       {articles: []},
       {promotions: []}
   ]
});*/

//var navList = angular.module('navList', []);

myAppModule.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navLinks = [{
        Title: 'home',
        LinkText: 'Home',
    }, {
        Title: 'sports',
        LinkText: 'Sports',
        Item: [{name: 'Tennis'}]
    }, {
        Title: 'casino',
        LinkText: 'Casino',
        Item: [{name: 'Slots'}]
    }, {
        Title: 'poker',
        LinkText: 'Poker',
        Item: [{name: 'Holdem'}]
    }, {
        Title: 'articles',
        LinkText: 'Articles',
        Item: []
    }, {
        Title: 'promotions',
        LinkText: 'Promotions',
        Item: []
    }];

    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };

    $scope.getItem = function (items) {
	debugger;
        $scope.navItems = items;
    };

}]);
