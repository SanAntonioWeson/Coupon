// 0 ok || 1 error
export const detNull = function(){//判断空
    for(var i in arguments){
        if(!arguments[i]){
            return '1'
        }
    }
    return '0'
}


export const V_email = (email) =>{//验证邮箱
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
}