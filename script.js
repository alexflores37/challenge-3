function generatePassword() {
  var length = parseInt(document.getElementById("length").value);
  var uppercase = document.getElementById("uppercase").Checked;
  var lowercase = document.getElementById("lowercase").Checked;
  var symbols = document.getElementById("symbols").Checked;
  var numbers = document.getElementById("numbers").Checked;

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var symbolsChars = "!@#$%^&*()_-+=~`><,.?/"':;" ;
  var numbersChars = "0123456789"
  
  var allChars = ""
  var password = ""

  if (uppercase) {
    allChars += uppercaseChars;
  }

  if (lowercase) {
    allChars += lowercaseChars;
  }

  if (symbols) {
    allChars += symbolsChars;
  }

  if (numbers) {
    allChars += numbersChars;
  }

  if (allChars.length === 0) {
    alert("Please select at least one character type");
    return
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  document.getElementById("result").value = password;


}
