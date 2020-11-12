const capas = map.getLayers();
const titularidad = capas.find(capa => capa.name === "Titularidad");

/* CAPA TITULARIDAD */

let ayuntamiento = new M.style.Polygon({fill: {color: '#a9cbf4'}, stroke: {color: "black", width: 1}}); 
let diputacion = new M.style.Polygon({fill: {color: '#4a43cc'}, stroke: {color: "black", width: 1}});
let investigacion = new M.style.Polygon({fill: {color: '#c8b5b5'}, stroke: {color: "black", width: 1}});
let estado = new M.style.Polygon({fill: {color: '#ff58d9'}, stroke: {color: "black", width: 1}});
let junta = new M.style.Polygon({fill: {color: '#277d2e'}, stroke: {color: "black", width: 1}});
let privado = new M.style.Polygon({fill: {color: '#e1ff76'}, stroke: { color: 'black', width: 2 }});
 
let estiloParcelas = new M.style.Category("TipoPropiedad", {
  "AYUNTAMIENTO": ayuntamiento,
  "DIPUTACIÓN": diputacion,
  "EN INVESTIGACION": investigacion,
  "ESTADO": estado,
  "JUNTA DE ANDALUCÍA": junta,
  "PRIVADO": privado,
  null: investigacion
});

let selectedFeature;
const selectedStyle = new M.style.Polygon({
    fill: {
      color: '#2CE8DD',
      opacity: 0.5,
    },
    stroke: {
      color: '#2C43E8',
      width: 2
    }
  }); 

  
if (titularidad) titularidad.setStyle(estiloParcelas);

/* GETFEATUREINFOBYLAYERS ACTIVADO */

setTimeout(function(){ 
  capas.find(l => l.name === "Coniferas").gf.options.identify = true;
 }, 3000);
