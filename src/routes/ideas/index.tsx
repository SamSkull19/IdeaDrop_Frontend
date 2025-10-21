import { createFileRoute } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { fetchIdeas } from '@/api/ideas'
import IdeaCard from '@/components/IdeaCard';

const ideaQueryOptions = () => queryOptions({
  queryKey: ['ideas'],
  queryFn: fetchIdeas
})


export const Route = createFileRoute('/ideas/')({
  component: IdeasPage,
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(ideaQueryOptions())
  }
})


function IdeasPage() {
  const { data: ideas } = useSuspenseQuery(ideaQueryOptions());
  const latestIdeas = [...ideas].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Ideas</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {latestIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  )
}