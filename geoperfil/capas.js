const capas = map.getLayers();
const exp831 = capas.find(capa => capa.name === "Ayudas 831 Prevención Incendios");
const exp851 = capas.find(capa => capa.name === "Ayudas 851 Ecosistemas Forestales");
const titularidad = capas.find(capa => capa.name === "Titularidad");
const usosSimples = capas.find(capa => capa.name === "Usos Simples");
const pd5 = capas.find(capa => capa.name === "Hectáreas con Pendientes del 0-5%");
const pd14 = capas.find(capa => capa.name === "Hectáreas con Pendientes del 5-14%");
const pd25 = capas.find(capa => capa.name === "Hectáreas con Pendientes del 15-25%");
const pd50 = capas.find(capa => capa.name === "Hectáreas con Pendientes del 26-50%");
const pd100 = capas.find(capa => capa.name === "Hectáreas con Pendientes del 51-100%");
const mato50 = capas.find(capa => capa.name === "Hectáreas con FCC Arbustiva de 0-50%");
const mato100 = capas.find(capa => capa.name === "Hectáreas con FCC Arbustiva de 51-100%");
const eucaliptus50 = capas.find(capa => capa.name === "Hectáreas con FCC de Eucaliptar de 0-50%");
const eucaliptus100 = capas.find(capa => capa.name === "Hectáreas con FCC de Eucaliptar de 51-100%");
const pinus50 = capas.find(capa => capa.name === "Hectáreas con FCC de Pinar de 0-50%");
const pinus100 = capas.find(capa => capa.name === "Hectáreas con FCC de Pinar de 51-100%");
const quercus50 = capas.find(capa => capa.name === "Hectáreas con FCC de Quercus de 0-50%");
const quercus100 = capas.find(capa => capa.name === "Hectáreas con FCC de Quercus de 51-100%");
const arbol25 = capas.find(capa => capa.name === "Hectáreas con FCC Arbórea de 0-25%");
const arbol50 = capas.find(capa => capa.name === "Hectáreas con FCC Arbórea de 26-50%");
const arbol75 = capas.find(capa => capa.name === "Hectáreas con FCC Arbórea de 51-75%");
const arbol100 = capas.find(capa => capa.name === "Hectáreas con FCC Arbórea de 76-100%");
const hicEncinar = capas.find(capa => capa.name === "Hectáreas con Presencia del HIC de Encinar");
const hicJaral = capas.find(capa => capa.name === "Hectáreas con Presencia del HIC de Brezal");
const hicFormacionAdehesada = capas.find(capa => capa.name === "Hectáreas con Presencia del HIC de Formaciones Adehesadas");
const amenaz = capas.find(capa => capa.name === "Probabilidad Aparición Especies del Catálogo de Especies Amenazadas");
const caminos = capas.find(capa => capa.name === "Caminos Ámbito Almonaster");
  
    
 /* CAPAS MUNICIPIO */ 

const estiloMunicipios = new M.style.Polygon({
	label: {
  	text: '{{nombre}}',
    scale: '1.3',
    stroke: {
    	color: 'white',
      width: 2
    }
  },
	stroke: {
  	color: '#CCCED7',
    width: 2
  }
});


 /* ZONA INCENDIO*/
const estiloZonaIncendio = new M.style.Polygon({
	fill: {
		color: 'white',
    opacity: 0.1,
  },
  stroke: {
     color: 'red',
     width: 2
  }
});
    
/* CAPAS EXPEDIENTES*/

const estiloSilueta = new M.style.Polygon({
	fill: {
      color: 'white',
      opacity: 0.1
   },
  stroke: {
   		color: "black",
      width: 0.5
   }
});

const estiloExp831 = new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 0.1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 5,
        rotation: 20,
        color: '#e0060d'
      }
   },
   stroke: {
   		color: "black",
      width: 0.5
   }
	});

const estiloExp851 = new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 0.1,
      pattern: {
        name: M.style.pattern.DOT,
        size: 3,
        scale: 1,
        spacing: 10,
        rotation: 20,
        color: 'blue'
      }
   },
   stroke: {
   		color: "black",
      width: 0.5
   }
	});
  const filtro831 = new M.style.Category("Tipo_Expediente", {
  	"Ambos": estiloExp831,
  	"Expediente 831": estiloExp831,
  	"Expediente 851": estiloSilueta,
    "Ninguno": estiloSilueta
  });
  exp831.setStyle(filtro831);
  
  const filtro851 = new M.style.Category("Tipo_Expediente", {
  	"Ambos": estiloExp851,
  	"Expediente 831": estiloSilueta,
  	"Expediente 851": estiloExp851,
    "Ninguno": estiloSilueta
  });
  exp851.setStyle(filtro851);
    
