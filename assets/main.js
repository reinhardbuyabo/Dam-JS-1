function display() {
      // Get the value of the input field with id="fname"
  let name = document.getElementById("fname").value;
  let text = `<p>Hello ${name}, welcome to the bootcamp</p>`
  document.getElementById("write").innerHTML = text;
}

    