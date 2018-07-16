myapp.controller("downloadctrl",function($scope,$http,$rootScope,dataShare){
           $scope.csv=[];
            $scope.h=[];

        $rootScope.$on("csv",function(){
          $scope.channels = dataShare.get_channels();
        $scope.data1=dataShare.get_link();

   });
        $scope.getRoles = function() {
        return $scope.csv;
        };
        $scope.check = function(channels,value,checked) {
        var idx = $scope.csv.indexOf(value);
        if ( !checked) {
        $scope.csv.splice(idx, 1);
        }
        if( checked){
        $scope.csv.push(channels+","+value);
        }
        };
        $scope.downloadCSV = function(args){
        var data, filename, link;
        var csv = 'channels'+","+"Link"+"\n"+"\n";
        for(p=0;p<$scope.channels.length;p++){
            var re = new RegExp($scope.channels[p],"ig");
            //console.log("re: ", re);
            for(j=0;j<$scope.csv.length;j++){
                if (re.test($scope.csv[j])){
                //  console.log("csv[j]: ", $scope.csv[j]);
                $scope.h.push($scope.csv[j])
              }

            }//end of j loop
        }//end of p loop
        $scope.h.forEach(function(row) {
        csv +=row.split(',')+"\n"+"\n";
        });
        if (csv == null) return;
        filename = args.filename || 'channels.csv';
        csv = 'data:text/csv;charset=utf-8,' + csv;
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
         }

  })//end of controller
