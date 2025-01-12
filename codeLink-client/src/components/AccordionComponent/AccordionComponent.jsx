import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from 'keep-react'
  
export const AccordionComponent = () => {
    return (
      <Accordion flush={true} type="single" collapsible className='mb-10'>
        <AccordionItem value="value-3">
          <AccordionAction>
            <AccordionTitle className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
              Q. How does real-time collaboration work?
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            Our platform uses WebSocket technology to enable instant synchronization between all collaborators in a room. Changes made by any user are immediately reflected for all participants, making it perfect for pair programming and team collaboration.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="value-4">
          <AccordionAction>
            <AccordionTitle className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
              Q. What programming languages are supported?
            </AccordionTitle>
            <AccordionIcon />
          </AccordionAction>
          <AccordionContent>
            We support syntax highlighting for over 4 programming languages including JavaScript, Python, Java, C++. New languages are added regularly based on user requests.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}
