import { httpClient } from "../httpClient";

export const getServicesByPackage = async(packageId) => {
  const { data } = await httpClient.get(`/services/get-by-package/${packageId}`);

  if (!data.ok) {
    return null;
  }

  const packageInfo = {
    ...data.data.packageInfo,
    services: [...data.data.services] 
  };

  return packageInfo;
}