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
      .state('social-media', {
        url: '/social',
        templateUrl: 'views/social-media.html',
        controller: 'socialMediaController'
      });
}

function ListController($scope) {
  $scope.source = [
    {
      title: 'NY Jets v Philadelphia Eagles',
      image: 'https://d2r5tjv0k7iblp.cloudfront.net/tabcms/34ed00690466e1ff3a9746caeb35595c105fbe24_jetseagles.png',
      description: 'Philadelphia seems to be in freefall just two games into the season, both of them disappointing losses. A near comeback Week 1 win against the Atlanta Falcons turned into a late-fourth-quarter loss and an underwhelming effort at home against the divisional rival Dallas Cowboys has left Eagles fans demoralized'
    },
    {
      title: 'Arizona Cardinals v San Francisco',
      image: 'https://d2r5tjv0k7iblp.cloudfront.net/tabcms/8776ba7432bd50bec530c2d908c50035f48a3005_cards49ers.png',
      description: 'Arizona quarterback Carson Palmer has been on fire so far this season, racking up 492 passing yards and seven touchdowns while leading Arizona to a 2-0 record. Palmer is 15-2 in his last 17 starts sandwiched around the left ACL tear he suffered Week 10 last season.'
    },
    {
      title: 'Detroit Lions v Denver Broncos',
      image: 'https://d2r5tjv0k7iblp.cloudfront.net/tabcms/3bc4abe74781473aefae1704e1dffbd8cdf22889_lionsbroncos.png',
      description: 'The Denver ground game hasn’t been anything to write home about so far this season, but facing Detroit’s 28th-ranked rush defense might be just what the doctor ordered for the Broncos.'
    },
    {
      title: 'Packers v Kansas City Chiefs',
      image: 'https://d2r5tjv0k7iblp.cloudfront.net/tabcms/20af5e198cf3865292f0611c712518394c2df1a1_packerschiefs.png',
      description: 'The Packers might be susceptible to a letdown game here, having exacted revenge on the Seattle Seahawks in come-from-behind fashion in Week 2.'
    }
  ];
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
      date: 'Tue, 29 Sep 2015'
    },
    {
      title: 'Paul Gallen',
      date: 'Tue, 29 Sep 2015'
    },
    {
      title: 'Israel Folau',
      date: 'Tue, 29 Sep 2015'
    },
    {
      title: 'Jacquelin Magnay',
      date: 'Tue, 29 Sep 2015'
    },
    {
      title: ''
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
