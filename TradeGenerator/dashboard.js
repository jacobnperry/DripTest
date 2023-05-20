var tradeList = 0
var gameName = []
var gameList
var game = new Object()
var generatorCheck = 0

function gameEntry(name, id){
  this.name = name
  this.id = id

}


window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

async function getList() {
  console.log("request started")
  var userName = document.getElementById('username').value
  var parser = new DOMParser();
  var obj;
  var requestOptions = {
      method: 'GET'
    };
   var xmlDoc = await fetch('https://boardgamegeek.com/xmlapi2/collection?username=' + userName + '&trade=[1]', requestOptions)
        
        .then(response => response.text())
        
  
  
    xmlDoc = parser.parseFromString(xmlDoc,"text/xml")
    gameList = xmlDoc.getElementsByTagName("name")
    for (i = 0; i < gameList.length; i++){
        console.log(gameList[i])
      var singleGame = new gameEntry(gameList[i].childNodes[0].textContent, gameList[i].parentElement.attributes[1].nodeValue) 
      gameName.push(singleGame)
    }

        //console.log(xmlDoc.documentElement.children[tradeList].childNodes[1].innerHTML)
		tradeList = tradeList + 1
    
    console.log(gameName)

    var div = document.getElementById('myList');

    arrToUl(div, gameName);

}



function arrToUl(root, arr) {
  if (generatorCheck < 1){

    var ul = document.createElement('p');
    var li;
    
    root.appendChild(ul); // append the created ul to the root

    arr.forEach(function(item) {
      if (Array.isArray(item)) { // if it's an array
        arrToUl(li, item); // call arrToUl with the li as the root
        return;
      }


      li = document.createElement('p')
      li.innerHTML = `<a href="https://boardgamegeek.com/boardgame/${item.id}">${item.name}</a> <br>`; // create a new list item
      ul.appendChild(li); // append the list item to the ul
    })
    generatorCheck = 1
  } else {
      console.log(generatorCheck)
    alert("Refresh page to generate a new list")
  }
}
