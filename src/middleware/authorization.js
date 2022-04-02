
const authorization = (permitted)=>
{
    return (req,res,next)=>{
    user = req.user;
    isPermitted = false;
    permitted.map(roll=>{
        if(user.role.includes(roll))
        {
            isPermitted=true;
        }
    })
    if(isPermitted)
    {
        return next();
    }else{
        return res.status(401).send("your not autherize person")
    }
}

}

module.exports = authorization;