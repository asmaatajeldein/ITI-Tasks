var userSection = document.getElementById('user-section');
var postSection = document.getElementById('user-posts');
var postsOfUser = document.getElementById('user-name');

// WARNING: MAKE SURE TO COMMENT ONE OF THE FOLLOWING SECTIONS
// TWO DIFFERENT SYNTAXES ARE USED TO HANDLE API REQUESTS

// using async & await syntax ///////////////////////////////////////

// async functions call
getUsers();
getPosts();

// to get users and create buttons
async function getUsers() {
    try {
        var res = await fetch("https://jsonplaceholder.typicode.com/users");
        var usersArr = await res.json();
    
        // to get the first user name to display it on when the page opens
        getUserName(usersArr[0].name);
    
        // loop through usersArr to create buttons and add event listeners to fetch posts
        for(var i = 0; i < usersArr.length; i++) {
            var userBtn = createBtn(usersArr[i].name);
            userSection.append(userBtn);
    
            let userId = usersArr[i].id;
            let userName = usersArr[i].name;
    
            userBtn.addEventListener('click', () => {
                getUserName(userName);
                removeChilds(postSection);
                (async (uID) => await getPosts(uID))(userId);
            });
        }
    } catch (e) {
        console.log(e);
    }

}


// fetches user's posts and displays it in the DOM
async function getPosts(userId=1) {
    try {
        var res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        var userPosts = await res.json();
    
        for(var i = 0; i < userPosts.length; i++) {
            var postCard = createPostCard(userPosts[i]);
            postSection.append(postCard);
        }
    } catch (e) {
        console.log(e);
    }
}


// using then syntax /////////////////////////////////////////////////////
getPosts();

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(usersArr => {

    // to get the first user name to display it on when the page opens
    getUserName(usersArr[0].name);
    
    // loop through usersArr to create buttons and add event listeners to fetch posts
    for(var i = 0; i < usersArr.length; i++) {
        var userBtn = createBtn(usersArr[i].name);
        userSection.append(userBtn);

        let userId = usersArr[i].id;
        let userName = usersArr[i].name;

        userBtn.addEventListener('click', () => {
            getUserName(userName);
            removeChilds(postSection);
            getPosts(userId);
        });
    }
})
.catch(e => console.log(e));

function getPosts(userId=1) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res => res.json())
    .then(userPosts => {
        for(var i = 0; i < userPosts.length; i++) {
            var postCard = createPostCard(userPosts[i]);
            postSection.append(postCard);
        }
    })
    .catch(e => console.log(e));
}


// FUNCTIONS //////////////////////////////////////////////
// to display the user's name, whose posts are showing.
function getUserName(username) {
    postsOfUser.innerHTML = `📃 ${username}'s Posts`;
};

// to remove old posts from the DOM if they exist
function removeChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild)
    }
}

// to create users buttons
function createBtn(btnName) {
    var btn = document.createElement('button');
    btn.classList = 'btn btn-outline-dark col-auto';
    btn.innerHTML = btnName;
    return btn;
}

// to create posts
function createPostCard(post) {
    var card = document.createElement('div');
    card.classList = 'card text-bg-light text-center col-auto border border-dark border-2';
    card.style.width = '18rem';

    var cardBody = document.createElement('div');
    cardBody.classList = 'card-body';

    var cardTitle = document.createElement('h4');
    cardTitle.classList = 'card-title text-italic fw-bold';
    cardTitle.innerHTML = post.title;

    var cardText = document.createElement('p');
    cardText.classList = 'card-text';
    cardText.innerHTML = post.body;

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    card.append(cardBody);

    return card;
}