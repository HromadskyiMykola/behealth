import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { coloredLog } from "./api-Helpers";

import doctorsData from "../mock-data/docs-mock-data.json";
import clinicsData from "../mock-data/clinics-mock-data.json";

const mockClient = axios.create();

const mock = new MockAdapter(mockClient, { delayResponse: 1000 });

const queryData: [
  string,
  string,
  { id: number; name: string; dataType: string }[]
] = ["city", "district", []];

const selectorData = (city: string, district: string, query: string) => {
  if (queryData[0] !== city && queryData[1] !== district) {
    queryData[0] = city;
    queryData[1] = district;
    queryData[2] = [];

    [...doctorsData, ...clinicsData].forEach((item) => {
      if (item.city === city && item.district === district) {
        queryData[2].push({
          id: item.id,
          name: item.name,
          dataType: item.dataType,
        });
      }
    });
  }

  return queryData[2].filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // return filteredQueryData;
};

console.log("req orig docs >>>", doctorsData);
mock.onGet("/doctors").reply(200, doctorsData);
mock.onGet("/clinics").reply(200, clinicsData);
mock.onGet("/search").reply((config) => {
  coloredLog("params >>>", config.params);
  const { city, district, query } = config.params;

  const data = selectorData(city, district, query);

  coloredLog("res search data>>>", data);

  return [
    200,
    {
      data,
    },
  ];
});

export { mockClient };
