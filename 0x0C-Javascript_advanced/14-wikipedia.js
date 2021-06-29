function createElement(data) {
    let paragraph = document.createElement("p");
    let pText = document.createTextNode(data);
    paragraph.appendChild(pText);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xmlHttp.onload = function() {
        callback(this.responseText);    
    };
    xmlHttp.send();
    
}

queryWikipedia(createElement);