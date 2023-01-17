import { DaysWeek, DayOfWeek } from "./styled";
const Planner = () => {
  return (
    <DaysWeek>
      <DayOfWeek day="monday">Monday</DayOfWeek>
      <DayOfWeek day="tuesday">Tuesday</DayOfWeek>
      <DayOfWeek day="wednesday">Wednesday</DayOfWeek>
      <DayOfWeek day="thursday">Thursday</DayOfWeek>
      <DayOfWeek day="friday">Friday</DayOfWeek>
      <DayOfWeek day="saturday">Saturday</DayOfWeek>
      <DayOfWeek day="sunday">Sunday</DayOfWeek>
    </DaysWeek>
  );
};

export default Planner;
