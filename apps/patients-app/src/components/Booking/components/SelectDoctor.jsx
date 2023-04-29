import { forwardRef, useRef } from "react"
import { Group, Avatar, Text, Select } from "@mantine/core"

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    value: "Bender Bending Rodríguez",
    description: "Fascinated with cooking",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    value: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
]

// const SelectItem = forwardRef(
//   ({ image, label, description, ref, ...props }) => (
//     <div ref={ref} {...props}>
//       <Group noWrap>
//         <Avatar src={image} alt="Doctor Avatar" />

//         <div>
//           <Text size="sm">{label}</Text>
//           <Text size="xs" opacity={0.65}>
//             {description}
//           </Text>
//         </div>
//       </Group>
//     </div>
//   )
// )

export default function SelectDoctor({ form,getSpecialitySelector }) {
  function getSpeciality() {
    console.log("its me new array",getSpecialitySelector({ value: form.values.specilization }))
    return getSpecialitySelector({ value: form.values.specilization })
  }
  return (
    <Select
      allowDeselect
      clearable
      creatable
      name="doctor"
      label="Choose doctor"
      placeholder="Pick a doctor"
      //   itemComponent={SelectItem}
      data={getSpeciality()}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description?.toLowerCase().includes(value.toLowerCase().trim())
      }
      {...form.getInputProps("doctor")}
    />
  )
}
