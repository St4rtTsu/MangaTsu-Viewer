
    
    var EDI = document.querySelector("#EDI")
    var page = 1
    var format = "jpg"
    var selectImg = document.querySelector("#imagens")

    function hideAll() {
    document.querySelector("body").style.opacity = "0";
    }

    function showAll() {
    document.querySelector("body").style.opacity = "1";
    }

    function openImg() {
      changeImage(true)
    }

    function attImgInfo(file) {
      document.getElementById('info_img').innerText = `(From: ${file})`
    }

    function getFileName() {
      return `${EDI.value}/${page}.${format}`
    }

    function changeImage(withError) {
      var image    = document.getElementById('image')
      var fileName = getFileName()

      image.src = fileName

      attImgInfo(fileName)

      if (withError)
        image.onerror = changeFRT
      else
        image.onerror = null
       
    }





    function backImg() {
      if (page === 1)
        return

      page--
      changeImage(true)
    }

    function nextImg() {
      page++
      changeImage(true)
    }


    function changeFRT() {
      if (format == "jpg") {
        format = "png"
      }
      else if (format == "png") {
        format = "jpg"
      }

      var fileName = getFileName()
      
      changeImage(false);
    }


    ranger.onchange = function() {
      var ranger = document.getElementById('ranger')
      var width = selectImg.width;
      var image = document.getElementById('image')

      image.width = ranger.value

    }

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '37') {
      if (page === 1)
        return
      page--
      changeImage(true)
      console.log("ESQUERDA")
    }
    else if (e.keyCode == '39') {
      page++
      changeImage(true)
      console.log("DIREITA")
    }
    else if (e.keyCode == '65') {
      if (page === 1)
        return
      page--
      changeImage(true)
      console.log("ESQUERDA")
    }
    else if (e.keyCode == '68') {
      page++
      changeImage(true)
      console.log("DIREITA")
    }
    else if (e.keyCode == '13') {
     openImg();
    }
    else if (e.keyCode == '16') {
    backToTop();
    }
    else if (e.keyCode == '83') {
    window.scrollBy(0, +70);
    }
    else if (e.keyCode == '87') {
    window.scrollBy(0, -70);
    }
    else if (e.keyCode == '45') {
    hideAll()
    }
    else if (e.keyCode == '35') {
    showAll()
    }
}