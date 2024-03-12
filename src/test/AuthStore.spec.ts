import { setActivePinia, createPinia } from "pinia";
import { useAuthStore } from "@/stores/AuthStore";
import { it, describe, expect, beforeEach } from "vitest";

describe("AuthStore test suite", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("capitalizes each word", () => {
        const store = useAuthStore();
        const word = "hello from the other side";
        expect(store.capitalizeEachWord(word)).toBe("Hello From The Other Side");
    })

    it("should be an admin", () => {
        const store = useAuthStore();
        if (store.isAdmin) {
            expect(store.isAdmin).toBe(true);
        } else {
            expect(store.isAdmin).toBe(false);
        }
    })
})