import { CalendarDays } from "lucide-react";
import { bookingSteps, services } from "@/lib/site";

const dateOptions = [
  ["06", "10"],
  ["06", "11"],
  ["06", "12"],
  ["06", "13"],
  ["06", "14"],
];

const timeOptions = ["10:00", "11:30", "1:00", "2:30", "4:00"];

export function BookingPlanner() {
  return (
    <div className="booking-planner" aria-label="Appointment planning interface">
      <div className="booking-step-rail">
        {bookingSteps.map((step, index) => (
          <div className="booking-step-item" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>

      <div className="booking-scheduler">
        <div className="service-selector" aria-label="Service selection">
          {services.map((service, index) => (
            <label className="service-option-card" key={service.title}>
              <input defaultChecked={index === 0} name="booking-service" type="radio" />
              <span>
                <b>{service.title}</b>
                <small>{service.time}</small>
              </span>
            </label>
          ))}
        </div>

        <div className="calendar-panel" aria-label="Date and time selection">
          <div className="calendar-shell">
            <CalendarDays aria-hidden="true" size={20} />
            <div className="date-grid">
              {dateOptions.map(([month, day], index) => (
                <label className="date-pill" key={`${month}-${day}`}>
                  <input defaultChecked={index === 1} name="booking-date" type="radio" />
                  <span>
                    <small>{month}</small>
                    <b>{day}</b>
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="time-grid">
            {timeOptions.map((time, index) => (
              <label className="time-pill" key={time}>
                <input defaultChecked={index === 1} name="booking-time" type="radio" />
                <span>{time}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

