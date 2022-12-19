import app from '@/app';
import getPluscodesCDN from '@/services/plusCodesCDN';

const pluscodeData = async (request, response) => {
  try {
    const OpenLocationCode = await getPluscodesCDN();
    const { decode } = OpenLocationCode;

    const { code } = request.query;

    const generatedCoordinates = decode(code);

    const result = {};
    result.location = generatedCoordinates;

    response.status(200);
    response.send(result);
  } catch (error) {
    console.log(error);
    response.status(500);
    response.send(error);
  }
};

export default app().get(pluscodeData);
