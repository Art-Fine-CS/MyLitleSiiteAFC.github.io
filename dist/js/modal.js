/* var modal = document.getElementById('post');
var btn = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

modal.onclick = function () {
    btn.style.display = "block";
    disableScroll()
}
span.onclick = function(){
    btn.style.display = "none";
} */

let $footer = $('#foot');
$footer.css("display", "flex").hide().delay(3000).slideDown(700)
let $ftg = $('#foot2');



  


/* window.onclick = function(event){
    if (event.targe)
} */


/* const lokAdres = ['Canvas/full/zp117x75.jpg','Canvas/full/c60x70.jpg','Canvas/full/cns90x60.jpg','Canvas/full/cp80x90.jpg','Canvas/full/cr60x70.jpg','Canvas/full/cv75x55.jpg',
'Canvas/full/cvv50x60.jpg','Canvas/full/dpv117x75.jpg','Canvas/full/fm50x70.jpg','Canvas/full/kp61x92.jpg','Canvas/full/ks98x72.jpg','Canvas/full/mp60x90.jpg','Canvas/full/nvnh55x74.jpg',
'Canvas/full/pob75x55.jpg','Canvas/full/','Canvas/full/rk63x92.jpg','Canvas/full/rp100x70','Canvas/full/siren60x80.jpg','Canvas/full/sk74x55.jpg','Canvas/full/tanec60x90.jpg','Canvas/full/tk66x77.jpg','Canvas/full/vesmuz50x60.jpg',
'Canvas/full/vlesu74x55.jpg','Canvas/full/yo110x75.jpg','Canvas/full/zp75x55.jpg','Canvas/full/Вертикальные дубы 81х100.jpg'] */

let modal = document.getElementById('myModal');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById("caption");
/* let formOs = document.getElementById("formOs"); */
let modalCanvas = document.getElementById('myModalCanvas');
let modalOs = document.getElementById('myModalOs');

/* let $img = $('#myImg') */

let span = document.getElementsByClassName("close")[0];
span.onclick = function (){
    modal.style.display = "none";
}

let spanCanvas = document.getElementsByClassName("closeCanvas")[0];
spanCanvas.onclick = function (){
    modalCanvas.style.display = "none";
}

let spanOs = document.getElementsByClassName("closeOs")[0];
spanOs.onclick = function (){
    modalOs.style.display = "none";
}

let ObrSv = document.getElementById("ObrSv").onclick = function (){
    modalOs.style.display = "block";
};


let img1 = document.getElementById("myImg1").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/vlesu74x55.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
}


let formCanvas = document.getElementById('opemModaC1').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}
 
let img2 = document.getElementById("myImg2").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/vesmuz50x60.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};
let formCanvas2 = document.getElementById('opemModaC2').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName2').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}


let img3 = document.getElementById("myImg3").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/mp60x90.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

            let formCanvas3 = document.getElementById('opemModaC3').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName3').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}


let img4 = document.getElementById("myImg4").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/zp75x55.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

        let formCanvas4 = document.getElementById('opemModaC4').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName4').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img5 = document.getElementById("myImg5").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/rk63x92.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

        let formCanvas5 = document.getElementById('opemModaC5').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName5').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img6 = document.getElementById("myImg6").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/yo110x75.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

        let formCanvas6 = document.getElementById('opemModaC6').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName6').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img7 = document.getElementById("myImg7").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/dpv117x75.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

         let formCanvas7 = document.getElementById('opemModaC7').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName7').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img8 = document.getElementById("myImg8").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/nvnh55x74.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

             let formCanvas8 = document.getElementById('opemModaC8').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName8').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}


let img9 = document.getElementById("myImg9").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/pob75x55.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas9 = document.getElementById('opemModaC9').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName9').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img10 = document.getElementById("myImg10").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/rp100x70.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas10 = document.getElementById('opemModaC10').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName10').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img11 = document.getElementById("myImg12").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/rk55x74.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas11 = document.getElementById('opemModaC11').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName11').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img13 = document.getElementById("myImg13").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/sk74x55.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas13 = document.getElementById('opemModaC13').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName13').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img14 = document.getElementById("myImg14").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/kp61x92.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas14 = document.getElementById('opemModaC14').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName14').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}


let img15 = document.getElementById("myImg15").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/siren60x80.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas15 = document.getElementById('opemModaC15').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName15').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img16 = document.getElementById("myImg16").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/tk66x77.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas16 = document.getElementById('opemModaC16').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName16').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img17 = document.getElementById("myImg17").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/tanec60x90.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas17 = document.getElementById('opemModaC17').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName17').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img18 = document.getElementById("myImg18").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/fm50x70.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas18 = document.getElementById('opemModaC18').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName18').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img19 = document.getElementById("myImg19").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/cr60x70.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas19 = document.getElementById('opemModaC19').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName19').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img20 = document.getElementById("myImg20").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/cp80x90.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas20 = document.getElementById('opemModaC20').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName20').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img21 = document.getElementById("myImg21").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/c60x70.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas21 = document.getElementById('opemModaC21').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName21').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img22 = document.getElementById("myImg22").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/cv75x55.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas22 = document.getElementById('opemModaC22').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName22').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img23 = document.getElementById("myImg23").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/cvv50x60.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas23 = document.getElementById('opemModaC23').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName23').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img24 = document.getElementById("myImg24").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/cns90x60.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};

                 let formCanvas24= document.getElementById('opemModaC24').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName24').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}

let img25 = document.getElementById("myImg25").onclick = function (){
    modal.style.display = "block";
    modalImg.src = 'Canvas/full/ks98x72.jpg';
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
};


                 let formCanvas25 = document.getElementById('opemModaC25').onclick = function (){
    modalCanvas.style.display = "block";
    let canvasName = document.getElementById('prodName25').value;
    document.getElementById('titCanvas').textContent = canvasName;
    let hidInp = document.getElementById('hidInp').value = canvasName;
}




















/* let img1 = document.getElementById("myImg1");
img1.onclick = function (){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = '<h3 class="modalColor">' +this.alt+ '</h1>'
}
 */