import React from 'react';
import { Card, Text, Divider, Title, Group, Badge } from '@mantine/core';

const MedicalRecord = ({ patientName, doctorName, medicalReport, prescription }) => {
  return (
    <Card shadow="sm" padding="md">
      <Title order={2} style={{ marginBottom: 10 }}>
        Medical Record for {patientName}
      </Title>
      <Divider style={{ marginBottom: 20 }} />

      <Group spacing={10}>
        <Text size="sm" style={{ fontWeight: 'bold' }}>
          Doctor: {doctorName}
        </Text>
        <Badge color="red" style={{ alignSelf: 'flex-start' }}>
          Urgent
        </Badge>
      </Group>

      <Divider style={{ margin: '20px 0' }} />

      <Group spacing={15}>
        <Text>{medicalReport}</Text>
        <Group direction="column" spacing={5}>
          <Text weight={500}>Prescription:</Text>
          <Text>{prescription}</Text>
        </Group>
      </Group>
    </Card>
  );
};

const MedicalRecordsPage = () => {
  const records = [
    {
      patientName: 'John Smith',
      doctorName: 'Dr. Jane Doe',
      medicalReport: 'Patient complains of cough and sore throat. Suspected viral infection.',
      prescription: 'Acetaminophen 500mg, Guaifenesin 600mg'
    },
    {
      patientName: 'Jane Doe',
      doctorName: 'Dr. John Smith',
      medicalReport: 'Patient reports difficulty sleeping and frequent headaches. Suspected stress-related disorder.',
      prescription: 'Zolpidem 10mg, Alprazolam 0.5mg'
    },
    {
        patientName: 'Mohamed',
        doctorName: 'Dr. John Smith',
        medicalReport: 'Patient reports difficulty sleeping and frequent headaches. Suspected stress-related disorder.',
        prescription: 'Zolpidem 10mg, Alprazolam 0.5mg'
      }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Group spacing={20}>
        {records.map((record, index) => (
          <MedicalRecord key={index} {...record} />
        ))}
      </Group>
    </div>
  );
};

export default MedicalRecordsPage;
