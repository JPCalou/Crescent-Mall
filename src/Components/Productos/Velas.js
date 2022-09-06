import velasPequeñas from "../Imagenes/velasPequeñas.jpg";
import velasMedianas from "../Imagenes/velasMedianas.jpg";
import difusorVarillas from "../Imagenes/difusorVarillas.jpg";
import difusorVarillas2 from "../Imagenes/difusorVarillas2.jpg";
import perfumeAmbiente from "../Imagenes/perfumeAmbiente.jpeg";

export const velas = [
  {
    ID: "1",
    tipo: "Vela",
    fragancia: "Coco y limon",
    imagen: velasPequeñas,
    tamaño: "Pequeña",
    precio: "350",
    descripcion:
      "Velas de soja artesanales de 6cm, la combinacion del aroma a coco con el citrico del limon resulta ideal para llenar el ambiente con una escencia natural",
  },
  {
    ID: "2",
    tipo: "Vela",
    fragancia: "Coco y limon",
    imagen: velasMedianas,
    tamaño: "grande",
    precio: "500",
    descripcion:
      "Velas de soja artesanales de 12cm, la combinacion del aroma a coco con el citrico del limon resulta ideal para llenar el ambiente con una escencia natural",
  },
  {
    ID: "3",
    tipo: "Difusor",
    fragancia: "Lavanda",
    imagen: difusorVarillas,
    tamaño: "Pequeño",
    precio: "180",
    descripcion:
      "Difusor de varillas ideal para pequeños ambientes, crea un ambiente de armonia con aroma a Lavanda que equilibre tus energias",
  },
  {
    ID: "4",
    tipo: "Difusor",
    fragancia: "Vainilla",
    imagen: difusorVarillas2,
    tamaño: "Pequeña",
    precio: "200",
    descripcion:
      "Difusor de varillas ideal para pequeños ambientes, dale el toque sublime de dulzura con el aroma a Vainilla a ese ambiente que te acompaña durante el dia",
  },
  {
    ID: "5",
    tipo: "Aromatizador",
    fragancia: "Cafe y Canela",
    imagen: perfumeAmbiente,
    tamaño: "Mediano",
    precio: "650",
    descripcion:
      "Perfume de ambiente y textil de 350ml ideal para quitar malos olores o hacer que tu ropa genere una sensacion agradable al vestirla. Comenza la mañana con la energia del Cafe y un toque de Canela",
  },
  {
    ID: "6",
    tipo: "Aromatizador",
    fragancia: "Cafe y Canela",
    imagen: perfumeAmbiente,
    tamaño: "grande",
    precio: "800",
    descripcion:
      "Perfume de ambiente y textil de 500ml ideal para quitar malos olores o hacer que tu ropa genere una sensacion agradable al vestirla. Comenza la mañana con la energia del Cafe y un toque de Canela",
  },
];

export const getProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(velas);
    reject((error) => console.log("No se puedieron cargar las velas"));
  }, 2000);
});
