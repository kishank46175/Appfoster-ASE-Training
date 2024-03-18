async function modalDataFetch(id){
  try{
    const response=await fetch(`https://gorest.co.in/public/v2/users/${id}`);
    const data=response.json();
    return data;
  }
  catch(err){
    console.log("Error fetching data "+err);
  }
}



async function myfunc(id) {

  const item=await modalDataFetch(id);

  if(!item) console.log("No item found-modal data ,myfunc() error")

  const modalTitle = document.querySelector(".modal-title");
  const modalEmail = document.querySelector("#modal-email");
  const modalGender = document.querySelector("#modal-gender");
  const modalStatus = document.querySelector("#modal-status");

  // Populate modal with data from the clicked item
  console.log(item)
  modalTitle.textContent = `${item.name}`;
  modalEmail.textContent = `${item.email}`;
  modalGender.textContent = `${item.gender}`;
  modalStatus.textContent = `${item.status}`;

  // Show the modal
  const modal = new bootstrap.Modal(document.querySelector(".modal"));
  modal.show();
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
    card.classList.add("border-top");
    card.classList.add("text-primary");
    card.classList.add("p-2");
    card.classList.add("justify-content-between");

    const title = document.createElement("div");
    title.textContent = item.name;

    const body = document.createElement("div");
    body.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-eye-fill " viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
    </svg>`;

    body.addEventListener("click", () => myfunc(item.id));

    card.appendChild(title);
    card.appendChild(body);
    container.appendChild(card);
  });
}

// Call the renderData function to display data
renderData();
