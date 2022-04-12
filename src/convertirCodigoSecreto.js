class Juego{
    constructor()
    {
        this.intentos = 10;
    }
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
    compararCadenas(cadena1,cadena2,pos1,pos2)
    {
        var resp = false;
        if(cadena1.charAt(pos1) === cadena2.charAt(pos2))
        {
            resp =true;
        }
        return resp;
    }
    
    CompararSiEsVaca(codigosecreto,codigoIntento)
    {
        let vaca = '*';
        let cadenaVacas = '';
        for(var j = 0; j <codigosecreto.length; j++)
        {
            for(var i = 0; i < codigoIntento.length; i++)
            {
                if(this.compararCadenas(codigosecreto,codigoIntento,i,j) == true)
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
            if (this.compararCadenas(codigosecreto,codigoIntento,i,i) == true)
            {
                cadenaToros += toro;
            }
        }
       return cadenaToros;
    }  
    juegoToroVaca(codigosecreto,codigoIntento)
    {
      let cadToros =this.CompararSiEsToro(codigosecreto,codigoIntento);
      let cadVacas = this.CompararSiEsVaca(codigosecreto,codigoIntento);   
      let CadToroVaca=cadToros.concat(cadVacas);
        
      return CadToroVaca;
    }
}

export default Juego;