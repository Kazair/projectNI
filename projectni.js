// ==UserScript==
// @name         Motyw X
// @namespace    Wyglad
// @version      0.7
// @description  Zmienia motyw NI
// @author       Kazair
// @match        http://*.margonem.pl/
// @grant        none
// ==/UserScript==

// CSS Motywu
let css = `
    .button.green, .widget-button.green {
        background-image: linear-gradient(to top,#070820,#2b6f7f);
        box-shadow: inset 0 0 1px 1px #000000, inset 0 0 0 3px #00174a;
    }
    .layer.interface-layer .main-column.right-column {
        background: url(https://i.imgur.com/g6haFDg.png) -50px -170px;
    }
    .hero_class {
        top: 79px;
        left: 873px;
    }
    .hud-container {
        background: url(https://i.imgur.com/YUaLb93.png) -7px 0;
    }
    .avatar{
        position:absolute;
        top: 230px;
        left: 50px;
    }
    .left-column .inner-wrapper .chat-tpl .chat-pannel{
        border-image: url(https://i.imgur.com/896zP9R.png) 0 111 0 104 round round;
        background-color: #142f4f;
    }
    .layer.interface-layer .main-column.left-column .border{
        background-image: url(https://i.imgur.com/0mQP0d4.png);
    }
    .left-column .inner-wrapper .chat-tpl .tabs-pannel{
        border-image-source: url(https://i.imgur.com/DMhrpCA.png);
    }
    .left-column .inner-wrapper .chat-tpl .messages-wrapper .under-tab-decor{
        border-image-source: url(https://i.imgur.com/IvunzDo.png);
    }
    .left-column .inner-wrapper .chat-tpl .input-wrapper{
        border-image: url(https://i.imgur.com/gQp4Iqz.png) 0 111 0 104 fill repeat round;
    }
    .layer.interface-layer .positioner.bottom .bg{
        background: url(https://i.imgur.com/Pa5EsFu.png) 0 0 repeat;
    }
    .layer.interface-layer .positioner.top .bg{
        background: url(https://i.imgur.com/Pa5EsFu.png) 0 -61px repeat;
    }
    .layer.interface-layer .positioner.top .hud-container{
        background: url(https://i.imgur.com/YUaLb93.png) -7px 0;
    }
    .bottom-panel{
        background: url(https://i.imgur.com/78qYtEA.png) -6px -73px no-repeat;
    }
    .game-window-positioner .inventory_wrapper .inventory-grid-bg{
        background: url(https://i.imgur.com/zpDq8q3.png) no-repeat -175px 0;
    }
    .game-window-positioner .character_wrapper .equipment-wrapper{
        background: url(https://i.imgur.com/zpDq8q3.png)  0 -229px;
    }
    .layer.interface-layer .main-column .extended-stats{
        background: linear-gradient(to top,#01021f,#0a3f4b);
    }
    .layer.interface-layer .positioner.top .hud-container .hero-data .heroname{
        top: 80px;
        width: 70px;
        left: 900px;
        font-size: 1.4em;
        text-shadow: cyan 0px 0px 8px, #2222d6 0px 0px 8px, #027496 0px 0px 8px;
        color: white;
        font-weight: bold;
    }
    .layer.interface-layer .positioner.top .hud-container .hero-data .herolvl{
        top: 81px;
        left: 975px;
        font-size: 1.0em;
        font-weight: bold;
        text-shadow: 0px 0px 8px #ad1010;
    }
    .layer.interface-layer .positioner.top .hud-container .world-name{
        top: 80px;
        left: 1025px;
        font-size: 1.4em;
        font-weight: bold;
        width: 56px;
    }
    .layer.interface-layer .positioner.top .hud-container .herocredits.herogold, .layer.interface-layer .positioner.top .hud-container .herogold.herogold{
        top: 115px;
        left: 890px;
    }
    .layer.interface-layer .positioner.top .hud-container .herocredits.herocredits, .layer.interface-layer .positioner.top .hud-container .herogold.herocredits{
        top: 115px;
        left: 980px;
    }
    .layer.interface-layer .positioner.top .hud-container .btn-min.gold-btn{
        top: 112px;
        left: 973px;
    }
    .layer.interface-layer .positioner.top .hud-container .btn-min.credits-btn{
        top: 112px;
        left: 1089px;
    }
    .btn-min{
        box-shadow: inset 0 0 0 1px #00f3ff;
        color: white;
        border: 1px solid #003859;
        background: #153d5e;
    }
    .layer.interface-layer .positioner.top .hud-container .hero-data .hero_class{
        top: 79px;
        left: 873px;
    }
    .game-window-positioner .inventory_wrapper{
        top: 290px;
    }
    .right-column .inner-wrapper .battle-set-wrapper{
        top: 85px;
        left: 155px;
        background: url(https://i.imgur.com/zOFZy99.png) no-repeat -517px -709px;
    }
    .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0.active{
        background: url(https://i.imgur.com/zOFZy99.png) no-repeat -390px -709px;
    }
    .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1.active{
        background: url(https://i.imgur.com/zOFZy99.png) no-repeat -472px -709px;
    }
    .right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2.active{
        background: url(https://i.imgur.com/zOFZy99.png) no-repeat -428px -709px;
    }
    .game-window-positioner .inventory_wrapper .bags-navigation{
        top: 205px;
        background: url(https://i.imgur.com/zpDq8q3.png) no-repeat 0 -140px;
    }
    .game-window-positioner .character_wrapper .equipment-wrapper{
        top: 85px;
    }
    .game-window-positioner .character_wrapper .pvp-btn{
        top: 193px;
    }
    .game-window-positioner .character_wrapper .stats-wrapper{
        top: 130px;
        background: url(https://i.imgur.com/K3HgZ73.png);
    }
    .layer.interface-layer .positioner.top .hud-container .map_ball{
        top: 915px;
        left: 470px;
        z-index: 1;
    }
    .layer.interface-layer .positioner.top .hud-container .map-data .location{
        top: 875px;
        left: 450px;
        font-size: 1.2em;
        font-weight: bold;
        width: 115px;
        z-index: 1;
    }
    .layer.interface-layer .positioner.top .hud-container .map-data .coords{
        top: 890px;
        right: -185px;
        font-size: 1.2em;
        font-weight: bold;
        z-index: 1;
    }
    .gold-tip, .credits-tip, .b_wrapper{
        display: none !important;
    }

`;
$('<style>'+css+'</style>').appendTo('head');

// Log w konsoli
window.log('<a style="color:black; text-decoration:blink" target="_blank""> <b>Motyw <u>new-NI</u> <b>by Kazair</b> <br> Kopiowanie jakichkolwiek treści <u>ZABRONIONE</u></b></a>');

//Element EQ
$('<div id="boxik" style="height: 100px;width: 241px;top: 60px;position: fixed; left: 1638px; opacity: 0.55; background: url(https://i.imgur.com/FFE4qee.png);"></div>').appendTo('.layer.interface-layer .main-column.right-column');

//Avatarek
$('<div class="avatar" />').appendTo('.layer.interface-layer .main-column.right-column');
var _AvatarC = function(){
    setTimeout(_AvatarC,5000);
    var x = "32px";
    var y = "48px";
    var img = 'url(obrazki/postacie/'+Engine.hero.d.img+')';
    if(img == 'none') img = '';
    if(x == "32px" && y == "48px"){
        $('.layer.interface-layer .main-column.right-column .avatar').attr('style','width: '+x+'; height: '+y+'; background-image: '+img);
    }else if(x == '32px'){
        // small
    }else{
        $('.layer.interface-layer .main-column.right-column .avatar').attr('style','');
    }
};
_AvatarC();
