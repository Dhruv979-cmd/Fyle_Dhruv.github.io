// JS CODE FOR DIVS AND IMAGES CHANGES
document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('#div1, #div2, #div3');
    const imageDiv = document.getElementById('imageDiv');
    function resetColors() {
        divs.forEach(div => {
            div.style.backgroundColor = '#f6f6f6';
            div.style.color = 'black';
        });
    }
    function changeColor(div, imageUrl) {
        resetColors();
        div.style.backgroundColor = 'rgb(255, 49, 71)';
        div.style.color = 'white';
        imageDiv.style.backgroundImage = `url(${imageUrl})`;
    }
    divs.forEach((div, index) => {
        div.addEventListener('click', () => {
            let imageUrl;
            switch (index) {
                case 0:
                    imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsfLpzwfweJXKW4ftosFoDl0AVgtevuhCNf9S_tvvBxFam_m6';
                    break;
                case 1:
                    imageUrl = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXFB2YFYFaO8gzOFkFoD0CXbKOlbK0H25t2rW_HbYbIVY3Dckr';
                    break;
                case 2:
                    imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5nUsJA0HdpCXbY69IqqWOUXBK_2xW8KTR6LBq9su4njArxEN';
                    break;
            }
            changeColor(div, imageUrl);
        });
    });
    // Set default color and image on page load
    changeColor(document.getElementById('div2'), 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXFB2YFYFaO8gzOFkFoD0CXbKOlbK0H25t2rW_HbYbIVY3Dckr');
});
// JS CODE FOR DIVS AND IMAGES CHANGES



// CODE FOR CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    var workEmail = document.getElementById('Work_email').value;
    var firstName = document.getElementById('First_name').value;
    var lastName = document.getElementById('Last_name').value;
    var checkBox = document.getElementById('flexCheckDefault').checked;
    if (checkBox) {
        console.log('Work Email:', workEmail);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        alert('Form submitted successfully!');
    } else {
        alert('Please agree to the terms and conditions.');
    }
});
document.getElementById('openFormBtn').addEventListener('click', function() {
    document.getElementById('contactFormContainer').style.display = 'block';
    document.getElementById('contactFormContainer').style.boxShadow = '20px 20px 50px rgba(0,0,0,0.8),-20px -20px 50px rgba(0,0,0,0.8)';
    
});
document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('contactFormContainer').style.display = 'none';
});
// CODE FOR CONTACT FORM