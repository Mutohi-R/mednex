import { defineStore } from "pinia";
import { auth } from "../firebase";
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
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        },

        async login(email: string, password: string): Promise<void> {
            try {
                await signInWithEmailAndPassword(auth, email, password);
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
                await signOut(auth);
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        }
    }
})