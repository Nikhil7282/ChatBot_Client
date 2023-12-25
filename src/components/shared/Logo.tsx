import { Link } from "react-router-dom";
import { GiCircuitry } from "react-icons/gi";
import { Typography } from "@mui/material";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link to={"/"}>
        <div
          className="image-inverted"
          style={{ width: "30px", height: "30px",fontSize:"30px",textDecoration:"none"}}
        >
          {/* <GiCircuitry /> */}
          <img
          src="../../../public/openai.png"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
        </div>
      </Link>
      <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
          }}
        >
            <span style={{fontSize:"20px",color:"white"}}>Atomic</span>-Gpt
        </Typography>
    </div>
  );
};

export default Logo;
