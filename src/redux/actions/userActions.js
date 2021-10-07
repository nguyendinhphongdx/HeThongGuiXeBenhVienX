
import { UserConstants } from "../config/constant";

export const Login_Action = user => {
  return {
    type: UserConstants.ACTION_LOGIN,
    payload: user,
  };
};
export const SignUp_Action = data => {
  return {
    type: UserConstants.ACTION_SIGNUP,
    payload: data,
  };
};
export const QueryAll_User = data => {
  return {
    type: UserConstants.QUERY_ALL,
    payload: data,
  };
};
