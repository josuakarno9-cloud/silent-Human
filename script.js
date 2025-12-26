const desc = document.querySelector(".desc");
const text = desc.innerText;
desc.innerText = "";

let i = 0;
function typing() {
  if (i < text.length) {
    desc.innerText += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();
