chrome.tabs.getAllInWindow

chrome.commands.onCommand.addListener(function (command, tab) {
  chrome.tabs.query({}, function(tabs) {
    activeIndex = -1;
    for (i=0;i<activeIndex.length;i++) {
      if (tabs[i].active) {
        activeIndex = i;
        break;
      }
    }
    1+1;
  });

  if (command === "left") {
    // alert("left");
  } else if (command === "right") {
    // alert("right");
  }
});
