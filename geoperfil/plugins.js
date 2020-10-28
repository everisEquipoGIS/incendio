
/**********************************************************
 * PLUGIN PLG_HOR_NAVIGATION
 **********************************************************/

const barraNavegacion = new M.plugin.PLG_Hor_Navigation({
    "measureLength": true,
    "measureArea": true,
    "geocalc": false,
    "identify": {
      "all": false
    },
    "catastroSearch": {
      "add": false,
      "config": null
    },
    "scale": {
      "add": true,
      "config": {
      "scales": [1000, 2500, 5000, 10000, 20000, 25000, 50000, 100000, 150000, 250000, 500000, 1000000]
      }							
    },
    "coordinatesZoom": true,
    "addControls": {
      "add": true,
      "controls": []
    }
  });
map.addPlugin(barraNavegacion);


/**********************************************************
 * PLUGIN ATTRIBUTIONS
 **********************************************************/

var paramsAttributions = {
    params: {
        includeRequired: true,
        attributions: [
            "TXT*Incendio de Huelva 2020", [
                `HTML*<div id="logo">
           <h1 class="d-flex align-items-center">
              <a href="https://www.juntadeandalucia.es/index.html" class="logotipo">
                 <img class="logomini" src="https://www.juntadeandalucia.es/themes/images/logo-junta.png" alt="Portal de la Junta de Andalucía">
              </a>
              <a class="sublogo agriculturaganaderiapescaydesarrollosostenible" href="https://www.juntadeandalucia.es/organismos/agriculturaganaderiapescaydesarrollosostenible">
                 <img src="https://www.juntadeandalucia.es/themes/images/banner/organismo/agriculturaganaderiapescaydesarrollosostenible.png" alt="Agricultura, Ganadería, Pesca y Desarrollo Sostenible">
              </a>
              <a class="secretariaGeneral" href="https://www.juntadeandalucia.es/organismos/agriculturaganaderiapescaydesarrollosostenible/consejeria/sgmaacc.html">
              <p id="text_secretariaGneral">Secretaría General de Medio Ambiente, Agua y Cambio Climático</p>
              </a>`
            ]
        ]
    },
    options: {
        panel: {
            className: 'clasePrivada',
            collapsedClass: 'g-cartografia-ayuda',
            tooltip: 'Panel Attributions'
        }
    }
};
map.addPlugin(new M.plugin.Attributions(paramsAttributions));


/**********************************************************
 * PLUGIN COMUNICACIÓN CON CATASTRO
 **********************************************************/

  var comunicacion = new M.plugin.PLG_Comunicacion_Catastro(
    {
        config: {
            RCCOOR_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_RCCOOR",
            CMC_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejeroCodigos.asmx/ConsultaMunicipioCodigos",
            ConsultaVia_url: "https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx/ConsultaVia",
            ConsultaNumero_url: "https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx/ConsultaNumero",
            DNPRC_CODIGOS_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejeroCodigos.asmx/Consulta_DNPRC_Codigos",
            DNPRC_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/ovccallejero.asmx/Consulta_DNPRC",
            CPMRC_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_CPMRC",
            DNPPP_url: "https://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejeroCodigos.asmx/Consulta_DNPPP_Codigos",
            RCWMS_url: "https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCConCiud.aspx",
            DNPLOC_url: "https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx/Consulta_DNPLOC",
            catastroWMS: {
                wms_url: "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?",
                name: "Catastro"
            },
            catastroWFS: {
              wfs_url: 'https://ovc.catastro.meh.es/INSPIRE/wfsCP.aspx?',
              name: 'cp.cadastralparcel'
            },
            descargaGML: 'https://ovc.catastro.meh.es/INSPIRE/wfsCP.aspx?service=wfs&version=2&request=GetFeature&STOREDQUERIE_ID=GetParcel&srsname=EPSG::25830&outputFormat=geojson&refcat=',
            imagenParcela: 'https://www1.sedecatastro.gob.es/Cartografia/GeneraGraficoParcela.aspx?',
            imagenFachada: 'https://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=',
            visorPDF: 'https://docs.google.com/viewer?embedded=true&url=',
            consultaDescriptivaPDF: 'https://www1.sedecatastro.gob.es/CYCBienInmueble/SECImprimirCroquisYDatos.aspx?refcat='
        }
    }
);
map.addPlugin(comunicacion);


/**********************************************************
 * PLUGIN MANAGE LAYERS
 **********************************************************/
 
var configGroups = [];

