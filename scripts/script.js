const firstPasswordInput = document.querySelector("input#password");
const confirmPasswordInput = document.querySelector("input#confirm");

confirmPasswordInput.addEventListener("input", handlePasswordMatching);
firstPasswordInput.addEventListener("input", handlePasswordMatching);

function handlePasswordMatching() {
    const firstPassValue = firstPasswordInput.value;
    const confirmPassValue = confirmPasswordInput.value;

    if (confirmPassValue === "") {
        // pass

    } else if (!(firstPassValue === confirmPassValue)) {
        firstPasswordInput.classList.add("input-error");
        confirmPasswordInput.classList.add("input-error");
        return;
    }

    firstPasswordInput.classList.remove("input-error");
    confirmPasswordInput.classList.remove("input-error");
    return;
}

// On submit, if the error class still exists, prevent default
