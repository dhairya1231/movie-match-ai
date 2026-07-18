const startBtn = document.getElementById("startBtn");

const hero = document.querySelector(".hero");

const recommendation = document.getElementById("recommendation");

const resultSection = document.getElementById("resultSection");
const backBtn = document.getElementById("backBtn");
const result = document.getElementById("result");

startBtn.addEventListener("click", () => {

    hero.style.display = "none";

    recommendation.style.display = "block";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// Get references to the form fields

const genre = document.getElementById("genre");
const mood = document.getElementById("mood");
const language = document.getElementById("language");
const favoriteMovie = document.getElementById("favoriteMovie");
const favoriteActor = document.getElementById("favoriteActor");

const recommendBtn = document.getElementById("recommendBtn");


recommendBtn.addEventListener("click", async function () {

    const movieData = {

        genre: genre.value,
        mood: mood.value,
        language: language.value

    };

    const response = await fetch("http://127.0.0.1:8000/recommend", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(movieData)

    });

    const data = await response.json();
console.log(data);

recommendation.style.display = "none";
resultSection.style.display = "block";

result.innerHTML = `
<h3>🎬 Your Movie Recommendations</h3>
<pre>${data.recommendations}</pre>
`;

});

backBtn.addEventListener("click", () => {

    resultSection.style.display = "none";

    recommendation.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});