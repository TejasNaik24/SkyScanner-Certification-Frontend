import React, { useState } from "react";
import BpkCalendar from "bpk-component-calendar";
import { format } from "date-fns";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <h1>Flight Schedule</h1>
      <BpkCalendar
        id="calendar"
        onDateSelect={(date) => setSelectedDate(date)}
        selectedDate={selectedDate}
        formatMonth={(month) => format(month, "MMMM yyyy")}
        formatDateFull={(date) => format(date, "EEEE, do MMMM yyyy")}
        daysOfWeek={[
          { name: "Monday", abbreviation: "Mon" },
          { name: "Tuesday", abbreviation: "Tue" },
          { name: "Wednesday", abbreviation: "Wed" },
          { name: "Thursday", abbreviation: "Thu" },
          { name: "Friday", abbreviation: "Fri" },
          { name: "Saturday", abbreviation: "Sat" },
          { name: "Sunday", abbreviation: "Sun" },
        ]}
        weekStartsOn={0}
        changeMonthLabel="Change month"
        previousMonthLabel="Previous month"
        nextMonthLabel="Next month"
      />
      <button>Continue</button>
    </div>
  );
}

export default App;
