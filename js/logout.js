chrome.browserAction.onClicked.addListener(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'http://login.taobao.com/member/logout.jhtml');
  xhr.send(null);
});

