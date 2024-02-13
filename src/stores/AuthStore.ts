import { defineStore } from "pinia";
import { auth } from "@/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useToast } from "vue-toastification";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        errors: {
            emailInUse: false,
            invalidCred: false,
        }
    }),
    getters: {
        
    },
    actions: {
        init(): void {
            try {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        this.isAuthenticated = true;
                        console.log('auth',this.isAuthenticated);
                    } else {
                        console.log('No user', user);
                        this.isAuthenticated = false;
                        console.log('auth',this.isAuthenticated);
                    }
                })
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        },

        async signup(email: string, password: string): Promise<void> {
            try {
                const userCred = await createUserWithEmailAndPassword(auth, email, password);
                const toast = useToast()
                toast.success('Sign up successful')
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        },

        async login(email: string, password: string): Promise<void> {
            try {
                const userCred = await signInWithEmailAndPassword(auth, email, password);
                const toast = useToast()
                toast.success('Logged in')
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
                const toast = useToast()
                toast.success('Logged out')
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        }
    }
})