/* Se añade grupo Datos Interés Incendios */
    configGroups.push({
        title: "Datos Interés Incendios",
        description: "Datos Interés Incendios",
        overlays: [
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_equipamientos_incendios_2020?',
                name: 'Torres_de_Vigilancia',
                legend: 'Torres de Vigilancia',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }),
			 new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_equipamientos_incendios_2020?',
                name: 'Cedefos_Bases_Pistas',
                legend: 'Cedefos, Bases y Pistas',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_equipamientos_incendios_2020?',
                name: 'Veh%C3%ADculos_contra_incendios',
                legend: 'Vehiculos contra Incendios',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }) ,	
			new M.layer.WFS({
                url: 'http://servintegra.cma.junta-andalucia.es/medioambiente/mapwms/REDIAM_wfs_instalaciones?',
                name: 'ms:equipamientos_incendios',
                legend: 'Equipamientos contra Incendios', 
				geometry: 'POINT' 
            }) ,
			new M.layer.WFS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_WFS_instalaciones',
                name: 'ms:cortafuegos_2011',
                legend: 'Cortafuegos 2011', 
                version: '1.1.1',
                transparent: true,
                tiled: true 
            }) ,
			new M.layer.WFS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_WFS_instalaciones',
                name: 'ms:puntos_agua_incendio',
                legend: 'Puntos Agua de Incendio', 
                version: '1.1.1',
                transparent: true,
                tiled: true 
            }) ,
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_equipamientos_incendios_2020?',
                name: 'REDIAM',
                legend: 'Equipamientos contra Incendios (2020)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_riesgo_historico_incendio',
                name: 'REDIAM',
                legend: 'Riesgo Histórico Incendio (2016)',
                transparent: true,
                tiled: false
            }), 
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_riesgo_meteorologico_incendios',
                name: 'REDIAM',
                legend: 'Riesgo Meteorológico de Incendios (2016)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_perimetros_incendios_forestales',
                name: 'REDIAM',
                legend: 'Perímetros de Incendios Forestales (2008-2019)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_zona_peligro_incendios_forestales',
                name: 'REDIAM',
                legend: 'Zonas de Peligro de Incendio',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_indice_vulnerab_incendios_forestales',
                name: 'REDIAM',
                legend: 'Índices de Vulnerabilidad frente a Incendios Forestales (2006)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_indice_riesgo_incencio_forestal_2006',
                name: 'REDIAM',
                legend: 'Índices de Riesgo por Incendio Forestal (2006)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_mapa_pendientes_incendio_penuelas_2018',
                name: 'REDIAM',
                legend: 'Mapa de Pendientes de 1m (2018). Incendio de Las Peñuelas, Moguer (Huelva)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_zonas_inundables_Andalucia',
                name: 'REDIAM',
                legend: 'Zonas Inundables',
                transparent: true,
                tiled: false
            }),
			new M.layer.WFS({
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_WFS_sipna_os_actual",
                name: "ms:sipna_os",
                legend: "SIPNA OS",
                geometry: 'POLYGON'
            }),
			new M.layer.WMS({
                url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_terrenos_cinegeticos_andalucia?",
                name: "Terrenos_cinegeticos_2016-17",
                legend: "Terrenos Cinegéticos",
                transparent: true,
            }),
			new M.layer.WMS({
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_seguimiento_anual_erosion_suelo?",
                name: "perdidas_suelo_2018",
                legend: "Erosión del Suelo",
                transparent: true,
            }),
            new M.layer.WMS({
                url: "http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_erosion_dehesas?",
                name: "Erosion_real",
                legend: "Erosión Dehesas",
                transparent: true,
            })    
        ]
    });

/** Se añade grupo Patrimonio Natural **/
    configGroups.push({
        title: "Patrimonio Natural",
        description: "Conjunto de capas que permiten la generación de un mapa de Andalucía básico",
        overlays: [
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Montes_Publicos_Andalucia?',
                name: 'montes',
                legend: 'Montes Públicos de Andalucía',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Inventario_VVPP?",
                name: "linea_base_deslindada",
                legend: "Vías Pecuarias Deslindadas",
                transparent: true,
            }),
			new M.layer.WMS({
                url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Inventario_VVPP?",
                name: "Inventario_VVPP",
                legend: "Inventario de Vías Pecuarias",
                transparent: true,
            }),
			new M.layer.WMS({
                url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Inventario_VVPP?",
                name: "Lugares_VVPP",
                legend: "Lugares Asociados a las VVPP",
                transparent: true,
            })	  
        ]
    }); 
	
