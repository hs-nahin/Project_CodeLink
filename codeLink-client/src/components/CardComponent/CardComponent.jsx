import { Card, CardContent, CardDescription, CardTitle } from 'keep-react';

export const CardComponent = () => {
  return (
    <Card className="bg-white shadow-lg rounded-lg p-6">
      <CardContent>
        <CardTitle className="text-xl font-semibold text-green-900">Real-time Collaboration</CardTitle>
        <CardDescription className="mt-4 text-gray-600">
          Code together with your team in real-time, seeing changes as they happen, making collaboration seamless and efficient.
        </CardDescription>
      </CardContent>
    </Card>
  );
};
