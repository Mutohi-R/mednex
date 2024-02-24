import { auth } from "@/firebase/firebase";
import { useAuth } from "@vueuse/firebase";
export const { isAuthenticated, user } = useAuth(auth);
