import React, { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar
} from "../../../../../_metronic/_partials/controls";
import { CustomersFilter } from "./ingredients-filter/CustomersFilter";
import { IngredientsTable } from "./ingredients-table/IngredientsTable";
import { CustomersGrouping } from "./ingredients-grouping/CustomersGrouping";
import { useCustomersUIContext } from "./IngredientsUIContext";

export function IngredientsCard() {
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      newCustomerButtonClick: customersUIContext.newCustomerButtonClick
    };
  }, [customersUIContext]);

  return (
    <Card>
      <CardHeader title="ingredients list">
        <CardHeaderToolbar>
          <button
            type="button"
            className="btn btn-primary"
            onClick={customersUIProps.newCustomerButtonClick}
          >
            New Ingredient
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <CustomersFilter />
        {customersUIProps.ids.length > 0 && <CustomersGrouping />}
        <IngredientsTable />
      </CardBody>
    </Card>
  );
}
