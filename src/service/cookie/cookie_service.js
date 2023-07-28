
const dbCart = require("../../database/cookie/user_cart");
const cart = ()=>{
    return dbCart;
}
const save2 =(cart_list,goods)=>{
    //{1:개수 , 2:개수,,,,,}
    //{} 최초로는 값이 없으니까 indefined
    if(!cart_list[goods]){
        // 1번을 선택 했다면 => cart_list = {1:0}
        cart_list[goods]=0; // =으로 초기화
    }
    // cart_list = {1:1};
    cart_list[goods] = cart_list[goods]+1; 

     // 또 일번 선택하면 cart_list = {1:2};  밸류값 증가
    
     return cart_list; 
    
     // for(var i=0;i<dbCart.length;i++){
    //     if(dbCart[i].goods_id == goods){
    //         cart_list=dbCart[i];
    //         break;
    //     }
    // }
    // return cart_list;
    
}
const view_list=(cart_list)=>{
    console.log("=== ser view_list ===");
    //console.log(cart_list);
    let list =[];
    for(i in cart_list){
        console.log("key: ",i); // 키들만 뽑아 올수 있다.
        let item={};
        item['goods_id']=i;
        item['title']= dbCart[i-1].title; 
        //i-1 : 저장되어있는 index의 값은 0번부터 시작하기 때문에 -1을 해서 db파트의 인덱스를 사용했다.
        item['price']= dbCart[i-1].price;
        item['number']= cart_list[i];
        item['total']= dbCart[i-1].price*cart_list[i]; // cart_list에 몇개있는지*db에 저장된 상품의 값
        list=list.concat(item); 
        //list.push(item);
    } 
    return list;
}
module.exports={cart,save2,view_list};