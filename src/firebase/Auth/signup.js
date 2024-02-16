import app from "../firebase_config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(app);
export const signup = async (email, password) => {
    let user = null;
    let error = null;
    try {
        user = await createUserWithEmailAndPassword(auth, email, password);

    } catch (e) {
        error = e
    }
    return { user, error }
}