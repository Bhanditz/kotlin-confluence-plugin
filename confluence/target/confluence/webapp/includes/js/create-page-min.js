function placeFocus(){}AJS.toInit(function(){var a=AJS.$("#content-title");var b=AJS.$("#titleWritten");if(a.val()==""){a.addClass("newpagetitle");a.val(AJS.params.defaultContentTitle);b.val("false")}a.focus(function(){var c=AJS.$(this);if(b.val()=="false"){c.val("");c.removeClass("newpagetitle")}return true}).blur(function(){var c=AJS.$(this);if(c.val()==""){c.addClass("newpagetitle");c.val(AJS.params.defaultContentTitle);b.val("false")}else{b.val("true")}return true})});