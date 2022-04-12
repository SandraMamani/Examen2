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
        let vaca = '*';
        let cadenaVacas = '';
        for(var j = 0; j <codigosecreto.length; j++)
        {
            for(var i = 0; i < codigoIntento.length; i++)
            {
                if(codigoIntento.charAt(i) === codigosecreto.charAt(j))
                {
                    if (i != j)
                    {
                        cadenaVacas += vaca;
                    }
                    
                }
            }
        }       
        return cadenaVacas;
    }  
    CompararSiEsToro(codigosecreto,codigoIntento)
    {
        let toro = '!';
        let cadenaToros = '';
        for (var i =0; i < codigoIntento.length; i++)
        {
            if (codigoIntento.charAt(i) === codigosecreto.charAt(i))
            {
                cadenaToros += toro;
            }
        }
       return cadenaToros;
    }  

    juegoToroVaca(codigosecreto,codigoIntento)
    {
         let cadToros=this.CompararSiEsToro(codigosecreto,codigoIntento);
         let cadVacas= this.CompararSiEsVaca(codigosecreto,codigoIntento);   
         let CadToroVaca=cadToros.concat(cadVacas);
         return CadToroVaca;
    }

    


}

export default Juego;