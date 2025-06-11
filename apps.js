// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCxbsF_l6ST-JWOz7MdB9c8A77BNXMJtj8",
  authDomain: "basedatoscheck.firebaseapp.com",
  projectId: "basedatoscheck",
  storageBucket: "basedatoscheck.firebasestorage.app",
  messagingSenderId: "580954254341",
  appId: "1:580954254341:web:e7aedd6d6bacf04dd8006c",
  measurementId: "G-53VG9R62PH"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// LOGIN con Firebase
document.getElementById("form-login").onsubmit = function(e){
  e.preventDefault();
  let correo = this.correo.value.trim();
  let contrasena = this.contrasena.value.trim();
  auth.signInWithEmailAndPassword(correo, contrasena)
    .then(() => {
      // El control de visibilidad lo maneja el onAuthStateChanged abajo
    })
    .catch((error) => {
      let alerta = document.getElementById("login-alerta");
      alerta.textContent = "Correo o contraseña incorrectos.";
      alerta.className = "alert alert-danger mt-3";
      alerta.style.display = "block";
      setTimeout(()=>{alerta.style.display="none";},3500);
    });
};

// LOGOUT Firebase (solo esta versión, sin recargar)
function logout() {
  auth.signOut();
}

// Cambia visibilidad según sesión
auth.onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("login-panel").style.display = "none";
    document.getElementById("sidebarMenu").style.display = "flex";
    document.querySelector(".content-area").style.display = "block";
  } else {
    document.getElementById("login-panel").style.display = "block";
    document.getElementById("sidebarMenu").style.display = "none";
    document.querySelector(".content-area").style.display = "none";
  }
});


