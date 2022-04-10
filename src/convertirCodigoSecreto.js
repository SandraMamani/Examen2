function convertirCodigoSecreto(codigo)
{
    var cantidadDigitos = codigo.length;
    var codigosecreto = codigo;
    if(cantidadDigitos == 4)
    {
        codigosecreto = "****";
    }
    if(cantidadDigitos == 5)
    {
        codigosecreto = "*****";
    }         
    if(cantidadDigitos == 6)
    {
        codigosecreto = "******";
    }
    return codigosecreto;    
}

export default convertirCodigoSecreto;