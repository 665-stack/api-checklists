const loadPic = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPic(data))
}
loadPic()

const displayPic = users => {
    const userContainer = document.getElementById('users');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
            <img src="${user.url}" alt="">
            <h4> Title: ${user.title}</h4>
    `;
        userContainer.appendChild(div);
    });
}
