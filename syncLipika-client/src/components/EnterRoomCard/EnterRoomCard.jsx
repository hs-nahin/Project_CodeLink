
'use client'
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Divider,
    Input,
    InputIcon,
    Label
} from 'keep-react'
import { Envelope, Lock } from 'phosphor-react'

export const EnterRoomCard = () => {
  return (
    <Card className="max-w-sm">
      <CardContent className="space-y-3">
        <CardHeader>
          <CardTitle>Enter the SyncSpace</CardTitle>
        </CardHeader>

        <Divider>Join</Divider>
        <form className="space-y-2">
          <fieldset className="space-y-1">
            <Label htmlFor="email">SyncSpace ID*</Label>
            <div className="relative">
              <Input id="email" type="email" placeholder="Enter SyncSpace ID" className="ps-11" />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">User Name*</Label>
            <div className="relative">
              <Input id="password" placeholder="Enter username" type="text" className="ps-11" />
              <InputIcon>
                <Lock size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <Button 
            type="submit" 
            className="!mt-3 block w-full ease-in-out duration-300 bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Join Room
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
