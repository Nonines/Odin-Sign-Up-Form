const firstPasswordInput = document.querySelector("input#password");
const confirmPasswordInput = document.querySelector("input#confirm");

confirmPasswordInput.addEventListener("input", passwordMatches);
firstPasswordInput.addEventListener("input", passwordMatches);

function passwordMatches() {
    const firstPassValue = firstPasswordInput.value;
    const confirmPassValue = confirmPasswordInput.value;

    if (confirmPassValue === "") {
        // pass

    } else if (!(firstPassValue === confirmPassValue)) {
        firstPasswordInput.classList.add("input-error");
        confirmPasswordInput.classList.add("input-error");

    } else {
        firstPasswordInput.classList.remove("input-error");
        confirmPasswordInput.classList.remove("input-error");
    }

    return;
}
