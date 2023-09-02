

const card = document.querySelector(".card-box");

const username_field = document.getElementById("username");
const image_field = document.getElementById("photo");
const name_field = document.getElementById("name");
const gender_field = document.getElementById("gender");
const dob_field = document.getElementById("dob");
const address_field = document.getElementById("address");
const email_field = document.getElementById("email");
const id_field = document.getElementById("id");
const cell_field = document.getElementById("cell");
const registered_field = document.getElementById("registered");

const details2 = document.querySelector(".details2");

function reload(){

    details2.classList.remove('hidden');

    fetch('https://randomuser.me/api/').then((data)=>{
        return data.json()
    }).then((data)=>{
    
        var username, image, fname, gender, dob, address, email,id, cell, registered;
    
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
        id = data.id.name+data.id.value;
        cell = data.cell;
        registered = data.registered.date;
    
        var date = new Date(dob);
        date = date.toLocaleDateString();
        
        var registration_date = new Date(registered);
        registration_date = registration_date.toLocaleDateString();
    
        username_field.innerText = username;
        image_field.src = image;
        address_field.innerText = address;
        name_field.innerText = fname;
        gender_field.innerText = gender;
        dob_field.innerText = date;
        email_field.innerText = email;

        id_field.innerText = id;
        cell_field.innerText = cell;
        registered_field.innerText = registration_date;
    
    })
}

card.addEventListener("click",()=>{
    details2.classList.toggle('hidden');
})



reload();
details2.classList.toggle('hidden');