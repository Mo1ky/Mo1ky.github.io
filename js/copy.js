document.body.onclick = (event) => {
  const elem = event.target;
  // console.log(elem);
  if (elem.classList.contains('section-info')) {
      console.log(elem);
      navigator.clipboard.writeText(elem.innerHTML)
          .then(() => {
              document.querySelector('.out').innerHTML += 'copy<br>';
          })
          .catch(err => {
              console.log(err);
          });
  }
}

function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}
