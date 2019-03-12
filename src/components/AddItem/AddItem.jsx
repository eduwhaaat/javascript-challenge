import React, { memo, useContext } from "react";
import useAddItemForm from "./useAddItemForm";
import { GroceriesContext } from "../../Context";
import {
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

const AddItem = memo(props => {
  const { dispatch } = useContext(GroceriesContext);
  const { formData, handleSubmit, updateFormData } = useAddItemForm(add);

  function add() {
    dispatch({ type: "ADD_GROCERIES", payload: formData });
  }

  const classes = theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2
    }
  });

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <form onSubmit={handleSubmit}>
          <Grid xs={10} md={11} item style={{ padding: 16 }}>
            <TextField
              label="Name"
              placeholder="Add Groceries here"
              value={formData.name}
              onChange={e => updateFormData(e)}
              name="name"
              required
              fullWidth
              margin="normal"
              InputLabelProps={{
            shrink: true,
          }}
            />
          </Grid>
          <Grid xs={10} md={11} item style={{ padding: 16 }}>
            <TextField 
              label="Add number here"
              value={formData.amount}
              onChange={e => updateFormData(e)}
              type="number"
              name="amount"
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid xs={10} md={11} item style={{ padding: 16 }}>
            <FormControl required  className={classes.formControl}>
              <InputLabel shrink htmlFor="fridge-label-placeholder">
                Fridge
              </InputLabel>
              <Select
                value={formData.fridge}
                onChange={e => updateFormData(e)}
                name="fridge"
                input={<Input name="age" id="fridge-label-placeholder" />}
                displayEmpty
                name="fridge"
                className={classes.selectEmpty}
                fullWidth
              >
                <MenuItem value={""}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Fridge 1"}>Fridge 1</MenuItem>
                <MenuItem value={"Fridge 2"}>Fridge 2</MenuItem>
              </Select>
              {/* <FormHelperText>Label + placeholder</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
});

export default AddItem;
