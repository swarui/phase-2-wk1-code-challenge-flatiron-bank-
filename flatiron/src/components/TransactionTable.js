import React from "react";

const TransactionTable = ({ transactions, searchTerm, onDeleteTransaction, onSort}) =>{
    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) 
    );