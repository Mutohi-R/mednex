import { defineStore } from "pinia";
import { getDocs, addDoc } from "firebase/firestore";
import type { HospitalForm } from "@/interfacesTypes/hospitalForm";
import { hospitalRef } from "@/firebase/firebase";

const useHospitalStore = defineStore('hospital', {
    state: () => ({
        hospitals: <HospitalForm[]>[],
        locations: <string[]> [
            'All', 'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Borno',
            'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo',
            'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
            'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
            'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
        ],
    }),
    getters: {
        
    }, 
    actions: {
        async init() {
            const snapshot = await getDocs(hospitalRef)
            snapshot.forEach((doc) => {
                const hospitalData = <HospitalForm>{...doc.data(), id: doc.id}
                this.hospitals.push(hospitalData)
            })
            console.log(this.hospitals)
        },

        async addHospital(hospital: HospitalForm) {
            const snapshot = await addDoc(hospitalRef, hospital)
        }
    }
})

export default useHospitalStore