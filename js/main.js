$(function(){
    $('form#editorForm').on('submit', function (e) {
        debugger;
        e.preventDefault();
        e.stopPropagation();
        console.log(tinymce.getContent());
    })
})
