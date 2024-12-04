$(document).ready(function() {
const blogs = $(".makeup_fl_blog_list");
const common = $(".blog_entry");
console.log(common);
const pages = $(".pg_number a");
const items_per_page = 3;
let active_page = pages.first();
let active_idx = 0;


displayBlogs();


// pages.click(function(){
//     console.log($(this), $(this).index());
//     // switchActivePage($(this).index())
// })   
pages.each(function(){
    $(this).on("click", function(){
        switchActivePage($(this));
        displayBlogs();
        }
);  });
        // let page_number = $(this).html();
        // blogs.each( function(){
        //     if($(this).hasClass("pg_" + page_number)){
        //         $(this).show();
        //     } else {
        //         $(this).hide();
        //     }
        // });



function displayBlogs(){
    if(active_idx != 0){
        common.hide();
    }
    let min = active_idx * items_per_page;
    let max = min + items_per_page;
    if(max > blogs.length){
        max = blogs.length;
    }


    for (let i = 0; i < blogs.length; i++) {
        if(i >= min && i < max){
            blogs.eq(i).show();
        } else {
            blogs.eq(i).hide();
        }
        
    }
}

function switchActivePage(page){
    if(isNaN(page.html())){
        if(active_idx >= pages.length - 1){
            return;
        }
        active_idx++;
        active_page.removeClass("active");
        pages.eq(active_idx).addClass("active");
        active_page = pages.eq(active_idx);
    }else{
        active_page.removeClass("active");
        page.addClass("active");
        active_page = page;
        active_idx = page.html() - 1;
    }
}
// pages.forEach( page => {
//     page.addEventListener("click", function(){
//         let page_number = page.innerHTML;
//         console.log(page_number);
//         // blogs.forEach( blog => {
//         //     if(blog.classList.contains("pg_" + page_number)){
//         //         blog.style.display = "block";
//         //     } else {
//         //         blog.style.display = "none";
//         //     }
//         // });
// })});

console.log(blogs, common, pages);

});
