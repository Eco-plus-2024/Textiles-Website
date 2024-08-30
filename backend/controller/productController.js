export const getProduct=(req,res)=>{
    try {
        return res.json({
            message:'the porduct details get'
        })
    } catch (error) {
        return res.json({
            error:error
        })
    }
}