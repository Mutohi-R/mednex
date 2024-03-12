import { setActivePinia, createPinia } from "pinia";
import useHospitalStore from "@/stores/HospitalStore";
import { it, describe, expect, beforeEach } from "vitest";

describe("HospitalStore test suite", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("returns amount of hospitals", () => {
        const store = useHospitalStore();
        store.hospitals.length = 10;
        expect(store.hospitalsCount).toBe(10);
    })
})