window.onload = async () => {

    const result = await fetch(`http://localhost:3000/tweet/recent`);

    const tweets = await result.json();

    console.log(tweets.data);

    document.getElementById('tweet-body').insertAdjacentHTML('beforeend', tweets.data.map((tweet) => {
        const date = new Date(tweet.creationDatetime);
        
        return `<div class="tweets">
            <div class="tweet-profile-image">
            <img
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                alt="profile image"
            />
            </div>
            <div class="tweet">
            <div class="tweet-header">
                <div class="tweet-user-info">
                <p><strong>Rohan Roshan</strong></p>
                <p>@rohanroshan</p>
                <p>${date.toDateString()}</p>
                </div>
                <div class="tweet-three-dots-menu">
                <button>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#5b7083"
                        d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"
                    ></path>
                    </svg>
                </button>
                </div>
            </div>
            <div class="tweet-body">
                <span>${tweet.title}
                </span>
            </div>
            </div>
        </div>`
    }).join(""))
}

document.addEventListener('click', async (event) => {
    if(event.target.classList.contains('tweet-post-btn')) {
        const tweetText = document.querySelector('.tweet-post-text').value;

        const data = {
            title: tweetText,
            text: "Random Value",
            userId: "12345"
        }
        
        const tweetResponse = await fetch('http://localhost:3000/tweet/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        const tweet = await tweetResponse.json();

        if(tweet.status !== 200) {
            alert(tweet.message);
            return;
        }

        document.querySelector('.tweet-post-text').value = "";
        alert(tweet.message);
    }
})

// Callback 
// Promises 
// Async Await 

// const result2 = await fetch('https://api.github.com/users');

//     console.log(result2);
    
//     const a = await result2.json();

//     console.log(a);


// fetch('http://localhost:3000/tweet/recent').then((result) => {

//     fetch('http://localhost:3000/user/profile', {}).then((res) => {
            
//     })
// })

// fetch('https://api.github.com/users').then((result2) => {
//     console.log(result2);
// })

// fetch('http://localhost:3000/tweet/recent').then(async (res) => {
//     const result = await res.json();

//     console.log(result);
//     if(result.status !== 200) {
//         alert(result.message);
//     }
// }).catch((err) => {
//     alert(err);
// })


// const dataArray = tweets.data;

//     // for(let i = 0; i < dataArray.length; i++) {
//     //     dataArray[i] = "<h1>Hello</h1>";
//     // }

//     const data = dataArray.map((a) => {
//         a = `<h1>${a.title}</h1>`;
//         return a;
//     })

//     console.log(data);



// tweets.data.forEach((tweet) => {
//     const date = new Date(tweet.creationDatetime);

//     document.getElementById('tweet-body').insertAdjacentHTML('beforeend', `<div class="tweets">
//         <div class="tweet-profile-image">
//         <img
//             src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
//             alt="profile image"
//         />
//         </div>
//         <div class="tweet">
//         <div class="tweet-header">
//             <div class="tweet-user-info">
//             <p><strong>Rohan Roshan</strong></p>
//             <p>@rohanroshan</p>
//             <p>${date.toDateString()}</p>
//             </div>
//             <div class="tweet-three-dots-menu">
//             <button>
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                     fill="#5b7083"
//                     d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z"
//                 ></path>
//                 </svg>
//             </button>
//             </div>
//         </div>
//         <div class="tweet-body">
//             <span>${tweet.title}
//             </span>
//         </div>
//         </div>
//     </div>`
//     );
// });