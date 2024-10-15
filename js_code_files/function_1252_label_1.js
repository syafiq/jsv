    function renderPipelineInstance(node_id, instance, node) {
        var gui = '';
        var stagesCount = 0;
        gui += '<li class="instance">';
        if (instance.label != '') {
            if (isCurrent) {
                gui += '<h4 title="' + instance.label + '"><span class="pipeline_run_label">Instance: ' + instance.label + '</span></h4>';
            }
            else {
                gui += '<h4 title="' + instance.label + '"><span class="pipeline_run_label">Instance: ' + instance.label + '</span><span class="vsm_link_wrapper"><a href="' + instance.locator + '">' + 'VSM' + '</a></span></h4>';
            }
        }
        if(instance.locator.trim() != "") {
            var duration =  pipelineRunCompleted(instance) ? pipelineRunDuration(instance) : 'In Progress';
            gui += '<span class="duration">Duration: ' + duration + '</span>';

            gui += '<ul class="stages">';
            stagesCount = instance.stages.length;
            for (var i = 0; i < stagesCount; i++) {
                var stagesWidth = (node_id == current) ? 238 : 196;
                gui += '<li class="stage_bar ';
                gui += ((instance.stages[i].status != undefined) ? instance.stages[i].status : 'Unknown');
                if (instance.stages[i].status == 'Unknown') {
                    gui += '" style="width:' + ((stagesWidth - (stagesCount * 4)) / stagesCount) + 'px" title="' + instance.stages[i].name + '"></li>'
                }
                else {
                  var stageTitle = instance.stages[i].name;
                  if(_.toInteger(instance.stages[i].duration) > 0){
                    stageTitle += ' (took ' + moment.duration(instance.stages[i].duration, 's').humanizeForGoCD() + ')';
                  }

                  var stageLocatorSplit = instance.stages[i].locator.split('/');
                  var stageCounter = stageLocatorSplit.pop();
                  var stageName = stageLocatorSplit.pop();
                  var pipelineCounter = stageLocatorSplit.pop();
                  var pipelineName = stageLocatorSplit.pop();

                  gui += '" style="width:' + ((stagesWidth - (stagesCount * 4)) / stagesCount) + 'px" title="' + stageTitle + '"><a href="#" onclick="window.getStageOverviewFor(\''+ pipelineName + '\',\'' + pipelineCounter + '\',\'' + stageName + '\',\'' + stageCounter + '\',\'' + instance.stages[i].status + '\',\'' + i + '\',\'' + instance.stages.length + '\',\'' + node.can_edit  + '\',\'' + node.template_name +'\')"></a></li>';
                  gui += '<div id="stage-overview-container-for-pipeline-'+ pipelineName + '-' + pipelineCounter + '-stage-' + stageName + '-' + stageCounter +'"/>'
                }
            }
            gui += '</ul>';
        }

        if(instance.locator.trim() == "") {
            gui += "<div style='clear:both;' class='message waiting' title='"+ noInstanceMessage +"'>";
            gui += noInstanceMessage;
            gui += "</div>";
        }

        gui += '</li>';
        return gui;
    }