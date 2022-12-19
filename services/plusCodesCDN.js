import axios from 'axios';
import vm from 'vm';

export default async function getPlusCodesCDN() {
  const url =
    'https://cdn.jsdelivr.net/openlocationcode/latest/openlocationcode.js';
  const plusCodesCDN = await axios.get(url);
  const context = {};
  vm.runInNewContext(plusCodesCDN.data, context);
  return context.OpenLocationCode;
}
