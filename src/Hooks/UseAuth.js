import {useContext} from "react";
import {AuthContext} from "../Hoc/AuthProvider";

export const useAuth = ()=> useContext(AuthContext)