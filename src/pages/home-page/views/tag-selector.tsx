import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useState } from 'react';

interface Tag {
  id: string;
  name: string;
}

// Sample tags data
const tags: Tag[] = [
  { id: '1', name: 'React' },
  { id: '2', name: 'TypeScript' },
  { id: '3', name: 'Next.js' },
  { id: '4', name: 'TailwindCSS' },
  { id: '5', name: 'JavaScript' },
  { id: '6', name: 'Node.js' },
  { id: '7', name: 'Express' },
  { id: '8', name: 'MongoDB' },
];

const TagSelector = () => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tagId)) {
        newSet.delete(tagId);
      } else {
        newSet.add(tagId);
      }
      return newSet;
    });
  };

  return (
    <ScrollArea className='mb-2 w-full whitespace-nowrap rounded-lg border'>
      <div className='flex w-max space-x-2 p-4'>
        {tags.map((tag) => (
          <Button
            key={tag.id}
            variant='outline'
            className={`rounded-full ${
              selectedTags.has(tag.id)
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : ''
            }`}
            onClick={() => toggleTag(tag.id)}
          >
            {tag.name}
          </Button>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};

export default TagSelector;
