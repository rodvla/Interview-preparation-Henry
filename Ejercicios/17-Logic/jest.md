#### Palabras Clave Principales:

1.  **`describe(name, fn)`**:

      * **Propósito:** Agrupa un conjunto de pruebas relacionadas. Ayuda a organizar tu código de prueba y hace que la salida de la consola sea más legible. Puedes anidar `describe` bloques para una organización más granular.
      * **Ejemplo:** `describe('Testing my Calculator', () => { ... });`

2.  **`test(name, fn)`** (o su alias **`it(name, fn)`**):

      * **Propósito:** Define un caso de prueba individual. Dentro de la función `fn`, es donde escribes la lógica de tu prueba usando `expect` y matchers.
      * **Ejemplo:** `test('should add two numbers', () => { ... });`

3.  **`expect(value)`**:

      * **Propósito:** Es el punto de partida para una aserción. Envuelve el valor que deseas probar.
      * **Ejemplo:** `expect(myFunction(param1)).toBe(expectedValue);`

4.  **`toBe(expected)`**:

      * **Propósito:** Un "matcher" para igualdad estricta. Compara valores primitivos (números, strings, booleanos, null, undefined) usando `===`.
      * **Ejemplo:** `expect(1 + 1).toBe(2);`

5.  **`toEqual(expected)`**:

      * **Propósito:** Un "matcher" para igualdad de valor. Se usa para comparar objetos o arrays recursivamente. Compara las propiedades de los objetos o los elementos de los arrays, no la referencia en memoria.
      * **Ejemplo:** `expect({a: 1}).toEqual({a: 1});`

6.  **`not`**:

      * **Propósito:** Un modificador que niega cualquier matcher que le siga.
      * **Ejemplo:** `expect(value).not.toBe(false);`

-----

#### Otros Matchers Comunes:

  * **`toBeTruthy()` / `toBeFalsy()`**: Para verificar si un valor es verdadero/falso en un contexto booleano (truthy/falsy).
      * Ej: `expect('hello').toBeTruthy();` `expect(0).toBeFalsy();`
  * **`toBeNull()`**: Para verificar si un valor es `null`.
      * Ej: `expect(null).toBeNull();`
  * **`toBeUndefined()`**: Para verificar si un valor es `undefined`.
      * Ej: `expect(undefined).toBeUndefined();`
  * **`toBeDefined()`**: Para verificar si un valor no es `undefined`.
      * Ej: `expect(0).toBeDefined();`
  * **`toBeGreaterThan(number)` / `toBeGreaterThanOrEqual(number)`**: Para comparar números.
      * Ej: `expect(10).toBeGreaterThan(5);`
  * **`toBeLessThan(number)` / `toBeLessThanOrEqual(number)`**: Para comparar números.
      * Ej: `expect(5).toBeLessThan(10);`
  * **`toContain(item)`**: Para verificar si un array contiene un elemento.
      * Ej: `expect([1, 2, 3]).toContain(2);`
  * **`toMatch(regexp | string)`**: Para verificar si una cadena coincide con una expresión regular o subcadena.
      * Ej: `expect('hello world').toMatch(/world/);`
  * **`toThrow(error | string | regexp)`**: Para verificar si una función lanza un error.
      * Ej: `expect(() => myErrorFunction()).toThrow('Specific error message');`
  * **`toHaveBeenCalled()` / `toHaveBeenCalledTimes(number)` / `toHaveBeenCalledWith(arg1, arg2, ...)`**: Para probar funciones mockeadas (simuladas).
      * Ej: `expect(mockFunction).toHaveBeenCalled();`

-----

### Ejemplo: Ejecutar Algo Antes y Después de un Test

Jest proporciona funciones de *setup* y *teardown* (configuración y limpieza) que te permiten ejecutar código antes o después de cada prueba, o antes/después de un conjunto completo de pruebas. Esto es extremadamente útil para inicializar estados, configurar bases de datos, limpiar recursos, etc.

Las funciones clave son:

  * **`beforeEach(fn)`**: Ejecuta la función `fn` *antes de cada* `test` en el `describe` actual.
  * **`afterEach(fn)`**: Ejecuta la función `fn` *después de cada* `test` en el `describe` actual.
  * **`beforeAll(fn)`**: Ejecuta la función `fn` *una vez antes de todos los* `test` en el `describe` actual.
  * **`afterAll(fn)`**: Ejecuta la función `fn` *una vez después de todos los* `test` en el `describe` actual.

Vamos a ver un ejemplo práctico:

**Escenario:** Estamos probando una clase `User` que tiene un contador de instancias. Queremos asegurarnos de que el contador se reinicie para cada prueba individual o que se inicialice una vez para todo el conjunto.

**`user.js` (Tu archivo de código):**

```javascript
// user.js
class User {
  static count = 0; // Un contador estático para las instancias de User

  constructor(name) {
    this.name = name;
    User.count++; // Incrementa el contador cada vez que se crea un User
  }

  getName() {
    return this.name;
  }

  static getCount() {
    return User.count;
  }

  static resetCount() {
    User.count = 0; // Resetea el contador
  }
}

module.exports = User;
```

**`user.test.js` (Tu archivo de prueba):**

