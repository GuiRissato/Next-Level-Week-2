document.querySelector("#add-time").addEventListener('click',cloneField)

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    // vai pegar os campos e limpar eles antes de duplica-los
    fields.forEach(function(field){
        field.value = ""
    });
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}