import React from "react";

import { PayPalButton } from "react-paypal-button-v2";

// Snackbar notifications on successful transaction
import { useSnackbar } from "notistack";

// eslint-disable-next-line react/prop-types
export default function CoursePurchaseButton({ amount }) {
  // snackbar notification state
  const { enqueueSnackbar } = useSnackbar();

  return (
    <PayPalButton
      amount={amount}
      currency="USD"
      shippingPreference="NO_SHIPPING"
      onSuccess={(details) => {
        // Transaction completed
        enqueueSnackbar(`Thank you for your purchase, ${details.payer.name.given_name}! `, {
          variant: "success",
          autoHideDuration: 5000
        });
      }}
      onError={(error) => {
        let errorMsg = error;
        if (amount === 0) {
          errorMsg = "Please select at least one payment option.";
        }
        enqueueSnackbar(`Transaction failed! ${errorMsg}`, {
          variant: "error",
          autoHideDuration: 5000
        });
      }}
    />
  );
}
