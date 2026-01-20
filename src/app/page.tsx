import Image from "next/image";

import styles from "./page.module.css";
import {Box, Typography} from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography textAlign={"center"}>
          Text här
        </Typography>
      </Box>
    </div>
  );
}
