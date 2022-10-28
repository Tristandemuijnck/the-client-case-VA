function switchDisplay(id, buttonId){
    let elementId = document.getElementById(id);
    let button = document.getElementById(buttonId);
    
    if(elementId.style.display == 'none'){
        elementId.style.setProperty('display', 'flex');
        button.innerHTML = "Minder info";
    }
    else if(elementId.style.display == 'flex'){
        elementId.style.setProperty('display', 'none');
        button.innerHTML = "Meer info";
    }
}

function switchButtonText(classDisplayChild){
    const infoButton = document.querySelectorAll('.info-btn');

    infoButton.forEach((infoButtonChild) => {
        if(classDisplayChild == 'none'){
            infoButtonChild.innerHTML = "Meer info";
        }
        else if(classDisplayChild == 'flex'){
            infoButtonChild.innerHTML = "Minder info";
        }
    });
}

function switchAllDisplayOpen(){
    const classDisplay = document.querySelectorAll('.article-extra');

    classDisplay.forEach((classDisplayChild) => {
        classDisplayChild.style.setProperty('display', 'flex');
        switchButtonText(classDisplayChild.style.display);
    });
}

function switchAllDisplayClose(){
    const classDisplay = document.querySelectorAll('.article-extra');

    classDisplay.forEach((classDisplayChild) => {
        classDisplayChild.style.setProperty('display', 'none');
        switchButtonText(classDisplayChild.style.display);
    });
}
