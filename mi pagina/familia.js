let x = $(document);
x.ready(inicializarBryan);

function inicializarBryan() {
  let x = $("#boton1");
  x.click(ocultarMostrarbryan);
}

function ocultarMostrarbryan() {
  let x = $("#descripcion1");
  x.toggle("slow");
}

// mattew 
let a = $(document);
a.ready(inicializarMattew);

function inicializarMattew() {
  let a = $("#boton2");
  a.click(ocultarMostrarMattew);
}

function ocultarMostrarMattew() {
  let a = $("#descripcion2");
  a.toggle("slow");
}

// johann 
let v = $(document);
v.ready(inicializarjohann);

function inicializarjohann() {
  let v = $("#boton3");
  v.click(ocultarMostrarjohann);
}

function ocultarMostrarjohann() {
  let v = $("#descripcion3");
  v.toggle("slow");
}