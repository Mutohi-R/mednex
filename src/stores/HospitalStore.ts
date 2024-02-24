import { defineStore } from "pinia";
import { getDocs, addDoc } from "firebase/firestore";
import type { HospitalForm } from "@/interfacesTypes/hospitalForm";
import { hospitalRef } from "@/firebase/firebase";

const useHospitalStore = defineStore('hospital', {
    state: () => ({
        hospitals: <HospitalForm[]>[],
        renderedHospitals: <HospitalForm[]>[],
        // we use getters to get hospitals and we render over that, to get the filtered we use another getter
        locations: <string[]> [
            'All States', 'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Borno',
            'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo',
            'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
            'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
            'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
        ],
        searchQuery: <string>''
    }),
    getters: {
        getHospitals: (state) => {
            return state.hospitals
        },
        getSavedHospitals: (state) => {
            return state.renderedHospitals.filter((hospital) => {
                return hospital.isFavourite
            })
        }
    }, 
    actions: {
        async init() {
            const snapshot = await getDocs(hospitalRef)
            snapshot.forEach((doc) => {
                const hospitalData = <HospitalForm>{...doc.data(), id: doc.id, isFavourite: false}
                this.hospitals.push(hospitalData)
            })
            this.renderedHospitals = this.hospitals
            console.log(this.renderedHospitals)
        },

        async addHospital(hospital: HospitalForm) {
            const snapshot = await addDoc(hospitalRef, hospital)
        },

        getHospitalsByLocation (location: string) {
            if(location === 'All States') {
                this.renderedHospitals = this.hospitals
            } else {
                this.renderedHospitals = this.hospitals.filter((hospital) => {
                    return hospital.location.trim().toLowerCase() === location.trim().toLowerCase()
                })
            }
        },

        getHospitalsBySearchQuery (query: string, location: string) {
            if (location === 'All States' || location === undefined) {
                this.renderedHospitals = this.hospitals.filter((hospital) => {
                    return hospital.name.trim().toLowerCase().includes(query.trim().toLowerCase())
                })
            } else {
                this.renderedHospitals = this.hospitals.filter((hospital) => {
                    return hospital.name.trim().toLowerCase().includes(query.trim().toLowerCase()) && hospital.location.trim().toLowerCase() === location.trim().toLowerCase()
                })
            }
        },

        toggleFavourite(id: string) {
            const index = this.hospitals.findIndex((hospital) => {
                return hospital.id === id
            })
            this.hospitals[index].isFavourite = !this.hospitals[index].isFavourite
            this.renderedHospitals[index].isFavourite = this.hospitals[index].isFavourite
        }
    }
})

export default useHospitalStore