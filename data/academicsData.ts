export const branches = [
  { id: 'cse', name: 'Computer Science & Engineering', short: 'CSE' },
  { id: 'it', name: 'Information Technology', short: 'IT' },
  { id: 'ece', name: 'Electronics & Communication', short: 'ECE' },
  { id: 'ee', name: 'Electrical Engineering', short: 'EE' },
  { id: 'me', name: 'Mechanical Engineering', short: 'ME' },
  { id: 'ce', name: 'Civil Engineering', short: 'CE' }
];

export const years = [
  { id: '1', name: '1st Year (I & II Sem)' },
  { id: '2', name: '2nd Year (III & IV Sem)' },
  { id: '3', name: '3rd Year (V & VI Sem)' },
  { id: '4', name: '4th Year (VII & VIII Sem)' }
];

export const schemes = [
  // Mock data generator for schemes
  ...branches.flatMap(branch => 
    years.flatMap(year => 
      [
        {
          id: `${branch.id}-${year.id}-scheme1`,
          branchId: branch.id,
          yearId: year.id,
          title: `${branch.short} - ${year.name} Flexible Scheme Matrix`,
          date: 'Updated: Aug 2025',
          link: '#'
        },
        {
          id: `${branch.id}-${year.id}-scheme2`,
          branchId: branch.id,
          yearId: year.id,
          title: `${branch.short} Detailed Syllabus structure`,
          date: 'Updated: Jul 2025',
          link: '#'
        }
      ]
    )
  )
];
