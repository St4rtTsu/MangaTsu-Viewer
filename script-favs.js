var doujinList = [];

window.onload = function() {
    var ENG = "<img class='flags' src='./flags/flag-united-states.png'>";
    var UK = "<img class='flags' src='./flags/flag-united-kingdom.png'>";
    var BRA = "<img class='flags' src='./flags/flag-brazil.png'>";
    var SPA = "<img class='flags' src='./flags/flag-spain.png'>";
    var JAP = "<img class='flags' src='./flags/flag-japan.png'>";
    var CHI = "<img class='flags' src='./flags/flag-china.png'>";


    doujinList = [
        {
            name: "Number 01",
            img: "",
            link: "",
            language: `${BRA}`,
            note: "- Now: 000/025 👀"
        }, {
            name: "Number 02",
            img: "",
            link: "",
            language: `${JAP}`,
            note: ""
        }, {
            name: "Number 03",
            img: "",
            link: "",
            language: `${UK}`,
            note: ""
        },
    ];


    for( let p = 0; p < doujinList.length; p++){
        console.log(doujinList[p].name)
    
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const getId = document.querySelector('.things')
        if (doujinList[p].link.length == 0){
            doujinList[p].link = "#NONE";
        }

        if (doujinList[p].name.length == 0){
            doujinList[p].name = "NO NAME";
        }

        if (doujinList[p].img.length == 0){
            doujinList[p].img = "./img-error.png"; 
        }

        if (doujinList[p].language.length == 0){
            doujinList[p].language = "";
        }

        if (doujinList[p].note.length == 0){
            doujinList[p].note = "";
        }
    
        getId.innerHTML += '<img src="' + doujinList[p].img + '"><div class="info"><br>' + doujinList[p].language + '<a class="link" href="' + doujinList[p].link + '"><h1>' + doujinList[p].name + '</a></h1></div><div><h1>' + doujinList[p].note + '</h1></div></br>'
        document.querySelector("#fav-list").innerHTML = `${doujinList.length} |` + ' ❤ Favorites -'
   
    } 
}
