import { Checkbox, FormControlLabel, FormGroup, Grid2 } from "@mui/material";
import { useContext } from "react";
import { AppContext, Regions } from "../../contexts/AppState";
import { available_regions } from "../../mock/db";

const FirstRouteContent = () => {
  const { regions, setRegions } = useContext(AppContext);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    region: Regions,
  ) => {
    if (event?.target.checked) {
      setRegions([...regions, region]);
    } else {
      setRegions(regions.filter((r) => r.nameserver !== region.nameserver));
    }
  };
  console.log(regions);
  return (
    <Grid2 container>
      <FormGroup row>
        {available_regions.map((region, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={regions.some(
                  (r) => r.nameserver === region.nameserver,
                )}
                onChange={(event) => handleCheckboxChange(event, region)}
              />
            }
            label={region.displayName}
          />
        ))}
      </FormGroup>
    </Grid2>
  );
};

export default FirstRouteContent;
