import { defineStore } from "pinia";
import { getDocs, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import type { HospitalForm } from "@/interfacesTypes/hospitalForm";
import { hospitalRef, storage } from "@/firebase/firebase";

const useHospitalStore = defineStore("hospital", {
  state: () => ({
    hospitals: <HospitalForm[]>[],
    renderedHospitals: <HospitalForm[]>[],
    downloadURL: <string>"",
    // we use getters to get hospitals and we render over that, to get the filtered we use another getter
    locations: <string[]>[
      "All States",
      "Abia",
      "Abuja",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
    searchQuery: <string>"",
  }),
  getters: {
    savedHospitals: (state): HospitalForm[] => {
      return state.renderedHospitals.filter((hospital) => {
        return hospital.isFavourite;
      });
    },

    hospitalsCount: (state): number => {
      return state.hospitals.length;
    },
  },
  actions: {
    async init(): Promise<void> {
      const snapshot = await getDocs(hospitalRef);
      snapshot.forEach((doc) => {
        const hospitalData = <HospitalForm>{
          ...doc.data(),
          id: doc.id,
          isFavourite: false,
          isExpanded: false,
        };
        this.hospitals.push(hospitalData);
      });
      this.renderedHospitals = this.hospitals;
      console.log(this.renderedHospitals);
    },

    async addHospital(hospital: HospitalForm): Promise<void> {
      const snapshot = await addDoc(hospitalRef, hospital);
    },

    getHospitalsByLocation(location: string): void {
      if (location === "All States") {
        this.renderedHospitals = this.hospitals;
      } else {
        this.renderedHospitals = this.hospitals.filter((hospital) => {
          return (
            hospital.location.trim().toLowerCase() ===
            location.trim().toLowerCase()
          );
        });
      }
    },

    getHospitalsBySearchQuery(query: string, location: string): void {
      if (location === "All States" || location === undefined) {
        this.renderedHospitals = this.hospitals.filter((hospital) => {
          return hospital.name
            .trim()
            .toLowerCase()
            .includes(query.trim().toLowerCase());
        });
      } else {
        this.renderedHospitals = this.hospitals.filter((hospital) => {
          return (
            hospital.name
              .trim()
              .toLowerCase()
              .includes(query.trim().toLowerCase()) &&
            hospital.location.trim().toLowerCase() ===
              location.trim().toLowerCase()
          );
        });
      }
    },

    toggleFavourite(id: string): void {
      const index = this.hospitals.findIndex((hospital) => {
        return hospital.id === id;
      });
      this.hospitals[index].isFavourite = !this.hospitals[index].isFavourite;
      this.renderedHospitals[index].isFavourite =
        this.hospitals[index].isFavourite;
    },

    toggleIsExpanded(id: string): void {
      const index = this.hospitals.findIndex((hospital) => {
        return hospital.id === id;
      });
      this.hospitals[index].isExpanded = !this.hospitals[index].isExpanded;
      this.renderedHospitals[index].isExpanded =
        this.hospitals[index].isExpanded;
    },

    async exportHospitals(hospitals: HospitalForm[]) {
      const fileName = `hospitals-${uuidv4()}.csv`;

      let csvContent = "Hospital Name, Address, Phone Number, Website, Email";

      hospitals.forEach((hospital) => {
        const name = `"${hospital.name.replace(/"/g, '""')}"`;
        const address = `"${hospital.address.replace(/"/g, '""')}"`;
        const telephone = `"${hospital.telephone.replace(/"/g, '""')}"`;
        const website = `"${hospital.website.replace(/"/g, '""')}"`;
        const email = `"${hospital.email.replace(/"/g, '""')}"`;
        csvContent += `\n${name}, ${address}, ${telephone}, ${website}, ${email}`;
      });

      const blob = new Blob([csvContent], { type: "text/csv" });

      const hospitalCSVRef = ref(storage, `hospitals-csv/${fileName}`);

      try {
        const snapshot = await uploadBytes(hospitalCSVRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        this.downloadURL = downloadURL
        console.log('file has been uploaded', downloadURL)
        setTimeout(async () => {
          try {
            await deleteObject(hospitalCSVRef);
          } catch (err) {
            console.log(err);
          }
        }, 30000);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default useHospitalStore;
