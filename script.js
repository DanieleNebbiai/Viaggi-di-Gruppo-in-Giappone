document.addEventListener("DOMContentLoaded", function () {
  fetch("company.json") // Adjust path if necessary
    .then((response) => response.json()) // Parse the JSON from the response
    .then((companies) => {
      const container = document.getElementById("cards-container-mostwanted");

      // Sort companies by totrating in descending order and take the first 5
      const topCompanies = companies
        .sort((a, b) => b.totrating - a.totrating)
        .slice(0, 5);

      topCompanies.forEach((company) => {
        const card = document.createElement("div");
        card.className =
          "max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden relative card";
        card.innerHTML = `
          <div class="relative">
            <img class="h-40 w-full object-cover" src="${company.image}" alt="Trip Image" />
            <div class="absolute inset-0 flex items-end bg-gradient-to-t from-gray-800/80 to-transparent p-2">
              <span class="ml-auto text-sm font-bold text-white">${company.name}</span>
              <img class="ml-3 h-4 w-4 object-cover" src="${company.logo}" alt="${company.name}" />
            </div>
          </div>
          <div class="p-2">
            <h3 class="mb-1 line-clamp-1 text-sm font-bold">${company.description}</h3>
            <div class="mb-1 flex items-center">
              <div class="mt-1 flex items-center">
                <svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927C9.43 2.024 10.57 2.024 10.951 2.927L12.396 6.346C12.58 6.82 13.032 7.14 13.553 7.14H17.245C18.21 7.14 18.614 8.284 17.887 8.821L14.763 11.179C14.382 11.475 14.232 11.985 14.383 12.445L15.828 15.864C16.209 16.767 15.207 17.516 14.48 16.979L11.355 14.621C10.974 14.325 10.426 14.325 10.045 14.621L6.921 16.979C6.194 17.516 5.192 16.767 5.573 15.864L7.018 12.445C7.168 11.985 7.018 11.475 6.638 11.179L3.514 8.821C2.787 8.284 3.19 7.14 4.155 7.14H7.847C8.368 7.14 8.82 6.82 9.004 6.346L10.449 2.9"></path>
                </svg>
                <span class="ml-1 text-xs text-slate-700">${company.rating}</span>
                <span class="ml-1 text-xs text-slate-700">(${company.totrating})</span>
              </div>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="mr-auto flex items-center text-xs text-slate-500">da<span class="font-bold text-pink-600"> € ${company.price}</span></span>
              <button class="ml-auto rounded bg-pink-400 px-3 py-1 text-xs font-bold text-white hover:bg-pink-500 hover:border">Vedi viaggii</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching the companies:", error);
      // Handle errors, such as by showing a message
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("company.json") // Adjust path if necessary
    .then((response) => response.json()) // Parse the JSON from the response
    .then((companies) => {
      const container = document.getElementById("cards-container-lowestprice");

      // Sort companies by price in ascending order and take the first 5
      const lowestPriceCompanies = companies
        .sort((a, b) => a.price - b.price)
        .slice(0, 5);

      lowestPriceCompanies.forEach((company) => {
        const card = document.createElement("div");
        card.className =
          "max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden relative card";
        card.innerHTML = `
          <div class="relative">
            <img class="h-40 w-full object-cover" src="${company.image}" alt="Trip Image" />
            <div class="absolute inset-0 flex items-end bg-gradient-to-t from-gray-800/80 to-transparent p-2">
              <span class="ml-auto text-sm font-bold text-white">${company.name}</span>
              <img class="ml-3 h-4 w-4 object-cover" src="${company.logo}" alt="${company.name}" />
            </div>
          </div>
          <div class="p-2">
            <h3 class="mb-1 line-clamp-1 text-sm font-bold">${company.description}</h3>
            <div class="mb-1 flex items-center">
              <div class="mt-1 flex items-center">
                <svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927C9.43 2.024 10.57 2.024 10.951 2.927L12.396 6.346C12.58 6.82 13.032 7.14 13.553 7.14H17.245C18.21 7.14 18.614 8.284 17.887 8.821L14.763 11.179C14.382 11.475 14.232 11.985 14.383 12.445L15.828 15.864C16.209 16.767 15.207 17.516 14.48 16.979L11.355 14.621C10.974 14.325 10.426 14.325 10.045 14.621L6.921 16.979C6.194 17.516 5.192 16.767 5.573 15.864L7.018 12.445C7.168 11.985 7.018 11.475 6.638 11.179L3.514 8.821C2.787 8.284 3.19 7.14 4.155 7.14H7.847C8.368 7.14 8.82 6.82 9.004 6.346L10.449 2.9"></path>
                </svg>
                <span class="ml-1 text-xs text-slate-700">${company.rating}</span>
                <span class="ml-1 text-xs text-slate-700">(${company.totrating})</span>
              </div>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="mr-auto flex items-center text-xs text-slate-500">da<span class="font-bold text-pink-600"> € ${company.price}</span></span>
              <button class="ml-auto rounded bg-pink-400 px-3 py-1 text-xs font-bold text-white hover:bg-pink-500 hover:border">Vedi viaggii</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching the companies:", error);
      // Handle errors, such as by showing a message
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("company.json") // Adjust path if necessary
    .then((response) => response.json()) // Parse the JSON from the response
    .then((companies) => {
      const container = document.getElementById("cards-container-adventure");

      // Filter companies by the tag 'adventure'
      const adventureCompanies = companies.filter(
        (company) => company.tag === "avventura"
      );

      adventureCompanies.forEach((company) => {
        const card = document.createElement("div");
        card.className =
          "max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden relative card";
        card.innerHTML = `
          <div class="relative">
            <img class="h-40 w-full object-cover" src="${company.image}" alt="Trip Image" />
            <div class="absolute inset-0 flex items-end bg-gradient-to-t from-gray-800/80 to-transparent p-2">
              <span class="ml-auto text-sm font-bold text-white">${company.name}</span>
              <img class="ml-3 h-4 w-4 object-cover" src="${company.logo}" alt="${company.name}" />
            </div>
          </div>
          <div class="p-2">
            <h3 class="mb-1 line-clamp-1 text-sm font-bold">${company.description}</h3>
            <div class="mb-1 flex items-center">
              <div class="mt-1 flex items-center">
                <svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927C9.43 2.024 10.57 2.024 10.951 2.927L12.396 6.346C12.58 6.82 13.032 7.14 13.553 7.14H17.245C18.21 7.14 18.614 8.284 17.887 8.821L14.763 11.179C14.382 11.475 14.232 11.985 14.383 12.445L15.828 15.864C16.209 16.767 15.207 17.516 14.48 16.979L11.355 14.621C10.974 14.325 10.426 14.325 10.045 14.621L6.921 16.979C6.194 17.516 5.192 16.767 5.573 15.864L7.018 12.445C7.168 11.985 7.018 11.475 6.638 11.179L3.514 8.821C2.787 8.284 3.19 7.14 4.155 7.14H7.847C8.368 7.14 8.82 6.82 9.004 6.346L10.449 2.9"></path>
                </svg>
                <span class="ml-1 text-xs text-slate-700">${company.rating}</span>
                <span class="ml-1 text-xs text-slate-700">(${company.totrating})</span>
              </div>
            </div>
            <div class="mt-2 flex justify-between">
              <span class="mr-auto flex items-center text-xs text-slate-500">da<span class="font-bold text-pink-600"> € ${company.price}</span></span>
              <button class="ml-auto rounded bg-pink-400 px-3 py-1 text-xs font-bold text-white hover:bg-pink-500 hover:border">Vedi viaggii</button>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching the companies:", error);
      // Handle errors, such as by showing a message
    });
});
