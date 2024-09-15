const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
checkBtn.addEventListener("click", isPalindrome);

// Submit input with enter key

textInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    checkBtn.click();
  }
});

function cleanString(string) {
  string = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  return string;
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// Checks if any input is a palindrome

function isPalindrome(palindrome) {
  palindrome = textInput.value;
  const input = cleanString(palindrome);
  const reversedString = reverseString(input);

  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  if (input === reversedString) {
    result.innerHTML = `<strong>${palindrome}</strong> is a palindrome`;
  } else {
    result.innerHTML = `<strong>${palindrome}</strong> is not a palindrome`;
  }
}
