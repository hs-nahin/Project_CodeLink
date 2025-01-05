import { format } from 'date-fns';
import { Button, DatePicker, Popover, PopoverAction, PopoverContent, Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue, toast } from 'keep-react';
import { Calendar } from 'phosphor-react';
import { useState } from 'react';
import './App.css';
const App = () => {
  const [date, setDate] = useState(null)

  return (
    <><Select>
      <SelectAction className="w-[20rem]">
        <SelectValue placeholder="Select team" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="gd">Graphic Designer</SelectItem>
          <SelectItem value="ud">UX Designer</SelectItem>
          <SelectItem value="pm">Product Manager</SelectItem>
          <SelectItem value="wde">Web Designer</SelectItem>
          <SelectItem value="swe">Software Engineer</SelectItem>
          <SelectItem value="mm">Marketing Manager</SelectItem>
          <SelectItem value="wd">Web Developer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>    
    
    <Popover>
      <PopoverAction asChild>
        <Button color="secondary" size="lg" className="w-[286px] justify-start gap-2 border border-metal-100" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>

    <Button className='bg-green-600 hover:bg-green-500' onClick={() => toast.success('Keep React success toast')}>Success</Button>

    </>
  );
};

export default App;
