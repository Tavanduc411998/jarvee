jQuery(document).ready(function(t){function e(e){t(".epkb-panel-container .epkb-tab-panel:nth-child("+(e+1)+")").addClass("active")}function i(t,e){var i=window.location.href;i=function(t,e,i){var a=new RegExp("([?&])"+e+"=.*?(&|$)","i"),n=-1!==t.indexOf("?")?"&":"?";return t.match(a)?t.replace(a,"$1"+e+"="+i+"$2"):t+n+e+"="+i}(i,"top-category",e),window.history.pushState({tab:t},"title",i)}function a(t,e,i){if("show"===t){let t='<div class="epkb-admin-dialog-box-loading"><div class="epkb-admin-dbl__header"><div class="epkb-admin-dbl-icon epkbfa epkbfa-hourglass-half"></div>'+(e?'<div class="epkb-admin-text">'+e+"</div>":"")+'</div></div><div class="epkb-admin-dialog-box-overlay"></div>';i.append(t)}else"remove"===t&&(i.find(".epkb-admin-dialog-box-loading").remove(),i.find(".epkb-admin-dialog-box-overlay").remove())}var n=t("#epkb-main-page-container"),c=t("#epkb-content-container"),o=t(".epkb-nav-tabs li"),l=t(".epkb-tab-panel"),s=t("#eckb-article-content-body"),r=t(".eckb-article-toc");t("body").on("submit","#epkb_search_form",function(e){if(e.preventDefault(),""!==t("#epkb_search_terms").val()){var i={action:"epkb-search-kb",epkb_kb_id:t("#epkb_kb_id").val(),search_words:t("#epkb_search_terms").val(),is_kb_main_page:t(".eckb_search_on_main_page").length},a="";t.ajax({type:"GET",dataType:"json",data:i,url:epkb_vars.ajaxurl,beforeSend:function(e){t(".loading-spinner").css("display","block"),t("#epkb-ajax-in-progress").show()}}).done(function(e){e=e||"",t(".loading-spinner").css("display","none"),a=e.error||"success"!==e.status?epkb_vars.msg_try_again:e.search_result}).fail(function(t,e,i){a=epkb_vars.msg_try_again+". ["+(i||epkb_vars.unknown_error)+"]"}).always(function(){t("#epkb-ajax-in-progress").hide(),a&&(t("#epkb_search_results").css("display","block"),t("#epkb_search_results").html(a))})}}),t("#epkb_search_terms").on("keyup",function(){this.value||t("#epkb_search_results").css("display","none")}),t(window).on("load",function(){var e=0;c.find(o).each(function(){var i=t(this).outerHeight(!0);i>e&&(e=i)}),c.find(o).css("min-height",e)}),window.onpopstate=function(e){e.state&&-1!==e.state.tab.indexOf("epkb_tab_")?(c.find(".epkb_top_panel").removeClass("active"),t("#main-category-selection").length>0?t("#main-category-selection").val(c.find("#"+e.state.tab).val()):(c.find(".epkb_top_categories").removeClass("active"),c.find("#"+e.state.tab).addClass("active")),c.find("."+e.state.tab).addClass("active")):t("#epkb_tab_1").length>0&&!c.find("#epkb_tab_1").hasClass("active")&&(c.find(".epkb_top_panel").removeClass("active"),t("#main-category-selection").length>0?t("#main-category-selection").val(c.find("#epkb_tab_1").val()):(c.find(".epkb_top_categories").removeClass("active"),c.find("#epkb_tab_1").addClass("active")),c.find(".epkb_tab_1").addClass("active"))},c.find(o).each(function(){t(this).on("click",function(){c.find(o).removeClass("active"),t(this).addClass("active"),c.find(l).removeClass("active"),e(t(this).index()),i(t(this).attr("id"),t(this).data("cat-name"))})}),t("#main-category-selection").on("change",function(){c.find(l).removeClass("active"),t("#main-category-selection option:selected").each(function(){e(t(this).index()),i(t(this).attr("id"),t(this).data("cat-name"))})}),t(".epkb-section-body .epkb-category-level-2-3").each(function(){t(this).on("click",function(){t(this).parent().children("ul").toggleClass("active")})}),c.find(".epkb-section-body .epkb-category-level-2-3").each(function(){if(!t(this).hasClass("epkb-category-focused")){var e=t(this).find(".epkb-category-level-2-3__cat-icon");t(this).on("click",function(){function t(t){e.hasClass(t[0])?(e.removeClass(t[0]),e.addClass(t[1])):e.hasClass(t[1])&&(e.removeClass(t[1]),e.addClass(t[0]))}t(["ep_font_icon_plus","ep_font_icon_minus"]),t(["ep_font_icon_plus_box","ep_font_icon_minus_box"]),t(["ep_font_icon_right_arrow","ep_font_icon_down_arrow"]),t(["ep_font_icon_arrow_carrot_right","ep_font_icon_arrow_carrot_down"]),t(["ep_font_icon_arrow_carrot_right_circle","ep_font_icon_arrow_carrot_down_circle"]),t(["ep_font_icon_folder_add","ep_font_icon_folder_open"])})}}),n.find(".epkb-show-all-articles").on("click",function(){t(this).toggleClass("active");var e=t(this).parent("ul").find("li");t(this).hasClass("active")?(t(this).find(".epkb-show-text").addClass("epkb-hide-elem"),t(this).find(".epkb-hide-text").removeClass("epkb-hide-elem")):(t(this).find(".epkb-show-text").removeClass("epkb-hide-elem"),t(this).find(".epkb-hide-text").addClass("epkb-hide-elem")),t(e).each(function(){t(this).hasClass("epkb-hide-elem")?(t(this).removeClass("epkb-hide-elem"),t(this).addClass("visible")):t(this).hasClass("visible")&&(t(this).removeClass("visible"),t(this).addClass("epkb-hide-elem"))})});let d=t("#epkb-search-kb").text();t("#epkb-search-kb").text(d),t("body").on("click",".eckb-print-button-container, .eckb-print-button-meta-container",function(e){t("body").hasClass("epkb-editor-preview")||(t("#eckb-article-content").parents().each(function(){t(this).siblings().addClass("eckb-print-hidden")}),window.print())});let b={firstLevel:1,lastLevel:6,searchStr:"h1",currentId:"",offset:50,excludeClass:!1,init:function(){this.getOptions();let e=this.getArticleHeaders();if(e.length>0)r.html(this.getToCHTML(e)),t("#eckb-article-content .eckb-article-toc").length>0&&t("#eckb-article-content .eckb-article-toc").html(this.getToCHTML(e,"h2")),t(" .eckb-article-toc--position-middle ").length>0?r.css("display","inline-block"):r.fadeIn();else if(r.hide(),t("body").hasClass("epkb-editor-preview")){r.show();let t=`\n\t\t\t\t\t\t<div class="eckb-article-toc__inner">\n\t\t\t\t\t\t\t<h4 class="eckb-article-toc__title">${r.find(".eckb-article-toc__title").html()}</h4>\n\t\t\t\t\t\t\t<nav class="eckb-article-toc-outline" role="navigation" aria-label="Article outline">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>TOC is not displayed because there are no matching headers in the article.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t`;r.html(t)}let i=this;if(t(".eckb-article-toc__level a").on("click",function(e){if(t(".epkb-editor-preview").length)return void e.preventDefault();let a=t(this).data("target");if(!a||0==t("[data-id="+a+"]").length)return!1;t("body, html").scrollTop();let n=t("[data-id="+a+"]").offset().top-i.offset,c=parseInt(t(this).closest(".eckb-article-toc").data("speed"));return t("body, html").animate({scrollTop:n},c),!1}),t(window).on("scroll",this.scrollSpy),this.scrollSpy(),!location.hash)return;let a=t("[data-target="+location.hash.slice(1)+"]");a.length&&a.trigger("click")},getOptions:function(){for(r.data("min")&&(this.firstLevel=r.data("min")),r.data("max")&&(this.lastLevel=r.data("max")),r.data("offset")&&(this.offset=r.data("offset")),void 0!==r.data("exclude_class")&&(this.excludeClass=r.data("exclude_class"));this.firstLevel<this.lastLevel;)this.searchStr+=", h"+this.firstLevel,this.firstLevel++},getArticleHeaders:function(){let e=[],i=this;if(s.find(i.searchStr).each(function(){if(0==t(this).text().length)return;if(i.excludeClass&&t(this).hasClass(i.excludeClass))return;let a,n={};t(this).data("id")?a=t(this).data("id"):(a="articleTOC_"+e.length,t(this).attr("data-id",a)),n.id=a,n.title=t(this).text(),"H1"==t(this).prop("tagName")?n.level=1:"H2"==t(this).prop("tagName")?n.level=2:"H3"==t(this).prop("tagName")?n.level=3:"H4"==t(this).prop("tagName")?n.level=4:"H5"==t(this).prop("tagName")?n.level=5:"H6"==t(this).prop("tagName")&&(n.level=6),e.push(n)}),0==e.length)return e;let a=1,n=6;e.forEach(function(t){t.level>a&&(a=t.level),t.level<n&&(n=t.level)}),n>1&&e.forEach(function(t,i){e[i].level=t.level-n+1});let c=1;for(;c<a;){let t=!1;e.forEach(function(e){e.level==c&&(t=!0)}),t?c++:e.forEach(function(t,i){t.level>c&&(e[i].level=t.level-1)}),c++}return e},getToCHTML:function(t,e="h4"){let i;if(r.find(".eckb-article-toc__title").length){let t=r.find(".eckb-article-toc__title").html();i=`\n\t\t\t\t\t<div class="eckb-article-toc__inner">\n\t\t\t\t\t\t<${e} class="eckb-article-toc__title">${t}</${e}>\n\t\t\t\t\t\t<nav class="eckb-article-toc-outline" role="navigation" aria-label="Article outline">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t`}else i='\n\t\t\t\t\t<div class="eckb-article-toc__inner">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t';return t.forEach(function(t){let e=new URL(location.html);e.hash=t.id,e=e.toString(),i+=`<li class="eckb-article-toc__level eckb-article-toc__level-${t.level}"><a href="${e}" data-target="${t.id}">${t.title}</a></li>`}),i+="\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t"},scrollSpy:function(){let e=t(window).scrollTop(),i=t(window).scrollTop()+t(window).height(),a=!1,n=!1;if(t(".eckb-article-toc__level a").each(function(){if(t(this).removeClass("active"),a)return!0;let c=t(this).data("target");if(!c||0==t("[data-id="+c+"]").length)return!0;t("[data-id="+c+"]").offset().top<i&&t("[data-id="+c+"]").offset().top>e&&(t(this).addClass("active"),a=!0,n=t(this))}),!n||!a)return;let c=n.position().top;(c<0||c>n.closest(".eckb-article-toc__inner").height())&&n.closest(".eckb-article-toc__inner").scrollTop(c-n.closest(".eckb-article-toc__inner").find(".eckb-article-toc__title").position().top)}};r.length&&setTimeout(function(){b.init();let e=t("#eckb-article-content-body").position();t(".eckb-article-page--L-sidebar-to-content").length>0&&t("#eckb-article-page-container-v2").find("#eckb-article-left-sidebar ").css("margin-top",e.top+"px"),t(".eckb-article-page--R-sidebar-to-content").length>0&&t("#eckb-article-page-container-v2").find("#eckb-article-right-sidebar ").css("margin-top",e.top+"px"),t(window).width()<=(void 0===r.data("mobile_breakpoint")?111:r.data("mobile_breakpoint"))&&(t("#eckb-article-content-header-v2 .eckb-article-toc").length||(t("#eckb-article-left-sidebar .eckb-article-toc").length?t("#eckb-article-content-header-v2").append(t("#eckb-article-left-sidebar .eckb-article-toc")):t("#eckb-article-right-sidebar .eckb-article-toc").length&&t("#eckb-article-content-header-v2").append(t("#eckb-article-right-sidebar .eckb-article-toc"))))},500),t(document).on("click","#eckb-kb-create-demo-data",function(e){if(e.preventDefault(),t(this).closest(".epkb-editor-preview").length)return;let i={action:"epkb_create_kb_demo_data",epkb_kb_id:t(this).data("id"),_wpnonce_epkb_ajax_action:epkb_vars.nonce},n=t(this).closest(".eckb-kb-no-content"),c=n.find("#epkb-admin__generic-confirmation-box");t.ajax({type:"POST",dataType:"json",data:i,url:epkb_vars.ajaxurl,beforeSend:function(t){a("show","",n)}}).done(function(t){void 0!==(t=t||"").message&&c.addClass("epkb-admin__generic-confirmation-box--active").find(".epkb-admin__generic-confirmation-box__body").html(t.message)}).fail(function(t,e,i){c.addClass("epkb-admin__generic-confirmation-box--active").find(".epkb-admin__generic-confirmation-box__body").html(i)}).always(function(){a("remove","",n)})}),t(document).on("click",".eckb-kb-no-content .epkb-admin__generic-confirmation-box__accept-btn",function(){location.reload()})});