// p_root = <ol> object
function jsonToOl(p_json,p_root)
{
    for (var title in p_json) 
    {  
        var link_text = p_json[title]
        var listItem = document.createElement("li")
        var linkItem = document.createElement("a")
        linkItem.innerText = title
        linkItem.href = link_text
        listItem.appendChild(linkItem)
        p_root.appendChild(listItem) 
    }
}