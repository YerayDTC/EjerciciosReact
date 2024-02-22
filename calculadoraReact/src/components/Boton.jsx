import './Boton.css'

const Boton = (params) => {
    const { texto, clase, handleClick } = params;

  return (
    <>
    {/*Recibe el parametro clase para identificar que boton es, el texto para ver el contenido visual,
      y el handleClick para las funcion de cada boton*/}
    <button className={clase} onClick={handleClick}>{texto}</button> 
    </>
  )
}

export default Boton