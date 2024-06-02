import { Package, Service, ServicePackage } from "../db/postgres/models";

export const seed = async() => {

  const allServices = await Service.find();
  const allPackages = await Package.find();
  const allServicesPackages = await ServicePackage.find();

  if (allServices.length === 0) {
    await fillServices();
    console.log('SERVICIOS CREADOS');
  }

  if (allPackages.length === 0) {
    await fillPackages();
    console.log('PAQUETES CREADOS');
  }

  if (allServicesPackages.length === 0) {
    const services = await Service.find();
    const packagesDb = await Package.find({
      order: {
        id: 'ASC'
      }
    });

    const basic = packagesDb.find(item => item.name === 'Basico');
    if (!basic) return;

    const intermediate = packagesDb.find(item => item.name === 'Intermedio');
    if (!intermediate) return;

    const premium = packagesDb.find(item => item.name === 'Premium');
    if (!premium) return;

    
    services.slice(0, 5).forEach(async(service) => {
      const newServicePackage = new ServicePackage();
      newServicePackage.service = service.id;
      newServicePackage.package = basic.id;
      await newServicePackage.save();
    });
    
    services.slice(0, 7).forEach(async(service) => {
      const newServicePackage = new ServicePackage();
      newServicePackage.service = service.id;
      newServicePackage.package = intermediate.id;
      await newServicePackage.save();
    });
    
    services.slice(0, services.length).forEach(async(service) => {
      const newServicePackage = new ServicePackage();
      newServicePackage.service = service.id;
      newServicePackage.package = premium.id;
      await newServicePackage.save();
    });
    
    console.log("SERVICIOS PAQUETES CREADOS");

  } 

}

const fillServices = async() => {
  services.forEach(async({ name, description }) => {
    const newService = new Service();
    newService.name = name;
    newService.description = description;
    await newService.save();
  });
}

const fillPackages = async() => {
  packages.forEach(async({ name, description, price }) => {
    const newPackage = new Package();
    newPackage.name = name;
    newPackage.description = description;
    newPackage.price = price;
    console.log(name);
    await newPackage.save();
  });
}

const packages = [
  { 
    name: 'Basico', 
    price: 5000, 
    description: 'Protección esencial para tu vehículo, cubriendo los requisitos mínimos de seguro y proporcionando una cobertura adecuada.' 
  },
  { 
    name: 'Intermedio', 
    price: 7500, 
    description: 'Cobertura ampliada que incluye protección contra daños adicionales y asistencia en carretera, proporcionando un balance entre precio y beneficios para una mayor tranquilidad.' 
  },
  { 
    name: 'Premium', 
    price: 10000, 
    description: 'Cobertura completa con beneficios exclusivos, incluyendo protección total contra todo tipo de daños, servicios de lujo y asistencia personalizada, garantizando la máxima seguridad para tu vehículo.' 
  }
];
const services = [
  {
    name: "Seguro de Responsabilidad Civil",
    description: "Cubre los daños materiales y lesiones corporales que el asegurado pueda causar a terceros en un accidente de tráfico. Es un seguro obligatorio en la mayoría de los países."
  },
  {
    name: "Cobertura de Daños Propios",
    description: "Cubre los daños causados al propio vehículo del asegurado, ya sea por accidente, vandalismo o desastres naturales. Incluye tanto la reparación como la sustitución del vehículo."
  },
  {
    name: "Seguro contra Robo y Hurto",
    description: "Cubre la pérdida total o parcial del vehículo en caso de robo o hurto, así como los daños causados durante el intento de robo."
  },
  {
    name: "Cobertura de Incendio",
    description: "Proporciona protección financiera en caso de que el vehículo sufra daños o sea destruido a causa de un incendio, ya sea accidental o provocado."
  },
  {
    name: "Asistencia en Carretera",
    description: "Ofrece ayuda en caso de avería o accidente, incluyendo servicios de remolque, cambio de neumáticos, suministro de combustible, y asistencia mecánica en el lugar."
  },
  {
    name: "Vehículo de Sustitución",
    description: "Proporciona un coche de sustitución mientras el vehículo del asegurado está en reparación debido a un accidente cubierto por la póliza."
  },
  {
    name: "Cobertura de Cristales",
    description: "Cubre los costos de reparación o sustitución de las lunas del vehículo en caso de rotura o daños."
  },
  {
    name: "Protección Legal",
    description: "Ofrece asesoramiento y representación legal en caso de disputas relacionadas con un accidente de tráfico, incluyendo defensa en juicios y reclamaciones por daños."
  },
  {
    name: "Seguro de Accidentes Personales",
    description: "Proporciona una compensación económica en caso de lesiones, discapacidad o muerte del conductor o los pasajeros del vehículo asegurado como resultado de un accidente."
  },
  {
    name: "Cobertura de Equipaje y Objetos Personales",
    description: "Cubre la pérdida o daños a los objetos personales y el equipaje que se encuentren dentro del vehículo en caso de accidente, robo o incendio."
  }
];
