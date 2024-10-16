

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";


export const DemoRadioGroup = ({
    groupedColumnMode,
    setGroupedColumnMode,
  }: {
    groupedColumnMode: false | "remove" | "reorder";
    setGroupedColumnMode: (
      groupedColumnMode: false | "remove" | "reorder"
    ) => void;
  }) => {
    return (
      <FormControl sx={{ margin: "auto", textAlign: "center" }}>
        <FormLabel>Grouped Column Mode</FormLabel>
        <RadioGroup
          row
          value={groupedColumnMode}
          onChange={(event) =>
            setGroupedColumnMode(
              event.target.value === "false"
                ? false
                : (event.target.value as any)
            )
          }
        >
          <FormControlLabel
            control={<Radio />}
            label='"reorder" (default)'
            value="reorder"
          />
          <FormControlLabel
            control={<Radio />}
            label='"remove"'
            value="remove"
          />
          <FormControlLabel value={false} control={<Radio />} label="false" />
        </RadioGroup>
      </FormControl>
    );
  };