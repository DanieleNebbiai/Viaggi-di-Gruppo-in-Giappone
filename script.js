document.addEventListener("DOMContentLoaded", function () {
  fetch("company.json") // Adjust path if necessary
    .then((response) => response.json()) // Parse the JSON from the response
    .then((companies) => {
      const container = document.getElementById("cards-container");

      companies.forEach((company) => {
        container.innerHTML += `
        <div 
        class="flex h-full flex-col items-stretch overflow-hidden rounded-xl bg-white pb-3 shadow grow"
      >
        <img
          class="h-48 w-full object-cover"
          src="${company.image}"
          alt="${company.name}"s
        />
        <div class="p-4 ">
        <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold text-gray-800">
        ${company.name}
      </h3>
        <img class="h-8 w-8 mr-2 object-cover" src="${company.logo}" alt="${company.name} logo">

        </div>
          <div class="mt-2 flex items-center">
            <svg
              class="h-5 w-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927C9.43 2.024 10.57 2.024 10.951 2.927L12.396 6.346C12.58 6.82 13.032 7.14 13.553 7.14H17.245C18.21 7.14 18.614 8.284 17.887 8.821L14.763 11.179C14.382 11.475 14.232 11.985 14.383 12.445L15.828 15.864C16.209 16.767 15.207 17.516 14.48 16.979L11.355 14.621C10.974 14.325 10.426 14.325 10.045 14.621L6.921 16.979C6.194 17.516 5.192 16.767 5.573 15.864L7.018 12.445C7.168 11.985 7.018 11.475 6.638 11.179L3.514 8.821C2.787 8.284 3.19 7.14 4.155 7.14H7.847C8.368 7.14 8.82 6.82 9.004 6.346L10.449 2.9"
              ></path>
            </svg>
            <span class="ml-1 text-sm text-gray-600">${company.rating}</span>
            <span class="ml-1 text-sm text-gray-600">(${company.totrating})</span>
          </div>
          <div class="my-4 border-t border-gray-200"></div>
          <p class="mt-4 w-2/3 text-sm font-normal leading-relaxed text-gray-800 lg:w-full lg:grow lg:text- line-clamp-1">
            ${company.description}
          </p>
          <div class="mt-4 flex items-center justify-between">
            <p class="ml-2 text-lg text-gray-900">da<span class="ml-2 text-2xl font-bold text-gray-900"> € ${company.price}</span> </p>
            <span
              class="me-2 rounded border-pink-400 bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800"
            >
              ${company.tag}
            </span>
          </div>
        </div>
        <div class=" border-t border-gray-200 bg-gray-50 px-4 py-3 text-center">
        <a href="${company.url}"
        class="mt-4 w-full block text-center rounded-lg bg-pink-400 px-4 py-2 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
         Vedi viaggi
     </a>
        </div>
      </div>
      `;
      });
    })
    .catch((error) => {
      console.error("Error fetching the companies:", error);
      // Handle errors, such as by showing a message
    });
});

window.onload = function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.opacity = 1; // This triggers the CSS animation
  });
};

window.onload = function () {
  setTimeout(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.opacity = 1; // This triggers the CSS animation
    });
  }, 1000); // Delay the animation by 1000 milliseconds (1 second)
};
