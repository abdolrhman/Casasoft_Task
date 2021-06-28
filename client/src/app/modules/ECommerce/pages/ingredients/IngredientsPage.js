import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./ingredients-loading-dialog/CustomersLoadingDialog";
import { IngredientEditDialog } from "./ingredient-edit-dialog/IngredientEditDialog";
import { CustomerDeleteDialog } from "./ingredient-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./ingredients-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./ingredients-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./IngredientsUIContext";
import { IngredientsCard } from "./IngredientsCard";

export function IngredientsPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/e-commerce/ingredients/new");
    },
    openEditCustomerDialog: id => {
      history.push(`/e-commerce/ingredients/${id}/edit`);
    },
    openDeleteCustomerDialog: id => {
      history.push(`/e-commerce/ingredients/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/e-commerce/ingredients/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/e-commerce/ingredients/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/e-commerce/ingredients/updateStatus");
    }
  };

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/e-commerce/ingredients/new">
        {({ history, match }) => (
          <IngredientEditDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/ingredients");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/ingredients/:id/edit">
        {({ history, match }) => (
          <IngredientEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/e-commerce/ingredients");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/ingredients/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/ingredients");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/ingredients/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/e-commerce/ingredients");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/ingredients/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/ingredients");
            }}
          />
        )}
      </Route>
      <Route path="/e-commerce/ingredients/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/e-commerce/ingredients");
            }}
          />
        )}
      </Route>
      <IngredientsCard />
    </CustomersUIProvider>
  );
}
