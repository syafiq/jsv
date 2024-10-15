          text: $('<span/>').text( $(this).attr("data-content") ).html()
        },
        show: {
          event: event.type,
          ready: true,
          delay: 100
        },
        position: {
          my: 'top center',
          at: 'bottom center',
          target: false
        },
        style: {
          classes: 'qtip-cluetip qtip-rounded nd_qtip-unconstrained'
        }
      });