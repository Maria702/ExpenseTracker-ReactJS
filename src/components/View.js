import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
font-family: 'Tapestry', cursive;
margin: 10px;
align-items: center;
`
const Balance = styled.div`
color: purple;
font-size: 20px;
width: 100%;
font-weight: bold;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
`

const AddButton = styled.button`
background-color: black;
color: white;
border-radius: 50px;
padding: 5px 15px;
cursor: pointer;
`

const AddButtonContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 20px;
padding : 15px 20px;
margin:20px;
border: 1px solid grey;
border-radius: 20px;
& input{
    outline: none;
    padding : 10px 12px;
    border-radius: 20px;
    border: 2px solid grey;
}
& input:focus{
    border: 2px solid purple;

}
& input:hover{
    border: 2px solid green;
}

`
const RadioBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-item: center;
gap: 2px;
& input{
    margin: 0 10px;
    outline: none;
    cursor: pointer;

}
`

const AddTransactionButton = styled.button`
background-color: black;
color: white;
border-radius: 50px;
padding: 5px 15px;
cursor: pointer;
`

const ExpContainer = styled.div`
display: flex;
flex-direction: row;
gap = 12px;
margin = 20px;
    
`
const ExpBox = styled.div`
display: flex;
flex-direction:column;
border-radius: 10px;
border: 1px solid grey;
padding: 15px 15px;
margin: 5px;
width: 135px;
& span{
font-weight: bold;
color: ${props => props.isIncome ? 'green' : 'red'}};
}
`
const IncomeBox = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
border: 1px solid grey;
padding: 15px 15px;
margin: 5px;
width: 135px;
& span{
    font-weight: bold;
    color: ${props => props.isIncome ? 'green' : 'red'}};
    }
`
const AddTrans = (props) => {
    const [Amount, setAmount] = useState();
    const [dec, setDec] = useState();
    const [type, setType] = useState('income');

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleDec = (e) => {
        setDec(e.target.value);
    }
    const HandleRadioIncome = (e) => {
        setType(e.target.value)
    }
    const HandleRadioExp = (e) => {
        setType(e.target.value)
    }

    const HandleAddTransaction = () => {
        if ( dec && Amount === null)    {
            alert('Please enter the amount')
        }
        else if (dec && Amount) {
        props.addTransaction(
            {
                Amount: Number(Amount),
                dec,
                type,
                id: Date.now()
            })
        console.log({ Amount, dec, type })
        props.setAddVal()
       
    }
}


    return (<AddButtonContainer>
        <input type='number' placeholder='Amount'  value={Amount}  onChange={handleAmount}  />
        <input type='text' placeholder='Description' value={dec} onChange={handleDec} />
        <RadioBox>
            <input type='radio' name='type' value='income' checked={type === 'income'} onChange={HandleRadioIncome} required/>
            <label htmlFor="exampleInputEmail1" className="form-label">Income</label>
            <input type='radio' name='type' value='expense' checked={type === 'expense'} onChange={HandleRadioExp} required/>
            <label htmlFor="exampleInputEmail1" className="form-label">Expense</label>
        </RadioBox>
        <AddTransactionButton onClick={HandleAddTransaction}>
            Add Transaction
        </AddTransactionButton>
    </AddButtonContainer>)
}



export const View = (props) => {
    const [AddVal, setAddVal] = useState(false)
    const HandleAdd = () => {
        setAddVal(!AddVal)
    }
    return (
        <>
            <Container>
                <Balance>
                    Balance : $ {props.income - props.expanse}
                    <AddButton onClick={HandleAdd}>
                        {AddVal ? 'cancel' : 'Add'}
                    </AddButton>
                </Balance>

                {AddVal && <AddTrans
                    setAddVal={setAddVal}
                    addTransaction={props.addTransaction}
                />}

                <ExpContainer>
                    <ExpBox isIncome={false}>
                        Expense <span> $ {props.expanse}</span>
                    </ExpBox>
                    <IncomeBox isIncome={true}>
                        Income <span> $ {props.income}</span>
                    </IncomeBox>
                </ExpContainer>
            </Container>
        </>
    )
}
