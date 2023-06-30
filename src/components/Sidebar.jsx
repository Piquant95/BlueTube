import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "10%" },
      flexDirection: { md: "row" },
    }}
  >
    {categories.map((category) => (
      <button>
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
