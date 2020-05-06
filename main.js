$(document).ready(function () {

    $('.title').on('click', function() {
        $('.settings-menu').toggle()
    })

    $('.sidebar-menu').on('click', function(){
        $('.chat-menu').toggle()
    })

    $('.messages').on('click', function(){
        $('.buttons-focus-container').toggle()
    })

    
    $('.chat-title').on('click', function(){
        $('.info-user-container').toggle()
    })

    // $('.item').click(function(){
    //     $('.chat .chat-title .sidebar-menu .search-header').show()
    // })

    $('.button-send-cancel a').click(function(){
        $('.buttons-focus-container').hide();
    })

    $('.close-button').click(function(){
        $('.info-user-container').hide();
    })

    $('.search-header').click(function(){
        $('.input').focus();
    })

    $(".nano").nanoScroller();
    

});