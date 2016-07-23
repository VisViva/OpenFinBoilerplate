document.addEventListener('DOMContentLoaded', function() {
  try {
    fin.desktop.main(function() {
      initWithOpenFin();
    });
  } catch () {
    initWithoutOpenFin();
  }
});

var initWithOpenFin = function(){
  var setVersionNumber = function() {
    var openfinAbsent = document.querySelector('#openfin-absent');
    var openfinPresent = document.querySelector('#openfin-present');
    var openfinVersion = document.querySelector('#openfin-version');
    fin.desktop.System.getVersion(function(version) {
      openfinVersion.innerText = version;
      openfinVersion.classList.toggle('invisible');
    });
  };
}

var initWithoutOpenFin = function(){
}
