# Vistas de modulos del proyecto
EL propósito de este repositorio es practicar git y hacer un seguimiento de trabajo.

## Estructura del repositorio
Se siguio la metodologia __Atomic Design__ la cual abarca conceptos de reutilización de componentes, es bastante parecida a como funciona la libreria React.
* __views__: En esta carpeta iran las vistas de cada uno de los modulos y los archivos js correspondientes si es que agregan funcionalidades.
* __components__: En esta carpeta iran las vistas que se pueden reutilizar en otras vistas por ejemplo el header o el footer.
* __assets__: Son los recursos estaticos, osea que no cambian, pueden ser imagenes, estilos, datos en distintos formatos csv, xml, json etc.

> [!NOTE]
> La vista del modulo _login_ es el archivo _index.html_ que aparece en la carpeta raiz, ya que xampp busca este archivo cuando no se le define una url completa, por eso no meti esta vista en la carpeta __views__.

## Pasos para agregar el desarrollo
* Clonen el repositorio en la carpeta _C:/xampp/htdocs/_ para que puedan hacer pruebas desde local  
```bash
git clone https://github.com/Johann9324/Modulo_baberB.git
```
* Ingresen con VS Code a la carpeta donde quedo clonado el repositorio.
* Creen una rama para su propio desarrollo.
* Verifiquen antes de subir el commit y el push de su rama.
* Si todo esta bien hagan el commit y push y realicen merge desde main con su rama.
* Hagan push de main y los cambios quedarian listos para que cualquier otra persona lo pruebe.

> [!WARNING]
> Verifiquen la ruta de instalación de xampp ya que puede no ser la misma.  
Busquen los comandos, en una actualizacion se mejorara esta documentación.
