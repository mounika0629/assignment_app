
import {
    ON_CHANGE, ON_SUBMIT
} from '../action/actionType'


export default (state = {
    UserData: {}, Base: [{
        Address1: "102 , 5 th A Cross",
        Address2: "Vivekananda Street",
        City: "Hebbal",
        ConfirmPassword: "12345",
        Email: "ravi@gmail.com",
        Firstname: "Ravi",
        Lastname: "Kumar",
        MobileNumber: "9626237878",
        Password: "12345",
        UserName: "Ravi123",
        Zip: "560016",
        state: "Andra Pradesh"
    }, {
        Address1: "105 1st Cross",
        Address2: "Main Road",
        City: "Raja street",
        ConfirmPassword: "12345",
        Email: "mohan@gmail.com",
        Firstname: "Mohan",
        Lastname: "Raj",
        MobileNumber: "9655363637",
        Password: "12345",
        UserName: "Mohan123",
        Zip: "560016",
        state: "Karnataka"
    }]
}, action) => {
    switch (action.type) {
        case ON_CHANGE:
            let UserData = state.UserData;
            let Value = action.payload.value;
            switch (action.payload.name) {
                case 'UserName':
                    UserData.UserName = Value;
                    break;
                case 'Email':
                    UserData.Email = Value;
                    break;
                case 'Password':
                    UserData.Password = Value;
                    break;
                case 'ConfirmPassword':
                    UserData.ConfirmPassword = Value;
                    break;
                case 'Firstname':
                    UserData.Firstname = Value;
                    break;
                case 'Lastname':
                    UserData.Lastname = Value;
                    break;
                case 'Address1':
                    UserData.Address1 = Value;
                    break;
                case 'Address2':
                    UserData.Address2 = Value;
                    break;
                case 'MobileNumber':
                    UserData.MobileNumber = Value;
                    break;
                case 'City':
                    UserData.City = Value;
                    break;
                case 'Zip':
                    UserData.Zip = Value;
                    break;
                case 'state':
                    UserData.state = Value;
                    break;
                default:
                    UserData = state.UserData
            }
            state.UserData = UserData;
            return { ...state }
        case ON_SUBMIT:
            state.Base.push(state.UserData)
            return { ...state }
        default:
            return { ...state }
    }
}

