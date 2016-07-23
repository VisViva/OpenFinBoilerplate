document.addEventListener('DOMContentLoaded', function() {
  try {
    fin.desktop.main(function() {
      initOpenFin();
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
