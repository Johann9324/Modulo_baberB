document.addEventListener('DOMContentLoaded', function () {
  loadServicios(); 

  const formulario = document.getElementById('formServicio');
  if (!formulario) return;

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const nombre = document.getElementById('nombreServicio').value;
    const categoria = document.getElementById('categoriaServicio').value;
    const valorServicio = document.getElementById('valorServicio').value;
    const descripcion = document.getElementById('descripcionServicio').value;
    const fecha = document.getElementById('fechaInicio').value;
    const responsable = document.getElementById('responsable').value;
    const numeroCliente = document.getElementById('numeroCliente').value;

    if (!nombre || !categoria || !valorServicio || !descripcion || !fecha || !responsable || !numeroCliente) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const servicio = {
      id: Date.now(), 
      nombre,
      categoria,
      valorServicio,
      descripcion,
      fecha,
      responsable,
      numeroCliente
    };

    let servicios = JSON.parse(localStorage.getItem('servicios')) || [];
    servicios.push(servicio);
    localStorage.setItem('servicios', JSON.stringify(servicios));

    alert('✅ Servicio registrado exitosamente.');
    formulario.reset();
    loadServicios();
  });


  
 
});

// Función para cargar servicios en pantalla
function loadServicios() {
  const contenedor = document.getElementById('lista-servicios');
  if (!contenedor) return;

  contenedor.innerHTML = '';
  const servicios = JSON.parse(localStorage.getItem('servicios')) || [];

  servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.className = 'card mb-2 p-2';

    card.innerHTML = `
      <h5>${servicio.nombre}</h5>
      <p><strong>Categoría:</strong> ${servicio.categoria}</p>
      <p><strong>Valor:</strong> $${servicio.valorServicio}</p>
      <p><strong>Descripción:</strong> ${servicio.descripcion}</p>
      <p><strong>Fecha:</strong> ${servicio.fecha}</p>
      <p><strong>Responsable:</strong> ${servicio.responsable}</p>
      <p><strong>Cliente:</strong> ${servicio.numeroCliente}</p>
      <button class="btn btn-danger btn-sm" onclick="eliminarServicio(${servicio.id})">Eliminar</button>
    `;
    contenedor.appendChild(card);
  });
}

// Eliminar servicio
function eliminarServicio(id) {
  let servicios = JSON.parse(localStorage.getItem('servicios')) || [];
  servicios = servicios.filter(s => s.id !== id);
  localStorage.setItem('servicios', JSON.stringify(servicios));
  loadServicios();
}


  // Tu función mostrarModulo ya está aquí...
  document.getElementById('btnRegistrarServicio').addEventListener('click', function () {
    console.log('Registrar servicio clicado');
    const nombre = document.getElementById('nombreServicio').value;
    const categoria = document.getElementById('categoriaServicio').value;
    const descripcion = document.getElementById('descripcionServicio').value;
    const fecha = document.getElementById('fechaInicio').value;
    const responsable = document.getElementById('responsable').value;

    // Aquí capturamos el número de cliente (agregaste 2 campos con mismo ID "responsable", debemos corregir)
    const numeroCliente = document.querySelector('#numeroCliente')?.value || ''; // agregaremos el ID correcto abajo

    // Creamos el objeto de servicio
    const servicio = {
      nombre,
      categoria,
      descripcion,
      fecha,
      responsable,
      numeroCliente
    };

    // Guardamos en localStorage (puedes cambiarlo luego por una base de datos o backend)
    let serviciosGuardados = JSON.parse(localStorage.getItem('servicios')) || [];
    serviciosGuardados.push(servicio);
    localStorage.setItem('servicios', JSON.stringify(serviciosGuardados));

    alert('Servicio registrado exitosamente');
    
    // Limpia el formulario (opcional)
    document.querySelector('form').reset();
  });

