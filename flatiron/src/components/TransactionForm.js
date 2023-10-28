// TransactionForm.js

import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      amount,
      category,
      date,
    };
    onAddTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
 