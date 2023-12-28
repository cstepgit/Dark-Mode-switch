function toggleDarkMode() {
    document.body.classList.toggle("dark-mode", document.getElementById("darkModeCheckBox").checked);
    const changeText = document.getElementById("change-text");
    if (darkModeCheckBox.checked) {
        document.body.classList.add("dark-mode");
        changeText.textContent = "Dark Mode";
        changeText.style.color='white'; 
    } else {
        document.body.classList.remove("dark-mode");
        changeText.textContent = "Light Mode";
        changeText.style.color='black'; 
    }
}