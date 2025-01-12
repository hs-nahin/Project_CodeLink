import { Card, CardContent, CardDescription, CardTitle } from 'keep-react'
import 'react'

export const FeatureCard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="max-w-md hover:border-green-500 hover:shadow-md hover:bg-gradient-to-r from-green-400 to-green-500 hover:text-transparent hover:bg-clip-text transition duration-300">
        <CardContent>
          <CardTitle>Real-time Collaboration</CardTitle>
          <CardDescription>
            Code together with your team in real-time, seeing changes as they happen.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="max-w-md hover:border-green-500 hover:shadow-md hover:bg-gradient-to-r from-green-400 to-green-500 hover:text-transparent hover:bg-clip-text transition duration-300">
        <CardContent>
          <CardTitle>Instant Sharing</CardTitle>
          <CardDescription>
            Share your coding room instantly with a simple room ID system.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="max-w-md hover:border-green-500 hover:shadow-md hover:bg-gradient-to-r from-green-400 to-green-500 hover:text-transparent hover:bg-clip-text transition duration-300">
        <CardContent>
          <CardTitle>Syntax Highlighting</CardTitle>
          <CardDescription>
            Beautiful syntax highlighting for multiple programming languages.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
