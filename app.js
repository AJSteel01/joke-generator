const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();


//cleaner and modern way to call APIs B)
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);

  const data = await response.json();

  jokeEl.innerHTML = data.joke;
}


//OLD SCHOOL Method to fetch API :)

// function generateJoke() {
//     const config = {
//       headers: {
//         Accept: 'application/json',
//       },
//     };

//       fetch('https://icanhazdadjoke.com/', config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeEl.innerHTML =data.joke
//         });

// }
