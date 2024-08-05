import React,{ useEffect,useState } from "react";
import Chart from "react-apexcharts";
// import { useTheme } from "@mui/material";
// import { ResponsiveBar } from "@nivo/bar";
// import { tokens } from "../theme";
// import { mockBarData as data } from "../data/mockData";
// { isDashboard = false }
const BarChart = () => {
  const [courseData,setCourseData]=useState([])
  const [courseNames,setCourseNames]=useState([])
  const [totalEnrollStudent,setTotalEnrollStudent]=useState([])

  useEffect( ()=>{
    const names=[]
    const totalStudent=[]
    const subjectName=[]
    const fetchData=async()=>{
      try {
        const response=await fetch('http://localhost:3005/admin/get-all-courses');
        const data=await response.json()
        for(let i=0;i<data.length;i++){
          totalStudent.push(data[i].applicant.length)
            names.push(data[i].courseName)
        }
        const courses=subjectName.filter((value,index)=>{
          return subjectName.indexOf(value) === index
        })
        setCourseData(data)
        setCourseNames(courses)
        setTotalEnrollStudent(totalStudent)
      } catch (error) {
        console.log("Error",error)
        
      }
  }
  fetchData()
},[])
  return (
  <> 
   <React.Fragment>
      <div className="container-fluid mb-5">
        <Chart
          type="bar"
          width='100%'
          height={290}
          series={[
            {
              name: "Social Media Subscriber",
              data:totalEnrollStudent,
              color:"#1f2ab4"
            }
            //   data:[totalEnrollStudent.map((element,index)=>{
            //     return (
            //       totalEnrollStudent[index].length
            //     )
            //   })] ,
            // },
          ]}
          options={{
          
            colors: ["#867373"],
            theme: { mode: "#4cceac" },

            xaxis: {
              tickPlacement: "on",
              categories: courseNames,
              title: {
                text: "Total Applicant Enroll in Course",
                style: { color: "white", fontSize: 24 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["#4cceac"] },
              },
                 title: {
                 text: "",
                 style: { color: "#4cceac", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  </>
    // <ResponsiveBar
    //   data={data}
    //   theme={{
    //     // added
    //     axis: {
    //       domain: {
    //         line: {
    //           stroke: colors.grey[100],
    //         },
    //       },
    //       legend: {
    //         text: {
    //           fill: colors.grey[100],
    //         },
    //       },
    //       ticks: {
    //         line: {
    //           stroke: colors.grey[100],
    //           strokeWidth: 1,
    //         },
    //         text: {
    //           fill: colors.grey[100],
    //         },
    //       },
    //     },
    //     legends: {
    //       text: {
    //         fill: colors.grey[100],
    //       },
    //     },
    //   }}
    //   keys={["Web and App"]}
    //   indexBy="country"
    //   margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    //   padding={0.3}
    //   valueScale={{ type: "linear" }}
    //   indexScale={{ type: "band", round: true }}
    //   colors={{ scheme: "nivo" }}
    //   defs={[
    //     {
    //       id: "dots",
    //       type: "patternDots",
    //       background: "inherit",
    //       color: "#38bcb2",
    //       size: 4,
    //       padding: 1,
    //       stagger: true,
    //     },
    //     {
    //       id: "lines",
    //       type: "patternLines",
    //       background: "inherit",
    //       color: "#eed312",
    //       rotation: -45,
    //       lineWidth: 6,
    //       spacing: 10,
    //     },
    //   ]}
    //   borderColor={{
    //     from: "color",
    //     modifiers: [["darker", "1.6"]],
    //   }}
    //   axisTop={null}
    //   axisRight={null}
    //   axisBottom={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: isDashboard ? undefined : "Course", // changed
    //     legendPosition: "middle",
    //     legendOffset: 32,
    //   }}
    //   axisLeft={{
    //     tickSize: 5,
    //     tickPadding: 5,
    //     tickRotation: 0,
    //     legend: isDashboard ? undefined : "No. of Applicant", // changed
    //     legendPosition: "middle",
    //     legendOffset: -40,
    //   }}
    //   enableLabel={false}
    //   labelSkipWidth={12}
    //   labelSkipHeight={12}
    //   labelTextColor={{
    //     from: "color",
    //     modifiers: [["darker", 1.6]],
    //   }}
    //   legends={[
    //     {
    //       dataFrom: "keys",
    //       anchor: "bottom-right",
    //       direction: "column",
    //       justify: false,
    //       translateX: 120,
    //       translateY: 0,
    //       itemsSpacing: 2,
    //       itemWidth: 100,
    //       itemHeight: 20,
    //       itemDirection: "left-to-right",
    //       itemOpacity: 0.85,
    //       symbolSize: 20,
    //       effects: [
    //         {
    //           on: "hover",
    //           style: {
    //             itemOpacity: 1,
    //           },
    //         },
    //       ],
    //     },
    //   ]}
    //   role="application"
    //   barAriaLabel={function (e) {
    //     return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    //   }}
    // />
  );
};

export default BarChart;
