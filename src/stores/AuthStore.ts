import { defineStore } from "pinia";
import { auth } from "@/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        
    }),
    getters: {
        
    },
    actions: {
        init(): void {
            try {

            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        },

        async signup(email: string, password: string): Promise<void> {
            try {
                const userCred = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCred);
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        },

        async login(email: string, password: string): Promise<void> {
            try {
                const userCred = await signInWithEmailAndPassword(auth, email, password);
                console.log(userCred)
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
                console.log(userCred)
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        }
    }
})