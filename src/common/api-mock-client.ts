import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { coloredLog } from "./api-Helpers";

import doctorsData from "../mock-data/docs-mock-data.json";
import clinicsData from "../mock-data/clinics-mock-data.json";

const mockClient = axios.create();

const mock = new MockAdapter(mockClient);

const queryData = [
  "city",
  "district",
  [
    {
      datatype: "",
      name: "",
      id: "",
    },
  ],
];

console.log("req orig docs >>>", doctorsData);
mock.onGet("/doctors").reply(200, doctorsData);
mock.onGet("/clinics").reply(200, clinicsData);
mock.onGet("/search").reply((config) => {
  const { city, district, query } = config.params;
  if (city !== queryData[0] && district !== queryData[1]) {
  }
  // TODO: query processing
  coloredLog("response >>>", config.params);
  return [
    200,
    {
      // // TODO: return value
    },
  ];
});

export { mockClient };
