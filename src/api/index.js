let axios = require('axios')

const url = 'https://api.covid19india.org/state_district_wise.json';

export const fetchDistrictDetails = async (state, district) => {
    try {
        const { data } = await axios.get(`${url}`);
        console.log(district)
        console.log(state)
        const {districtData} = data[state];
        let res = districtData[district]
        const {active, confirmed, recovered} = res;

        return {active, confirmed, recovered};

      } catch (error) {
        return error;
      }
};


export const fetchStateDetails = async (state) => {
    try {
        const { data } = await axios.get(`${url}`);
        console.log(data)
        console.log(state)
        const {districtData} = data[state];

        let result = {};
        let districts = [];
        let active=0, confirmed=0, recovered=0;
        for (var key of Object.keys(districtData)) {
            districts.push(key);
            active+=districtData[key]["active"];
            confirmed+=districtData[key]["confirmed"];
            recovered+=districtData[key]["recovered"];
            console.log(active)
        }
        result["districts"] = districts;
        result["active"] = active;
        result["confirmed"] = confirmed;
        result["recovered"] = recovered;

        console.log(result);
        return result;

      } catch (error) {
        return error;
      }
};


export const fetchStates = async () => {
    try {
      const { data } = await axios.get(`${url}`);
        return Object.keys(data).splice(1);
    } catch (error) {
      return error;
    }
};


  