import { defineStore } from "pinia";
import { auth, userRef } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDocs, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import type { UserData } from "@/interfacesTypes/user";
import { useAuth } from "@vueuse/firebase";
import { useToast } from "vue-toastification";

const { isAuthenticated, user } = useAuth(auth);

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: isAuthenticated,
    isAdmin: false,
    user: user,
    userData: <UserData>{},
    errors: {
      emailInUse: false,
      invalidCred: false,
    },
  }),
  getters: {},
  actions: {
    async init(): Promise<void> {
      try {
        onAuthStateChanged(auth, async (user) => {
          if (user?.email === "admin@gmail.com") {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }

          if (user) {
            const loggedInUserId = user.uid;
            const userDocRef = doc(userRef, loggedInUserId);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
              const userData = userDocSnapshot.data();
              this.userData = userData as UserData;
              console.log(this.userData)
            } else {
              console.log("No document was found for the logged in user");
            }
          } else {
            console.log("No logged-in user detected");
          }
        });
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    },

    capitalizeEachWord(str: string): string {
      return str
          .split(" ")
          .map(
            (word) => word.trim().charAt(0).toUpperCase() + word.trim().slice(1)
          )
          .join(" ");
    },

    async signup(name: string, email: string, password: string): Promise<void> {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCred.user;
        const username = this.capitalizeEachWord(name);
        // const snapshot = await addDoc(userRef, { username: username, email: user.email, uid: user.uid });
        // console.log(snapshot);
        await setDoc(doc(userRef, user.uid), {
          username: username,
          email: user.email,
        });
        const toast = useToast();
        toast.success("Sign up successful");
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    },

    async login(email: string, password: string): Promise<void> {
      try {
        const userCred = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const toast = useToast();
        toast.success("Logged in");
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    },

    async loginWithGoogle(): Promise<void> {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    },

    async logout(): Promise<void> {
      try {
        const userCred = await signOut(auth);
        // this.isAuthenticated = false;
        const toast = useToast();
        toast.success("Logged out");
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
    },
  },
});