```javascript
// user.test.js
const User = require('./user');

// --- Bloque de pruebas para beforeEach y afterEach ---
describe('User Class with beforeEach/afterEach', () => {
  // beforeEach: Se ejecuta ANTES de cada 'test' en este describe
  beforeEach(() => {
    User.resetCount(); // Aseguramos que el contador siempre empiece en 0 para cada prueba
    console.log('  -> beforeEach: Contador de User reseteado.');
  });

  // afterEach: Se ejecuta DESPUÉS de cada 'test' en este describe
  afterEach(() => {
    console.log('  <- afterEach: Prueba individual finalizada.');
  });

  test('debería crear un usuario y el contador debería ser 1', () => {
    const user = new User('Alice');
    expect(user.getName()).toBe('Alice');
    expect(User.getCount()).toBe(1);
    console.log('    Test 1: Usuario creado, contador:', User.getCount());
  });

  test('debería crear otro usuario y el contador debería ser 1 de nuevo (por el beforeEach)', () => {
    const user = new User('Bob');
    expect(user.getName()).toBe('Bob');
    expect(User.getCount()).toBe(1); // Esperamos 1 porque beforeEach resetea antes de esta prueba
    console.log('    Test 2: Usuario creado, contador:', User.getCount());
  });
});

// --- Bloque de pruebas para beforeAll y afterAll ---
describe('User Class with beforeAll/afterAll', () => {
  // beforeAll: Se ejecuta UNA VEZ ANTES de todas las pruebas en este describe
  beforeAll(() => {
    User.resetCount(); // Solo reseteamos el contador una vez al inicio
    console.log('\n--> beforeAll: Contador de User reseteado UNA VEZ para este bloque.');
  });

  // afterAll: Se ejecuta UNA VEZ DESPUÉS de todas las pruebas en este describe
  afterAll(() => {
    console.log('<-- afterAll: Bloque de pruebas finalizado. Contador final:', User.getCount());
  });

  test('debería crear el primer usuario y el contador debería ser 1', () => {
    const user1 = new User('Carlos');
    expect(User.getCount()).toBe(1);
    console.log('    Test A: Usuario creado, contador:', User.getCount());
  });

  test('debería crear el segundo usuario y el contador debería ser 2', () => {
    const user2 = new User('Diana');
    expect(User.getCount()).toBe(2); // El contador NO se resetea entre pruebas aquí
    console.log('    Test B: Usuario creado, contador:', User.getCount());
  });

  test('debería crear el tercer usuario y el contador debería ser 3', () => {
    const user3 = new User('Elena');
    expect(User.getCount()).toBe(3);
    console.log('    Test C: Usuario creado, contador:', User.getCount());
  });
});
```

**Para ejecutar estas pruebas:**
0. npm install --save-dev jest
1.  Guarda los archivos `user.js` y `user.test.js` en tu proyecto.
2.  Asegúrate de que Jest esté instalado y el script `test` en `package.json` apunte a `jest`.
3.  Ejecuta `npm test` (o `yarn test`) en tu terminal.

**Salida de la Consola (observa los logs):**

```
 PASS  ./user.test.js
  User Class with beforeEach/afterEach
    -> beforeEach: Contador de User reseteado.
    ✓ debería crear un usuario y el contador debería ser 1 (4 ms)
      Test 1: Usuario creado, contador: 1
    <- afterEach: Prueba individual finalizada.
    -> beforeEach: Contador de User reseteado.
    ✓ debería crear otro usuario y el contador debería ser 1 de nuevo (por el beforeEach) (1 ms)
      Test 2: Usuario creado, contador: 1
    <- afterEach: Prueba individual finalizada.

  User Class with beforeAll/afterAll

--> beforeAll: Contador de User reseteado UNA VEZ para este bloque.
    ✓ debería crear el primer usuario y el contador debería ser 1 (1 ms)
      Test A: Usuario creado, contador: 1
    ✓ debería crear el segundo usuario y el contador debería ser 2
      Test B: Usuario creado, contador: 2
    ✓ debería crear el tercer usuario y el contador debería ser 3
      Test C: Usuario creado, contador: 3
<-- afterAll: Bloque de pruebas finalizado. Contador final: 3

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.328 s, estimated 2 s
Ran all test suites.
```

**Análisis de la Salida:**

  * **`beforeEach/afterEach`:** Verás que "Contador de User reseteado" se imprime *antes de cada* `test` y "Prueba individual finalizada" se imprime *después de cada* `test`. Esto demuestra que el contador de `User.count` se reinicia para cada caso de prueba, asegurando que cada prueba sea independiente.
  * **`beforeAll/afterAll`:** Verás que "Contador de User reseteado UNA VEZ" se imprime *una sola vez al principio* de ese bloque `describe`. Luego, los contadores de las pruebas 'Test A', 'Test B' y 'Test C' se incrementan secuencialmente (1, 2, 3) porque el contador no se reinicia entre esas pruebas. Finalmente, "Bloque de pruebas finalizado" se imprime *una sola vez al final* de ese bloque `describe`.

Esta capacidad de configurar y limpiar el entorno de prueba es una de las características más poderosas de Jest, permitiendo escribir pruebas robustas y aisladas.