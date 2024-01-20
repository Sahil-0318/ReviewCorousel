let preBtn = document.querySelector('#pre');
let nextBtn = document.querySelector('#next');
let surpriseBtn = document.querySelector('#surprise-btn');
let index = 0;

let reviews = [
    {
        id: 1,
        imgURL: "./Images/profile-1.jpeg",
        name: "Yuri Manei",
        role: "web developer",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nemo veniam nostrum a ipsa eos, dicta tenetur nisi, aliquid saepe cum asperiores ullam necessitatibus? Perspiciatis libero cumque laudantium nobis quo?"
    },
    {
        id: 2,
        imgURL: "./Images/profile-2.jpeg",
        name: "Angela Yu",
        role: "ui/ux designer",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 3,
        imgURL: "./Images/profile-3.jpeg",
        name: "Rohan Mishra",
        role: "manager",
        review: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        id: 4,
        imgURL: "./Images/profile-4.jpeg",
        name: "Bob Ward",
        role: "photographer",
        review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 5,
        imgURL: "./Images/profile-5.jpeg",
        name: "Natash Cooper",
        role: "Engineer",
        review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    }
];

let nextBtnClick = () => {
    if (index < reviews.length - 1) {
        index++;
        document.querySelector('#img-container img').setAttribute('src', reviews[index].imgURL);

        document.querySelector('#name').innerHTML = reviews[index].name;

        document.querySelector('#role').innerHTML = reviews[index].role;

        document.querySelector('.container p').innerHTML = reviews[index].review;
        // console.log(index);
    }
}

let preBtnClick = () => {
    if (index > 0) {
        index--;
        document.querySelector('#img-container img').setAttribute('src', reviews[index].imgURL);

        document.querySelector('#name').innerHTML = reviews[index].name;

        document.querySelector('#role').innerHTML = reviews[index].role;

        document.querySelector('.container p').innerHTML = reviews[index].review;
        // console.log(index);
    }
}

let surpriseBtnClick = ()=>{
    let randomIndex = Math.floor(Math.random()*(reviews.length));
    // console.log(randomIndex);

    document.querySelector('#img-container img').setAttribute('src', reviews[randomIndex].imgURL);

    document.querySelector('#name').innerHTML = reviews[randomIndex].name;

    document.querySelector('#role').innerHTML = reviews[randomIndex].role;

    document.querySelector('.container p').innerHTML = reviews[randomIndex].review;
}

nextBtn.addEventListener('click', nextBtnClick);

preBtn.addEventListener('click', preBtnClick);

surpriseBtn.addEventListener('click', surpriseBtnClick);





