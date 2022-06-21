function display() {
      // Get the value of the input field with id="name"
  let name = document.getElementById("name").value;
  let text = `<p>Hello ${name}, welcome to the bootcamp</p>`
  document.getElementById("write").innerHTML = text;
}

    