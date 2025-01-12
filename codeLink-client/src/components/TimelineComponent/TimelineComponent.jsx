import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from 'keep-react';

export const TimelineComponent = () => {
  const data = [
    {
      date: 'Step 1',
      title: 'Enter Your Details',
      description: 'Provide your User ID and preferred username to create your identity in the collaborative environment.',
      isComplete: true,
    },
    {
      date: 'Step 2',
      title: 'Join or Create Room',
      description: "Click the 'Join Room' button to enter an existing collaborative session or create a new one instantly.",
      isComplete: false,
    },
    {
      date: 'Step 3',
      title: 'Start Coding Together',
      description: 'Begin collaborating in real-time with your team members. See changes as they happen and code together seamlessly.',
      isComplete: false,
    },
  ];

  return (
    <Timeline className="border-dotted">
      {data.map((step, index) => (
        <TimelineItem key={index}>
          <TimelinePoint />
          <TimelineContent>
            <h1 className="text-body-3 font-medium text-metal-900 dark:text-white">{step.title}</h1>
            <p className="text-body-5 font-normal leading-[1.4] text-metal-400 dark:text-metal-300">{step.date}</p>
            <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">{step.description}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
