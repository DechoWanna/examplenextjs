import axios from "axios";
import { Imake } from "../types/DataMake";

export async function fetchData() {
  const response = await axios.get(
    "https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt"
  );
  let restaurants = response.data;

  restaurants = restaurants.replaceAll("?", "");
  restaurants = restaurants.replaceAll(";", "");
  restaurants = restaurants.replaceAll("({", "");
  restaurants = restaurants.replaceAll("})", "");
  restaurants = restaurants.replaceAll("Makes", "");
  restaurants = restaurants.replaceAll("Makes", "");
  const result = (restaurants = restaurants.split("\n"));
  restaurants = result[0].replace(/['"]+/g, "");
  restaurants = restaurants.replaceAll("{", "");
  restaurants = restaurants.replaceAll("[", "");
  restaurants = restaurants.replaceAll("]", "");
  restaurants = restaurants.replace(":", "");
  let _obj: any = [];
  let _objArray: Imake[] = [];
  restaurants.split("}").map((data: any, inx: number) => {
    if (inx !== 0) {
      _obj.push("" + data.replace(",", "") + "");
    }
  });
  let _objFilter = _obj.filter((item: any) => item.length !== 0);
  var properties = _objFilter[0].split(",");
  _objFilter.map((item: any) => {
    var properties = item.split(",");
    var obj: any = {};
    properties.forEach(function (property: any) {
      var tup = property.split(":");
      obj[tup[0]] = tup[1];
    });
    _objArray.push(obj);
  });
  return _objArray;
  //     https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e4
  // 0e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt
}
