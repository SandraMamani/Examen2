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
        for(var i = 0; i < codigosecreto.length; i++)
        {
            for(var j = 0; j < codigoIntento.length; j++)
            {
                if(codigosecreto[i] == codigoIntento[j])
                {
                    vaca;
                }
            }
        }
        return vaca;
    }  

}



export default Juego;