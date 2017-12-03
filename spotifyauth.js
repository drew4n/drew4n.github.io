function startup() {
  var code = getParameterByName('code');
  var error = getParameterByName('error');

  var posturl = new RegExp("https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" + code + "&redirect_uri=https%3A%2F%2Fdrew4n.github.io%2Fspotifyauthmid.html");

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": posturl,
    "method": "POST",
    "headers": {
      "authorization": "Basic ZmNiZWNmNzJhMWZmNDI0YmFlNzhmZjJlNmM3NzllNjM6ZTZmZTdiM2M1MTJkNGFjOTk4NWE2NmRmOTI2NDEwNTM=",
      "content-type": "application/x-www-form-urlencoded"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("demo").innerHTML = response;
  });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
