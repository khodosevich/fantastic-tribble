import {Box, Button, FormControl, Input, InputAdornment, InputLabel} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";


const Login = () => {

    return (
       <Box sx={{display:"flex",justifyContent:"center", backgroundColor:"#576aa2" }}>

         <Box sx={{margin:"150px 0 450px 0"  , background:"#F0F0F0" , borderRadius:"20px" , padding:"100px"}}>

             <Box sx={{ display:"flex",flexDirection:"column", gap:"50px" , alignItems:"center" }}>

                 <Box>
                     <FormControl variant="standard">
                         <InputLabel htmlFor="input-with-icon-adornment__login">
                             Login
                         </InputLabel>
                         <Input
                             sx={{fontSize:"20px"}}
                             id="input-with-icon-adornment"
                             startAdornment={
                                 <InputAdornment position="start">
                                     <AccountCircle />
                                 </InputAdornment>
                             }
                         />
                     </FormControl>
                 </Box>

                 <Box>
                     <FormControl  variant="standard" >
                         <InputLabel htmlFor="input-with-icon-adornment">
                             Password
                         </InputLabel>
                         <Input
                             sx={{fontSize:"20px"}}
                             type="password"
                             id="input-with-icon-adornment__password"
                             startAdornment={
                                 <InputAdornment position="start">
                                     <AccountCircle />
                                 </InputAdornment>
                             }
                         />
                     </FormControl>
                 </Box>

                 <Box>
                     <Button variant="contained">sing in</Button>
                 </Box>

             </Box>

         </Box>

       </Box>
    );
};

export default Login;