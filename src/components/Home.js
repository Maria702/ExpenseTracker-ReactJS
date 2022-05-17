import { useEffect, useState } from "react";
import styled from "styled-components";
import Transaction from "./Transaction";
import { View } from "./View";


const Container = styled.div`
display: flex;
flex-direction: column;
font-family: 'Tapestry', cursive;
margin: 30px 0 10px;
align-items: center;

`;

const HomePage = (props) => {
    const [transaction, setTransaction] = useState([]);
    const [expanse, setExpense] = useState(0);
    const [income, setIcome] = useState(0);

    const addTransaction = (payload) => {
        const transactionArray = [...transaction];
        transactionArray.push(payload);
        setTransaction(transactionArray);
    }

    const CalAmount = () => {
        let expns = 0;
        let inc = 0;
        transaction.map((payload) => {
            payload.type === 'expense'
                ? (expns = expns + payload.Amount)
                : (inc = inc + payload.Amount);
        });
        setExpense(expns);
        setIcome(inc);
    }

    useEffect(() => CalAmount(), [transaction])

    return (
        <>
            <Container>
                <View addTransaction={addTransaction} expanse={expanse} income={income} />
                <Transaction transaction={transaction} />
            </Container>

        </>
    )
}

export default HomePage