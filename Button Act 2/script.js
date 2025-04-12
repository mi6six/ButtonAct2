document.addEventListener('DOMContentLoaded', function() {
    const mainBtn = document.getElementById('mainBtn');
    const contentDiv = document.getElementById('contentDiv');
    const changeContentBtn = document.getElementById('changeContentBtn');
    const backBtn = document.getElementById('backBtn');
    const contentImage = document.getElementById('contentImage');
    const contentText = document.getElementById('contentText');
    
    const contentOptions = [
        {
            image: 'images/image1.jpg',
            text: 'This is the first local image in our folder.'
        },
        {
            image: 'images/image2.jpg',
            text: 'This is the second local image in our folder.'
        },
        {
            image: 'images/image3.jpg',
            text: 'This is the third local image in our folder.'
        }
    ];
    let currentContentIndex = 0;
    
    mainBtn.addEventListener('click', function() {
        contentDiv.classList.remove('hidden');
        mainBtn.classList.add('hidden');
    });
    
    changeContentBtn.addEventListener('click', function() {
        currentContentIndex = (currentContentIndex + 1) % contentOptions.length;
        contentImage.src = contentOptions[currentContentIndex].image;
        contentText.textContent = contentOptions[currentContentIndex].text;
    });
    
    backBtn.addEventListener('click', function() {
        contentDiv.classList.add('hidden');
        mainBtn.classList.remove('hidden');
    });
});