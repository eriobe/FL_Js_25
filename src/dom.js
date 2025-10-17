const data = [];

document
  .querySelectorAll(".block.linkedcontentbannerblock .heading-level-3")
  .forEach((h2) => {
    const p = h2.parentElement.querySelector("p");
    data.push({
      rubrik: h2.innerText,
      text: p ? p.innerText : "",
    });
  });

console.table(data);

data.forEach((d) => {
  const element = document.createElement("section");
  element.innerHTML = `<h2>${d.rubrik}</h2> <p>${d.text}</p>`;
  document.querySelector("main").appendChild(element);
});
