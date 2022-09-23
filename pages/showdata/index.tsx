import { Collapse, Input, Space, Table, Tag, Typography } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useMake from "../../hooks/useMake";
import useSession from "../../hooks/useSession";
import { Uropean } from "../../jsonfile/JsonFile";
import { Imake } from "../../types/DataMake";
const { Panel } = Collapse;
type Props = {};
interface DataType {
  make_country: string;
  allDisplay: Imake[];
  sum: number;
}

const { Text, Link } = Typography;
const Index = (props: Props) => {
  const { status, setStatus } = useSession();
  const [country, setCountry] = useState<DataType[]>([]);
  const [uropean, setUropean] = useState<DataType[]>([]);
  const [countryFilter, setCountryFilter] = useState<DataType[]>([]);
  const { make } = useMake();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/accessdenied");
    }
    countryData();
  }, [status]);

  async function countryData() {
    let _country: string[] = [];
    let _uropeanArrayObj = [];
    let _uropean: {
      name: string;
      code: string;
    }[] = Uropean;
    for (let i = 0; i < make.length; i++) {
      const element = make[i];
      _country.push(element.make_country);
    }

    let uniqueCountry = _country.filter((v, i, a) => a.indexOf(v) === i);
    let _obj = [];
    for (let i = 0; i < uniqueCountry.length; i++) {
      let _objArray = [];
      const _element = uniqueCountry[i];
      let _countryFilter = make.filter(
        (Item) => _element === Item.make_country
      );

      if (_countryFilter.length != 0) {
        _obj.push({
          make_country: _element,
          allDisplay: _countryFilter,
          sum: _countryFilter.length,
        });
      } else {
        _obj.push({ make_country: _element, allDisplay: [], sum: 0 });
      }
    }
    for (let i = 0; i < _uropean.length; i++) {
      const element = _uropean[i];
      let _filteUropean = _obj.filter(
        (item) => item.make_country.toLowerCase() === element.name.toLowerCase()
      );
      if (_filteUropean.length !== 0) _uropeanArrayObj.push(_filteUropean[0]);
    }

    setCountry(_obj);
    setCountryFilter(_obj);
    setUropean(_uropeanArrayObj);
  }
  const columns: ColumnsType<DataType> = [
    {
      title: "Country",
      dataIndex: "make_country",
      key: "make_country",
      width: 200,
      // responsive: ["sm"],
      sorter: (a, b) => a.make_country.length - b.make_country.length,
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Display",
      key: "allDisplay",
      dataIndex: "allDisplay",
      // width: 600,
      // responsive: ["sm"],
      sorter: (a, b) => a.make_country.length - b.make_country.length,
      render: (_, { allDisplay }) => (
        <>
          {allDisplay.map((tag) => {
            return (
              <Tag key={tag.make_display}>{tag.make_display.toUpperCase()}</Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Display Sum",
      dataIndex: "sum",
      key: "sum",
      // responsive: ["sm"],
      width: 200,
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.sum - b.sum,
    },
  ];

  console.log("status", status);
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  if (status === "unauthenticated") return <></>;
  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%" }}>
            <Collapse defaultActiveKey={["1"]} onChange={onChange}>
              <Panel
                header="แต่ละประเทศผลิตรถกี่ยี่ห้อ - แต่ละประเทศมีรถยี่ห้ออะไรบ้าง - USA ผลิตรถกี่ยี่ห้อ อะไรบ้าง"
                key="1"
              >
                <Input
                  placeholder="ค้นหาโดยชื่อประเทศ"
                  onChange={(e) => {
                    if (e.target.value.length === 0) {
                      countryData();
                      return;
                    }
                    let _filter = country.filter((item) => {
                      if (
                        item.make_country
                          .toLowerCase()
                          .indexOf(e.target.value.toLowerCase()) !== -1
                      ) {
                        return true;
                      }
                    });
                    console.log("_filter", _filter);

                    setCountryFilter([..._filter]);
                  }}
                />
                <Table
                  size="small"
                  columns={columns}
                  dataSource={countryFilter}
                  scroll={{ x: 1500, y: 300 }}
                />
              </Panel>
              <Panel header="รถยุโรป" key="2">
                <Table
                  size="small"
                  columns={columns}
                  dataSource={uropean}
                  scroll={{ x: 1500, y: 300 }}
                />
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
