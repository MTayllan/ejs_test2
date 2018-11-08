$(document).ready(function(){
    
    // Starts Sidenav
    var sidenav = M.Sidenav.init($('.sidenav'));

    // Starts Tabs
    var tabs = M.Tabs.init($('.tabs'), {swipeable: false});

    // Start Collapsible
    var collapsible = M.Collapsible.init($('.collapsible'), 
        { 
            onOpenStart: function(){
                $("#expand-icon").html('expand_less');
            },
            onCloseStart: function(){
                $("#expand-icon").html('expand_more');
            }
        });

    // Configura cor do icone de enviar
    $('#send-text').focusin(function (){
        $('#send-button').css('color', '#4BB0B8')
    });

    $('#send-text').focusout(function (){
        $('#send-button').css('color', '#666')
    });

});