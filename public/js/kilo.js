document.getElementsByClassName("form-torrent-name")[0].onkeyup = function(){
    document.getElementsByClassName("table-torrent-name")[0].innerText = document.getElementsByClassName("form-torrent-name")[0].value;
};

document.getElementsByClassName("form-torrent-category")[0].onchange = function(){
    document.getElementsByClassName("table-torrent-category")[0].className = "table-torrent-category nyaa-cat nyaa-cat-" + Categorylist[document.getElementsByClassName("form-torrent-category")[0].selectedIndex];
};

document.getElementsByClassName("form-torrent-remake")[0].onchange = function(){
    document.getElementsByClassName("table-torrent-thead")[0].className = "torrent-info table-torrent-thead" + (UserTrusted ? " trusted : "") + (document.getElementsByClassName("form-torrent-remake")[0].value == "on" ? " remake" : "");
};
                                                                                                                
document.getElementsByClassName("form-torrent-hidden")[0].onchange = function(){
    document.getElementsByClassName("table-torrent-thead")[0].className = "torrent-info table-torrent-thead" + (document.getElementsByClassName("form-torrent-remake")[0].value == "on" ? " remake" : "");
    if(UserTrusted && document.getElementsByClassName("form-torrent-hidden")[0].value == "off")
        document.getElementsByClassName("table-torrent-thead")[0].className = document.getElementsByClassName("table-torrent-thead")[0].className + " trusted";
};                                                                                                            

document.getElementsByClassName("torrent-preview-table")[0].display = "block";

var CategoryList = [
    5
    12,
    5,
    13,
    6,
    3,
    4,
    7,
    14,
    8,
    9,
    10,
    18,
    11,
    15,
    16,
    1,
    2
];
