var div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "20px";
div.style.height = "65px";
div.style.right = "20px";
div.style.alignItems = "center";
div.style.display = "flex";

var btn = document.createElement("div");
btn.style.cursor = "pointer";
btn.id = '#button-whatsapp';


var image = document.createElement("img");
image.src = "https://www.dsmeletro.com/wp-content/uploads/2020/04/whatsapp-icon-transparent-png-6.png";
image.style.width = "65px";

var p = document.createElement("h4");
p.style.marginRight = "5px";
p.style.fontSize = "0.9em";
p.innerHTML = "Fale conosco!";
p.style.border = "solid #000 2px";
p.style.borderRadius = "5px";
p.style.background = "#fbfaf9";
p.style.opacity = "0.9";
p.style.padding = "4px 15px";

div.appendChild(p);
btn.appendChild(image);
div.appendChild(btn);

var div2 = document.createElement("div");
div2.style.position = "fixed";
div2.style.bottom = "20px";
div2.style.right = "20px";
div2.style.alignItems = "center";
div2.style.width = "60px";

var btnLigar = document.createElement("a");
var imgLigar = document.createElement("img");
imgLigar.style.width = "60px";
imgLigar.src = "https://cdn-icons-png.flaticon.com/512/4517/4517980.png";
imgLigar.style.borderRadius = "50%";
imgLigar.style.border = "solid #000 2px";
imgLigar.style.marginBottom = "5px";
btnLigar.href = "tel:(xx) 9 xxxx-xxxx)";
btnLigar.id = "btnLigar";
btnLigar.appendChild(imgLigar);

var btnFelipe = document.createElement("a");
var imgFelipe = document.createElement("img");
imgFelipe.style.width = "60px";
imgFelipe.src = "https://impactomoveis.com/wp-content/uploads/2022/10/felipe.jpg";
imgFelipe.style.borderRadius = "50%";
imgFelipe.style.border = "solid #000 2px";
imgFelipe.style.marginBottom = "5px";
btnFelipe.id = "btnFelipe";
btnFelipe.href = "https://wa.me/5561999399770?text=Ol%C3%A1%2C+Felipe%21+Vim+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+a+loja.";
btnFelipe.appendChild(imgFelipe);

var btnLoja = document.createElement("a");
var imgLoja = document.createElement("img");
imgLoja.style.borderRadius = "50%";
imgLoja.style.width = "60px";
imgLoja.src = "https://impactomoveis.com/wp-content/uploads/2022/10/logo-quadrada-e1692224447299.jpg";
imgLoja.style.border = "solid #000 2px";
btnLoja.id = "btnLoja";
btnLoja.href = "https://wa.me/5561993529881?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+a+loja.";
btnLoja.appendChild(imgLoja);

var btnClose = document.createElement("img");
btnClose.src = "https://cdn-icons-png.flaticon.com/512/1617/1617543.png";
btnClose.style.width = "20px";
btnClose.style.marginLeft = "40px";
btnClose.style.cursor = "pointer";

div2.appendChild(btnClose);
div2.appendChild(btnLigar);
div2.appendChild(btnFelipe);
div2.appendChild(btnLoja);
div2.style.display = "none";

var html = document.querySelector('html');
html.appendChild(div);
html.appendChild(div2);
div.style.zIndex = "999999";
div2.style.zIndex = "999999";

btn.onclick = function () {
    if(div2.style.display == "none"){
        div2.style.display = "block";
        p.style.display = "none";
        btn.style.display = "none";
    }
};

        btnClose.onclick = function() {
            div2.style.display = "none";
            p.style.display = "block";
            btn.style.display = "flex";
        }
