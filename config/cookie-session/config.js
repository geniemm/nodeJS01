const sessionConfig = {
    secret: "암호화키 아무거나",
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge:5000},
}
module.exports = {sessionConfig};
/*
    resave : fals : 세션 id를 한번만 발급 받는다.
    saveUninitialized : true : 세션 id를 발급 받으면 사용하겠다.
    위 두개의 설정은 기본 권장사항으로 false,true로 설정하고 사용한다 고 보면된다.

*/