// Show the preloader initially
const preloader = document.querySelector("#preloader")

// Hide the preloader after a specified timeout (e.g., 1500 milliseconds)
window.onload = function() {
    setTimeout(() => {
      preloader.style.display = "none"
    }, 1000);
};

// const menu = document.querySelector(".menu");
// const slideBox = document.querySelector(".slidebox");

// $(document).ready(function() {
//     $(".menu").click(function(){
//         $(".slidebox").toggle(800);
//     });
// })

// menu.addEventListener("click", function(){
//     // event.preventDefault();
//     slideBox.style.display="block";
//     console.log("hello")
// })
// menu.addEventListener("click", function(event){
//     event.preventDefault;
//     slideBox.style.display="none";
// })


//form validation
const form = document.getElementById('contactForm');
const result = document.getElementById('contactFormResult');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."
    result.style.color="green"
    result.style.fontSize="1.5rem"


    fetch('https://atslng.com/includes/sendmail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
            result.style.color="red"
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


// function alpha(event) {
//     var char = event.which;
//     if (char >31 && char != 32 && (char<65 || char>90) && (char < 97 || char >122)){
//         return false;
//     }
// }
// const submitBtn = document.querySelector(".btn")
// const formBox = document.querySelector("#contactForm")

// submitBtn.addEventListener("click", function() {
//     // formBox.reset()
// })
// function validate(){
//     var validation = /^[A-Za-z]+$/;
//     var userName = document.formBox.name.value;
//     var result = validation.test(userName);

//     if (result){
//         alert("successful")
//     }else{
//         alert("failed")
//         document.formBox.name.focus();
//     }

// }

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "israelsandra2000@gmail.com",
//         Password : "663334354E85450DE96E8E44F8B7EC07254F",
//         To : 'israelsandra2000@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Cotact Form Enquiry",
//         Body : "Name: "
//             //    "<br> Email: " + document.getElementById("email").value +
//             //    "<br> Phone No: " + document.getElementById("phone").value +
//             //    "<br> Message: " + document.getElementById("message").value
//     }).then(
//       message => alert("hello")
//     );
// }

