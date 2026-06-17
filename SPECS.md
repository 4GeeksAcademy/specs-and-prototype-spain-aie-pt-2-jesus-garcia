Descripción del Producto:
Plataforma SaaS donde las empresas pueden alquilar agentes de IA — asistentes inteligentes preconfigurados que pueden equiparse con distintas skills (habilidades como navegar por la web, leer documentos o gestionar calendarios) y desplegarse para tareas de negocio específicas.

Stack Tecnológico:
HTML, Tailwind vía CDN, solo JavaScript vanilla, sin frameworks ni backend.
Especificaciones por Sección:

0.El panel debe incluir las siguientes seis secciones, accesibles desde una navegación lateral persistente. Un toggle en la barra superior debe permitir cambiar toda la interfaz entre modo claro y modo oscuro usando las utilidades dark: de Tailwind.

1.Dashboard:
Cuatro tarjetas de métricas en una cuadrícula responsive 4x1 lg, 2x2 md, cada una con un icono, una etiqueta y un valor hardcodeado.
Las tarjetas deben tener una forma con los bordes recortados usando clip-path (como un octógono a una distancia de 10px del vértice original)
Esto se aplica a todas las cards de la página.

2.Gestión de usuarios:
Una tabla que lista todos los usuarios registrados (nombre, email, plan, estado). Cada fila debe tener un dropdown de acciones — un pequeño menú activado con un botón ⋮ — con al menos dos opciones: "Ver detalle" y "Eliminar". Al elegir "Ver detalle" se abre un modal overlay con el registro completo del usuario. El modal debe cerrarse mediante un botón y haciendo clic en el backdrop.

3.Gestión de agentes:
Un listado de todos los agentes registrados en la plataforma, mostrando nombre del agente, propietario, estado actual (activo / inactivo / fallando) y una lista de skills colapsada. Las skills asociadas a cada agente están ocultas por defecto; hacer clic en un control expandible las revela con una transición suave. Cada agente también tiene un dropdown de acciones con las opciones "Configurar" — que abre un modal con el prompt de sistema del agente — y "Eliminar". Debes reutilizar la tabla de gestión de usuarios.

4.Skills: Una sección dedicada al catálogo de skills disponibles — las capacidades que se pueden adjuntar a los agentes. Cada skill tiene un nombre, una descripción breve, y un indicador de cuántos agentes la tienen habilitada actualmente. Incluye una breve explicación dentro del panel sobre qué significa una "skill" en el contexto de AgentHub. Las skills también tienen un dropdown de acciones con "Ver detalle" y "Eliminar".

5.Contrataciones de agentes:
Una tabla que muestra todos los contratos de alquiler activos y pasados. Cada fila debe mostrar el cliente, el agente alquilado, las skills contratadas, las fechas del contrato y el importe total pagado. Cada fila tiene un dropdown de acciones. Al elegir "Ver detalle" se abre un modal con el desglose completo del contrato, incluyendo la lista desglosada de skills contratadas y sus precios individuales.

6.Log de errores:
Un registro de errores de ejecución de los agentes — mostrando timestamp, nombre del agente, tipo de error y una descripción breve. Los errores deben categorizarse visualmente por tipo o gravedad usando badges con código de color. Cada entrada tiene un dropdown de acciones con "Ver detalle" (abre un modal con la traza completa del error) y "Marcar como resuelto".


Inventario de Componentes:
Lista de componentes de UI reutilizables que aparecen en varias secciones (sidebar, tarjeta de métrica, dropdown de acciones, modal, badge, lista de skills colapsable, toggle de modo oscuro).

Criterios de Aceptación:
- Todas las cards de la interfaz usan un clip-path con esquinas recortadas, manteniendo una apariencia consistente en métricas, tablas, paneles y modales.
- La aplicación está construida únicamente con HTML, Tailwind vía CDN y JavaScript vanilla, sin frameworks ni backend funcional.
- El layout es responsive y las secciones siguen siendo utilizables en móvil, tablet y escritorio sin solapamientos ni contenido inaccesible.
- La interfaz incluye una navegación lateral persistente con acceso visible a las seis secciones y un toggle funcional en la barra superior para alternar entre modo claro y modo oscuro usando las utilidades dark: de Tailwind.
- Todos los dropdowns de acciones pueden abrirse y cerrarse correctamente, y muestran al menos las opciones indicadas en cada sección.
- Todos los modales se renderizan como overlay, pueden cerrarse con un botón visible y también haciendo clic fuera del contenido.

- Dashboard:
	- Se muestran exactamente cuatro tarjetas de métricas con icono, etiqueta y valor hardcodeado.
	- En escritorio las tarjetas se distribuyen en una cuadrícula de 4 columnas; en tablet en 2 columnas; y en móvil en 1 columna.

- Gestión de usuarios:
	- La tabla muestra al menos nombre, email, plan y estado por cada usuario.
	- Cada fila incluye un menú de acciones activado por un botón tipo ⋮.
	- La acción Ver detalle abre un modal con la información completa del usuario.
	- La acción Eliminar está visible en el menú de cada fila.

- Gestión de agentes:
	- La sección reutiliza la misma base de tabla usada en gestión de usuarios.
	- Cada fila muestra nombre del agente, propietario, estado y skills asociadas.
	- Las skills están colapsadas por defecto y se expanden al interactuar con el control correspondiente.
	- La expansión y colapso de skills se acompaña con una transición visual suave.
	- La acción Configurar abre un modal con el prompt de sistema del agente.
	- La acción Eliminar está disponible en el menú de cada agente.

- Skills:
	- La sección muestra un catálogo de skills con nombre, descripción breve y cantidad de agentes que la usan.
	- Dentro del panel existe un texto explicativo breve que define qué es una skill en el contexto de AgentHub.
	- Cada skill tiene un dropdown con las acciones Ver detalle y Eliminar.

- Contrataciones de agentes:
	- La tabla muestra cliente, agente alquilado, skills contratadas, fechas del contrato e importe total pagado.
	- Cada contrato dispone de un dropdown de acciones por fila.
	- La acción Ver detalle abre un modal con el desglose completo del contrato.
	- El modal del contrato incluye la lista desglosada de skills y el precio individual de cada una.

- Log de errores:
	- Cada entrada del log muestra timestamp, nombre del agente, tipo de error y descripción breve.
	- Los errores se distinguen visualmente mediante badges con color según tipo o gravedad.
	- Cada entrada incluye un menú de acciones con Ver detalle y Marcar como resuelto.
	- La acción Ver detalle abre un modal con la traza completa del error.