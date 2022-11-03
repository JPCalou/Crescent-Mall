import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { CartContext } from "../Contextos/CartContext";

export function DetalleDeCompra({ close, open, orderId, fechaActualizada }) {
  const { precioTotal } = useContext(CartContext);

  return (
    <>
      <Modal show={open} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Puedes retirar tu compra con los siguientes datos:</h5>

          <div>
            <h6>Fecha:</h6>
            <p>{fechaActualizada}</p>
            <h6>Importe:</h6>
            <p>$ {precioTotal}</p>
            <h6>Nro de Orden: </h6>
            <p>${orderId}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
