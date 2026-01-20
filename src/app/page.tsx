import {Box, Button, Link, Stack, Typography} from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography textAlign={"center"}>
          Text här
        </Typography>
          <Stack alignItems="center" mt={4}>
              <Button component={Link} href="/showroom" variant="contained"
                      sx={{ width: 100, height: 40 }}
              >
                  Vidare
              </Button>
          </Stack>
      </Box>
    </div>
  );
}
