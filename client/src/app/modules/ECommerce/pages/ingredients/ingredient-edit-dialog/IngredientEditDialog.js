import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/customers/customersActions";
import { IngredientEditDialogHeader } from "./IngredientEditDialogHeader";
import { IngredientEditForm } from "./IngredientEditForm";
import { useCustomersUIContext } from "../IngredientsUIContext";

export function IngredientEditDialog({ id, show, onHide }) {
  // Ingredients UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      initCustomer: customersUIContext.initCustomer
    };
  }, [customersUIContext]);

  // Ingredients Redux state
  const dispatch = useDispatch();
  const { actionsLoading, customerForEdit } = useSelector(
    state => ({
      actionsLoading: state.customers.actionsLoading,
      customerForEdit: state.customers.customerForEdit
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Ingredient by id
    dispatch(actions.fetchCustomer(id));
  }, [id, dispatch]);

  // server request for saving ingredient
  const saveCustomer = ingredient => {
    if (!id) {
      // server request for creating ingredient
      dispatch(actions.createCustomer(ingredient)).then(() => onHide());
    } else {
      // server request for updating ingredient
      dispatch(actions.updateCustomer(ingredient)).then(() => onHide());
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <IngredientEditDialogHeader id={id} />
      <IngredientEditForm
        saveCustomer={saveCustomer}
        actionsLoading={actionsLoading}
        ingredient={customerForEdit || customersUIProps.initCustomer}
        onHide={onHide}
      />
    </Modal>
  );
}
