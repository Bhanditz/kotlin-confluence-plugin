AJS.toInit(function(c){var a=function(f){return function(g){f.closest("form").find(".quick-nav-drop-down").append(g)}};var b=c("#quick-search-query"),e=c("#space-blog-search-query"),d=c("#confluence-space-key");b.quicksearch("/json/contentnamesearch.action",null,{dropdownPlacement:a(b)});if(e.length&&d.length){e.quicksearch("/json/contentnamesearch.action?type=blogpost&spaceKey="+AJS("i").html(d.attr("content")).text(),null,{dropdownPlacement:a(e)})}});