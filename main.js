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

// Checks if any input is a palindrome

function isPalindrome() {
  console.time("execution time");

  if (textInput.value === "") {
    alert("Please input a value");
    console.timeEnd("execution time");
    return;
  }

  const input = textInput.value;
  const input1 = textInput.value
    .toLowerCase()
    .split("")
    .reverse()
    .join()
    .replace(/[^a-z0-9]/g, "");
  const input2 = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (input1 === input2) {
    result.innerHTML = `<strong>${input}</strong> is a palindrome`;
  } else {
    result.innerHTML = `<strong>${input}</strong> is not a palindrome`;
  }

  console.timeEnd("execution time");
}
