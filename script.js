let main = document.querySelector('#container');

let api = `https://jsonplaceholder.typicode.com/users`;

async function getData(api){
    try {
        let response = await fetch(api)
        let data = await response.json()
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}
getData(api);

function displayData(arr){
    main.innerHTML="";
    arr.forEach((ele)=>{
        let div = document.createElement('div')

    let id = document.createElement('p');
    id.innerText= ele.id;

    let name = document.createElement('h1');
    name.innerText=ele.name;

    let username = document.createElement('h1')
    username.innerText= ele.username;

    let email = document.createElement('h4')
    email.innerText= ele.email;

    let address= document.createElement('h5')
    address.innerText= ele.address.street;

    let phone = document.createElement('h5')
    phone.innerText= ele.phone;

    let website = document.createElement('h5')
    website.innerText= `Web: ${ele.website}`;

    let company = document.createElement('h4')
    company.innerText= ele.company.name;

    div.append(name,username,email,address,phone,website,company);
    main.append(div);
    })
}

let sort= document.querySelector('#sort')
sort.addEventListener('input',function(){
    sortData();
})
function sortData(){
    let sortVal= sort.value;
    getData(`https://jsonplaceholder.typicode.com/users?_sort=name&_order=${sortVal}`)
}

