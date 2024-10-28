const PercentChange = ({ percent }) => {
  const colorPercent = percent >= 0 ? "text-green1" : "text-red1";

  return (
    <span className={colorPercent}>
      {percent ? ` ${percent.toFixed(2)} %` : "-"}
    </span>
  );
};

export default PercentChange;
