import React, { useState } from "react";

import { Calendar } from '@mantine/dates';
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

function ChooseDateCalendar() {
    const [calendatValue, setCalendatValue] = useState(new Date());

    return (
        <Calendar
            value={calendatValue}
            onChange={setCalendatValue}
            allowLevelChange={false}
            dayStyle={
                (date) => {
                    dayjs.extend(isToday);

                    return dayjs(date).isToday() && !dayjs(calendatValue).isToday()
                        ? { backgroundColor: "red", color: "white" } // TODO change colors
                        : null;
                }
            }
        />
    );
}

export default ChooseDateCalendar;