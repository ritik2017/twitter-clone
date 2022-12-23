window.onload = async () => {
    
    fetch('http://localhost:3000/tweet/recent').then(async (res) => {
        const result = await res.json();

        console.log(result);
        if(result.status !== 200) {
            alert(result.message);
        }
    }).catch((err) => {
        alert(err);
    })
}