function startup() {
  var code = getParameterByName('code');
  var error = getParameterByName('error');

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };

  var text = "grant_type=authorization_code&code=AUTHCODE&redirect_uri=https%3A%2F%2Fdrew4n.github.io%2Fspotifyauthmid.html";
  var postquery = text.replace("AUTHCODE", code);
  
  xhttp.open("POST", "https://accounts.spotify.com/api/token", true);
  xhttp.setRequestHeader("Authorization", "Basic ZmNiZWNmNzJhMWZmNDI0YmFlNzhmZjJlNmM3NzllNjM6ZTZmZTdiM2M1MTJkNGFjOTk4NWE2NmRmOTI2NDEwNTM=");
  xhttp.send(postquery);


  //post('https://accounts.spotify.com/api/token', {grant_type: 'authorization_code', code: code, redirect_uri: 'https%3A%2F%2Fdrew4n.github.io%2Fspotifyauthmid.html', client_id: 'fcbecf72a1ff424bae78ff2e6c779e63', client_secret: 'e6fe7b3c512d4ac9985a66df92641053'})
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
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
