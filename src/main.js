

function displayNavbar(){
    $('#navbar-icon-open').click(()=>{
        $('.navbar-container').css('transform','translateX(0%)');
    })
    $('#navbar-icon-close').click(()=>{
        $('.navbar-container').css('transform','translateX(-100%)');
    })
}

function main(){
    displayNavbar();
}
main();