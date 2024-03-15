import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { render, screen } from "@testing-library/vue";
import LandingPage from "@/pages/LandingPage.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Landing page test suite", () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("should render correctly", async () => {
        const wrapper = mount(LandingPage);
        expect(wrapper.text()).toContain("Your Personalized Path To Better Health Starts Here")
    });
});