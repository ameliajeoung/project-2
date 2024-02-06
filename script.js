function togglePlants() {
    toggleSection('plant-info');
}

function toggleGear() {
    toggleSection('gear-info');
}

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var content = section.querySelector('.toggle-content');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        document.querySelector('.island-info').style.marginBottom = content.offsetHeight + 20 +'px';
    } else {
        content.style.display = 'none';
        document.querySelector('.island-info').style.marginBottom = '20px'; 
    }
}

let currentIndex = 0;
clickPlants(0);

function clickPlants(direction) {
    currentIndex += direction;

    const totalPlants = document.getElementsByClassName('plant').length;

    if (currentIndex < 0) {
        currentIndex = totalPlants - 1;
    } else if (currentIndex >= totalPlants) {
        currentIndex = 0;
    }

    let plants = document.getElementsByClassName('plant');
    console.log(totalPlants);
    let loopStart = currentIndex;

    for (let i = 0; i < plants.length; i++) {
        plants[i].style.display = 'none';
    }

    let loopEnd = (loopStart + 4) % totalPlants;

    for (let i = loopStart; i !== loopEnd; i = (i + 1) % totalPlants) {
        plants[i].style.display = 'block';
    }
}


