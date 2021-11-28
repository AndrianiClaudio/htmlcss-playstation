const collapseItem = document.querySelectorAll('.collapse-item');
const itemList = [];
for(let i=0;i<collapseItem.length;i++){
    itemList[i] = collapseItem[i];
    collapseItem[i].addEventListener('focus',function(){
        const show = document.querySelectorAll('.show');
        if(show.length>0){
            show[0].classList.remove('show');
        }
    });
}