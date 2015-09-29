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
      text: 'Johnathan Thurston caps off an incredible season to win a fourth #DallyM. Absolute superstar!',
      handle: 'TAB',
      avator: 'https://pbs.twimg.com/profile_images/488500097605312512/sMNsJ659_bigger.jpeg'
    },
    {
      text: 'Racing HQ @atc_races Brett Devine with fields, Jason Attard, @VandykeRacing1 Daniel Hanson, Daniel Bowen @mmsnippets Vin Cox, @boss_glen',
      handle: 'SkySportsRadio1',
      avator: 'https://pbs.twimg.com/profile_images/2476600160/Sky-Sports-Radio-800_bigger.jpg'
    },
    {
      text: 'Sky Racing expert @JohnScorse has one special at Queanbeyan today, R4 No 6 KENTUCKY DARTER @SkyRacingAU #skytips',
      handle: 'insiderunningAU',
      avator: 'https://pbs.twimg.com/profile_images/2600886597/0o5bc79vdrk0mwya4gjr_bigger.jpeg'
    },
    {
      text: 'Morning, everyone! How good is GF week!? In two codes! Join TK and Slats for all the latest, on @SkyRacingAU and @SkySportsRadio1 from 530.',
      handle: 'skybigsports',
      avator: 'https://pbs.twimg.com/profile_images/1044335416/BigBreakfast_fb_bigger.jpg'
    }
  ];
}

function PodcastsController($scope) {
  $scope.source = [
    {
      title: 'Johnathan Thurston',
      image: 'img/bsb.jpg',
      date: 'Tue, 29 Sep 2015',
      text: "The Big Sports Breakfast is Sydney's only all-sports breakfast radio program."
    },
    {
      title: 'Paul Gallen',
      image: 'img/RHQSATURDAY.png',
      date: 'Tue, 29 Sep 2015',
      text: "From 6.30am every Saturday this extensive preview programme is hosted by the ubiquitous Andrew Bensley."
    },
    {
      title: 'Israel Folau',
      image: 'img/bsb-best.jpg',
      date: 'Tue, 29 Sep 2015',
      text: "The Big Sports Breakfast is Sydney's only all-sports breakfast radio program."
    },
    {
      title: 'Jacquelin Magnay',
      image: 'img/punters-post-mortem-150.jpg',
      date: 'Tue, 29 Sep 2015',
      text: "Terry Kennedy is joined by Ron Dufficy and Deane Lester for this Monday review of the racing ..."
    },
    {
      title: 'David Furner',
      image: 'img/SKY-PRG-On-The-Pace.png',
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
