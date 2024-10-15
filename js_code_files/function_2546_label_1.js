        $scope.sharedFolders = function (deviceCfg) {
            var labels = [];
            $scope.deviceFolders(deviceCfg).forEach(function (folderID) {
                labels.push($scope.folderLabelMarkRemoteState(folderID, deviceCfg.deviceID));
            });
            return labels.join(', ');
        };