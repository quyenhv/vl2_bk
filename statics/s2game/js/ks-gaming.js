$(document).on("mouseover","#logo-header-down",function() {
    		$(this).prop("src", "https://www.upsieutoc.com/images/2020/01/31/logo-download-after.png")

    });
$(document).on("mouseout","#logo-header-down",function() {
		 $(this).prop("src", "https://www.upsieutoc.com/images/2020/01/31/logo-download-head1124d6562d4c1f00.png")
    });

$(document).on("mouseover", "[data-name='social']", function (e) {
            var socialValue= $(this).attr("data-value");
            var socialYoutube = $("#social-side").find("[data-name='youtube']"); 
            var socialFacebook = $("#social-side").find("[data-name=facebook]"); 
            if(socialValue == "youtube"){
                   $(socialFacebook).css("display", "none");
                   $(socialYoutube ).css("display", "");
                   $(socialYoutube ).css("opacity", 1);

            }
             else{
                   $(socialFacebook).css("display", "");
	$(socialYoutube ).css("opacity", 0);
            }
  });
