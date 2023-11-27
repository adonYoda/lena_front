const detectInputError = (errorCode: string): string => {
    switch (errorCode) {
        case "1000":
            return "no_basic_auth";
        case "1010":
            return "error_phone";
        case "1020":
            return "phone_not_exist";
        case "1030":
            return "wrong_password";
        case "1040":
            return "code_is_incorrect";
        case "1050":
            return "number_already_exist";
        case "1060":
            return "database_problems";
        case "1070":
            return "code_expired";
        case "1080":
            return "something_were_wrong";
        case "1090":
            return "user_not_found";
        case "1100":
            return "cannot_change_number_exist";
        case "1110":
            return "link_expired";
        case "1120":
            return "role_error";
        case "3000":
            return "database_timeot";
        default:
            return "";
    }
};

export default detectInputError;
