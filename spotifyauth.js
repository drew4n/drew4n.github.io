function startup() {
  var code = getParameterByName('code');
  var error = getParameterByName('error');

  var posturl = new RegExp("https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" + code + "&redirect_uri=https%3A%2F%2Fdrew4n.github.io%2Fspotifyauthmid.html");

  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      var jsonResp = JSON.stringify(this.responseText);
      document.getElementById("demo").innerHTML = jsonResp;
    }
  });

  xhr.open("POST", posturl);
  xhr.setRequestHeader("authorization", "Basic ZmNiZWNmNzJhMWZmNDI0YmFlNzhmZjJlNmM3NzllNjM6ZTZmZTdiM2M1MTJkNGFjOTk4NWE2NmRmOTI2NDEwNTM=");
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.send(data);
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
