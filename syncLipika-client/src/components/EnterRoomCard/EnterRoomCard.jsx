'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
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
  const createNewRoom = (e) => {
    e.preventDefault();
  }
  return (
    <Card className="max-w-md">
      <CardContent className="space-y-4">
        <CardHeader>
          <CardTitle>Enter the SyncSpace</CardTitle>
        </CardHeader>

        <Divider>Join</Divider>
        <form className="space-y-3">
          <fieldset className="space-y-2">
            <Label htmlFor="email">SyncSpace ID*</Label>
            <div className="relative">
              <Input id="email" type="email" placeholder="Enter SyncSpace ID" className="ps-11" />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-2">
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
            className="!mt-4 block w-full ease-in-out duration-300 bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Join Room
          </Button>
        </form>
        <div className="text-sm flex justify-between items-center">
          <span>Don&apos;t have a room ID?</span>
          <div className="flex ml-1 items-center gap-1">
            <span>Create</span>
            <Breadcrumb onClick={createNewRoom}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-emerald-600 hover:underline">
                    new room
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
