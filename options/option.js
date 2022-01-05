
title_tmp1 = document.title
if (title_tmp1.indexOf(">>") != -1) {
    title_tmp2 = title_tmp1.split(">>");
    title_last = "*~*" + title_tmp2[1];
    title_last = title_last + "*~*" + title_tmp2[2];
} else {

    if (title_tmp1.indexOf("*~*") != -1) {
        title_tmp2 = title_tmp1.split("*~*");
        title_last = "*~*" + title_tmp2[1];
        if (title_last == "*~*") {
            title_last = "*~*"
        };
        if (title_last == "*~*") {
            title_last = "*~*"
        };
    } else {
        title_last = ""
    }
}


title_new = "" + title_last + ""
step = 0

function flash_title() {
    step++
    if (step == 9) {
        step = 1
    }
    if (step == 1) {
        document.title = 'V'
    }
    if (step == 2) {
        document.title = 'Vi'
    }
    if (step == 3) {
        document.title = 'Vit'
    }
    if (step == 4) {
        document.title = 'Vit V'
    }
    if (step == 5) {
        document.title = 'Vit Va'
    }
    if (step == 6) {
        document.title = 'Vit Van'
    }
    if (step == 7) {
        document.title = 'Vit Vang'
    }
    if (step == 8) {
        document.title = 'Vit Vang Project'
    }
    setTimeout("flash_title()",220);
}
flash_title()
function delay(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
