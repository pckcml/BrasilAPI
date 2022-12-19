import app from '@/app';
import getPlusCodesCDN from '@/services/plusCodesCDN';

const coordenadaData = async (request, response) => {
  try {
    const OpenLocationCode = await getPlusCodesCDN();
    const { encode } = OpenLocationCode;

    const { lat, lon, precise } = request.query;

    let precision;

    if (precise) {
      precision = 11;
    } else {
      precision = 10;
    }

    const generatedPlusCode = encode(lat, lon, precision);

    const result = {};
    result.pluscode = generatedPlusCode;

    response.status(200);
    response.send(result);
  } catch (error) {
    response.status(500);
    response.send(error);
  }
};

export default app().get(coordenadaData);

// localhost:3000/api/pluscode/coordenada/v1?lat=-23.6290839&lon=-46.5867412&precise=true
