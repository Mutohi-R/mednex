import { defineStore } from "pinia";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "@vueuse/firebase";
import { useToast } from "vue-toastification";

const { isAuthenticated, user } = useAuth(auth);

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: isAuthenticated,
    isAdmin: false,
    user: user,
    errors: {
      emailInUse: false,
      invalidCred: false,
    },
  }),
  getters: {},
  actions: {
    async init(): Promise<void> {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user?.email === "admin@gmail.com") {
            this.isAdmin = true;
            // console.log('admin',this.isAdmin);
            // this.isAuthenticated = true;
            // console.log('auth',this.isAuthenticated);
          } else {
            // console.log('No user', user);
            this.isAdmin = false;
            // console.log('admin',this.isAdmin);
            // this.isAuthenticated = false;
            // console.log('auth',this.isAuthenticated);
          }
        });
      } catch (err) {
        if (err instanceof Error) {
          console.error(err);
        }
      }
      // console.log('working')
      // console.log(this.isAdmin)
    },

    async signup(email: string, password: string): Promise<void> {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
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
