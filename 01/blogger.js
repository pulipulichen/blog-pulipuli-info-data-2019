document.addEventListener('paste', function (event) {
  var clipText = event.clipboardData.getData('File');
  console.log(clipText)
});

document.addEventListener('paste', function (event) {
  console.log(event.clipboardData);
  console.log(1)
  console.log(event.clipboardData.getData('File'));
  console.log(2)  
  console.log(event.clipboardData.getData('Text'));
  console.log(3)
  if (event.clipboardData.files[0]) {
    console.log(event.clipboardData.files[0])
    //console.log(event.clipboardData.files[0].getAsFile());
  }
  console.log(4)
  if (event.clipboardData.items[0]) {
    console.log(event.clipboardData.items[0].getAsFile());
  }
  //console.log(a, b, c);
})