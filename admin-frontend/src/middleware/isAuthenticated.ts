export const isAuthenticated=async(req:any,res:any)=>{
    try {
        const token=localStorage.getItem('token');
        if(!token){
            return false
        }
        const response = await fetch('/api/verify-token', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error('Token invalid');
          }
          return true
        
    } catch (error) {
        return false
    }
}