document.querySelector('input').addEventListener('change', (e) => {
    submit();
    checkbox.checked = !checkbox.checked;
});

function submit() {
    let button = document.getElementById('submitButton');
    let checkbox = document.querySelector('input#colorful');
    let background = document.querySelector('html');
    if (checkbox.checked == true) {
        //make it normal
        button.style = '';
        background.style = '';
    } else {
        //make it colorful
        button.style.background = 'blue';
        background.style.background = 'red';
    }
    checkbox.checked = !checkbox.checked;
}
