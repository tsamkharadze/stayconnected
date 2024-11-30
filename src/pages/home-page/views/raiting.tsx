import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserRaiting = () => {
  const authors = [
    {
      id: 1,
      name: 'Sylvia Plath',
      avatar:
        'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg',
    },
    {
      id: 2,
      name: 'Zadie Smith',
      avatar:
        'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
    },
    {
      id: 3,
      name: 'Mary Wollstonecraft',
      avatar:
        'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg',
    },
    {
      id: 4,
      name: 'Roald Dahl',
      avatar:
        'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
    },
    {
      id: 5,
      name: 'Ralph Waldo',
      avatar:
        'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
    },
  ];

  return (
    <>
      <Card className='px-6 py-4'>
        <h2 className='text-center text-2xl font-bold'>Raiting</h2>
        <div className='mt-2 space-y-6'>
          {authors.map((author, i) => {
            return (
              <div className='flex flex-row items-center gap-4'>
                <div key={author.id}>
                  <Avatar className='border'>
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className='cursor-pointer'>
                  <div className='text-md font-semibold hover:underline'>
                    {author.name}
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Raiting: {(i + 1) * 23}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default UserRaiting;
