class Juego{
    convertirCodigoSecreto(codigo)
    {
        var codigosecreto = codigo;
        if(this.contarCantidadDeDigitos(codigo) == 4)
        {
            codigosecreto = "****";
        }
        if(this.contarCantidadDeDigitos(codigo) == 5)
        {
            codigosecreto = "*****";
        }         
        if(this.contarCantidadDeDigitos(codigo) == 6)
        {
            codigosecreto = "******";
        }
        return codigosecreto;  
    }

    contarCantidadDeDigitos(codigo)
    {
        var cantidadDigitos = codigo.length;
        return cantidadDigitos;
    }
    CompararSiEsVaca(codigosecreto,codigoIntento)
    {
        var vaca = '*';
        if(codigosecreto.charAt(0) === codigoIntento.charAt(0))
        {
            vaca;
        }
        return vaca;
    }  
}



export default Juego;