/* CAPA TITULARIDAD */

let ayuntamiento = new M.style.Polygon({fill: {color: '#a9cbf4'}, stroke: {color: "black", width: 1}}); 
let diputacion = new M.style.Polygon({fill: {color: '#4a43cc'}, stroke: {color: "black", width: 1}});
let investigacion = new M.style.Polygon({fill: {color: '#c8b5b5'}, stroke: {color: "black", width: 1}});
let estado = new M.style.Polygon({fill: {color: '#ff58d9'}, stroke: {color: "black", width: 1}});
let junta = new M.style.Polygon({fill: {color: '#277d2e'}, stroke: {color: "black", width: 1}});
let privado = new M.style.Polygon({fill: {color: '#e1ff76'}, stroke: { color: 'black', width: 2 }});
 
let estiloParcelas = new M.style.Category("SUBTIPOPRO2", {
  "AYUNTAMIENTO": ayuntamiento,
  "DIPUTACIÓN": diputacion,
  "EN INVESTIGACIÓN": investigacion,
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

  
titularidad.setStyle(estiloParcelas);

/* CAPA USOS SIMPLES */

const humeda = new M.style.Polygon({fill: {color: '#5ddcea', opacity: 0.5}, stroke: { color: '#be295d', width: 2  }});
const forestal = new M.style.Polygon({fill: {color: '#30ba3b'}});
const cultivo = new M.style.Polygon({fill: {color: '#c9bd4b'}});
const artificial = new M.style.Polygon({fill: {color: '#c6cfce'}});

const estilo_usosSimples = new M.style.Category("SIPNA_VEGE", {
  "ZONA HUMEDA": humeda,
  "FORESTAL":    forestal,
  "CULTIVOS":    cultivo,
  "ARTIFICIAL":  artificial 
});

usosSimples.setStyle(estilo_usosSimples);

/* CAPAS VEGETACIÓN Y ESPECIES AMENAZADAS */

const rango_mato50                   = [1, 20, 100, 500];
const rango_mato100                  = [1, 20, 100, 500];
const rango_eucaliptus50             = [0, 20, 100, 500];
const rango_eucaliptus100            = [1, 20, 100, 500];
const rango_pinus50                  = [1, 20, 100, 500];
const rango_pinus100                 = [1, 20, 100, 500];
const rango_quercus50                = [1, 20, 100, 500];
const rango_quercus100               = [1, 20, 100, 500];
const rango_arbol25                  = [1, 20, 100, 500];
const rango_arbol50                  = [1, 20, 100, 500];
const rango_arbol75                  = [1, 20, 100, 500];
const rango_arbol100                 = [1, 20, 100, 500];
const rango_pd5                      = [1, 10, 20, 100, 500];
const rango_pd14                     = [1, 10, 20, 100, 500];
const rango_pd25                     = [1, 10, 20, 100, 500];
const rango_pd50                     = [1, 10, 20, 100, 500];
const rango_pd100                    = [1, 10, 20, 100, 500];
const rango_hicEncinar               = [1, 10, 20, 100, 500];
const rango_hicJaral                 = [1, 10, 20, 100, 500];
const rango_hicFormacionAdehesada    = [1, 10, 20, 100, 500];

const estiloCapaMatos50 = new M.style.Choropleth("HA_MATO_1_50", ["#edf8fb", "#810f7c"], () => rango_mato50);
const estiloCapaMatos100 = new M.style.Choropleth("HA_MATO_51_100", ["#edf8fb", "#810f7c"], () => rango_mato100);

const estiloCapaEucaliptus50 = new M.style.Choropleth("HA_EUCALIPTUS_1_50", ["#fff5eb", "#7f2704"], () => rango_eucaliptus50);
const estiloCapaEucaliptus100 = new M.style.Choropleth("HA_EUCALIPTUS_51_100", ["#fff5eb", "#7f2704"], () => rango_eucaliptus100);

const estiloCapaPinus50 = new M.style.Choropleth("HA_PINUS_1_50", ["#c3fa99", "#25592f"], () => rango_pinus50);
const estiloCapaPinus100 = new M.style.Choropleth("HA_PINUS_51_100", ["#c3fa99", "#25592f"], () => rango_pinus100);

const estiloCapaQuercus50 = new M.style.Choropleth("HA_QUERCUS_1_50", ["#d9ecff", "#08306b"], () => rango_quercus50);
const estiloCapaQuercus100 = new M.style.Choropleth("HA_QUERCUS_51_100", ["#d9ecff", "#08306b"], () => rango_quercus100);

const estiloCapaArbol25 = new M.style.Choropleth("HA_ARBOL_1_25", ["#ffe0e0", "#ff0000"], () => rango_arbol25);
const estiloCapaArbol50 = new M.style.Choropleth("HA_ARBOL_26_50", ["#ffe0e0", "#ff0000"], () => rango_arbol50);
const estiloCapaArbol75 = new M.style.Choropleth("HA_ARBOL_51_75", ["#ffe0e0", "#ff0000"], () => rango_arbol75);
const estiloCapaArbol100 = new M.style.Choropleth("HA_ARBOL_76_100", ["#ffe0e0", "#ff0000"], () => rango_arbol100);

const estiloCapaAmenaz = new M.style.Category("SP_AMENAZ", {
    "Probable": new M.style.Polygon({fill: {color: '#DA9CEE' }}),
    null: new M.style.Polygon({fill: {color: '#ccc'}})
});

const estiloCapaHicEncinar = new M.style.Choropleth("HA_HIC_encinar", ["#d9ecff", "#08306b"], () => rango_hicEncinar);
const estiloCapaHicJaral = new M.style.Choropleth("HA_HIC_jaral_brezal", ["#edf8fb", "#810f7c"], () => rango_hicJaral);
const estiloCapaHicFormacionAdehesada = new M.style.Choropleth("HA_HIC_Formación_adehesada", ["#d9ecff", "#08306b"], () => rango_hicFormacionAdehesada);

mato50.setStyle(estiloCapaMatos50);
mato100.setStyle(estiloCapaMatos100);
eucaliptus50.setStyle(estiloCapaEucaliptus50);
eucaliptus100.setStyle(estiloCapaEucaliptus100);
pinus50.setStyle(estiloCapaPinus50);
pinus100.setStyle(estiloCapaPinus100);
quercus50.setStyle(estiloCapaQuercus50);
quercus100.setStyle(estiloCapaQuercus100);
arbol25.setStyle(estiloCapaArbol25);
arbol50.setStyle(estiloCapaArbol50);
arbol75.setStyle(estiloCapaArbol75);
arbol100.setStyle(estiloCapaArbol100);
hicEncinar.setStyle(estiloCapaHicEncinar);
hicJaral.setStyle(estiloCapaHicJaral);
hicFormacionAdehesada.setStyle(estiloCapaHicFormacionAdehesada);
amenaz.setStyle(estiloCapaAmenaz);

/* CAPAS PENDIENTES */

const estiloCapaPd5 = new M.style.Choropleth("HA_PD0_5", [
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 45,
        color: '#C8C8C8'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 45,
        color: '#B0B0B0'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 45,
        color: '#909090'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 45,
        color: '#606060'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
], () => rango_pd5);
const estiloCapaPd14 = new M.style.Choropleth("HA_PD0_5_14", [

	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 135,
        color: '#C8C8C8'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 135,
        color: '#B0B0B0'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 135,
        color: '#909090'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 3,
        rotation: 135,
        color: '#606060'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
], () => rango_pd14);
const estiloCapaPd25 = new M.style.Choropleth("HA_PD0_15_25", [
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 45,
        color: '#C8C8C8'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 45,
        color: '#B0B0B0'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 45,
        color: '#909090'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 45,
        color: '#606060'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
], () => rango_pd25);
const estiloCapaPd50 = new M.style.Choropleth("HA_PD0_26_50", [
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 135,
        color: '#C8C8C8'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 135,
        color: '#B0B0B0'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 135,
        color: '#909090'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 135,
        color: '#606060'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  })
  ], () => rango_pd50);
const estiloCapaPd100 = new M.style.Choropleth("HA_PD0_51_100", [
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 0,
        color: '#C8C8C8'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 0,
        color: '#B0B0B0'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 0,
        color: '#909090'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),
	new M.style.Polygon({
    fill: {
      color: 'white',
      opacity: 1,
      pattern: {
        name: M.style.pattern.HATCH,
        size: 1,
        scale: 1,
        spacing: 2,
        rotation: 0,
        color: '#606060'
      }
   },
   stroke: { color: "#000", width: 0.2 }
  }),], () => rango_pd100);

  pd5.setStyle(estiloCapaPd5);
  pd14.setStyle(estiloCapaPd14);
  pd25.setStyle(estiloCapaPd25);
  pd50.setStyle(estiloCapaPd50);
  pd100.setStyle(estiloCapaPd100);

  /* CAPA CAMINOS*/  
 
 const estilo_caminos =  new M.style.Line({
    stroke: {
      color: "#815125",
    width:2
  }
});

caminos.setStyle(estilo_caminos);
