document.getElementById("btn-save").onclick = function(){
    var dlink = document.createElement("a");
    dlink.href = "data:text/plain;charset=UTF-8," + document.getElementById("input-field").value;
    dlink.setAttribute("download", document.getElementById("file-name").value);
    dlink.click();
  }