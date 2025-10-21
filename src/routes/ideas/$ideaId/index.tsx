import { createFileRoute } from '@tanstack/react-router'

const fetchIdea = async (ideaId: string) => {
    const res = await fetch(`/api/ideas/${ideaId}`);
    if(!res.ok) throw new Error('Failed to fetch Data');
    return res.json();
}

export const Route = createFileRoute('/ideas/$ideaId/')({
    component: IndexPage,
    loader: async ({ params }) => {
        return fetchIdea(params.ideaId);
    }
})

function IndexPage() {
    const idea = Route.useLoaderData();
    return (
        <div>Title : {idea.title}</div>
    );
};