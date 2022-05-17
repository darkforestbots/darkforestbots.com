    // 'use strict';

    const slider_item = ["media/sandwicher.mp4", "media/frontrunner.mp4", "media/arbitrator.mp4", "media/mainers.mp4", "media/sandwicher.mp4"];
    const slider_item_text = ["sandwicher", "frontrunner", "arbitrager & liquidator", "miners", "sandwicher"];

    //const slider_item2 = ["media/mainers.mp4","media/arbitrator.mp4", "media/sandwicher.mp4","media/frontrunner.mp4", ];
    var i = 0;
    //console.log("i id = " + i);

    function change_slider_right() {

        if (i == 0) {
            i++;
        } else if (i > 0) {
            if (i < 4) {
                i++;
            } else {
                i = 1;
            }

        }

        if (i == 2) {
            $("#item_slider_text").css("font-size", "20px");
        } else {
            $("#item_slider_text").css("font-size", "2rem");
        }

        $("#video_slider").html('<source src="' + slider_item[i] + '" type="video/mp4"></source>');
        $("#video_slider")[0].load();
        $("#item_slider_text").html("<span>" + slider_item_text[i] + "</span>");
        // console.log("right " + i + "" + slider_item[i]);

        video_src_change_animate(i);


    }

    function change_slider_left() {

        if (i == 0) {
            //console.log("W1");
            i = 3;
        } else if (i > 0) {
            //console.log("W2");
            i--;


        }
        if (i == 2) {
            $("#item_slider_text").css("font-size", "20px");
        } else {
            $("#item_slider_text").css("font-size", "2rem");
        }

        //console.log("left " + i + "" + slider_item[i]);


        $("#video_slider").html('<source src="' + slider_item[i] + '" type="video/mp4"></source>');
        $("#video_slider")[0].load();
        $("#item_slider_text").html("<span>" + slider_item_text[i] + "</span>");


        video_src_change_animate(i);



    }


    function video_src_change(id) {
        if (id == 2) {
            $("#item_slider_text").css("font-size", "2rem");
        } else {
            $("#item_slider_text").css("font-size", "2rem");
        }
        $("#video_slider").html('<source src="' + slider_item[id] + '" type="video/mp4"></source>');
        $("#video_slider")[0].load();
        $("#item_slider_text").html("<span>" + slider_item_text[id] + "</span>");
        var clear_bullet = '<i class="far fa-circle" style="color:#297aff">';
        $(".dark_bullet").each(function(i, obj) {
            $('.dark_bullet').html(clear_bullet);
        });
        var item_active = '<i class="far fa-dot-circle" style="color:#297aff"></i>';
        $("#item_bullet_" + id).html(item_active);

        if (id == 4) {

            var item_active = '<i class="far fa-dot-circle" style="color:#297aff"></i>';
            $("#item_bullet_0").html(item_active);
        }
    }

    function video_src_change_animate(id) {

        if (id == 4) {
            id = 0;
        }
        var clear_bullet = '<i class="far fa-circle" style="color:#297aff">';
        $(".dark_bullet").each(function(i, obj) {
            $('.dark_bullet').html(clear_bullet);
        });
        var item_active = '<i class="far fa-dot-circle" style="color:#297aff"></i>';
        $("#item_bullet_" + id).html(item_active);
    }

    function road_map(id, element = null) {
        scrollSmoothTo('road_section');
     
        if(element != null){
       
            if(id == 'right'){
                $('#after').removeClass('not-active-map');
                $('#before').addClass('not-active-map');
                $('#before-box').fadeOut();
                $('#after-box').fadeIn();
                $('.line-1').fadeOut();
                $('.line-2').fadeIn();
                $(".center_arrow_roadmap").css("transform", 'rotate(180deg)');
            }else{
                $('#before').removeClass('not-active-map');
                $('#after').addClass('not-active-map');
                $('#after-box').fadeOut();
                $('#before-box').fadeIn();
                $('.line-2').fadeOut();
                $('.line-1').fadeIn();
                $(".center_arrow_roadmap").css("transform", 'rotate(0deg)');
            }
        }


        var opened = ' <svg class="Rectangle_1175_">              <rect class="Rectangle_1175__Class" rx="0" ry="0" x="0" y="0" width="30" height="30"></rect>            </svg>            <svg class="Rectangle_1176_">              <rect class="Rectangle_1176__Class" rx="0" ry="0" x="0" y="0" width="30" height="30"></rect>            </svg>            <svg class="Ellipse_38">              <ellipse class="Ellipse_38_Class" rx="6" ry="6" cx="6" cy="6"></ellipse>            </svg>';

        var closed = '<svg class="Rectangle_1175_l">  <rect class="Rectangle_1175_l_Class" rx="0" ry="0" x="0" y="0" width="30" height="30"></rect>            </svg>            <svg class="Rectangle_1176_m">              <rect class="Rectangle_1176_m_Class" rx="0" ry="0" x="0" y="0" width="30" height="30"></rect>            </svg>            <div class="Group_2551_n_Class">              <svg class="Path_593_o" viewBox="-10834.999 5180 5.82 5.82">                <path class="Path_593_o_Class" d="M -10829.1787109375 5185.8203125 L -10829.1787109375 5180 L -10834.9990234375 5180"></path>              </svg>              <svg class="Path_596_p" viewBox="0 0 5.821 5.821">                <path class="Path_596_p_Class" d="M 5.820584774017334 5.821059703826904 L 5.820584774017334 -8.761781391497234e-22 L 0 0"></path>              </svg>              <svg class="Path_594_q" viewBox="0 0 5.821 5.821">                <path class="Path_594_q_Class" d="M 5.820584774017334 5.821059703826904 L 5.820584774017334 0 L 0 0"></path>              </svg>              <svg class="Path_595_r" viewBox="0 0 5.821 5.821">                <path class="Path_595_r_Class" d="M 5.820584774017334 5.821059703826904 L 5.820584774017334 0 L 0 0"></path>              </svg>            </div>';
        var element = $(".Component_22___17");


        if (id == "left") {
            $(".this_right_svg").removeClass('null_svg');
            $(".this_left_svg").removeClass('null_svg');
            $(".this_right_svg").addClass('null_svg');
            $(".this_right_svg").removeClass('right_svg');
            $(".this_left_svg").addClass('left_svg');

            $("#right_dotted").html(closed);
            $("#left_dotted").html(opened);

            $("#right_dotted2").html(closed);
            $("#left_dotted2").html(opened);

            if(element == null){
                $("#this_road_arrow").css("transform", 'rotate(180deg)');
            }


 $(".Path_2156_Class").removeClass("not_active_roadmap");
      
          $(".Path_2156_Class").addClass("active_roadmap");
          
          
          $(".Path_2156_g_Class").addClass("not_active_roadmap");
      


 




          //$(".roadmap-title-after").css("color","#2775f3");
          
          $(".roadmap-title-after").addClass("active_text");
          
            $(".before_launching").css("color", "#007aff");
            $(".right_arrow_roadmap").css("color", "#04274c");
            $("#road_map_content_left").fadeIn();
            $("#road_map_content_right").fadeOut();
               $(".roadmap-title-after").addClass("active_text");
        } else {
            $(".this_right_svg").removeClass('null_svg');
            $(".this_left_svg").removeClass('null_svg');
            $(".this_left_svg").addClass('null_svg');
            $(".this_left_svg").removeClass('left_svg');
            $(".this_right_svg").addClass('right_svg');

             $(".roadmap-title-after").addClass("active_text");

            $("#left_dotted2").html(closed);
            $("#right_dotted2").html(opened);

            $("#left_dotted").html(closed);
            $("#right_dotted").html(opened);




 $(".Path_2156_g_Class").removeClass("not_active_roadmap");


                $(".Path_2156_g_Class").addClass("active_roadmap");
    $(".Path_2156_Class").addClass("not_active_roadmap");

            if(element == null){
                $("#this_road_arrow").css("transform", 'rotate(0deg)');
            }
          
            $(".before_launching").css("color", "#04274c");
            
              $(".before_launching").addClass("active_text");
              
            $(".right_arrow_roadmap").css("color", "#007aff");
            $("#road_map_content_right").fadeIn();
            $("#road_map_content_left").fadeOut();

        }
        if (id == "right") {
            $(".center_arrow_roadmap").attr("id", "left");
        } else {
            $(".center_arrow_roadmap").attr("id", "right");
        }

        //$("#roadmap_left").hide();

    }
    //$(document).scroll(example);
    function example() {
        var tempScrollTop = $(window).scrollTop() + 0;
        // $(".Group_267_Class").css("top", tempScrollTop.toString() + "px");
        if (tempScrollTop.toString() > 0) {
            $(".Group_267_Class").css("top", tempScrollTop);
            // $(".Group_267_Class").addClass("backdrop");
            $(".Group_267_Class").css("background-color", "#00120180");
        } else {
            $(".Group_267_Class").css("top", 0);
            // $(".Group_267_Class").removeClass("backdrop");
        }
    };

    function scrollToTop() {

        window.scrollTo({top: 0, behavior: 'smooth'});
    }        
    $(document).ready(function() {
        $(window).on('resize', function() {
            // console.log('Event Fired');
            var docheight = $(document).height();
            //$("body").css("height", docheight + "px");
            //$(".DFB_-_NEW_Class").css("height", docheight + "px");
            //alert("123");
            //console.log(docheight);
        });

    });

    function all_closed(id) {
        var myArray = id.split("box");
        var box_number = myArray[1];
        //console.log("this id is :" + id);
        if ($('.' + id).hasClass("hide_close")) {
            //console.log((".box" + box_number));
            return false;
        } else {
            $('.hide_close').each(function(i, obj) {
                $('.hide_close').parent('div')[i].click();
                // $(thisss).click();
            });
            return false;
        }
    }

    function box_toggle(id) {

        all_closed(id);
        //$("." + id).slideToggle();
        var closed = ' <svg class="Rectangle_1175_zn">					<rect class="Rectangle_1175_zn_Class" rx="0" ry="0" x="0" y="0" width="30" height="30">					</rect>				</svg>                    <svg class="Rectangle_1176_zo">					<rect class="Rectangle_1176_zo_Class" rx="0" ry="0" x="0" y="0" width="30" height="30">					</rect>				</svg>                    <div class="Group_2551_Class">                        <svg class="Path_593" viewBox="-10834.999 5180 5.82 5.82">						<path class="Path_593_Class" d="M -10829.1787109375 5185.8203125 L -10829.1787109375 5180 L -10834.9990234375 5180">						</path>					</svg>                        <svg class="Path_596" viewBox="0 0 5.821 5.821">						<path class="Path_596_Class" d="M 5.820584774017334 5.821059703826904 L 5.820584774017334 -8.761781391497234e-22 L 0 0">						</path>					</svg>                        <svg class="Path_594" viewBox="0 0 5.821 5.821">						<path class="Path_594_Class" d="M 5.820584774017334 5.821059703826904 L 5.820584774017334 0 L 0 0">						</path>					</svg>                        <svg class="Path_595" viewBox="0 0 5.821 5.821">						<path class="Path_595_Class" d="M 5.820584774017334 5.821059703826904 L 5.820584774017334 0 L 0 0">						</path>					</svg>                    </div>';

        var opened = ' <svg xmlns="http://www.w3.org/2000/svg" class="close" width="33" height="33" viewBox="0 0 33 33"> <g id="Group_2550" data-name="Group 2550" transform="translate(-536 -2840)"> <g id="Rectangle_1175" data-name="Rectangle 1175" transform="translate(539 2843)" fill="none" stroke="#007aff" stroke-width="1" opacity="0.3"> <rect width="30" height="30" stroke="none"/> <rect x="0.5" y="0.5" width="29" height="29" fill="none"/> </g> <g id="Rectangle_1176" data-name="Rectangle 1176" transform="translate(536 2840)" fill="none" stroke="#007aff" stroke-width="1"> <rect width="30" height="30" stroke="none"/> <rect x="0.5" y="0.5" width="29" height="29" fill="none"/> </g> <path id="Path_515" data-name="Path 515" d="M20,10H0" transform="translate(551 2869.142) rotate(-135)" fill="none" stroke="#007aff" stroke-width="1"/> <path id="Path_536" data-name="Path 536" d="M20,10H0" transform="translate(536.858 2855) rotate(-45)" fill="none" stroke="#007aff" stroke-width="1"/> </g> </svg>';

        if (id == "box1") {
            $("." + id).animate({
                height: "toggle",
                opacity: "toggle"
            }, "fast");

            $(".Group_2959_Class").toggleClass("slide_tiggle");
            $(".Group_2960_Class").toggleClass("slide_tiggle2");
            $(".box1").toggleClass("hide_close");
            //$("." + id).toggleClass("show_box");

            if ($(".box1").hasClass("hide_close")) {

                $(".Group_2550_a_Class").html(opened);
            } else {
                $(".Group_2550_a_Class").html(closed);

            }


        } else if (id == "box2") {


            $(".box2").toggleClass("hide_close");
            $("." + id).animate({
                height: "toggle",
                opacity: "toggle"
            }, "fast");

            $(".Group_2960_Class").toggleClass("slide_tiggle2");
            if ($(".box2").hasClass("hide_close")) {

                $(".Group_2550_u_Class").html(opened);
            } else {
                $(".Group_2550_u_Class").html(closed);

            }

        } else if (id == "box3") {


            $(".box3").toggleClass("hide_close");

            $("." + id).animate({
                height: "toggle",
                opacity: "toggle"
            }, "fast");
            if ($(".box3").hasClass("hide_close")) {

                $(".Group_2550_e_Class").html(opened);
            } else {
                $(".Group_2550_e_Class").html(closed);

            }
            // $(".Group_2960_Class").toggleClass("slide_tiggle2");
        } else if (id == "box4") {

            $(".box4").toggleClass("hide_close");

            $("." + id).animate({
                height: "toggle",
                opacity: "toggle"
            }, "fast");

            if ($(".box4").hasClass("hide_close")) {

                $(".Group_2550_zm_Class").html(opened);
            } else {
                $(".Group_2550_zm_Class").html(closed);

            }
            $(".Group_2958_zu_Class").toggleClass("slide_tiggle");
            $(".Group_2958_e_Class").toggleClass("slide_tiggle2");

        } else if (id == "box5") {

            $(".box5").toggleClass("hide_close");
            $("." + id).animate({
                height: "toggle",
                opacity: "toggle"
            }, "fast");
            if ($(".box5").hasClass("hide_close")) {

                $(".Group_2550_z_Class").html(opened);
            } else {
                $(".Group_2550_z_Class").html(closed);

            }

            $(".Group_2958_e_Class").toggleClass("slide_tiggle2");
        } else if (id == "box6") {

            $(".box6").toggleClass("hide_close");
            $("." + id).animate({
                height: "toggle",
                opacity: "toggle"
            }, "fast");
            if ($(".box6").hasClass("hide_close")) {

                $(".Group_2550_q_Class").html(opened);
            } else {
                $(".Group_2550_q_Class").html(closed);

            }

            //$(".Group_2958_e_Class").toggleClass("slide_tiggle2");
        }

    }
    $(document).ready(function() {
        $(".Sandwiching_directly_causes_us_Class").on('scroll', function() {
            var scrollTop = $(".Sandwiching_directly_causes_us_Class").scrollTop();
            $(".Rectangle_1291").css("top", scrollTop + "px");

        });

    });


    function meetBots(id, number) {

        if (number == 0) {
            $("#robot_big2").css("display", "none");
            $("#robot_big1").css("display", "block");

        } else {

            $("#robot_big2").css("display", "block");
            $("#robot_big1").css("display", "none");

        }


        var bots = ["SANDWICHER BOTS", "FRONTRUNNER BOTS", "Arbitrage Bots", "Liquidation Bots", "Miners"];
        var botsText = ["Sandwiching directly causes users` financial damages through malicious practices. Sandwiching attacks take place in AMM (automated market maker) like Uniswap by exploiting slippage tolerance of the trade. For instance, when a regular user tries to purchase some amount of a particular token, Sandwich Bot places two transactions in the block - first buy before and then sell after the user's trade. When the user`s trade is being executed, Sandwicher bots buy transaction has already increased the price of the asset, therefore the user gets less amount of desired token. After the user has completed the trade, the attacker sells these tokens at a higher price and reaps profits from the difference.", "Front-running is a form of insider trading in traditional finance.  In the blockchain world it's similar, but with different actors (bots and miners) as well as enabling the public to see the pending transactions in mempool. Front-running implies the action, when bots see pending transactions in mempool, duplicates it and by offering and paying extra gas fees to the Mainers, tries to influence transaction ordering, frontrunn the pending transaction and execute its transaction first. In Ethereum, there are different types of frontrunning: Generalized front-running bots frontrun any type of smart contracts in order to extract value. Arbitrage bots do the same by overbidding each other in gas fees so as to include their own transactions first in a block. The miner can also frontrun  arbitrage bots  transactions on Uniswap, and include their own trade thus get profits from this arbitrage opportunity. Some Front-running bots sniping liquidity during the token sale of highly demanded projects, directly from smart contracts and ordinary users or community members who are the real, long term supporters of the project are forced to stay out of the game.", "Arbitrage bots execute arbitrage opportunities on different decentralized exchanges. They buy digital assets for a low price on one Dex and sell it for a high price on another Dex.Arbitrage as an operation is essential for sustainable Defi development, it is a mechanism of price discovery and finding equilibrium among different crypto markets. Sophisticated arbitrage operations are a determinant factor of an efficient market.Arbitrage bots on Ethereum are at war with each other to first capture arbitrage opportunities. This often results in gas wars, where the winner pays the highest bribe to a miner.", "Liquidation bots execute liquidation transactions on cryptocurrency borrowing and landing platforms. Liquidation cases of MEV extraction are the result of cryptocurrency price volatility. When the price of a particular cryptocurrency aggressively drops low, landing platforms liquidate collateralized assets in order to meet the creditors`s obligations. Liquidation bots fight with each other to capture this opportunity and make profit from it. Their activities are necessary for healthy crypto Lending market functioning.", "Miners are the most powerful creatures of the Dark Forest. They are system`s built-in bots, selfish economical actors driven by profit generation incentives, responsible for transaction ordering in the block, and production of new blocks in the blockchain. Miners can insert their own transactions, rearrange transactions in the block, or even censor them completely. They receive all the fees generated from the war among the bots. Strategies implemented by miners are getting more sophisticated, by deploying their own bots, they participate in the MEV extraction process in order to get even more profit."];
        $(".bots-slider-item").css("opacity", "0.5");
        $("#" + id).css("opacity", "1");
        $("#" + id + "_active").css("display", "block");
        $("#bots_caption").text(bots[number]);
        $("#bots_text").text(botsText[number]);


        if (number == 0) {
                        if($('#small-image-bottom').hasClass('gb')){
                $('#small-image-bottom').removeClass('gb');
            }
            $("#small-bots-text-top").text("BOTS");
            $("#small-bots-text-bottom").text("SANDWICH HEADS");

            $(".robot_1_t_Class").attr("src", "images/images/robot_1_t.png");

        } else {
                                    if($('#small-image-bottom').hasClass('gb')){
                $('#small-image-bottom').removeClass('gb');
            }
            $("#small-bots-text-bottom").text(bots[number]);
            $("#small-bots-text-top").text(bots[number]);

            $(".robot_1_t_Class").attr("src", "images/bot_siluette2.png");

        }


        if (number == 0) {
            $("#small-image-top").attr("src", "images/images/Mask_Group_22_sa.png");
            $("#small-image-bottom").attr("src", "images/Sanwicherhead.png");
        } else {
            if(!$('#small-image-bottom').hasClass('gb')){
                $('#small-image-bottom').addClass('gb');
            }
            $("#small-image-top").attr("src", "images/images/Mask_Group_22_ua.png");
            $("#small-image-bottom").attr("src", "images/images/Mask_Group_22_ua.png");

        }


    }


    function show_menu(){
    // alert('1')
    // if($('.collapse_mobile_menu').hasClass('collapse_none')){
        
    //     $(".scalable-nav").addClass("scalable-nav-opened");
    //     $(".collapse_mobile_menu").removeClass('collapse_none');
    //     $(".collapse_mobile_menu").removeClass("menu-left");
    // }else{
    //     $(".scalable-nav").removeClass("scalable-nav-opened");
    //     $(".collapse_mobile_menu").addClass('collapse_none');
    //     $(".collapse_mobile_menu").addClass("menu-left");
    // }
    
    
        //navbarColors();
        // $(".collapse_mobile_menu").toggleClass('collapse_none');
        // $(".scalable-nav").toggleClass("scalable-nav-opened");
        // $(".collapse_mobile_menu").toggleClass("menu-left");
    
    }
    function meetBotMobile(id, number) {

        if (number == 0) {
            $("#robot_big2_mobile").css("display", "none");
            $("#robot_big1_mobile").css("display", "block");

        } else {

            $("#robot_big2_mobile").css("display", "block");
            $("#robot_big1").css("display", "none");

        }


        var bots = ["SANDWICHER BOTS", "FRONTRUNNER BOTS", "Arbitrage Bots", "Liquidation Bots", "Miners"];
        var bots_small = ["SANDWICHER BOTS", "FRONTRUNNERS", "Arbitrage Bots", "Liquidators", "Miners"];
        var botsText = ["Sandwiching directly causes users` financial damages through malicious practices. Sandwiching attacks take place in AMM (automated market maker) like Uniswap by exploiting slippage tolerance of the trade. For instance, when a regular user tries to purchase some amount of a particular token, Sandwich Bot places two transactions in the block - first buy before and then sell after the user's trade. When the user`s trade is being executed, Sandwicher bots buy transaction has already increased the price of the asset, therefore the user gets less amount of desired token. After the user has completed the trade, the attacker sells these tokens at a higher price and reaps profits from the difference.", "Front-running is a form of insider trading in traditional finance.  In the blockchain world it's similar, but with different actors (bots and miners) as well as enabling the public to see the pending transactions in mempool. Front-running implies the action, when bots see pending transactions in mempool, duplicates it and by offering and paying extra gas fees to the Mainers, tries to influence transaction ordering, frontrunn the pending transaction and execute its transaction first. In Ethereum, there are different types of frontrunning: Generalized front-running bots frontrun any type of smart contracts in order to extract value. Arbitrage bots do the same by overbidding each other in gas fees so as to include their own transactions first in a block. The miner can also frontrun  arbitrage bots  transactions on Uniswap, and include their own trade thus get profits from this arbitrage opportunity. Some Front-running bots sniping liquidity during the token sale of highly demanded projects, directly from smart contracts and ordinary users or community members who are the real, long term supporters of the project are forced to stay out of the game.", "Arbitrage bots execute arbitrage opportunities on different decentralized exchanges. They buy digital assets for a low price on one Dex and sell it for a high price on another Dex.Arbitrage as an operation is essential for sustainable Defi development, it is a mechanism of price discovery and finding equilibrium among different crypto markets. Sophisticated arbitrage operations are a determinant factor of an efficient market.Arbitrage bots on Ethereum are at war with each other to first capture arbitrage opportunities. This often results in gas wars, where the winner pays the highest bribe to a miner.", "Liquidation bots execute liquidation transactions on cryptocurrency borrowing and landing platforms. Liquidation cases of MEV extraction are the result of cryptocurrency price volatility. When the price of a particular cryptocurrency aggressively drops low, landing platforms liquidate collateralized assets in order to meet the creditors`s obligations. Liquidation bots fight with each other to capture this opportunity and make profit from it. Their activities are necessary for healthy crypto Lending market functioning.", "Miners are the most powerful creatures of the Dark Forest. They are system`s built-in bots, selfish economical actors driven by profit generation incentives, responsible for transaction ordering in the block, and production of new blocks in the blockchain. Miners can insert their own transactions, rearrange transactions in the block, or even censor them completely. They receive all the fees generated from the war among the bots. Strategies implemented by miners are getting more sophisticated, by deploying their own bots, they participate in the MEV extraction process in order to get even more profit."];
        $(".bots-slider-item").css("opacity", "0.5");
        $("#" + id).css("opacity", "1");
        $("#" + id + "_active").css("display", "block");
        $("#bots_caption_mobile").text(bots[number]);
        $("#bots_text_mobile").text(botsText[number]);


        if (number == 0) {
            $("#bots-small-text1").text("BOTS");
            $("#bots-small-text2").text("SANDWICH HEADS");

            $("#robot_big1_mobile").attr("src", "images/images/robot_1_t.png");

        } else {
            $("#bots-small-text1").text(bots_small[number]);
            $("#bots-small-text2").text(bots_small[number]);

            $("#robot_big1_mobile").attr("src", "images/bot_siluette2.png");

        }



        if (number == 0) {
            $("#small-image-top-mobile").attr("src", "images/images/Mask_Group_22_sa.png");
            $("#small-image-bottom-mobile").attr("src", "images/Sanwicherhead.png");
        } else {

            $("#small-image-top-mobile").attr("src", "images/images/Mask_Group_22_ua.png");
            $("#small-image-bottom-mobile").attr("src", "images/images/Mask_Group_22_ua.png");

        }


    }



    //$("#newdiv_header").hide();
    // $("#newdiv_header").css('display','none');
    $(document).ready(function() {

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        console.log(isSafari);
        if (isSafari === true) {

            $(".Path_581_-_Outline_qh").css('background-color', "#000");
        }
    });

    function new_modal() {

        // document.querySelector("#newdiv_header").classList.remove('display-none'); 
        $("#newdiv_header").removeClass('display-none');
        $(".about_hover_class").click();
    }

    function close_modal() {
        document.querySelector("#newdiv_header").classList.add('display-none');

    }


    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }


      
    var currentY = 0;

    $(window).scroll(function() {
        //currentY = $('body').offset().top;
        // console.log(currentY);
    });

    $(document).ready(function() {

        var scrollDemo = document.querySelector("body");


        scrollDemo.addEventListener("scroll", event => {

            var this_height = scrollDemo.scrollTop;
            console.log(this_height);

            if (this_height >= 7237 || this_height <= 5000) {
                close_modal();
            }

            if ((this_height >= 2374) && (this_height <= 3300)) {
                console.log("dfb_hover_class");
                if ($(".dfb_hover_class").css("opacity") == 1) {

                } else {
                    $(".dfb_hover_class").css("opacity", "1");
                }

                if ($(".about_hover_class").css("opacity") == 1) {
                    $(".about_hover_class").css("opacity", "0");
                }
                if ($(".bots_hover_class").css("opacity") == 1) {
                    $(".bots_hover_class").css("opacity", "0");
                }
                if ($(".roadmap_hover_class").css("opacity") == 1) {
                    $(".roadmap_hover_class").css("opacity", "0");
                }
                if ($(".team_hover_class").css("opacity") == 1) {
                    $(".team_hover_class").css("opacity", "0");
                }


            } else if ((this_height >= 3447) && (this_height <= 5000)) {
                console.log("bots_hover_class");

                if ($(".bots_hover_class").css("opacity") == 1) {} else {
                    $(".bots_hover_class").css("opacity", "1");
                }
                if ($(".dfb_hover_class").css("opacity") == 1) {
                    $(".dfb_hover_class").css("opacity", "0");
                }
                if ($(".about_hover_class").css("opacity") == 1) {
                    $(".about_hover_class").css("opacity", "0");
                }
                if ($(".roadmap_hover_class").css("opacity") == 1) {
                    $(".roadmap_hover_class").css("opacity", "0");
                }
                if ($(".team_hover_class").css("opacity") == 1) {
                    $(".team_hover_class").css("opacity", "0");
                }





            } else if ((this_height >= 5937) && (this_height <= 6400)) {
                console.log("about_hover_class");


                if ($(".about_hover_class").css("opacity") == 1) {

                } else {
                    $(".about_hover_class").css("opacity", "1");
                }

                if ($(".dfb_hover_class").css("opacity") == 1) {
                    $(".dfb_hover_class").css("opacity", "0");
                }
                if ($(".bots_hover_class").css("opacity") == 1) {
                    $(".bots_hover_class").css("opacity", "0");
                }
                if ($(".roadmap_hover_class").css("opacity") == 1) {
                    $(".roadmap_hover_class").css("opacity", "0");
                }
                if ($(".team_hover_class").css("opacity") == 1) {
                    $(".team_hover_class").css("opacity", "0");
                }

            } else if ((this_height >= 8333) && (this_height <= 11700)) {
                console.log("roadmap_hover_class");
                if ($(".roadmap_hover_class").css("opacity") == 1) {

                } else {
                    $(".roadmap_hover_class").css("opacity", "1");
                }
                if ($(".dfb_hover_class").css("opacity") == 1) {
                    $(".dfb_hover_class").css("opacity", "0");
                }
                if ($(".bots_hover_class").css("opacity") == 1) {
                    $(".bots_hover_class").css("opacity", "0");
                }
                if ($(".about_hover_class").css("opacity") == 1) {
                    $(".about_hover_class").css("opacity", "0");
                }
                if ($(".team_hover_class").css("opacity") == 1) {
                    $(".team_hover_class").css("opacity", "0");
                }
            } else if ((this_height >= 12524) && (this_height <= 13500)) {
                console.log("team_hover_class");

                if ($(".team_hover_class").css("opacity") == 1) {

                } else {
                    $(".team_hover_class").css("opacity", "1");
                }

                if ($(".dfb_hover_class").css("opacity") == 1) {
                    $(".dfb_hover_class").css("opacity", "0");
                }
                if ($(".bots_hover_class").css("opacity") == 1) {
                    $(".bots_hover_class").css("opacity", "0");
                }
                if ($(".about_hover_class").css("opacity") == 1) {
                    $(".about_hover_class").css("opacity", "0");
                }
                if ($(".roadmap_hover_class").css("opacity") == 1) {
                    $(".roadmap_hover_class").css("opacity", "0");
                }

            } else {
                console.log("no");

                if ($(".dfb_hover_class").css("opacity") == 1) {
                    $(".dfb_hover_class").css("opacity", "0");
                } else {
                    $(".dfb_hover_class").css("opacity", "0");
                }
                if ($(".bots_hover_class").css("opacity") == 1) {
                    $(".bots_hover_class").css("opacity", "0");
                } else {
                    $(".bots_hover_class").css("opacity", "0");
                }
                if ($(".about_hover_class").css("opacity") == 1) {
                    $(".about_hover_class").css("opacity", "0");
                } else {
                    $(".about_hover_class").css("opacity", "0");
                }
                if ($(".roadmap_hover_class").css("opacity") == 1) {
                    $(".roadmap_hover_class").css("opacity", "0");
                } else {
                    $(".roadmap_hover_class").css("opacity", "0");
                }
                if ($(".team_hover_class").css("opacity") == 1) {
                    $(".team_hover_class").css("opacity", "0");
                } else {
                    $(".team_hover_class").css("opacity", "0");
                }

            }

            // 2234   5937



        }, {
            passive: true
        });
    })
	


	function onMouseOverBottomLeft(id){
	
	    if($(window).width() <= 1080){
	        return false;
	    }
	
	    $('#main-footer-images').attr('class', '');
	    $('#main-footer-images').addClass('bg_glove'+id);
// 		$("#main-footer-images").css("background-image", "url('https://darkforestbots.com/new2/images/globe"+id+".png')");
	}
	
	function unhover() {
	    	    $('#main-footer-images').attr('class', '');
	    $('#main-footer-images').addClass('bg_glove');
// 		$("#main-footer-images").css("background-image", "url('https://darkforestbots.com/new2/footer_globe-min.png')");
}



