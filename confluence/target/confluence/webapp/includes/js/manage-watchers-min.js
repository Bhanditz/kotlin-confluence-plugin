jQuery(function(b){function a(c){return b("script[title='"+c+"']")[0].text}b("#manage-watchers-menu-item").click(function(i){i.preventDefault();var d="manage-watchers-dialog";var j=new AJS.ConfluenceDialog({width:865,height:530,id:d,onCancel:function(){j.hide().remove()}});j.addHeader(AJS.I18n.getText("manage.watchers.dialog.title"));j.addPanel("default",AJS.template.load(d).toString());j.addCancel(AJS.I18n.getText("close.name"),function(){j.hide().remove()});j.show();var f=b("#"+d);f.find(".dialog-title").append(AJS.template.load("manage-watchers-help-link"));if(Confluence.KeyboardShortcuts.enabled||AJS.Data.get("use-keyboard-shortcuts")==="true"){j.addHelpText(AJS.params.shortcutDialogTip,{shortcut:"w"})}f.find("input:visible, button:visible").each(function(e){b(this).attr("tabindex",e+1)});AJS.applySearchPlaceholders(f);f.bind("remove-list-item.manage-watchers",function(q,p){var n=p.item,o=p.list,r=p.username;n.addClass("removing");AJS.safe.ajax({dataType:"json",type:"POST",url:AJS.params.contextPath+"/json/removewatch.action",data:{pageId:AJS.params.pageId,username:r},error:function(){alert(AJS.I18n.getText("manage.watchers.unable.to.remove.error"));n.removeClass("removing")},success:function(){n.slideUp().remove();f.trigger("list-updated.manage-watchers",{list:o})}})});f.bind("list-updated.manage-watchers",function(q,p){var o=p.list;var n=b("li.watch-user",o).length>0;if(!n){o.find(".no-users").removeClass("hidden");return}o.find(".no-users").addClass("hidden");AJS.Confluence.Binder.userHover();o.find(".confluence-userlink").each(function(){b(this).click(function(r){r.preventDefault()})})});f.bind("list-data-retrieved.manage-watchers",function(q,p){var o=p.list,n=p.watchers;o.find(".watch-user").remove();if(n&&n.length){b.each(n,function(){var s=this.name;var r={username:s,fullName:this.fullName,url:AJS.params.contextPath+"/display/~"+this.name,iconUrl:AJS.params.contextPath+this.profilePictureDownloadPath};var e=b(AJS.template(a("manage-watchers-user")).fill(r).toString());o.append(e);e.find(".remove-watch").click(function(){f.trigger("remove-list-item.manage-watchers",{username:s,item:e,list:o})})})}o.find(".loading").hide();f.trigger("list-updated.manage-watchers",{list:o})});var g=f.find(".page-watchers .user-list");var l=f.find(".space-watchers .user-list");AJS.safe.ajax({url:AJS.params.contextPath+"/json/listwatchers.action",dataType:"json",data:{pageId:AJS.params.pageId},error:function(){alert("Failed to retrieve watchers.")},success:function(e){f.trigger("list-data-retrieved.manage-watchers",{list:g,watchers:e.pageWatchers});f.trigger("list-data-retrieved.manage-watchers",{list:l,watchers:e.spaceWatchers})}});var m=f.find("form");var k=m.find("#add-watcher-user");var c=m.find("#add-watcher-username");var h=(function(){var e=m.find("> .status");return{clear:function(){e.addClass("hidden").removeClass("loading error").text("")},loading:function(n){e.addClass("loading").removeClass("hidden error").html(n)},error:function(n){e.addClass("error").removeClass("hidden loading").text(n)}}})();m.ajaxForm({beforeSerialize:function(){if(c.val()==""){c.val(k.val())}},beforeSubmit:function(){k.blur().attr("disabled","disabled");g.addClass("updating");h.loading(AJS.I18n.getText("manage.watchers.status.adding.watcher"))},dataType:"json",error:function(n,e){alert("Failed to add watcher: "+e)},success:function(e){c.val("");k.attr("disabled","").val("").focus();g.removeClass("updating");if(e.actionErrors&&e.actionErrors.length){h.error(e.actionErrors[0]);return}f.trigger("list-data-retrieved.manage-watchers",{list:g,watchers:e.pageWatchers});h.clear()}});AJS.Confluence.Binder.autocompleteUser();k.bind("selected.autocomplete-user",function(o,n){m.submit()});k.focus();return false})});