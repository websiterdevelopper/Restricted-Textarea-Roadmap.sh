let txtArea = document.getElementById("txt-area");
let wordCount = document.querySelector(".word-count");
let counter = 0;

txtArea.oninput = () => {
  let letterList = txtArea.value.split("");

  if (txtArea.value == "") {
    wordCount.textContent = "0/250";
  } else {
    for (let i = 0; i < letterList.length; i++) {
      wordCount.textContent = `${(counter = i + 1)}/250`;
    }
  }

  if (letterList.length >= 250) {
    txtArea.classList.add("exceeded");
  } else {
    txtArea.classList.remove("exceeded");
  }
};
