import { UserData } from "../../utils/firebase/firebase.utils";
import { RootState } from "../store";

export const selectCurrentUser = (state: RootState): UserData | null => state.user.currentUser;