const id = new URL(location.href).searchParams.get("id");
if (!id) {
  console.log("du måste ange ett imdb-id");
}

// hämta filmen

// finns den inte... visa meddelande

// filmen finns. visa alla detaljer
console.log(id);
