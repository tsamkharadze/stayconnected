import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { colors } from '../static/colors';

const UserRating = () => {
  const authors = [
    {
      id: 1,
      name: 'Sylvia Plath',
      avatar:
        'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg',
      gender: 'female',
    },
    {
      id: 2,
      name: 'Zadie Smith',
      avatar: '',
      gender: 'male',
    },
    {
      id: 3,
      name: 'Mary Wollstonecraft',
      avatar:
        'https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-226.jpg',
      gender: 'female',
    },
    {
      id: 4,
      name: 'Roald Dahl',
      avatar:
        'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
      gender: 'female',
    },
    {
      id: 5,
      name: 'Ralph Waldo',
      avatar: '',
      gender: 'female',
    },
  ];

  const getInitials = (fullname: string) => {
    // Split the full name into an array of words (by space)
    const nameParts = fullname.split(' ');

    // Get the first letter of each part, and capitalize it
    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join('');

    return initials;
  };
  return (
    <>
      <Card className='px-6 py-4 md:p-4'>
        <h2 className='text-center text-2xl font-bold md:text-lg lg:text-2xl'>
          Rating
        </h2>
        <div className='mt-2 space-y-6 md:space-y-4 lg:space-y-6'>
          {authors.map((author, i) => {
            const color = colors[Math.floor(Math.random() * colors.length)];

            const bgColor = `bg-${color}-200`;

            return (
              <div
                className='flex flex-row items-center gap-4 md:gap-2 lg:gap-4'
                key={author.id}
              >
                <div>
                  <Avatar className='border'>
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback className={bgColor}>
                      {getInitials(author.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className='cursor-pointer'>
                  <div className='text-md lg:text-md font-semibold hover:underline md:text-sm'>
                    {author.name}
                  </div>
                  <p className='md:text-sx text-sm text-muted-foreground lg:text-sm'>
                    Rating: {(i + 1) * 23}
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

export default UserRating;
