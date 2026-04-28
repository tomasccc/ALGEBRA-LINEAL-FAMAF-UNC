## **Teorema**. Sea $V$ un $K$-espacio vectorial y sean $v_1, \ldots, v_n \in V$. 
Entonces el conjunto de combinaciones lineales de $v_1, \ldots, v_n$,
$$ W = \{\lambda_1 v_1 + \ldots + \lambda_n v_n : \lambda_1, \ldots, \lambda_n \in K\} $$
es un subespacio vectorial de $V$.

**Demostración**. Sean $v, w \in W$. Entonces
$$v = \lambda_1 v_1 + \ldots + \lambda_n v_n, \quad w = \mu_1 v_1 + \ldots + \mu_n v_n.$$
Si $c \in K$, entonces
$$cv + w = (c\lambda_1 + \mu_1)v_1 + \ldots + (c\lambda_n + \mu_n)v_n.$$
Por lo tanto,
$$cv + w \in W. \quad \square$$
****
Si un ejercicio pide: _"Demuestra que el conjunto $W$ es un subespacio"_, y logramos reescribir la fórmula de $W$ para que se vea como una suma de vectores multiplicados por parámetros $λ$, podríamos decir: **"Por el Teorema de las Combinaciones Lineales, esto es un subespacio".** Ahorrándonos tener que probar la suma, la multiplicación y el vector nulo a mano.
****
#### **Definición**. Sea $S$ un conjunto de vectores de un espacio vectorial $V$. 
El **espacio** **generado** por $S$ es el conjunto de todas las combinaciones lineales de elementos de $S$, y se denota por$$ \langle S \rangle = \left\{ \sum_{i=1}^{n} a_i v_i : v_i \in S, a_i \in K, n \in \mathbb{N} \right\}. $$Si $S = \{v_1, \ldots, v_n\}$,
entonces
$$ \langle S \rangle = \{a_1 v_1 + \ldots + a_n v_n : a_i \in K\}. $$
adjuntar ejemplos...
****
