const loadPic = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPic(data))
}
loadPic()

const displayPic = images => {
    const userContainer = document.getElementById('users');
    images.forEach(img => {
        const div = document.createElement('div');
        div.innerHTML = `
           <div class="user" onclick = "loadImgDetails(${img.id})">
              <img src="${img.url}" alt="">
              <h4 class="user-title"> Title: ${img.title}</h4>
           </div>
    `;
        userContainer.appendChild(div);
    });
}
const loadImgDetails = imgId => {
    const url = `https://jsonplaceholder.typicode.com/photos/${imgId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayImgDetails(data))
}
const displayImgDetails = perImg => {
    // console.log('perImg -- ', perImg.title)
    const imgDetails = document.getElementById('img-datails');
    //clear previous perImg details
    imgDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('imgDetails');
    div.innerHTML = `   
    <img src="${perImg.url}" alt="">
    <img src="${perImg.thumbnailUrl}" alt="">
    <h4 class="user-title"> Title: ${perImg.title}</h4>
    `;
    imgDetails.appendChild(div)
} 
