import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const activeGradient =
  "linear-gradient(214deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)";

function AddRoutineButton() {
  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={<AddIcon />}
      sx={{
        borderRadius: "2rem",
        py: 1.5,
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: 500,
        mt: 2,
        background: activeGradient,
        "&:hover": {
          boxShadow: "0 4px 12px rgba(87, 199, 133, 0.3)",
          background: activeGradient,
        },
      }}
    >
      Adicionar Rotina
    </Button>
  );
}

export default AddRoutineButton;
