myapp.factory('dataShare',function($rootScope){
  var service = this;
  service.send_channels = function(chain){
  this.channels = chain;
  $rootScope.$broadcast("csv");
  };
  service.send_link=function(link){
     this.links=link;
     $rootScope.$broadcast("csv");
};
  service.get_channels = function(){
    return this.channels;
};
  service.get_link = function(){
    return this.links;
 };
    return service;
    });
