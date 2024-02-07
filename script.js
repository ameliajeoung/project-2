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

let currentPosition = 1; 

function clickPlants(direction) {
    currentPosition += direction;

    currentPosition = Math.min(Math.max(currentPosition, 1), 4);

    for (let i = 1; i <= 7; i++) {
        document.getElementById(`plant${i}`).style.display = 'none';
    }

    for (let i = currentPosition; i < currentPosition + 4; i++) {
        document.getElementById(`plant${i}`).style.display = 'block';
    }
}

clickPlants(0);


