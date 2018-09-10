let allHyperLink = document.getElementsByTagName('a');
console.log(allHyperLink);

for (let i = 0; i < allHyperLink.length; i++ ) {
    if(allHyperLink[i].getAttribute('href') == "#") {
        allHyperLink[i].style.color = "red";
};