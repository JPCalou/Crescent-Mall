import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Nosotros.css'
import naturaleza from "../Imagenes/naturaleza.jpg"
import velas from "../Imagenes/velasMedianas2.jpg"
import difusor from "../Imagenes/difusorVarillas.jpg"

export function Nosotros() {
  return (
    <>
      <h1>Nosotros</h1>
      <section className="carrousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={naturaleza} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={velas} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={difusor} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <hr></hr>
      <p>
        Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
        demostraciones de tipografías o de borradores de diseño para probar el
        diseño visual antes de insertar el texto final. Aunque no posee
        actualmente fuentes para justificar sus hipótesis, el profesor de
        filología clásica Richard McClintock asegura que su uso se remonta a los
        impresores de comienzos del siglo xvi.1​ Su uso en algunos editores de
        texto muy conocidos en la actualidad ha dado al texto lorem ipsum nueva
        popularidad.
      </p>
      </section>
      <section>
        
      </section>
    </>
  );
}
