const input = document.querySelector(".menu form input[type='text']");
const languages = document.querySelectorAll(".menu div");
const notFound = document.querySelector(".not-fount");

console.log(languages);

input.addEventListener("input", () => {
  searchLan(input.value);
});

function searchLan(lenguaje) {
  languages.forEach((lan) => {
    if (!lan.textContent.toLowerCase().includes(lenguaje)) {
      lan.style.display = "none";
      if (cantResult()) {
        notFound.style.display = "block";
      }
    } else {
      lan.style.display = "flex";
      notFound.style.display = "none";
    }
  });
}

function cantResult() {
  let isHidden = true;
  languages.forEach((lan) => {
    if (lan.style.display !== "none") {
      isHidden = false;
    }
  });

  return isHidden;
}
