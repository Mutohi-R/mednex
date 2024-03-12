import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import LandingPage from "@/pages/LandingPage.vue";
import { createPinia, setActivePinia } from "pinia";

describe("LandingPage", () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("should render correctly", () => {
        const wrapper = mount(LandingPage);
        expect(wrapper.text()).toContain("Discover healthcare near you")
    });
});