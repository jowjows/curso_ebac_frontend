$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);

        $(novoItem).appendTo('ul');

        $('#nova-tarefa').val('');
    })

    $('.container').on("click", "li", function(e){
        $target = $(e.target);   
       
        if($(e.target).attr('class') == 'marcado'){
            $target.removeClass('marcado');
        }else{
            $target.addClass('marcado');
        }
       
      });

   

})