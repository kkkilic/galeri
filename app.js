//queryseletor ile resimlere atadık
const resimler = document.querySelectorAll(".resim");

// forEach ile resim içinde gezior


resimler.forEach(panel => {
    // burada addEventListener ile olay dinleme yapılır burada ki olay tıklama 
    panel.addEventListener("click", function(){

        removeAcive()

//tıkladımda resmin yanına active clasını ekleyecek

panel.classList.add("active")
    })
}

)
//resimlerin içindeki active classını kaldırıyor
function removeAcive () {
    resimler.forEach(panel =>{
        panel.classList.remove("active")
    })
}