/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Wrapper from "../layout/Wrapper";

const Stats = () => {
  const statsData = [
    { label: "Mijozlar", end: 500 },
    { label: "Loyihalar", end: 120 },
    { label: "Yillar Tajribasi", end: 10 },
  ];

  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-[50px] mx-[20px] xl:mx-0">
        {statsData.map((stat, index) => (
          <StatCard key={index} label={stat.label} end={stat.end} />
        ))}
      </div>
    </Wrapper>
  );
};

const StatCard = ({ label, end }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setValue(end);
      } else {
        setValue(start);
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="p-6 text-black border-[1px] border-slate-300 rounded-xl">
      <p className="text-4xl font-bold">{value}+</p>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default Stats;
