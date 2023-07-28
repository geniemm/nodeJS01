const index =(req,res)=>{
    res.render("session/index");
}
const set_session=(req,res)=>{
    req.session.name="홍길동";
    req.session.age=20;
    res.render("session/set_session");
}
const get_session=(req,res)=>{
    const sessionValue = {
        name: req.session.name,
        age: req.session.age
    };
    res.render("session/get_session",sessionValue);
}
const del_session=(req,res)=>{
    // 특정 세션 하나만 삭제
   // delete req.session.name;
    // 모든 세션 삭제
     delete req.session.destroy();
    res.render("session/del_session");
};
const login=(req,res)=>{
    res.render("session/login",{nick:req.session.nick});
}
const login_check=(req,res)=>{
    //console.log("query :",req.query);
    //console.log("params :",req.params);
    console.log("body : ",req.body);
    console.log("==== login check ====");
    console.log(req.body.id);
    console.log(req.body["pwd"]);

    const DBid = "aaa", DBpwd="111", nick="홍길동";
    if(DBid === req.body.id && DBpwd === req.body["pwd"]){
        req.session.id2 = DBid;
        req.session.nick = nick; // nick은 전역변수로 사용할 수 있다.
        return res.redirect("/session/success");
    }
    const msg = `<script>
                    alert  ("로그인 실패");location.href="/session/login";
                 </script>`    
            res.send(msg);
    }
const success =(req,res)=>{
    console.log(req.session.id2);
    if(req.session.id2){   
         return res.render("session/success",{nick:req.session.nick});
    }
    const msg = `<script>
                 alert("로그인 해라!");location.href="/session/login";
                </script>`    
    res.send(msg);
}
const logout=(req,res)=>{
    req.session.destroy(()=>{
        console.log("모든 세션을 만료합니다.")
    }); // 이 함수 실행때 다른 함수 같이 실행할 수 있다는 뜻
    res.redirect("/session/login");
}
module.exports={logout,success,login_check,index,set_session,get_session,del_session,login};