import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 20px;
width: 100%;
gap: 10px;
font-size: 20px;
font-weight: bold;
& input{
    width: 100%;
    padding : 10px 20px;
    border: 1px solid grey;
    border-radius: 20px;
}
& input:focus{
    border: 2px solid purple;

}
& input:hover{
    border: 2px solid green;
}
`;

const Cell = styled.div`
display: flex;
flex-direction: row;
padding: 10px 15px;
width: 100%;
border-radius: 10px;
border: 1px solid #e6e6e6;
align-items: center;
font-weight: normal;
justify-content: space-between;
border-right: 10px solid ${
    (props)=> (
        props.isExp ? 'red': 'green'
    )
}
`;
const TransactionCell = (props) => {
    return (
        <Cell isExp={props.payload?.type === 'expense'}>
            <span>
                {props.payload.dec}
            </span>
            <span>
                {props.payload.Amount}
            </span>
        </Cell>
    )


}
const Transaction = (props) => {
    
    return (
        <>
            <Container>
                Transaction
                <input placeholder="Search" />
                {
                    props.transaction?.length ? props.transaction.map((payload) =>
                        <TransactionCell payload={payload} />

                    ) : "No Transactions"
                }
            </Container>
        </>
    )
}

export default Transaction