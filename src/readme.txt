HISTORIAS DE USUARIO.

1)
COMO
    Primer jugador.
QUIERO
    Ingresar un código secreto que conste de 4 a 6 dígitos.
PARA
    Que el segundo jugador trate de adivinar el código ingresado.

CRITERIOS DE CONFIRMACIÓN:
    El primer jugador podrá ingresar el código secreto en un cuadro de texto.
    El primer jugador puede presionar el botón de iniciar para que el segundo jugador adivine el código secreto.


2)
COMO
    Primer jugador.
QUIERO
    Que el código secreto no sea visible.
PARA
    Aumentar el grado de dificultad del segundo jugador.

CRITERIOS DE CONFIRMACIÓN:
    El código secreto ingresado en el cuadro de texto se verá con “****”.

3)
COMO
    Segundo jugador.
QUIERO
    Saber la cantidad de dígitos del código secreto.
PARA
    Tener una pista de la cantidad de dígitos del código que tengo que adivinar.

CRITERIOS DE CONFIRMACIÓN:
    Que muestre en pantalla la cantidad de dígitos del código secreto. 


4)
COMO
    Segundo Jugador 
QUIERO
    Saber cuántos intentos tengo disponibles
PARA
    Que el juego sea más interesante según los intentos disponibles.

CRITERIOS DE CONFIRMACIÓN:
    Se mostrará la cantidad de intentos que le queda al segundo jugador.


5)
COMO
    Segundo jugador.
QUIERO
     Escribir el primer intento del código secreto.
PARA
    Saber si adivina o no el código secreto.

CRITERIOS DE CONFIRMACIÓN:
    Al ingresar el primer intento y si este es fallido que me muestre “Intentar de nuevo”


6)
COMO
    Segundo jugador.
QUIERO
     Saber si la respuesta coincide con cualquier dígito del código secreto.
PARA
    Saber si es Vaca(coincidencias encontradas en digitos).

CRITERIOS DE CONFIRMACIÓN:
    Se mostrará un * las veces que un dígito coincida con el código secreto.


7)
COMO
    Segundo jugador.
QUIERO
    Saber si la respuesta coincide tanto en dígito como en posición.
PARA
    Saber si es Toro(coincidencias en dígito y posición).

CRITERIOS DE CONFIRMACIÓN:
    Valida si lo que ingresó el segundo jugador coincide con el mismo dígito y  la misma posición del dígito del código secreto.
    Se mostrará un “!” las veces que coincide en dígito y la posición.


8)
COMO
    Segundo jugador.
QUIERO
    Saber si el código ingresado es vaca y/o Toro 
PARA
    Tener  una pista más detallada adivinando si me acerco al código secreto.

CRITERIOS DE CONFIRMACIÓN:
    Válida si es toro y/o vaca.


9)
COMO
    Segundo Jugador
QUIERO
    Saber si perdi el juego
PARA
    volver a jugar. 

CRITERIOS DE CONFIRMACIÓN:
    Se mostrará una pantalla con un mensaje que diga que perdí el juego .
    El juego termina cuando el límite de intentos que es 10 llega a 0 si es que el segundo jugador no adivina el código secreto.



10)
COMO
    Segundo Jugador
QUIERO
    Ver el código secreto
PARA
     Saber qué tan cerca estuve de adivinar o no.

CRITERIOS DE CONFIRMACIÓN:
    Una vez que el segundo jugador perdió el juego se mostrará por pantalla el código secreto que debía adivinar.



11)
COMO
    Segundo Jugador
QUIERO
     Saber si gane el juego.
PARA
    volver a jugar o salir del juego.

CRITERIOS DE CONFIRMACIÓN:
    Se mostrará un mensaje que diga que ganó el juego.
    El segundo jugador gana el juego si adivina el código secreto.




HISTORIAS DE USUARIO EXTRAS:


12)
COMO
    Primer Jugador
QUIERO
    Saber si ingrese un código secreto válido.
PARA
    Poder iniciar el juego.

CRITERIOS DE CONFIRMACIÓN:
    Se mostrará un mensaje que diga que caracteres son válidos y volver a ingresar retornando un mensaje de “Código secreto no válido”.



13)
COMO
    Primer Jugador
QUIERO
    Saber si puedo ingresar letras.
PARA
    Poder iniciar el juego.

CRITERIOS DE CONFIRMACIÓN:
    El primer jugador debería poder ingresar letras.



14)
COMO
    Primer Jugador
QUIERO
    Poder colocar la cantidad de intentos disponibles.
PARA
    Que el segundo jugador tenga intentos.

CRITERIOS DE CONFIRMACIÓN:
    La cantidad de intentos por defecto son 10.
    El primer jugador puede colocar el límite de intentos.



15)
COMO
    Primer Jugador
QUIERO
    Poder jugar en solitario
PARA
    Que la computadora genere un código secreto y asi empezar el juego.

CRITERIOS DE CONFIRMACIÓN:
    Como primer jugador puede jugar en modo solitario para que la computadora genere un código secreto aleatorio y comenzar el juego.

