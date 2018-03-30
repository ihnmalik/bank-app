

// Bank Reducer

const bankDefaultState = []

export default (state = bankDefaultState, action) => {
    switch (action.type) {
        case 'ADD-ACCOUNT':
        action.account.totalDeposits = action.account.amount
            return [
                ...state,
                action.account,
            ];
        case 'REMOVE-ACCOUNT':
            return state.filter((account)=> account.id !== action.id );
        case 'EDIT-ACCOUNT':
        return state.map((account)=>{
                if(account.id === action.id){
                    if(action.updates.withdrawAmount){
                        account.amount= account.amount - action.updates.withdrawAmount;
                        account.totalWithdraw = account.totalWithdraw + action.updates.withdrawAmount;
                    }
                    else if(action.updates.depositAmount){
                        account.totalDeposits= account.totalDeposits + action.updates.depositAmount
                        account.amount= account.amount + action.updates.depositAmount
                    }
                    return {
                        ...account,
                        ...action.updates,
                    };
                } else {
                    return account;
                }
            })
        default:
            return state;
    }
}

