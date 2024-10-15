      htmlConverterUrl: new XWiki.Document('ConvertHTML', 'RTFrontend').getURL('get', $.param({
        'xpage': 'plain',
        'outputSyntax': 'plain',
        'form_token': document.documentElement.dataset.xwikiFormToken
      })),
      // userId === <userReference>-encoded(<userName>)%2d<randomNumber>
      userName: userReference + '-' + encodeURIComponent(realtimeConfig.user.name + '-').replace(/-/g, '%2d') +
        String(Math.random()).substring(2),
      userAvatarURL: realtimeConfig.user.avatarURL,
      isAdvancedUser: realtimeConfig.user.advanced,
      network: allRt.network,
      abort: module.onRealtimeAbort.bind(module),
      onKeysChanged: module.onKeysChanged.bind(module),
      displayDisableModal: module.displayDisableModal.bind(module),
    };
  },