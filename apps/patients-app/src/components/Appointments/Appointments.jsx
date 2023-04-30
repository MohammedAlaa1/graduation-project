import { useState } from 'react';
import { Button, Card, Input, Select } from '@mantine/core';

// Sample data for appointments
const appointments = [
  {
    id: 1,
    date: '2023-05-05',
    doctor: 'Dr. John Doe',
    specialty: 'Cardiology'
  },
  {
    id: 2,
    date: '2023-05-08',
    doctor: 'Dr. Jane Smith',
    specialty: 'Dermatology'
  },
  {
    id: 3,
    date: '2023-05-10',
    doctor: 'Dr. Peter Parker',
    specialty: 'Neurology'
  }
];

export default function AppointmentPage() {
  const [appointmentData, setAppointmentData] = useState(appointments);

  const handleDeleteAppointment = (id) => {
    // Remove the appointment from the appointmentData array
    const updatedData = appointmentData.filter((appointment) => appointment.id !== id);
    setAppointmentData(updatedData);
  };

  const handleUpdateAppointment = (id, updatedData) => {
    // Update the appointment with the new data
    const updatedAppointments = appointmentData.map((appointment) => {
      if (appointment.id === id) {
        return { ...appointment, ...updatedData };
      } else {
        return appointment;
      }
    });
    setAppointmentData(updatedAppointments);
  };

  return (
    <div>
      <h1>Your Appointments</h1>
      {appointmentData.map((appointment) => (
        <Card key={appointment.id} style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h2>{appointment.doctor}</h2>
              <p>{appointment.specialty}</p>
              <p>{appointment.date}</p>
            </div>
            <div>
              <Button
                color="red"
                variant="outline"
                onClick={() => handleDeleteAppointment(appointment.id)}
              >
                Delete
              </Button>
              <Button
                style={{ marginLeft: '1rem' }}
                color="blue"
                variant="outline"
                onClick={() =>
                  handleUpdateAppointment(appointment.id, {
                    date: '2023-06-01', // Updated date value
                    doctor: 'Dr. Jane Smith' // Updated doctor value
                  })
                }
              >
                Update
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
