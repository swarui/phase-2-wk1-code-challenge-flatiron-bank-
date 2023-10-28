import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransactions] = useState([]);

  // Fetch initial data from localStorage when the component mounts.
  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    if (storedTransactions.length === 0) {
      //  Fetch data from API (http://localhost:8001/transactions)
      fetch("http://localhost:8001/transactions")
        .then((response) => response.json())
        .then((data) => {
          // Assign unique IDs using uuid
          const transactionsWithIds = data.map((transaction) => ({
            ...transaction,
            id: uuidv4(),
          }));
       