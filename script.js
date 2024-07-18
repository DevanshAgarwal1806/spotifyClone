
async function main(){
    let a=await fetch("http://127.0.0.1:3000/songs/")
    .then(printf =>{
        console.log(a.text());
    })
}
main();