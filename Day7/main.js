let content = document.querySelector('.content');
let input = document.querySelector('.content input');
let remove = document.querySelector('.remove-all');
let tags = ['NodeJS', 'ReactJS'];

function createTags() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += 
                                `<li>
                                        ${tags[i]}
                                        <i class="fa-solid fa-xmark close-${i}" onclick="removeTag(${i})"></i>
                                    </li>
                                `
    }
    content.appendChild(input);
    input.focus();
  
}
createTags();

input.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        tags.push(input.value);
        input.value = '';
        createTags();
    }
});

function removeTag(index) {
    tags.splice(index, 1);
    createTags();
}

remove.addEventListener('click', () => {
    tags.length = 0;
    createTags();
});





