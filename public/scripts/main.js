document.addEventListener('DOMContentLoaded', function() {
  try {
    fin.desktop.main(function() {
      initOpenFin();
      for (var i = 0; i < 10; ++i) notify();
    });
  } catch (exception) {
    console.log(exception);
  };
});

var initOpenFin = function(){
  var openfinAbsent = document.querySelector('#openfin-absent');
  var openfinPresent = document.querySelector('#openfin-present');
  var openfinVersion = document.querySelector('#openfin-version');
  fin.desktop.System.getVersion(function(version) {
    openfinVersion.innerText = version;
    openfinPresent.classList.toggle('invisible');
    openfinAbsent.classList.toggle('invisible');
  });
};

var notify = new fin.desktop.Notification({
  url: "views/notifications/info.html",
  message: "Some initial message.",
  onClick: function(){
    console.log("clicked");
  },
  onClose: function(){
    console.log("closed");
  },
  onDismiss: function(){
    console.log("dismissed");
  },
  onError: function(reason){
    console.log("error: " + reason);
  },
  onMessage: function(message){
    console.log("message: ", message);
  },
  onShow: function(){
    console.log("shown");
  }
});
