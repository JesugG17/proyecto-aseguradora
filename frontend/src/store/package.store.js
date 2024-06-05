import { reactive } from "vue";


const store = reactive({
  selectedPackage: null,
  setSelectedPackage(selectedPackage) {
    this.selectedPackage = selectedPackage;
  }
});

export const usePackageStore = () => store;