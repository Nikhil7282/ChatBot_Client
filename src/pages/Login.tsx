
import {IoIosLogIn} from "react-icons/io"
import { Box, Button, Typography } from "@mui/material";
import CustomizeInput from "../components/shared/CustomizeInput";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const auth=useAuth()
  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const email=formData.get("email") as string
    const password=formData.get("password") as string
    // console.log(email,password);
    try {
      toast.loading("Signing In",{id:"login"})
      await auth?.login(email,password)
      toast.success("Welcome...",{id:"login"})
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed",{id:"login"})
    }
  }
  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={1} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img
          src="../../public/KeePass.png"
          alt="image"
          style={{ width: "350px" }}
        />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignSelf={"center"}
        padding={2}
        ml={16}
        mt={2}
      >
        <form
        onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizeInput type="email" name="email" label="Email" />
            <CustomizeInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn/>}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
