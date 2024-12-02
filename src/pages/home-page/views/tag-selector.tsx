import { getTags } from '@/components/api/tags/index.ts';
import { useQuery } from '@tanstack/react-query';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tags } from '../types/question.types.ts';

const TagSelector = () => {
  const { data: tags } = useQuery({
    queryKey: ['getTagsList'],
    queryFn: getTags,
  });

  return (
    <>
      {tags ? (
        <ToggleGroup type='multiple'>
          {tags.map((tag: Tags) => {
            <ToggleGroupItem value={tag.name} key={tag.id}>
              {tag.name}
            </ToggleGroupItem>;
          })}
        </ToggleGroup>
      ) : (
        <div>not found</div>
      )}
    </>
  );
};

export default TagSelector;
