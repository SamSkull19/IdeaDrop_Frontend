import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'IdeaDrop | Drop Your Ideas'
      }
    ]
  }),
  component: App,
})

function App() {
  return (
    <div className="text-center">
      My App
    </div>
  )
}
