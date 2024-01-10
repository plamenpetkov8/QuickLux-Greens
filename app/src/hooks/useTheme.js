import { createTheme, useTheme as useThemeMui } from "@mui/material/styles";

export default function useTheme() {
  const currTheme = useThemeMui();
  const newTheme = createTheme({
    palette: {
      primary: currTheme.palette.success,
    },
    typography: {
      h4: { color: currTheme.palette.success.main },
      h5: { color: currTheme.palette.success.main },
      h6: { color: currTheme.palette.success.main },
      body1: { color: currTheme.palette.success.main },
      subtitle1: { color: currTheme.palette.success.main },
    },
    components: {
      MuiChip: {
        defaultProps: {
          color: "success",
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: "success",
        },
      },
      MuiFab: {
        defaultProps: {
          color: "success",
        },
      },
    },
  });

  return newTheme;
}
