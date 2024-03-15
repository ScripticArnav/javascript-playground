const avatar = document.querySelector('#avatar');
const followers = document.querySelector('.follower');

let followersCount;
let avatarImg;

const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        followersCount = data.followers
        avatarImg = data.avatar_url 
        console.log(data.followers);  
        
        avatar.setAttribute('src', avatarImg);
        followers.innerHTML = `Followers: ${followersCount}`;
    }
};
xhr.send()
