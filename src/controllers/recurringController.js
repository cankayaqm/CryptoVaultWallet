import { 
  createRecurringPayment,
  getRecurringPayments,
  cancelRecurringPayment
} from "../recurring/recurringService.js";

export const createRecurringController = (req, res) => {
  const { amount, address, frequency } = req.body;

  const result = createRecurringPayment(
    Number(amount),
    address,
    frequency
  );

  if (result.success) {
    res.json(result);
  } else {
    res.status(400).json(result);
  }
};

export const getRecurringController = (req, res) => {
  res.json(getRecurringPayments());
};

export const cancelRecurringController = (req, res) => {
  const { id } = req.params;

  const result = cancelRecurringPayment(id);

  if (result.success) {
    res.json(result);
  } else {
    res.status(404).json(result);
  }
};
