// clear the textarea and filen-name

const clearBtn = document.getElementById('btn-clearText');

function clearInput(params) {
  let areaContent = document.getElementById('input-field');
  areaContent.value = '';
  let fileNameContent = document.getElementById('file-name');
  fileNameContent.value = '';
}

clearBtn.addEventListener('click', clearInput);