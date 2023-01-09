const callEverything = async ()=>{
    let postId = document.querySelector('.postId').value;

    if(!postId){
        postId = 1;
        document.querySelector('.postId').value = 1
    }

    const req = `http://localhost:8290/placeposts/${postId}`;
    const call =  await fetch(req);
    const json = await call.json();

    document.querySelector('.title').innerHTML = json.title;
    document.querySelector('.user-info-top p').innerHTML = json.name;
    document.querySelector('.user-info-bottom p').innerHTML = json.email;
    document.querySelector('.body').innerHTML = json.body;
    
}

document.querySelector('.button').addEventListener('click', ()=>{
    callEverything()
})