//   $("#menu_box").on("click", function(event) {
//          console.log($(this).attr('aria-expanded'));
//         //  switch($(this).attr('aria-expanded')){
//         //      case 'true':
//         //          $(".scalable-nav").addClass("scalable-nav-opened");
//         //          break;
//         //     case 'false':
//         //         $(".scalable-nav").removeClass("scalable-nav-opened");
//         //         break
//         //     default:
//         //         console.log('arshedis')
//         //     break;
//         //  }
//         //  alert($('#menu_box').attr('aria-expanded') == 'true');
//                 if($('#menu_box').attr('aria-expanded') == 'true'){
//                 $(".scalable-nav").addClass("scalable-nav-opened");
//       }
       
//               if($('#menu_box').attr('aria-expanded') == 'false'){
//                 $(".scalable-nav").removeClass("scalable-nav-opened");
//                  }
//         // if(){
//         // $(".scalable-nav").addClass("scalable-nav-opened");
//         // }else if($(this).attr('aria-expanded') === false){
//         //     console.log('daxura')
//         // $(".scalable-nav").removeClass("scalable-nav-opened");
            
//         // }
        
//     });


window.addEventListener('click', function(e){   
    // console.log($(e.target).hasClass('mobile-menu-items'));
    
    //Mobile Menu
     if($(e.target).hasClass('mobile-menu-items')){
         if($('#mobile_menu_collapsed').hasClass('collapsed-none')){
            $(".scalable-nav").addClass("scalable-nav-opened")
            $('#mobile_menu_collapsed').removeClass('collapsed-none') 
            $(".nav-boxes").addClass("nav-boxes-active");
             return false;
         }else{
            $(".scalable-nav").removeClass("scalable-nav-opened")
            $('#mobile_menu_collapsed').addClass('collapsed-none') 
            $(".nav-boxes").removeClass("nav-boxes-active");
             return false;
         }
     }


     if($(e.target).attr('id') == 'mobile_menu_collapsed' || $(e.target).parent().attr('id') == 'mobile_menu_collapsed'){
         return false;
     }
      $(".scalable-nav").removeClass("scalable-nav-opened");
      $('#mobile_menu_collapsed').addClass('collapsed-none') ;
         $(".nav-boxes").removeClass("nav-boxes-active");
            
    //morcha Mobile Menu---------------


  });

