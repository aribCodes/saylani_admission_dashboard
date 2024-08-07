import {useEffect,useState} from "react"
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import {useGlobalContext} from "../context/Context"


const PieChart = () => {
  const {token}=useGlobalContext()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [courseNames, setCourseNames] = useState([]);
  useEffect(() => {
    const fetchFeesData = async () => {
      const subjectName=[]
      try {
        const response = await fetch(
          "http://localhost:3005/admin/get-all-applicants",{
            headers:{"Authorization":`Bearer ${token}`}
          }
        );
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
          subjectName.push(data[i].course)
        }
        const names=subjectName.filter((value,index)=>{
          return subjectName.indexOf(value) === index
        })
        setCourseNames(names)
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchFeesData();
  }, []);

  const Data = [
    {
      id: `${courseNames[0]}`,
      label: `${courseNames[0]}`,
      value: 4,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: `${courseNames[1]}`,
      label: `${courseNames[1]}`,
      value: 11,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: `${courseNames[2]}`,
      label: `${courseNames[2]}`,
      value: 10,
      color: "hsl(291, 70%, 50%)",
    },
    {
      id: `${courseNames[3]}`,
      label: `${courseNames[3]}`,
      value: 5,
      color: "hsl(229, 70%, 50%)",
    },
    {
      id: `${courseNames[4]}`,
      label: `${courseNames[4]}`,
      value: 8,
      color: "hsl(344, 70%, 50%)",
    },
    {
      id: `${courseNames[5]}`,
      label: `${courseNames[5]}`,
      value: 4,
      color: "hsl(340, 70%, 50%)",
    },
    {
      id: `${courseNames[6]}`,
      label: `${courseNames[6]}`,
      value: 15,
      color: "hsl(349, 70%, 50%)",
    },
    
  ];
  return (
    <ResponsivePie
      data={Data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;

