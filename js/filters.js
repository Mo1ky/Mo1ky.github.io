$(function() {

    $(".types__row").mixItUp();
    
    var inputText;
    var $matching = $();
    
    // Delay function
    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
        };
    })();
    
    $("#input_sr").keyup(function(){
        // Delay function invoked to make sure user stopped typing
        delay(function(){
        inputText = $("#input_sr").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText.length) > 0) {            
            $( '.mix').each(function() {
            $this = $("this");
            
                // add item to be filtered out if input text matches items inside the title   
                if($(this).children('.popup__title').text().toLowerCase().match(inputText)) {
                $matching = $matching.add(this);
            }
            else {
                // removes any previously matched item
                $matching = $matching.not(this);
            }
            });
            $(".types__row").mixItUp('filter', $matching);
        }
    
        else {
            // resets the filter to show all item if input is empty
            $(".types__row").mixItUp('filter', 'all');
        }
        }, 200 );
    });
    })