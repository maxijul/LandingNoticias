import { Article, ArticleThumbnail } from './model';

export const testArticleThumbnail: ArticleThumbnail = {
  category: 'clima',
  title: 'fuertes lluvias en la ciudad provocaron inundamientos',
  imageName: 'clima_lluvia.jpeg',
};

export const testArticle: Article = {
  id: 'fuertes-lluvias-en-la-ciudad-provocaron-inundaciones',
  title: 'fuertes lluvias en la ciudad provocaron inundaciones',
  category: 'clima',
  createdAt: '2022-10-20 16:40:34',
  createdBy: 'Facundo Villalobo',
  modifiedAt: '2022-10-20 18:45:22',
  description: [
    {
      content: `Un impresionante temporal azotó este miércoles la ciudad de San Miguel de Tucumán
        y causó inundaciones, daños materiales e imágenes insólitas que se viralizaron en las redes sociales, como
        por ejemplo un vecino utilizando un kayak para desplazarse por las calles anegadas. De acuerdo al Servicio Meteorológico Nacional, se espera
        que las lluvias continúen hasta la madrugada del viernes.`,
      imageName: 'clima_lluvia.jpeg',
    },
    {
      content: `La tormenta se desató en horas de la tarde y, según lo que informaron los medios locales, también se sintió con mayor fuerza en los alrededores de la capital provincial, más precisamente en el sur de la capital tucumana.
        Una de las zonas más afectadas fue en la intersección de avenida 24 de Septiembre y Marco Avellaneda, donde se ubica el Puente Ferroviario Estación Central Córdoba, en el ingreso al centro de la ciudad. La Municipalidad local tuvo que interrumpir el tránsito debido a la acumulación de agua en ese lugar: de acuerdo al diario El Tucumano, el agua superó los dos metros de altura en pleno temporal.
        Una vez que las intensas lluvia cesaron, la Dirección de Defensa Civil de la Provincia de Tucumán inició un relevamiento en las zonas afectadas.`,
      imageName: 'clima_lluvia.jpeg',
    },
    {
      content: `De acuerdo a los llamados que ingresan a la línea 103, que funciona las 24 horas, vamos registrando que la mayoría de ellos llegaron desde los distintos barrios de la zona sur de San Miguel de Tucumán. Ante esta situación, se deriva a las delegaciones municipales de Defensa Civil, en este caso la de la capital, para que tomen intervención en las áreas afectadas. De ser necesario, la Provincia está para reforzar el trabajo
       que realicen los municipios”, dijo el titular de ese organismo, Fernando Torres.
        `,
      imageName: 'clima_lluvia.jpeg',
    },
  ],
};
