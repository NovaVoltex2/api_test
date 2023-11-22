let person = {}; // Create an empty object
let username = document.querySelector('.username')
let email = document.querySelector('.email')
let phone = document.querySelector('.phone')
let pic = document.getElementById('avatarImg')
let picMain = document.querySelector('.loader')
fetch('https://randomuser.me/api')
	.then(response => response.json())
	.then(data => {
		console.log(data.results[0]);
		person.name = data.results[0].name;
		person.data = data.results[0];
		person.picture = data.results[0].picture.large;
		usePersonData();
	})
	.catch(error => {
		// Handle any errors that occur during the fetch request
		dont.innerHTML = 'api not working'
		console.log('api not working');
	});

// Function to use the person data
function usePersonData() {
	pic.addEventListener('load',()=>{
		picMain.classList.add('removeLoader')
	})



	username.innerHTML = person.name.title+'.'+ person.name.first + ' ' + person.name.last
	email.innerHTML = person.data.email
	phone.innerHTML = person.data.phone
	pic.setAttribute('src', person.picture)

	console.log(person.name.first);
	console.log(person.name.last);
	console.log(person.name.title);
	console.log(person.picture);
}
let button = document.querySelector('.controls button')
button.onclick=()=>{
	location.reload()
}

let dont=document.querySelector('.dont')
dont.addEventListener('mouseover',()=>{
	let y = Math.ceil(Math.random() * 80)
	let x = Math.ceil(Math.random() * 80)

	dont.style.color='red';
	dont.style.top = `${y}%`;
	dont.style.left = `${x}%`;

})
let count=1
dont.onclick=()=>{
	dont.innerHTML =`succeed to click ${count} times`
console.log(count);
count++
}