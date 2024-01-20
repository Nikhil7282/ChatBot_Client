import { IoIosLogIn } from "react-icons/io";
import { Box, Button, Typography } from "@mui/material";
import CustomizeInput from "../components/shared/CustomizeInput";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    // console.log(email,password);
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("SignUp Successful", { id: "signup" });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };
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
              SignUp
            </Typography>
            <CustomizeInput type="text" name="name" label="Name" />

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
              endIcon={<IoIosLogIn />}
            >
              SignUp
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
