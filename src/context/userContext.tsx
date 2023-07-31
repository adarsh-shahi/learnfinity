import { ReactElement, createContext, useReducer } from "react";

interface IUserType {
  email: string,
  name: string,
  picture: string

}

interface IStateType{
  user: IUserType
}

interface IactionType {
  type: "ADD_LOGIN_DATA" | "DELETE_LOGIN_DATA"
  payload?: any
}

interface IUserContextType{
  state: IStateType,
  dispatch: (action: IactionType) => void
}


export const UserContext = createContext<null | IUserContextType>(null);


const reducer = (state: IStateType, action: IactionType) => {
  console.log("In reducer");

	switch (action.type) {
		case "ADD_LOGIN_DATA":
			return { user: action.payload };

		case "DELETE_LOGIN_DATA":
			return { user: {email: "", picture: "", name: ""} };
		default:
			throw new Error("unhandled action type");
	}
}

const initialValue: IStateType = {
  user: {
    email: "",
    picture: "",
    name: ""
  }
}

export default function Provider({children}: {children: ReactElement}){

  const [state, dispatch] = useReducer(reducer, initialValue);
  const userJSON = localStorage.getItem("userDetails");
  if(userJSON ){
    const userData = JSON.parse(userJSON);
    state.user = userData
  }



  return <UserContext.Provider value={{state, dispatch}}>{children}</UserContext.Provider>

}
