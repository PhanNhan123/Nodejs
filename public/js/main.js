// Change theme mode
 $(document).ready(function(){
     $('#header-nav-item--theme').click(function(){
         
        if($('#header-nav-item--theme').hasClass('light-theme')){
            $('#header-nav-item--theme').removeClass('light-theme').addClass('dark-theme')
            $('#header-nav-item--theme-icon').removeClass('fa-moon').addClass('fa-sun')
            $('#header-nav-item--theme-name').text('Chế độ sáng');
        }
        else{
            $('#header-nav-item--theme').removeClass('dark-theme').addClass('light-theme')
          
            $('#header-nav-item--theme-icon').removeClass('fa-sun').addClass('fa-moon')
            $('#header-nav-item--theme-name').text('Chế độ tối')
        }
        document.body.classList.toggle('dark-theme')
     })
});
// Hide search bar
document.getElementById('icon-hide-search').onclick=function(){
    document.getElementById('header-bottom').style.display = "none"   
}
// Show navigate tablet, mobile mode
document.getElementById('header-search-icon').onclick= function (){
    const style = window.getComputedStyle(document.getElementById('header-bottom'));
    if(style.display === 'none')
    {
        document.getElementById('header-bottom').style.display = "flex";
    }
    else{
        document.getElementById('search__input').focus();
    }
}
 $(document).ready(function(){
    $('').click(function(){

    });
 })


document.getElementById('header-nav__menu-icon').onclick= function(){
    var item=document.getElementById('header-nav-list');
    var container= document.getElementById('container');
    console.log(container)
    item.classList.toggle('header-nav-list-active');   
    container.classList.toggle('container-blur') 
}



