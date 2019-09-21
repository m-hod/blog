
function summarize (className) {
    const content = document.getElementsByClassName(className)
    for (var i = 0; i < content.length; i++) {
        let contentHTML = content[i].innerHTML
        if (contentHTML.length > 150) {
                content[i].innerHTML = contentHTML.substring(0, 150) + ' ...'
            }
    }
}

summarize("description")
