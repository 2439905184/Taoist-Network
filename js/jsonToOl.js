// p_root = <ol> object
function jsonToOl(p_json,p_root)
{
    for (var title in p_json) 
    {  
    var link = p_json[title];  
    var listItem = document.createElement('li');  
    var listText = document.createTextNode(title);  
    var linkElement = document.createElement('a');  
    linkElement.href = link;  
    linkElement.appendChild(listText);  
    listItem.appendChild(linkElement);  
    var ol = p_root
    ol.appendChild(listItem);  
    }
}