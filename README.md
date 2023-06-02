# Prueba Técnica Sebastian Rivera

## Introducción:

En esta prueba técnica esta enfocada en la creación de una aplicación web Utilizando la biblioteca de JavaScript, React.JS, basada en el diseño proporcionado. Asimismo, se ha desarrollado una API personalizada utilizando JavaScript para proporcionar datos a la aplicación.

El objetivo principal de esta prueba técnica ha sido demostrar nuestra capacidad para crear una aplicación web sólida y funcional, utilizando tecnologías populares y en demanda en la industria del desarrollo web. Con React.js, se ha aprovechado su enfoque basado en componentes y su capacidad de actualización en tiempo real, lo que ha permitido construir una interfaz de usuario funcional.

Además,se ha creado una API personalizada utilizando JavaScript para satisfacer las necesidades específicas de la aplicación, como enviar mediante un JSON la información necesaria para exponer lo solicitado.

Durante esta prueba técnica, se han abordado desafíos que van desde el diseño y la arquitectura de la aplicación hasta la implementación de la API. Hemos seguido buenas prácticas de desarrollo de software, como el uso de componentes reutilizables y el manejo adecuado del estado de la aplicación.

Esta documentación proporcionará una descripción detallada de la arquitectura, la implementación y como realizaría pruebas para asegurar la calidad de la aplicación, así como de la API que se ha desarrollado. Además, se incluirán instrucciones para ejecutar y probar la aplicación en su entorno local, lo que le permitirá explorar y evaluar la solución de manera efectiva.


## Arquitectura de la aplicación:

En el siguiente diagrama podemos ver una arquitectura general de la estructura que sigue la aplicación web y la API para funcionar:

![Conexión de la aplicación web con la API](https://github.com/sebastianrima/PruebaTecnicaLiving/assets/62396731/c9e5e86d-4e3c-4d0f-ab3a-6b7f047b3653)

También, podemos observar que la API le pide la información a un archivo .JSON, el cual, en el caso de que fuera un proyecto con un mayor alcance, sería remplazado por una base de datos, a su vez, se observa que la aplicación web recibe únicamente un link con las imagenes alojadas en github, en lugar de un archivo de imagen.

Por otro lado, en el siguiente diagrama podemos observar como se conectan los diferentes componentes y páginas de la aplicación web:

![Diagrama de aplicación web](https://github.com/sebastianrima/PruebaTecnicaLiving/assets/62396731/6e31fa65-81d2-4bee-8aa5-09a9c9a58934)

Aquí podemos observar como funciona el routing inicial para llegar a la pagina de "MentoresPreview", navegando entre esta página y la página de "MentoresDetails", también, podemos ver la relación de estas páginas con sus componentes principales.

## Instrucciónes de uso:

Para ejecutar este proyecto localemente es necesario descargar este repositorio en el equipo local, una vez descargado, el dispositivo debe tener instalado el entorno de ejecucion Node.JS y la libreria de JavaScript React.JS, si se cumple con estos requisitos, se deben instalar las dependencias, por lo que debemos situarnos en la carpeta llamada "Backend" y ejecutar el siguiente comando:

```
npm install
```
Debemos hacer esto mismo situados en la carpeta llamada "Frontend".

Por último, debemos iniciar el servidor API y la aplicaión web utilizando el siguiente comando en las mismas carpetas anteriormente mencionadas:

```
npm start
```

Al ejecutar este comando la carpeta "Frontend" automáticamente se abrirá una página en el navegador con la aplicación web funcionando.

## Testing:

Para asegurar la calidad la aplicación web y la API desarrollada, se pueden realizar diversas pruebas de calidad. En el caso de la página web, se pueden llevar a cabo pruebas de renderizado y funcionalidad para garantizar que todos los componentes se rendericen correctamente y que las interacciones con el usuario sean fluidas. También se pueden realizar pruebas de compatibilidad en diferentes navegadores y dispositivos para asegurarse de que la página se vea y funcione correctamente en diferentes entornos. Además, las pruebas de accesibilidad son fundamentales para verificar que la página cumpla con los estándares de accesibilidad y sea usable para personas con discapacidades.

En cuanto a la API, se pueden realizar pruebas unitarias para evaluar la funcionalidad individual de los distintos endpoints y componentes de la API. Estas pruebas pueden incluir verificaciones de entrada y salida de datos, así como el manejo de errores y excepciones. Las pruebas de integración son esenciales para comprobar la comunicación correcta entre la API y los sistemas externos con los que interactúa. También se pueden realizar pruebas de carga y rendimiento para evaluar el rendimiento de la API bajo diferentes cargas de trabajo y verificar que responda de manera eficiente. Además, las pruebas de seguridad son cruciales para detectar posibles vulnerabilidades y asegurar que la API proteja adecuadamente los datos sensibles.


