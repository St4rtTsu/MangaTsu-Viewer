
    
    var EDI = document.querySelector("#EDI")
    var page = 1
    var format = "jpg"
    var selectImg = document.querySelector("#imagens")

    function hideAll() {
    document.querySelector("body").style.opacity = "0";
    document.querySelector("body").style.overflowX = "hidden";
    }

    function showAll() {
    document.querySelector("body").style.opacity = "1";
    }

    function openImg() {
    page = 1
      changeImage(true)
      pageNumber()
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
      pageNumber()
    }

    function nextImg() {
      page++
      changeImage(true)
      pageNumber()
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

function showImageConfig() {
  document.querySelector("#imgSettings").innerHTML = "<input type='text' id='opacityValue' placeholder='Opacity%'><button onclick='setOpacity()'>OK</button> <br> <input type='text' id='filterValue' placeholder='filter'><button onclick='changeFilter()'>OK</button> <br> <input type='text' id='blendValue' placeholder='blend'><button onclick='changeBlend()'>OK</button> <br> <button onclick='originalSize()'>Auto</button> <button onclick='reSize()'>Slider</button> <button onclick='horReaderEngine()'>⇠</button> <button onclick='closeImgSettings()'>⨉</button>";
}

function showVertConfig(){ 
  document.querySelector("#imgSettings").innerHTML = "<div id='vertConfig'> <input type='text' id='pageLimitValue' placeholder='setPageLimit'><button onclick='setPageLimit()'>OK</button> <br> <input type='text' id='vertImgWidth' placeholder='vertImgWidth'> <button onclick='setVertImgWidth()'>OK</button> <br> <input type='text' id='opacityValue' placeholder='Opacity%'><button onclick='setOpacity()'>OK</button> <br> <input type='text' id='filterValue' placeholder='filter'><button onclick='changeFilter()'>OK</button> <br> <input type='text' id='blendValue' placeholder='blend'><button onclick='changeBlend()'>OK</button> <br> <button onclick='vertReaderEngine()'>⇣</button> <button onclick='closeImgSettings()'>⨉</button></div>";
}

function closeImgSettings() {
  document.querySelector("#imgSettings").innerHTML = "";
}

function originalSize() {
  document.querySelector("#image").style.width = "auto";
}

function reSize() {
  document.querySelector("#image").style = "";
}

function changeFilter() {
  var filterValue = document.querySelector("#filterValue").value
  document.querySelector("#imagens").style.filter = `${filterValue}`;
}

function changeBlend() {
  var blendValue = document.querySelector("#blendValue").value
  document.querySelector("#imagens").style.mixBlendMode = `${blendValue}`;
}

function setOpacity() {
  var opacityValue = document.querySelector("#opacityValue").value
  document.querySelector("#imagens").style.opacity = `${opacityValue}`;

}

function setPageLimit() {
    document.querySelector("#imagens").innerHTML = "";
    document.querySelector("#topPageNumber").style.display = "none";
    document.querySelector("#bottomPageNumber").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    document.querySelector(".bbuttons").style.display = "none";
    document.querySelector("#ranger").style.display = "none";
    document.querySelector("#jumper").style.display = "none";
limit = document.querySelector("#pageLimitValue").value
    page = 1
}

function horReaderEngine() {
    document.querySelector("#imagens").innerHTML = "";
    document.querySelector("#topPageNumber").style.display = "";
    document.querySelector("#bottomPageNumber").style.display = "";
    document.querySelector(".buttons").style.display = "";
    document.querySelector(".bbuttons").style.display = "";
    document.querySelector("#ranger").style.display = "";
    document.querySelector("#jumper").style.display = "";
    document.querySelector("#imagens").innerHTML = "<img src='./img-dark.png' id='image' width='250px'>";
    page = 1
    limit = 0

}

function vertReaderEngine() {

if(page > limit) { return; }else {
   document.querySelector("#imagens").innerHTML += "<img class='vertImg' src='" + `${EDI.value}/${page}.${format}` + "' style='width:200px;'>";
   page++
   vertReaderEngine() 
}
}

function setVertImgWidth() {
  var vertImgWidth = document.querySelector("#vertImgWidth").value
        let vert = document.querySelectorAll(".vertImg");
        for (let c = 0; c < vert.length; c++) {
            vert[c].style.width = `${vertImgWidth}`;

        }
}

function pageNumber() {
document.querySelector("#topPageNumber").innerText = `${page}`;
document.querySelector("#bottomPageNumber").innerText = `${page}`;
}


document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '39') {
      if (page === 1)
        return
      page--
      changeImage(true)
      pageNumber()
      console.log("ESQUERDA")
    }
    else if (e.keyCode == '37') {
      page++
      changeImage(true)
      pageNumber()
      console.log("DIREITA")
    }
    else if (e.keyCode == '68') {
      if (page === 1)
        return
      page--
      changeImage(true)
      pageNumber()
      console.log("ESQUERDA")
    }
    else if (e.keyCode == '65') {
      page++
      changeImage(true)
      pageNumber()
      console.log("DIREITA")
    }
    else if (e.keyCode == '13') {
     openImg();
     pageNumber()
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
    else if (e.keyCode == '69') {
    hideAll()
    }
    else if (e.keyCode == '81') {
    showAll()
    }
    else if (e.keyCode == '74') {
    page = document.querySelector("#jumper").value
    changeImage(true)
    pageNumber()
    }
    else if (e.keyCode == '72') {
    showImageConfig()
    }
    else if (e.keyCode == '86') {
    showVertConfig()
    }


}