const preguntas = [
      {
        texto: "¿En la inducción le queda clara la política de seguridad vial?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Tiene claridad del reporte de accidentes e incidentes viales?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Recibió y entendió con total claridad la inducción sobre sensores y cámaras?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "De los siguientes enunciados seleccione que corresponda a la política del SGI",
        opciones: [
          { texto: "La prevención de incidentes y accidentes laborales, tránsito y ambientales", correcta: true },
          { texto: "Velamos por la protección de la seguridad y salud de los colaboradores y partes interesadas", correcta: true },
          { texto: "Un Sistema Integrado de Gestión", correcta: false },
          { texto: "Es un esquema de desarrollo sostenible, apoyados en tecnología de punta", correcta: false }
        ],
        tipo: "checkbox"
      },
      {
        texto: "Identifique 3 Objetivos de Combuses S.A",
        opciones: [
          { texto: "Eficiente administración de sus servicios y procesos", correcta: false },
          { texto: "Aumentar la satisfacción de nuestros clientes.", correcta: true },
          { texto: "Cumplir con los tiempos de entrega establecidos", correcta: true },
          { texto: "Mantener la conformidad de la calidad del servicio", correcta: true }
        ],
        tipo: "checkbox"
      },
      {
        texto: "De los siguientes enunciados marque con una x un programa de Control y Gestión de Riesgos críticos.",
        opciones: [
          { texto: "No consumo de alcohol y drogas", correcta: true },
          { texto: "Transitar por vías permitidas", correcta: false },
          { texto: "El buen uso del cinturón de seguridad", correcta: false },
          { texto: "Respetar las normas de tránsito", correcta: false },
          { texto: "Respetar la velocidad máxima según las normas de tránsito", correcta: false }
        ],
        tipo: "checkbox"
      },
      {
        texto: "Accidente laboral es todo suceso repentino que sobrevenga por causa o con ocasión del trabajo, y que produzca en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez o la muerte.",
        opciones: [
          { texto: "Verdadera", correcta: true },
          { texto: "Falsa", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Tiene claridad del reporte de accidentes y incidentes viales?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "Es incidente de trabajo laboral todo suceso acontecido en el curso del trabajo o en relación con éste, que tuvo el potencial de ser un accidente, en el que hubo personas involucradas sin que sufrieran lesiones o se presentaran daños a la propiedad y/o pérdida en los procesos.",
        opciones: [
          { texto: "Verdadera", correcta: true },
          { texto: "Falsa", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Los dos se deben reportar a la empresa?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Qué tiempo tiene usted para reportar el incidente o accidente?",
        opciones: [
          { texto: "12 horas", correcta: false },
          { texto: "48 horas", correcta: true },
          { texto: "72 horas", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Cuáles de los siguientes enunciados corresponden a los pilares del PESV?",
        opciones: [
          { texto: "Seguridad vial", correcta: true },
          { texto: "Atención a víctimas", correcta: true },
          { texto: "Normas infraestructura segura", correcta: true }
        ],
        tipo: "checkbox"
      },
      {
        texto: "Seleccione los grupos de apoyo",
        opciones: [
          { texto: "COPASST", correcta: true },
          { texto: "Comité de convivencia laboral", correcta: true },
          { texto: "Emergencia", correcta: true },
          { texto: "Seguridad vial", correcta: true }
        ],
        tipo: "checkbox"
      },
      {
        texto: "¿Cada cuánto se deben hacer las pausas activas?",
        opciones: [
          { texto: "Una vez al día 5 minutos según el turno", correcta: true },
          { texto: "5 minutos dos veces al día por turno", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Cuáles son los colores de las canecas para la disposición de residuos?",
        opciones: [
          { texto: "Azul", correcta: false },
          { texto: "Negra", correcta: true },
          { texto: "Verde", correcta: true },
          { texto: "Blanca", correcta: true },
          { texto: "Gris", correcta: false }
        ],
        tipo: "checkbox"
      },
      {
        texto: "Seleccione 3 funciones de los conductores según el manual de funciones",
        opciones: [
          { texto: "Velamos por la protección de la seguridad y salud", correcta: false },
          { texto: "Prestar siempre un buen servicio", correcta: true },
          { texto: "Mejoramiento continuo de sus procesos y el cumplimiento de los requisitos legales", correcta: false },
          { texto: "Informar inmediatamente al propietario y a la empresa cuando ocurra cualquier siniestro", correcta: true },
          { texto: "Cumplir estrictamente con las normas de tránsito", correcta: true }
        ],
        tipo: "checkbox"
      },
      {
        texto: "Seleccione 3 prohibiciones al conductor según el manual de funciones",
        opciones: [
          { texto: "Incumplir las normas contenidas en el contrato de trabajo el reglamento interno en el manual de funciones", correcta: true },
          { texto: "Un esquema de desarrollo sostenible", correcta: false },
          { texto: "Permitir pasajeros por la puerta de atrás", correcta: true },
          { texto: "Transitar con las puertas abiertas", correcta: true },
          { texto: "Liquidar y entregar diariamente el producido del vehículo en los términos acordado", correcta: false }
        ],
        tipo: "checkbox"
      },
      {
        texto: "Es incidente de tránsito: suceso que tiene lugar de manera imprevista. Pero a diferencia del anterior no tiene por qué ocasionar daño alguno en personas o cosas.",
        opciones: [
          { texto: "Verdadera", correcta: true },
          { texto: "Falsa", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Conoce usted las normas de tránsito que rigen en la ciudad?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Cree usted que necesita conocer más de normas de tránsito?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: true }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción, ¿le informaron que el vehículo cuenta con cámaras, sensores y GPS?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción, ¿le queda claro que debe realizar viajes de madrugada y pernoctas?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Está prohibido por la empresa?",
        opciones: [
          { texto: "Incumplir las normas contenidas en el contrato de trabajo el reglamento interno en el manual de funciones", correcta: true },
          { texto: "Un esquema de desarrollo sostenible", correcta: false },
          { texto: "Permitir pasajeros por la puerta de atrás", correcta: true },
          { texto: "Transitar con las puertas abiertas", correcta: true },
          { texto: "Liquidar y entregar diariamente el producido del vehículo en los términos acordado", correcta: false }
        ],
        tipo: "checkbox"
      },
      {
        texto: "¿Recibió y entendió con total claridad la inducción en cuanto al manejo de sensores y cámara, ya que este componente no puede ser manipulado por nadie?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción le quedó claro: NO realizar abandonos de ruta, NO excesos de velocidad, NO maniobras peligrosas, NO guerreros, utilizar siempre el cinturón de seguridad, portar siempre bien el uniforme.",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción se le informó que no está permitido al conductor bajar o subir por la puerta del usuario, excepto en vías críticas donde ponen en peligro su vida.",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Le queda claro que los trasbordos deben ser por la puerta trasera y notificarlos el mismo día al componente?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "¿Le queda claro que ningún vehículo del aeropuerto podrá llevar un número de pasajeros superior a la capacidad señalada en la tarjeta de operación, con excepción de los niños de brazos?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "Para las rutas de la compañía Metropolitana de Buses Combuses S.A., ¿todo niño mayor de 2 años debe pagar el pasaje y así evitar sobre cupos ruta aeropuerto?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción, ¿le queda clara la política de SST Ley 1010, Circular 026 y Política 2365, política de alcohol y drogas, y política de seguridad vial?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción le quedó claro que tiene prohibido hacerle mecánica, alistamiento o mantenimiento al vehículo.",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      },
      {
        texto: "En la inducción y reinducción, ¿se le informó que es usted responsable de reportar todas las novedades al área encargada como jefe de ruta, jefe operativo, componente tecnológico, propietario y administradores de flota?",
        opciones: [
          { texto: "Sí", correcta: true },
          { texto: "No", correcta: false }
        ],
        tipo: "radio"
      }
    ];
// ---- FIN PREGUNTAS ----

// Renderizado dinámico de preguntas de conductores
function renderPreguntas() {
  let html = '';
  preguntas.forEach((p, idx) => {
    html += `<div class="mb-3 pregunta-bloque"><label class="form-label"><b>${idx+1}.</b> ${p.texto} <span class="required-star">*</span></label>`;
    if (p.tipo === "radio" || p.tipo === "checkbox") {
      let type = p.tipo;
      let name = "preg_"+idx+(type==="checkbox"? "[]": "");
      html += `<div>`;
      p.opciones.forEach((op, i) => {
        html += `
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="${type}" name="${name}" id="p${idx}_${i}" value="${op.texto}">
            <label class="form-check-label" for="p${idx}_${i}">${op.texto}</label>
          </div>
        `;
      });
      html += `</div>`;
    }
    html += `</div>`;
  });
  document.getElementById('preguntas-conductores').innerHTML = html;
}

renderPreguntas();

// CRM MENU: mostrar formulario según click
document.getElementById("menu-conductores").onclick = function(e){
  e.preventDefault();
  document.getElementById("form-conductores").style.display = "block";
  document.getElementById("form-capacitador").style.display = "none";
  this.classList.add("active");
  document.getElementById("menu-capacitador").classList.remove("active");
};
document.getElementById("menu-capacitador").onclick = function(e){
  e.preventDefault();
  document.getElementById("form-conductores").style.display = "none";
  document.getElementById("form-capacitador").style.display = "block";
  this.classList.add("active");
  document.getElementById("menu-conductores").classList.remove("active");
};


function logout() {
  auth.signOut();
}

// Fecha automática
document.getElementById('fechaConductores').value = new Date().toISOString().slice(0,10);
document.getElementById('fechaCapacitador').value = new Date().toISOString().slice(0,10);

// Firma digital
function setupFirma(canvasId) {
  const canvas = document.getElementById(canvasId);
  let painting = false, started = false;
  let ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#063970"; ctx.lineWidth = 2;
  function getX(e) { return e.touches ? e.touches[0].clientX - canvas.getBoundingClientRect().left : e.offsetX; }
  function getY(e) { return e.touches ? e.touches[0].clientY - canvas.getBoundingClientRect().top : e.offsetY; }
  function start(e) { painting = true; started = true; ctx.beginPath(); ctx.moveTo(getX(e), getY(e)); }
  function draw(e) { if (!painting) return; ctx.lineTo(getX(e), getY(e)); ctx.stroke(); }
  function end() { painting = false; }
  canvas.onmousedown = start; canvas.onmousemove = draw; canvas.onmouseup = end; canvas.onmouseleave = end;
  canvas.ontouchstart = function(e) { start(e); e.preventDefault(); };
  canvas.ontouchmove = function(e) { draw(e); e.preventDefault(); };
  canvas.ontouchend = function(e) { end(e); e.preventDefault(); };
  canvas.saveFirma = function() { if (started) return canvas.toDataURL("image/png"); return null; }
  canvas.cleanFirma = function() { ctx.clearRect(0, 0, canvas.width, canvas.height); started = false; }
}
setupFirma("firmaConductores");
setupFirma("firmaCapacitador");
function limpiarFirma(who) {
  document.getElementById('firma'+who).cleanFirma();
}

// Conteo automático de preguntas respondidas
function updateConteo() {
  let total = preguntas.length;
  let contestadas = 0;
  preguntas.forEach((p, idx) => {
    if (p.tipo === "radio") {
      let checked = document.querySelector(`input[name="preg_${idx}"]:checked`);
      if (checked) contestadas++;
    } else if (p.tipo === "checkbox") {
      let checked = document.querySelectorAll(`input[name="preg_${idx}[]"]:checked`);
      if (checked.length > 0) contestadas++;
    }
  });
  document.getElementById('conteo-conductores').innerText = `Preguntas respondidas: ${contestadas} / ${total}`;
}
document.getElementById('conductores-formulario').addEventListener('change', updateConteo);
updateConteo();

// Marcar errores visualmente
function marcarErroresPreguntas(errores) {
  document.querySelectorAll('#preguntas-conductores .pregunta-bloque').forEach(div => {
    div.classList.remove('error-pregunta');
  });
  errores.forEach(idx => {
    let div = document.querySelector(`#preguntas-conductores .pregunta-bloque:nth-child(${idx+1})`);
    if(div) div.classList.add('error-pregunta');
  });
}

// Validar al seleccionar opciones (desmarca si corrigen)
document.getElementById('preguntas-conductores').addEventListener('change', function() {
  preguntas.forEach((p, idx) => {
    let error = false;
    if (p.tipo === "radio") {
      let checked = document.querySelector(`input[name="preg_${idx}"]:checked`);
      if (!checked) error = true;
      else {
        let opcion = p.opciones.find(op => op.texto === checked.value);
        if (!opcion || opcion.correcta !== true) error = true;
      }
    } else if (p.tipo === "checkbox") {
      let checkeds = Array.from(document.querySelectorAll(`input[name="preg_${idx}[]"]:checked`)).map(x=>x.value);
      let correctas = p.opciones.filter(op=>op.correcta).map(op=>op.texto).sort().join(',');
      let marcadas = checkeds.sort().join(',');
      if (correctas !== marcadas) error = true;
    }
    let div = document.querySelector(`#preguntas-conductores .pregunta-bloque:nth-child(${idx+1})`);
    if(div) div.classList.toggle('error-pregunta', error);
  });
});

// SUBMIT FORMULARIO CONDUCTORES
document.getElementById("conductores-formulario").onsubmit = function(e){
  e.preventDefault();
  let f = this;
  let nombre_usuario = f.nombre_usuario.value.trim();
  let cedula_usuario = f.cedula_usuario.value.trim();
  let fecha = f.fecha.value.trim();
  if (!nombre_usuario || !cedula_usuario || !fecha) { mostrarAlerta("conductores-alerta", "Debes ingresar todos los datos."); return; }
  let firmaUsu = document.getElementById("firmaConductores").saveFirma();
  if (!firmaUsu) { mostrarAlerta("conductores-alerta", "Debes firmar antes de enviar."); return; }
  let preguntasIncorrectas = [];
  preguntas.forEach((p, idx) => {
    if (p.tipo === "radio") {
      let checked = document.querySelector(`input[name="preg_${idx}"]:checked`);
      if (!checked) { preguntasIncorrectas.push(idx); return; }
      let opcion = p.opciones.find(op => op.texto === checked.value);
      if (!opcion || opcion.correcta !== true) { preguntasIncorrectas.push(idx); }
    } else if (p.tipo === "checkbox") {
      let checkeds = Array.from(document.querySelectorAll(`input[name="preg_${idx}[]"]:checked`)).map(x=>x.value);
      let correctas = p.opciones.filter(op=>op.correcta).map(op=>op.texto).sort().join(',');
      let marcadas = checkeds.sort().join(',');
      if (correctas !== marcadas) { preguntasIncorrectas.push(idx); }
    }
  });
  marcarErroresPreguntas(preguntasIncorrectas);
  if (preguntasIncorrectas.length > 0) {
    let nums = preguntasIncorrectas.map(i=>i+1).join(', ');
    mostrarAlerta("conductores-alerta", `Tienes respuestas incorrectas en las preguntas: ${nums}. Por favor, corrige para continuar.`);
    let divPrimera = document.querySelector(`#preguntas-conductores .pregunta-bloque:nth-child(${preguntasIncorrectas[0]+1})`);
    if(divPrimera) divPrimera.scrollIntoView({behavior:"smooth", block:"center"});
    return;
  }
  marcarErroresPreguntas([]);
  // Generar PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 15;
  doc.setFontSize(15);
  doc.text("Evaluación Conductores", 14, y); y+=10;
  doc.setFontSize(11);
  doc.text(`Nombre: ${nombre_usuario}`, 14, y); doc.text(`Cédula: ${cedula_usuario}`, 110, y); y+=8;
  doc.text(`Cargo: Conductor`, 14, y); doc.text(`Fecha: ${fecha}`, 110, y); y+=10;
  doc.setFontSize(13); doc.text("Respuestas:", 14, y); y+=8;
  preguntas.forEach((p, idx) => {
    doc.setFontSize(11);
    let preguntaTxt = `${idx+1}. ${p.texto}`;
    doc.text(preguntaTxt, 14, y); y+=7;
    if (p.tipo === "radio") {
      let val = document.querySelector(`input[name="preg_${idx}"]:checked`).value;
      doc.text("Respuesta: " + val, 18, y); y+=7;
    } else if (p.tipo === "checkbox") {
      let vals = Array.from(document.querySelectorAll(`input[name="preg_${idx}[]"]:checked`)).map(x=>x.value);
      doc.text("Seleccionadas: " + vals.join(", "), 18, y); y+=7;
    }
  });
  let comentarios = f.comentarios.value.trim();
  if(comentarios) { doc.text("Comentarios: " + comentarios, 14, y+4); y+=12;}
  doc.text("Firma del usuario:", 14, y+8);
  doc.text(nombre_usuario, 100, y+14);
  doc.addImage(firmaUsu, 'PNG', 14, y+10, 60, 24);
  doc.save(`Evaluacion_Conductores.pdf`);
  mostrarAlerta("conductores-alerta", "¡Evaluación guardada y PDF generado!", true);
  f.reset(); limpiarFirma("Conductores"); renderPreguntas(); updateConteo();
};

// SUBMIT FORMULARIO CAPACITADOR
document.getElementById("capacitador-formulario").onsubmit = function(e){
  e.preventDefault();
  let f = this;
  let nombre_usuario = f.nombre_usuario.value.trim();
  let cedula_usuario = f.cedula_usuario.value.trim();
  let fecha = f.fecha.value.trim();
  let nombre_capacitador = f.nombre_capacitador.value.trim();
  if (!nombre_usuario || !cedula_usuario || !fecha || !nombre_capacitador) { mostrarAlerta("capacitador-alerta", "Debes ingresar todos los datos."); return; }
  let firmaUsu = document.getElementById("firmaCapacitador").saveFirma();
  if (!firmaUsu) { mostrarAlerta("capacitador-alerta", "Debes firmar antes de enviar."); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 18;
  doc.setFontSize(16);
  doc.text("Evaluación al Capacitador", 14, y); y+=10;
  doc.setFontSize(11);
  doc.text(`Nombre usuario: ${nombre_usuario}`, 14, y); doc.text(`Cédula: ${cedula_usuario}`, 110, y); y+=8;
  doc.text(`Cargo: Conductor`, 14, y); doc.text(`Fecha: ${fecha}`, 110, y); y+=8;
  doc.text(`Capacitador: ${nombre_capacitador}`, 14, y); y+=10;
  for(let i=1;i<=19;i++){
    let v = f[`p${i}`] ? f[`p${i}`].value : "";
    let label = document.querySelector(`[name="p${i}"]`).closest('.mb-3').querySelector('.form-label').innerText;
    doc.text(label.replace(/\s*\*/g,""), 14, y); y+=7;
    doc.text("Respuesta: " + v, 18, y); y+=7;
  }
  let comentarios = f.comentarios.value.trim();
  if(comentarios) { doc.text("Comentarios: " + comentarios, 14, y+4); y+=12;}
  doc.text("Firma del usuario:", 14, y+8);
  doc.text(nombre_usuario, 100, y+14);
  doc.addImage(firmaUsu, 'PNG', 14, y+10, 60, 24);
  doc.save(`Evaluacion_Capacitador.pdf`);
  mostrarAlerta("capacitador-alerta", "¡Evaluación guardada y PDF generado!", true);
  f.reset(); limpiarFirma("Capacitador");
};

function toggleSidebar() {
  var sidebar = document.getElementById('sidebarMenu');
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show');
  } else {
    sidebar.classList.add('show');
  }
}

function mostrarAlerta(id, msg, exito) {
  const alerta = document.getElementById(id);
  alerta.textContent = msg;
  alerta.className = "alert mt-3 " + (exito ? "alert-success" : "alert-danger");
  alerta.style.display = "block";
  setTimeout(()=>{alerta.style.display="none";}, 4000);
}
