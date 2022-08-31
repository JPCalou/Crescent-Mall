import velasPequeñas from '../Imagenes/velasPequeñas.jpg';
import velasMedianas from '../Imagenes/velasMedianas.jpg';


 export const velas =[
  {
    ID: "1",
    fragancia: "Coco y limon",
    imagen: velasPequeñas,
    tamaño: "Pequeña",
    precio: "350",
    descripcion: "Velas de soja artesanales de 6cm, la combinacion del aroma a coco con el citrico del limon resulta ideal para llenar el ambiente con una escencia natural"
  },
  {
    ID: "2",
    fragancia: "Coco y limon",
    imagen: velasPequeñas,
    tamaño: "Pequeña",
    precio: "350"
  },
  {
    ID: "3",
    fragancia: "Coco y limon",
    imagen: velasPequeñas,
    tamaño: "Pequeña",
    precio: "350"
  },
  {
    ID: "4",
    fragancia: "Coco y limon",
    imagen: velasMedianas,
    tamaño: "Pequeña",
    precio: "350"
  },
  {
    ID: "5",
    fragancia: "Coco y limon",
    imagen: velasMedianas,
    tamaño: "Pequeña",
    precio: "350"
  },
  {
    ID: "6",
    fragancia: "Coco y limon",
    imagen: velasMedianas,
    tamaño: "Pequeña",
    precio: "350"
  },
]

export const getVelas = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(velas)
    reject(error=>console.log("No se puedieron cargar las velas"))
  },2000 )
})