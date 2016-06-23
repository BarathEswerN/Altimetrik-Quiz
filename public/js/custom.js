   $(document).ready(function(){
        //alert('ss');
    /*$.ajax({url: "config.json", success: function(result){

        var dt = jQuery.parseJSON(result);

        $(".banner-img").each(function(index,currentObj){
        	$(currentObj).attr('src', 'images/'+ dt.banner[index]);	
        });
        	
        
    	}
	});*/

	$(".banner-img").each(function(index,currentObj){
        	$(currentObj).attr('src', 'images/'+ config.banner[index]);	
        });
});