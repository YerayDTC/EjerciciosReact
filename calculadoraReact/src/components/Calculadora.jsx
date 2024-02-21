import { useState } from "react";
import Boton from "./Boton";
import "./Calculadora.css";

const Calculadora = () => {
  //se crea un estado que recibe un objeto con dos stri¡ng vacios
  const [data, setData] = useState({ operacion: "", resultado: "" });

  const escritura = (e) => {

    const valor = e.target.innerText;
    const esOperacion = valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '=';

    if (data.operacion.length >= 10) return; //limmita el maximo de digitos en el span de operacion
    if(valor === '+/-' && valor === data.operacion === '' ) return // si se pulsa la tecla +/- sin haber numeros escritos no se escribe esa tecla 

    setData({ ...data, operacion: `${data.operacion}` + e.target.innerText });
  };

  const eliminar = () => {
    setData({
      ...data,
      operacion: data.operacion.slice(0, data.operacion.length - 1),
    });
  };

  const limpiar = () => {
    setData({ operacion: "", resultado: ""  });
  }

  const resultado = () => {
    try {
       const resultado = eval(data.operacion); //eval evalua una expresion para obtener un resultado
       setData({ ...data, resultado });
    } catch (error) {
      setData({ ...data, operacion: "Error"});
    }
  }

  return (
    <main>
      <span className="resultado">{data.resultado}</span>
      <span className="display">{data.operacion}</span>

      {/*texto y clase son los parametros que recibe el componente boto.jsx */}
      <Boton texto="C" clase="gris" handleClick={limpiar}/>
      <Boton texto="+/-" clase="gris" handleClick={escritura}/>
      <Boton texto="%" clase="gris" handleClick={escritura}/>
      <Boton texto="/" clase="operacion" handleClick={escritura} />
      <Boton texto="7" clase="numero" handleClick={escritura} />
      <Boton texto="8" clase="numero" handleClick={escritura} />
      <Boton texto="9" clase="numero" handleClick={escritura} />
      <Boton texto="*" clase="operacion" handleClick={escritura} />
      <Boton texto="4" clase="numero" handleClick={escritura} />
      <Boton texto="5" clase="numero" handleClick={escritura} />
      <Boton texto="6" clase="numero" handleClick={escritura} />
      <Boton texto="-" clase="operacion" handleClick={escritura} />
      <Boton texto="1" clase="numero" handleClick={escritura} />
      <Boton texto="2" clase="numero" handleClick={escritura} />
      <Boton texto="3" clase="numero" handleClick={escritura} />
      <Boton texto="+" clase="operacion" handleClick={escritura} />
      <Boton texto="." clase="numero" handleClick={escritura}/>
      <Boton texto="0" clase="numero" handleClick={escritura} />
      <Boton texto=".&#x232B" clase="numero" handleClick={eliminar}/>
      <Boton texto="=" clase="operacion" handleClick={resultado}/>
    </main>
  );
};

export default Calculadora;
