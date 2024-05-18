
$('#gameInfoSection img').click(function(foto){
    src = $(foto.target).attr('src');
    src = src.replace('small', 'large')
    console.log(src);

    $('#imgGrande').attr('src', src);
    });