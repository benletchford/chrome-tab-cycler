chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    var activeIndex = -1;
    for (var i=0;i<tabs.length;i++) {
      if (tabs[i].active) {
        activeIndex = i;
        break;
      }
    }

    var newIndex = activeIndex;

    if (command === "left") newIndex--;
    else if (command === "right") newIndex++;

    if(newIndex===-1) newIndex = tabs.length - 1;
    else if(newIndex===tabs.length) newIndex = 0;

    chrome.tabs.update(tabs[newIndex].id, {active: true});
  });
});
