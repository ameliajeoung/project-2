function togglePlants() {
    var toggleContent = document.querySelector('.toggle-plants-content');
    var islandStats = document.querySelector('.island-stats');

    if (toggleContent.style.display === 'none' || toggleContent.style.display === '') {
        toggleContent.style.display = 'block';
        islandStats.style.height = toggleContent.offsetHeight + 'px';
    } else {
        toggleContent.style.display = 'none';
        islandStats.style.height = '';
    }
}