        $scope.folderLabelMarkRemoteState = function (folderID, deviceID) {
            var label = $scope.folderLabel(folderID);
            // Add footnote if sharing was not accepted on the remote device
            if (deviceID in $scope.completion && folderID in $scope.completion[deviceID]) {
                if ($scope.completion[deviceID][folderID].remoteState == 'notSharing') {
                    label += '<sup>1</sup>';
                } else if ($scope.completion[deviceID][folderID].remoteState == 'paused') {
                    label += '<sup>2</sup>';
                }
            }
            return label;
        };