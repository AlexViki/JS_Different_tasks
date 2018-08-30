$(document).ready(function() {
    showStartModal();
});

function showStartModal() {
    //указываем время через которое появится окно
    if (localStorage.getItem('key_modal_yes_btn') != 1) {
        setTimeout(function() {
            $('#exampleModal').modal('show');
            $('#model-yes-btn').on('click',function() {
                // сохраняем состояние в локальный сторедж
                localStorage.setItem('key_modal_yes_btn', 1);
                $('#exampleModal').modal('hide')
            });
        }, 5000);
    }

}