/** Se añade grupo Espacios Naturales Protegidos **/
    configGroups.push({
        title: "Espacios Naturales Protegidos",
        description: "Conjunto de capas que permiten la generación de un mapa de Andalucía básico",
        overlays: [
			new M.layer.WMS({
                url: 'https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_RENPA?',
                name: 'eennpp',
                legend: 'Espacios Naturales Protegidos',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }),
			new M.layer.WMS({
                url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_RENPA?",
                name: "eennpp",
                legend: "Area de Influencia Socioeconómica de los Espacios Naturales Protegidos (RENPA)",
                transparent: true,
            }),
			new M.layer.WMS({
                url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_RENPA?",
                name: "red_natura_2000",
                legend: "Red Natura",
                transparent: true,
            })				  
        ]
    }); 
	

/** Se añade grupo Datos de referencia **/
  configGroups.push({
        title: "Datos de referencia",
        description: "Conjunto de capas que permiten la generación de un mapa de Andalucía básico",
        overlays: [
			new M.layer.WMS({
                url: "http://www.ideandalucia.es/services/DERA_g13_limites_administrativos/wms?",
                name: "g13_01_TerminoMunicipal",
                legend: "Términos Municipales",
                transparent: true,
            }),
			new M.layer.WMS({
                url: "http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/itaca/wms?",
                name: "contornos_itaca",
                legend: "Núcleos Urbanos",
                transparent: true,
            }),
            new M.layer.WMS({
                url: "http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/itaca/wms?",
                name: "etiquetas_itaca",
                legend: "Nombres Oficiales Núcleos Urbanos",
                transparent: true,
            }),
			new M.layer.WMS({
                url: 'http://ovc.catastro.meh.es/cartografia/INSPIRE/spadgcwms.aspx',
                name: 'CP.CadastralParcel',
                legend: 'Parcelas Catastrales',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?',
                name: 'Catastro',
                legend: 'Catastro',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }),
			new M.layer.WMS({
                url: 'https://www.callejerodeandalucia.es/servicios/cdau/wms?',
                name: 'CDAU_wms',
                legend: 'Vías y Portales CDAU',
                version: '1.1.1',
                transparent: true,
                tiled: true
            })        
         ]		
		  });
		  
		  
/** Se añade grupo Hidrografía **/
    configGroups.push({
        title: "Hidrografía",
        description: "Conjunto de capas que permiten la generación de un mapa de Andalucía básico",
        overlays: [
			new M.layer.WMS({
                url: 'https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_red_hidrografica_tramos?',
                name: '',
                legend: 'Red Hidrográfica',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }) ,	
			new M.layer.WMS({
                url: 'http://www.ideandalucia.es/services/DERA_g3_hidrografia/wms?',
                name: '03_06_Embalse',
                legend: 'Embalses',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }) 
        ]
    });		

/** Se añade grupo Red Viaria **/
    configGroups.push({
        title: "Red Viaria",
        description: "Conjunto de capas que permiten la generación de un mapa de Andalucía básico",
        overlays: [
			new M.layer.WMS({
                url: "https://www.ideandalucia.es/services/DERA_g9_transport_com/wms?",
                name: "g09_14_RedCarreteras",
                legend: "Carreteras",
                transparent: true,
            }),
        ]
    });	

