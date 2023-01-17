$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<li></li>`);
        $(`<li>${nomeTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('li').click(function(){
            $('li').css('text-decoration', 'line-through');
        })
        $('#nome-tarefa').val('')
        
    })

})
