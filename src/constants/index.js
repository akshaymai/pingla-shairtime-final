import PassKeyStep from "../Container/PassKeyStep";
import PaymentStep from "../Container/PaymentStep";
import PersonalStep from '../Container/PersonalDetails'
import ContractDetails from '../Container/ContractDetails'
export const AuthSteps = [
    {
        title:'Login',
        content:<PersonalStep/>
    },
    {
        title:'Verification',
        content:<PassKeyStep/>
    },
    {
        title:'Contract',
        content:<ContractDetails/>
    },
    {
        title:'Payment',
        content:<PaymentStep/>
    }
]