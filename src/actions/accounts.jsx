import uuid from 'uuid';

//ADD-ACCOUNT
export const addAccount = (
    { 
        amount = 0, 
        accountType = '', 
        password = '', 
        name = '',
        gender='',
        depositAmount= 0,
        withdrawAmount= 0,
        totalDeposits=0,
        totalWithdraw=0
    } = { }
) => ({
    type: 'ADD-ACCOUNT',
    account: {
        id: uuid(),
        amount,
        accountType,
        password,
        name,
        gender,
        depositAmount,
        withdrawAmount,
        totalDeposits,
        totalWithdraw
    }
});


//REMOVE-ACCOUNT
export const removeAccount = ({id} = {}) => ({
    type: 'REMOVE-ACCOUNT',
    id
});

//EDIT-ACCOUNT
export const editAccount = (id, updates) => ({
    type: 'EDIT-ACCOUNT',
    id,
    updates
});



// export const editAccount = (id, updates) => {
//     console.log(id);
//     console.log("from Action",updates);
//     return({
//     type: 'EDIT-ACCOUNT',
//     id,
//     updates
// })
// };