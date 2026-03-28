export type Priority = 'Urgent' | 'Important' | 'General';

export type Announcement = {
  id: string;
  title: string;
  date: string;
  priority: Priority;
  description: string;
  link?: string;
};

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Mid-Sem Examination Schedule Revised',
    date: 'March 28, 2026',
    priority: 'Urgent',
    description: 'The schedule for the ongoing Mid-Semester examinations has been revised due to unforeseen circumstances. Please check the updated timetable.',
    link: '#'
  },
  {
    id: '2',
    title: 'Registration for Campus Placement 2026 Drive',
    date: 'March 25, 2026',
    priority: 'Important',
    description: 'Pre-final year students are required to register for the upcoming placement training sessions starting next week.',
    link: '#'
  },
  {
    id: '3',
    title: 'Annual Tech Fest "Cygnus" Dates Announced',
    date: 'March 20, 2026',
    priority: 'General',
    description: 'Get ready for MITS largest technical festival. Dates are confirmed for the first week of April.',
    link: '#'
  },
  {
    id: '4',
    title: 'Hostel Allocation for Next Academic Session',
    date: 'March 15, 2026',
    priority: 'Important',
    description: 'Important notice regarding hostel fee payment and room allocation for 2nd and 3rd year students.',
    link: '#'
  },
  {
    id: '5',
    title: 'Guest Lecture on AI & Machine Learning',
    date: 'March 10, 2026',
    priority: 'General',
    description: 'Join us for an insightful session by industry experts on the future of AI. Open for all CSE/IT students.',
  }
];
