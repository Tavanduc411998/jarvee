jQuery(document).ready(function(e){var a=e("#elay-sidebar-layout-page-container");{e("#elay-sidebar-layout-page-container").length>0&&t();function t(){var a=e(".kb-article-id").attr("id");if(void 0!==e(".kb-article-id").data("kb_article_seq_no")&&e(".kb-article-id").data("kb_article_seq_no")>0){var t=a+"_"+e(".kb-article-id").data("kb_article_seq_no");a=e("#sidebar_link_"+t).length>0?t:a}e(".sidebar-sections li").removeClass("active"),e(".elay-category-level-1").removeClass("active"),e(".elay-category-level-2-3").removeClass("active"),e(".elay_section_heading").removeClass("active"),e("#sidebar_link_"+a).addClass("active");var i=e("#sidebar_link_"+a).closest("ul").parent();i.length>0&&i.children("ul").show();var s=i.closest("li").closest("ul").parent();s.length>0&&s.children("ul").show();var n=s.closest("li").closest("ul").parent();n.length>0&&n.children("ul").show();var o=n.closest("li").closest("ul").parent();o.length>0&&o.children("ul").show();var r=o.closest("li").closest("ul").parent();r.length>0&&r.children("ul").show();var c=e("#sidebar_link_"+a).closest("ul").closest("li"),d=c.find("i").first();if(d.length>0){(u=d.attr("class").match(/\ep_font_icon_\S+/g))&&l(d,u[0]),c.find("div[class^=elay-category]").first().addClass("active"),c.find(".elay-section-body").css("display","block"),c.closest(".elay-section-body").css("display","block")}var _=d.closest("ul").closest("ul").closest("li"),y=_.find("i").first();if(y.length>0){(u=y.attr("class").match(/\ep_font_icon_\S+/g))&&l(y,u[0]),_.find("div[class^=elay-category]").first().addClass("active")}var h=y.closest("ul").closest("ul").closest("li"),b=h.find("i").first();if(b.length>0){(u=b.attr("class").match(/\ep_font_icon_\S+/g))&&l(b,u[0]),h.find("div[class^=elay-category]").first().addClass("active")}var g=b.closest("ul").closest("ul").closest("li"),v=g.find("i").first();if(v.length>0){(u=v.attr("class").match(/\ep_font_icon_\S+/g))&&l(v,u[0]),g.find("div[class^=elay-category]").first().addClass("active")}var f=v.closest("ul").closest("ul").closest("li"),p=f.find("i").first();if(p.length>0){var u=p.attr("class").match(/\ep_font_icon_\S+/g);u&&l(p,u[0]),f.find("div[class^=elay-category]").first().addClass("active")}e("#sidebar_link_"+a).closest("ul").prev(".elay-sub-sub-category").css("display","block")}a.on("click",".sidebar-sections .elay-category-level-1, .sidebar-sections .elay-category-level-2-3",function(){var a=e(this).find("span").eq(0);a.length>0&&l(a,a.attr("class").match(/\ep_font_icon_\S+/g)[0])});function l(e,a){var t=["ep_font_icon_plus","ep_font_icon_plus_box","ep_font_icon_right_arrow","ep_font_icon_arrow_carrot_right","ep_font_icon_arrow_carrot_right_circle","ep_font_icon_folder_add"],l=["ep_font_icon_minus","ep_font_icon_minus_box","ep_font_icon_down_arrow","ep_font_icon_arrow_carrot_down","ep_font_icon_arrow_carrot_down_circle","ep_font_icon_folder_open"],i=t.indexOf(a),s=l.indexOf(a);i>=0?(e.removeClass(t[i]),e.addClass(l[i])):s>=0&&(e.removeClass(l[s]),e.addClass(t[s]))}a.on("click",".sidebar-sections .elay-top-class-collapse-on .elay-category-level-1",function(){e(this).parent().toggleClass("elay-active-top-category"),e(this).parent().next().slideToggle()}),a.on("click",".sidebar-sections .elay-category-level-2-3",function(){"none"==e(this).next().css("display")?e(this).parent().children("ul").slideDown():e(this).parent().children("ul").slideUp()}),a.on("click",".elay-show-all-articles",function(){e(this).toggleClass("active");var a=e(this).parent("ul").find("li");e(this).hasClass("active")?(e(this).find(".elay-show-text").addClass("elay-hide-elem"),e(this).find(".elay-hide-text").removeClass("elay-hide-elem")):(e(this).find(".elay-show-text").removeClass("elay-hide-elem"),e(this).find(".elay-hide-text").addClass("elay-hide-elem")),e(a).each(function(){e(this).hasClass("elay-hide-elem")?(e(this).removeClass("elay-hide-elem"),e(this).addClass("visible")):e(this).hasClass("visible")&&(e(this).removeClass("visible"),e(this).addClass("elay-hide-elem"))})})}if(window.onpopstate=function(a){if(a.state&&-1!==a.state.html.indexOf("eckb-article-content")){document.getElementById("eckb-article-page-container").innerHTML=a.state.html,document.title=a.state.pageTitle;var l=void 0!==e("#eckb-article-content").data("article-id")?e("#eckb-article-content").data("article-id"):e(".kb-article-id").attr("id");e(".elay-sidebar").find(".elay-sidebar-article").removeClass("active"),e('.elay-sidebar-article[data-kb-article-id="'+l+'"]').addClass("active"),t()}},e("#elay-sidebar-layout-page-container").on("click",".elay-search-toggle",function(){e(".elay-doc-search-container").slideToggle(),e("#elay_search_results").css("display","none");let a=e("#sidebar-elay-search-kb").text();e("#sidebar-elay-search-kb").text(a)}),e("body").on("submit","#elay_search_form",function(a){if(a.preventDefault(),""!=e("#elay_search_terms").val()){var t={action:"elay-search-kb",is_sidebar_layout:e("#sidebar-elay-search-kb").length>0,elay_kb_id:e("#elay_kb_id").val(),search_words:e("#elay_search_terms").val()},l="";e.ajax({type:"GET",dataType:"json",data:t,url:elay_vars.ajaxurl,beforeSend:function(a){e(".loading-spinner").css("display","block"),e("#elay-ajax-in-progress").show()}}).done(function(a){a=a||"",e(".loading-spinner").css("display","none"),l=a.error||"success"!=a.status?elay_vars.msg_try_again:a.search_result}).fail(function(e,a,t){l=elay_vars.msg_try_again+". ["+(t||elay_vars.unknown_error)+"]"}).always(function(){e("#elay-ajax-in-progress").hide(),l&&(e("#elay_search_results").css("display","block"),e("#elay_search_results").html(l))})}}),e("#elay_search_terms").on("keyup",function(){this.value||e("#elay_search_results").css("display","none")}),(e(".slim_scrollbar").length>0||e(".default_scrollbar").length>0)&&e(".elay-articles .active").length>0){var i=e(".elay-articles .active").position();e(".slim_scrollbar").scrollTop(i.top-200),e(".default_scrollbar").scrollTop(i.top-200)}!function(){function a(){e("#elay-sidebar-layout-page-container").length>0&&e("#elay-sidebar-layout-page-container").show()}a();var t=e("#elay-grid-layout-page-container").outerWidth();t<600?e("#elay-grid-layout-page-container").addClass("mobile-sidebar"):e("#elay-grid-layout-page-container").removeClass("mobile-sidebar"),window.onresize=function(){e("#elay-grid-layout-page-container").outerWidth()<600?e("#elay-grid-layout-page-container").addClass("mobile-sidebar"):e("#elay-grid-layout-page-container").removeClass("mobile-sidebar")},(t=e("#elay-sidebar-layout-page-container").outerWidth())<600?e("#elay-sidebar-layout-page-container").addClass("mobile-sidebar"):e("#elay-sidebar-layout-page-container").removeClass("mobile-sidebar"),window.onresize=function(){e("#elay-sidebar-layout-page-container").outerWidth()<600?e("#elay-sidebar-layout-page-container").addClass("mobile-sidebar"):e("#elay-sidebar-layout-page-container").removeClass("mobile-sidebar"),a()}}();let s=e("#grid-elay-search-kb").text();if(e("#grid-elay-search-kb").text(s),e("#elay-sidebar-container-v2").length>0){function n(){var a=void 0!==e("#eckb-article-content").data("article-id")?e("#eckb-article-content").data("article-id"):e(".kb-article-id").attr("id"),t=e(void 0!==e("#eckb-article-content").data("kb_article_seq_no")?"#eckb-article-content":".kb-article-id");if(void 0!==t.data("kb_article_seq_no")&&t.data("kb_article_seq_no")>0){var i=a+"_"+t.data("kb_article_seq_no");a=e("#sidebar_link_"+i).length>0?i:a}e(".elay-sidebar__cat__top-cat li").removeClass("active"),e(".elay-category-level-1").removeClass("active"),e(".elay-category-level-2-3").removeClass("active"),e(".elay-sidebar__cat__top-cat__heading-container").removeClass("active"),e("#sidebar_link_"+a).addClass("active"),e("#sidebar_link_"+a).parents(".elay-sub-sub-category, .elay-articles").each(function(){let a=e(this).parent().children(".elay-category-level-2-3");if(0==a.length)return!0;if(!a.hasClass("elay-category-level-2-3"))return!0;a.next().show(),a.next().next().show();let t=a.find(".elay_sidebar_expand_category_icon");t.length>0&&l(t,t.attr("class").match(/\ep_font_icon_\S+/g)[0])}),e("#sidebar_link_"+a).closest(".elay-sidebar__cat__top-cat").parent().toggleClass("elay-active-top-category"),e("#sidebar_link_"+a).closest(".elay-sidebar__cat__top-cat").find(e(".elay-sidebar__cat__top-cat__body-container")).show();let s=e("#sidebar_link_"+a).closest(".elay-sidebar__cat__top-cat").find(".elay-sidebar__cat__top-cat__heading-container .elay-sidebar__heading__inner span");s.length>0&&l(s,s.attr("class").match(/\ep_font_icon_\S+/g)[0])}var o=e("#elay-sidebar-container-v2");o.on("click",".elay-top-class-collapse-on",function(a){void 0!==a.originalEvent&&(e(a.originalEvent.target).hasClass("epkb-editor-zone__tab--active")||e(a.originalEvent.target).hasClass("epkb-editor-zone__tab--parent"))||(e(this).parent().toggleClass("elay-active-top-category"),e(this).parent().find(e(".elay-sidebar__cat__top-cat__body-container")).slideToggle())}),o.on("click",".elay-sidebar__cat__top-cat__heading-container",function(a){if(void 0===a.originalEvent||!e(a.originalEvent.target).hasClass("epkb-editor-zone__tab--active")&&!e(a.originalEvent.target).hasClass("epkb-editor-zone__tab--parent")){var t=e(this).find(".elay-sidebar__heading__inner span");t.length>0&&l(t,t.attr("class").match(/\ep_font_icon_\S+/g)[0])}}),o.on("click",".elay-category-level-2-3",function(){e(this).next().slideToggle(),e(this).next().next().slideToggle()}),o.on("click",".elay-category-level-2-3",function(){var a=e(this).find("span");a.length>0&&l(a,a.attr("class").match(/\ep_font_icon_\S+/g)[0])}),o.on("click",".elay-show-all-articles",function(){e(this).toggleClass("active");var a=e(this).parent("ul").find("li");e(this).hasClass("active")?(e(this).find(".elay-show-text").addClass("elay-hide-elem"),e(this).find(".elay-hide-text").removeClass("elay-hide-elem")):(e(this).find(".elay-show-text").removeClass("elay-hide-elem"),e(this).find(".elay-hide-text").addClass("elay-hide-elem")),e(a).each(function(){e(this).hasClass("elay-hide-elem")?(e(this).removeClass("elay-hide-elem"),e(this).addClass("visible")):e(this).hasClass("visible")&&(e(this).removeClass("visible"),e(this).addClass("elay-hide-elem"))})}),window.onpopstate=function(a){if(a.state&&-1!==a.state.html.indexOf("eckb-article-content")){document.getElementById("eckb-article-content-body").innerHTML=a.state.html,document.title=a.state.pageTitle;var t=void 0!==e("#eckb-article-content").data("article-id")?e("#eckb-article-content").data("article-id"):e(".kb-article-id").attr("id");e("#elay-sidebar-container-v2").find(".elay-sidebar-article").removeClass("active"),e('.elay-sidebar-article[data-kb-article-id="'+t+'"]').addClass("active"),n()}},e(".elay-search-toggle").on("click",function(){e(".elay-doc-search-container").slideToggle(),e("#elay_search_results").css("display","none")}),n()}});