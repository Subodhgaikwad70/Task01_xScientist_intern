


const card = document.querySelector(".card-box");

const username_field = document.getElementById("username");
const image_field = document.getElementById("photo");
const name_field = document.getElementById("name");
const gender_field = document.getElementById("gender");
const dob_field = document.getElementById("dob");
const address_field = document.getElementById("address");
const email_field = document.getElementById("email");

const details2 = document.querySelector(".details2");

function reload(){

    details2.classList.toggle('hidden');

    fetch('https://randomuser.me/api/').then((data)=>{
        return data.json()
    }).then((data)=>{
    
        var username, image, fname, gender, dob, address, email;
    
        data = data.results[0];
        console.log(data);
        username = data.login.username;
        image = data.picture.large;
        fname = data.name.first+" "+data.name.last;
        gender = data.gender;
        dob = data.dob.date;
        address = data.location;
        address = address.street.number+", "+address.street.name+", "+address.city+", "+address.state+", "+address.country+", "+address.postcode;
        email = data.email;
    
        var date = new Date(dob);
        date = date.toLocaleDateString();
    
    
        username_field.innerText = username;
        image_field.src = image;
        address_field.innerText = address;
        name_field.innerText = fname;
        gender_field.innerText = gender;
        dob_field.innerText = date;
        email_field.innerText = email;
    
    })
}

card.addEventListener("click",()=>{
    details2.classList.toggle('hidden');
})



reload();
details2.classList.toggle('hidden');