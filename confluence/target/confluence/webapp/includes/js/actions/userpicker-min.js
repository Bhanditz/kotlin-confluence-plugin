AJS.toInit(function(d){var a=d("#switch-simple");var b=d("#switch-advanced");var c=function(){d("#user-search-section").show();d("#membership-search-section").hide();d("#user-tab").parent().addClass("current");d("#membership-tab").parent().removeClass("current");d("#searchTerm").select();return false};var f=function(){d("#membership-search-section").show();d("#user-search-section").hide();d("#membership-tab").parent().addClass("current");d("#user-tab").parent().removeClass("current");d("#groupTerm").select();return false};a.click(function(){d("#search-simple").show();d("#search-advanced").hide();return false});b.click(function(){d("#search-advanced").show();d("#search-simple").hide();return false});var e=function(){d("#search-advanced").show();d("#search-simple").hide();d("#switch-simple").hide();return false};d("#user-tab").click(c).click(function(){d("#search-results").hide()});d("#membership-tab").click(f).click(function(){d("#search-results").hide()});if(d("#user-search").val()==="true"){c()}else{f()}if(d("#disable-simple-mode").val()==="false"){e()}});