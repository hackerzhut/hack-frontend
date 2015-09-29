angular.module('app', ['ui.router']);

angular.module('app')
   .controller('listController', ListController)
   .controller('detailController', DetailsController)
   .controller('socialMediaController', SocialMediaController)
   .controller('postcastsController', PodcastsController)
   .service('newsService', newsService)
   .config(routes);


routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
    $stateProvider
      .state('list', {
        url          : '',
        templateUrl  : 'views/list.html',
        controller   : 'listController'
      })
      .state('podcasts', {
        url: '/podcasts',
        templateUrl: 'views/podcasts.html',
        controller: 'postcastsController'
      })
      .state('social-media', {
        url: '/social',
        templateUrl: 'views/social-media.html',
        controller: 'socialMediaController'
      });
}

function ListController($scope, $http) {
  $http.get('https://playstore-backend.herokuapp.com/v1/sports/news', {})
    .then(function successCallback(response) {
      $scope.source = [];
      angular.forEach(response.data, function(post) {
        $scope.source.push({
          title: post.heading,
          description: post.description,
          image: post.image.url
        });
      });
    }, function errorCallback(response) {
      //TO-DO
  });
}


function SocialMediaController($scope) {
  $scope.source = [
    {
      text: 'Congrats to John Mason - John Mason Real Estate who won the #MelbourneCup Raffle Package worth over $5,000!! ',
      handle: 'WBA',
      avator: 'https://pbs.twimg.com/profile_images/552022419334918145/GzlOB1Q0_bigger.png'
    },
    {
      text: 'Jordon mentioned three-time #MelbourneCup runner-up Red Cadeaux, Ascot Gold Cup winner Trip To Paris, Max Dynamite and Snow Sky.',
      handle: 'Trent Langskaill',
      avator: 'https://pbs.twimg.com/profile_images/642269143329214464/izGukNQ8_400x400.jpg'
    }, {
      text: '@mehdivk is the best photographer I ever seen in my life :)',
      handle: 'nathanstreater',
      avator: 'https://pbs.twimg.com/profile_images/606720698715758592/vIAtDlst_400x400.jpg'
    }
  ];
}

function PodcastsController($scope) {
  $scope.source = [
    {
      title: 'Johnathan Thurston',
      image: 'http://www.skyracing.com.au/images/channel_img/bsb.jpg',
      date: 'Tue, 29 Sep 2015',
      text: "The Big Sports Breakfast is Sydney's only all-sports breakfast radio program."
    },
    {
      title: 'Paul Gallen',
      image: 'http://www.skyracing.com.au/images/channel_img/RHQSATURDAY.png',
      date: 'Tue, 29 Sep 2015',
      text: "From 6.30am every Saturday this extensive preview programme is hosted by the ubiquitous Andrew Bensley."
    },
    {
      title: 'Israel Folau',
      image: 'http://www.skyracing.com.au/images/channel_img/bsb-best.jpg',
      date: 'Tue, 29 Sep 2015',
      text: "The Big Sports Breakfast is Sydney's only all-sports breakfast radio program."
    },
    {
      title: 'Jacquelin Magnay',
      image: 'http://www.skyracing.com.au/images/channel_img/punters-post-mortem-150.jpg',
      date: 'Tue, 29 Sep 2015',
      text: "Terry Kennedy is joined by Ron Dufficy and Deane Lester for this Monday review of the racing ..."
    },
    {
      title: 'David Furner',
      image: 'http://www.skyracing.com.au/images/channel_img/SKY-PRG-On-The-Pace.png',
      date: 'Mon, 28 Sep 2015',
      text: "A fast-moving and up-to-date hour from 9am when host by Andrew Bensley ..."
    }
  ];
}

function DetailsController() {
  var vm = this;
}

newsService.$inject = ['$http'];
function newsService($http) {
  return {
  };
}
