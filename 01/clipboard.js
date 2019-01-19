function copyText(text) {
  var copyTextInput = document.getElementById("puliClipboardInput")
  if (copyTextInput === null) {
    var copyTextInput = document.createElement("input");
    copyTextInput.id = "puliClipboardInput"
    copyTextInput.type = "text"
    document.body.appendChild(copyTextInput); 
  }
  
  copyTextInput.value = text  

  copyTextInput.style = "display: inline"
  /* Select the text field */
  copyTextInput.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
  
  copyTextInput.style = "display: none"
}