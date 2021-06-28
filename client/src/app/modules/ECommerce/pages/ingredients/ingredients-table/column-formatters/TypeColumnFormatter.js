// please be familiar with react-bootstrap-table-next column formaters
// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Work%20on%20Columns&selectedStory=Column%20Formatter&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
import React from "react";
import {
  CustomerTypeCssClasses,
  CustomerTypeTitles
} from "../../IngredientsUIHelpers";
import { Avatar, Grid } from "@material-ui/core";

export function TypeColumnFormatter(cellContent, row) {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src={`http://localhost:4000/${row.image}`}
          // className={classes1.avatar}
        />
      </Grid>
    </>
  );
}
