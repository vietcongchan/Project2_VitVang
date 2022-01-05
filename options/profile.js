const profile_select = document.getElementsByClassName('profile');
const button_left = document.getElementsByClassName('button-profile left')[0];
const button_right = document.getElementsByClassName('button-profile right')[0];
k = 0;
button_left.onclick = function() {
    x = k;
    if (k == 0) k = 3;
        else k--;
    profile_select[x].classList.remove('active');
    profile_select[k].classList.add('active');
}
button_right.onclick = function() {
    x = k;
    if (k == 3) k = 0;
        else k++;
    profile_select[x].classList.remove('active');
    profile_select[k].classList.add('active');
}