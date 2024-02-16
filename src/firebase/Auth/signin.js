import app from "../firebase_config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(app);
export const signin = async (email, password) => {
    let user = null;
    let error = null;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;

    } catch (e) {
        error = e
    }
    return { user, error }
}