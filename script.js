    const users = [
        {
            name: "amisha rathore",
            pic: "https://i.pinimg.com/736x/7a/04/2d/7a042d5d4372bd2d9e5f672e3d932292.jpg",
            bio: "silent chaos in a loud world 🖤 | not for everyone",
        },
        {
        name: "kiara mehta",
            pic: "https://i.pinimg.com/736x/f6/66/33/f666338d37c360001c2edad9be865475.jpg",
            bio: "main character energy 🎬​ | coffee > everything ✨​", 
        },
        {
            name: "isha oberoi",
            pic: "https://i.pinimg.com/736x/1f/60/1f/1f601f256f5497e4f5e43ca09764e6bf.jpg",
            bio: "walking through dreams in doc-marten 💭🖤 | late night thinker",
        },
        {
        name: "anaya kapoor",
        pic: "https://i.pinimg.com/736x/38/80/64/3880643bf3b6a117ae686c59b65b2db2.jpg",
        bio: "smiles, sunsets & soft playlists 🌅🎧 | living my own story",
        },
        {
        name: "riya sharma",
        pic: "https://i.pinimg.com/736x/f8/21/de/f821de8a542991553a00e7947392742e.jpg",
        bio: "less perfection, more confidence ✨ | good vibes only 💫",
        },
    {
        name: "sana khan",
        pic: "https://i.pinimg.com/736x/aa/9a/a4/aa9aa4dbad4dc402cb2e0d01087d864a.jpg",
        bio: "romanticizing every little moment 🌸 | forever curious 🌙",
    },
        {
        name: "meher singh",
        pic: "https://i.pinimg.com/736x/af/56/43/af5643fb4453f16798c13e8836161c93.jpg",
        bio: "making memories, not excuses 📸 | peace over drama 🤍",
    },
        {
        name: "tanya arora",
        pic: "https://i.pinimg.com/736x/1f/9e/d0/1f9ed0d319b26a621e274dd2afa82812.jpg",
        bio: "chasing dreams one step at a time 🚀 | messy bun, clear goals 💕",
    },
    {
        name: "siya malhotra",
        pic: "https://i.pinimg.com/736x/07/b7/41/07b741420419105c34d79e07f3a14f77.jpg",
        bio: "caught between reality & daydreams ☁️ | music heals everything 🎶",
    },
    {
        name: "avni chauhan",
        pic: "https://i.pinimg.com/736x/cf/b8/dd/cfb8dd5f25a11c5c4c2565d005675486.jpg",
        bio: "soft heart, strong mind 🤍 | creating my own sunshine ☀️",
    },
    {
        name: "kashish verma",
        pic: "https://i.pinimg.com/736x/40/4b/f5/404bf5f7acff64fd37b9a9d26d4e0113.jpg",
        bio: "pretty mind, prettier soul ✨ | here for good vibes only 🌼",
    },
    ];

    const cardsContainer = document.querySelector(".cards");
    const modalWrapper = document.querySelector(".modal-wrapper");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close-btn");
    const modalImg = document.querySelector("#modalImg");
    const modalName = document.querySelector("#modalName");
    const modalBio = document.querySelector("#modalBio");
    // Display all user cards
    function showUsers(arr){
   
    arr.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card"); //put class in cards

    card.addEventListener("click", function(evt){
    if(evt.target.tagName === "BUTTON") return; 
        modalImg.src = user.pic;
        modalName.textContent = user.name;
        modalBio.textContent = user.bio;
        modalWrapper.style.display = "flex";
    });

    const img = document.createElement("img");
    img.src = user.pic; 
    img.classList.add("bg-image");  

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`; 
    blurredLayer.classList.add("blurred-layer"); 

    const content = document.createElement("div");  
    content.classList.add("content");  

    const heading = document.createElement("h3");
    heading.textContent = user.name; 
    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;  

    const button = document.createElement("button");
    button.textContent = "Follow";
    button.classList.add("follow-Btn");

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(button);

    cardsContainer.appendChild(card);

    button.addEventListener("click", function(){
        if(button.textContent === "Follow"){
            button.textContent = "Following ✓";
            button.classList.add("Following");
            button.classList.remove("follow-Btn");
        }
        else{
            button.textContent = "Follow";
            button.classList.add("follow-Btn");
            button.classList.remove("Following");
        }
    });
    });
    }

    // Display loading skeletons
    function showSkeletons(){
        cardsContainer.innerHTML ="";

        for(let i = 0; i<users.length; i++){
            const skeleton = document.createElement("div");
            skeleton.classList.add("skeleton-card");
            cardsContainer.appendChild(skeleton);
        }
    }
    showSkeletons();

    setTimeout(function(){
    cardsContainer.innerHTML="";
    showUsers(users);
    },2000);

    const para = document.createElement("div");
    para.classList.add("para");
    para.textContent = "no result found!";
    para.style.display = "none";
    document.querySelector("main").appendChild(para);

    const inp = document.querySelector(".inp");

    // Live Search
    inp.addEventListener("input", function(){
    const newArr = users.filter((user)=>{
    return (
    user.name.toLowerCase().includes(inp.value.toLowerCase())||
    user.bio.toLowerCase().includes(inp.value.toLowerCase())
    );
    });
    cardsContainer.innerHTML="";
    showUsers(newArr);
    if(newArr.length === 0){
    para.style.display = "block";
    }
    else{
        para.style.display = "none";
    }
    });

    closeBtn.addEventListener("click", function(){
            modalWrapper.style.display = "none";
    });