/** Se añade grupo Relieve **/
    configGroups.push({
        title: "Relieve",
        description: "Conjunto de capas que permiten la generación de un mapa de Andalucía básico",
        overlays: [
			new M.layer.WMS({
                url: 'http://www.ideandalucia.es/services/DERA_g1_relieve/wms?',
                name: 'g01_03_CurvaNivel',
                legend: 'Curvas de Nivel',
                version: '1.1.1',
                transparent: true,
                tiled: true
            }),
			new M.layer.WMS({
                url: 'http://www.cma.junta-andalucia.es/medioambiente/mapwms/REDIAM_mde_andalucia',
                name: 'REDIAM. WMS Modelo Digital de Elevaciones (MDE) de Andalucía',
                legend: 'Modelo Digital de Elevaciones (MDE)',
                transparent: true,
                tiled: false
            }),
			new M.layer.WMS({
                url: 'https://www.ideandalucia.es/wms/sombras_siose?LAYERS=sombras_siose_continuo',
                name: 'sombras_siose',
                legend: 'Fondo Orográfico SIOSE',
                transparent: true,
                tiled: false
            })
        ]
    });		

    /** Se añade grupo Mapas topográficos **/
    configGroups.push({
        title: "Mapas topográficos",
        description: "Mapas topográficos de Andalucía",
        overlays: [		
			new M.layer.WMS({
                url: 'http://www.ideandalucia.es/wms/urbana500',
                name: 'Urbana_500',
                legend: 'Cartografía Urbana 1:500',
                transparent: true,
                tiled: false
            }),
		 	new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/bca/wms?',
                name: '12 Textos Infraestructuras Geográficas/12 Infraestructuras Geográficas/11 Textos Infraestructuras MedioAmbientales/11 Infraestructuras Medio Ambientales/10 Infraestructuras Hidraúlicas/09 Textos Infraestructuras Energéticas y Telecomunicaciones/09 Infraestructuras Energéticas y de Telecomunicaciones/08 Textos Infraestructuras Transportes/08 Infraestructuras de Transportes/07 Textos Servicios/07 Servicios/06 Textos Sistema Urbano/06 Sistema Urbano/05 Textos Red Viaria/05 Red Viaria/04 Textos Cubierta Terrestre/04 Cubierta Terrestre/03 Textos Red Hidrográfica/03 Red Hidrográfica/02 Textos Relieve/02 Relieve/01 Textos de la Base Cartográfica de Andalucía/01 Cartografía Base Cartográfica de Andalucía/00 Base Cartográfica de Andalucía',
                legend: 'Base Cartográfica de Andalucía 1:10.000',
                transparent: true,
                tiled: true
            }),
            new M.layer.WMS({
                url: 'https://www.ideandalucia.es/services/mta400v_2016/wms',
                name: 'mta400v_2016',
                legend: 'Topográfico 400.000 (vectorial)',
                transparent: true,
                tiled: true
            }),
            new M.layer.WMS({
                url: 'https://www.ideandalucia.es/wms/mta100v_2005',
                name: 'Mapa Topográfico de Andalucía 1:100000 Vectorial',
                legend: 'Topográfico 100.000 (vectorial)',
                transparent: true,
                tiled: true
            }),
            new M.layer.WMS({
                url: 'https://www.ideandalucia.es/wms/mta10r_2001-2013?',
                name: 'mta10r_2001-2013',
                legend: 'Topográfico 1:10000 (ráster)',
                transparent: true,
                tiled: true
            }),
            new M.layer.WMS({
                url: 'https://www.ideandalucia.es/wms/mta10v_2007?',
                name: 'mta10v_2007',
                legend: 'Topográfico 1:10000 (vectorial)',
                transparent: true,
                tiled: true
            })
        ]
    });

    /** Se añade grupo Mapas temáticos **/
    configGroups.push({
        title: "Mapas temáticos",
        description: "Mapas temáticos de Andalucía",
        overlays: [	
			new M.layer.WMS({
                url: 'https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_siose_2013_explot?',
                name: 'REDIAM',
                legend: 'Explotación de la Información del Proyecto SIOSE-Andalucia 2013',
                transparent: true,
                tiled: true
            }),
            new M.layer.WMS({
                url: 'https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_Biodiversidad_Andalucia?',
                name: 'REDIAM',
                legend: 'Mapa de Biodiversidad',
                transparent: true,
                tiled: true
            }),
			new M.layer.WMS({
                url: 'http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_distrib_formaciones_adehesadas_SIOSEA_2005',
                name: 'REDIAM',
                legend: 'Distribución de las Formaciones Adehesadas (SIOSE Andalucía)',
                transparent: true,
                tiled: false
            }),
			 new M.layer.WMS({
                url: "http://www.geoportalagriculturaypesca.es/geoide/sigpac/wms?",
                name: "SIGPAC19_RECINTOS",
                legend: "Recintos SIGPAC",
                transparent: true,
            }),
			 new M.layer.WMS({
                url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/geoserver-ieca/gridpob/wms?',
                name: 'gridpob_250',
                legend: 'Población',
                transparent: true,
                tiled: true
            })  
        ]
    });
    
 const paramsPlugin = {
  options: {
    panel: {
      className: "manageLayersIncendio",
      collapsedClass: "g-cartografia-capas2",
      tooltip: "Gestión de capas"
    }
  },
  config: {
    thematicLayers: {
      params: {
        groups: configGroups
      },
      options: {
        iconClass: "g-cartografia-capas",
        tooltip: "Capas temáticas"
      }
    },
    baseLayers: {
      params: {
        baseMaps: [],
        activatedBlankMap: true
      },
      options: {
        tooltip: "Capas de fondo"
      }
    }
  }
};

const manageLayers = new M.plugin.ManageLayers(paramsPlugin);
map.addPlugin(manageLayers);

/**********************************************************
 * PLUGIN CARGAR CAPAS WMS
 **********************************************************/
 
 var cargaWms = new M.plugin.AddServices();
 map.addPlugin(cargaWms);
  
/**********************************************************
 * PLUGIN INFO INCENDIO
 **********************************************************/
 
 var infoIncendio = new M.plugin.Plg_info_incendio();
 map.addPlugin(infoIncendio); 

