import UserInfo from '../components/user-info';
import UserTabs from '../components/user-tabs';
import ScreenLg from '@/components/layout/page-containers/screen-lg';


const user = {
  id: '123',
  name: 'John',
  email: 'John@mail.com',
  rating: 7,
  questions: [{
    id: "q1",
    author: "John Doe",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
    description: `I expect successful completion of this simple pipeline and that target A would have the value "A--postprocessed". How can I successfully refer to the Suffix target as an argument to postprocess()? Note that this pattern worked in the August 2024 timeframe. I see that tarchetypes::tar_hook_outer_raw() was introduced in tarchetypes 0.10.0 (2024-09-26) which may have broken the previous behavior. Any help will be much appreciated!`,
    tags: ["React", "Technology"],
    date: "25 Mar 2024",
    answers: [{
      id: "a1",
      questionId: "q1",
      description: "answer desc",
      author: "Jane Doe",
      isCorrect: false,
      date: "26 Mar 2024"
    }]
  },{
    id: "q2",
    author: "John Doe",
    title: "I would like to refer to a previously computed target as an argument to a hook function called by tarchetypes",
    description: `I expect successful completion of this simple pipeline and that target A would have the value "A--postprocessed". How can I successfully refer to the Suffix target as an argument to postprocess()? Note that this pattern worked in the August 2024 timeframe. I see that tarchetypes::tar_hook_outer_raw() was introduced in tarchetypes 0.10.0 (2024-09-26) which may have broken the previous behavior. Any help will be much appreciated!`,
    tags: ["React", "Technology"],
    date: "25 Mar 2024",
    answers: [{
      id: "a2",
      questionId: "q2",
      description: "answer desc",
      author: "Jane Doe",
      isCorrect: false,
      date: "26 Mar 2024"
    }]
  }]
};
const UserProfile = () => {
  return (
    <ScreenLg>
      <div className="flex flex-col gap-8">
      <UserInfo user={user} />
      <UserTabs user={user}/>
      </div>
    </ScreenLg>
  );
};

export default UserProfile;
