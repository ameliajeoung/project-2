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
        document.querySelector('.island-info').style.marginBottom = content.offsetHeight + '20px';
    } else {
        content.style.display = 'none';
        document.querySelector('.island-info').style.marginBottom = '20px'; 
    }
}