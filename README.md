# 🏋️‍ Actividad de Condicionales JavaScript (solo `if / else / else if / switch`)


## 🧩 Ejercicios (solo condicionales)

### 1️⃣ Par o Impar  
**Archivo:** `src/ejercicio1.js`  
Declara la variable `numero = 7;`.  
Imprime `"par"` o `"impar"` según corresponda.

---

### 2️⃣ Mayor de dos números  
**Archivo:** `src/ejercicio2.js`  
Declara `a = 14` y `b = 9`.  
Imprime el mayor de ambos.

---

### 3️⃣ Clasificación de edad  
**Archivo:** `src/ejercicio3.js`  
Declara `edad = 15`.  
Imprime:  
- `"niño"` si es 0-12  
- `"adolescente"` si es 13-17  
- `"adulto"` si es 18-64  
- `"anciano"` si es 65 o más

---

### 4️⃣ Calculadora básica con switch  
**Archivo:** `src/ejercicio4.js`  
Declara:  
```js
let a = 10;
let b = 3;
let operador = '*';   // puede ser + - * /
```
Imprime el resultado o `"operador no válido"`.  
Si `b === 0` y `operador === '/'` imprime `"indeterminado"`.

---

### 5️⃣ Día laborable o fin de semana  
**Archivo:** `src/ejercicio5.js`  
Declara `dia = 'sabado';`.  
Imprime `"laborable"` para lunes-viernes y `"fin de semana"` para sábado o domingo.

---

### 6️⃣ Nota a letra  
**Archivo:** `src/ejercicio6.js`  
Declara `nota = 83`.  
Convierte la nota numérica (0-100) a letra e imprímela:  
- 90-100 → `"A"`  
- 80-89  → `"B"`  
- 70-79  → `"C"`  
- 60-69  → `"D"`  
- < 60   → `"F"`

---

### 7️⃣ Descuento por volumen  
**Archivo:** `src/ejercicio7.js`  
Declara:  
```js
let precioUnitario = 25;
let cantidad = 60;
let precioFinal;
```
Aplica descuento sobre el total:  
- 0 % si cantidad < 10  
- 10 % si 10 ≤ cantidad < 50  
- 20 % si cantidad ≥ 50  
Imprime `precioFinal` redondeado a 2 decimales.

---

### 8️⃣ Transporte con tarifa reducida  
**Archivo:** `src/ejercicio8.js`  
Declara:  
```js
let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
```
Aplica:  
- 20 % descuento si edad < 18  
- 40 % descuento si edad ≥ 65  
Imprime el precio final redondeado a 2 decimales.

---

### 9️⃣ Conversor de notas musicales (switch)  
**Archivo:** `src/ejercicio9.js`  
Declara `nota = 'LA';`.  
Imprime el número MIDI correspondiente:  
- DO → 60  
- RE → 62  
- MI → 64  
- FA → 65  
- SOL → 67  
- LA → 69  
- SI → 71  
Cualquier otro valor → `"nota desconocida"`

---

### 🔟 Autenticación simple  
**Archivo:** `src/ejercicio10.js`  
Declara:  
```js
let usuario = "admin";
let contrasena = "1234";
```
Imprime:  
- `"acceso concedido"` si coincide exactamente  
- `"acceso denegado"` en cualquier otro caso