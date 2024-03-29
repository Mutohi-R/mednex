import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import Hospitals from "@/pages/Hospitals.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Hospitals page test suite", () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("should render correctly", async () => {
        const wrapper = mount(Hospitals);
        expect(wrapper.text()).toContain("Discover healthcare near you")
    });
});
