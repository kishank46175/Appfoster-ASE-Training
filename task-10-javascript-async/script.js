// async function getJobAsync()
// {
//   let response = await fetch(`https://gorest.co.in/public/v2/users`);
//   let data = await response.json()
//   return data;
// }
// getJobAsync('jobPositionHere')
//   .then(data => console.log(data));


function myfunc(item){
    console.log("Clicked ")
    console.log(item.name)
}





async function fetchData() {
  try {
    const response = await fetch("https://gorest.co.in/public/v2/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to render data in cards
async function renderData() {
  const container = document.querySelector(".container");
  const data = await fetchData();

  if (!data) {
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("d-flex");
    card.classList.add("mw-25");
    card.classList.add("border-top");
    card.classList.add("text-primary")
    // card.classList.add("g-row-8");
    card.classList.add("justify-content-between");


    const title = document.createElement("div");
    title.textContent = item.name;

    const body = document.createElement("div");
    body.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-eye-fill " viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
    </svg>`;



    body.addEventListener("click",()=>myfunc(item));

    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
  });
}

// Call the renderData function to display data
renderData();