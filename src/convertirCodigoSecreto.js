function convertirCodigoSecreto(codigo)
{
    var cantidadDigitos = codigo.length;
    if(cantidadDigitos == 4)
    {
        codigo = "****";
    }
    if(cantidadDigitos == 5)
    {
        codigo = "*****";
    }         
    if(cantidadDigitos == 6)
    {
        codigo = "******";
    }
    return codigo;    
}

export default convertirCodigoSecreto;