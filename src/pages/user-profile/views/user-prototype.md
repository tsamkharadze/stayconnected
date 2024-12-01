const user = {
    id: 'user1',
    name: 'John',
    email: 'John@mail.com',
    rating: 7,
    my_questions: ["question_id"],
    my_answers: ["answer_id"]
  };

  //რეიტინგი > 0; წამოვიდეს დასორტილი
  usersWithRating: [
    ["user_id"]
  ]
  question: [{
    id: "q1",
    author_id: "user1",
    title: "",
    description: "",
    tags: ["React", "Technology"],
    date: "25 Mar 2024",
    answers: ["answer_id_1", "answer_id_2"]
  },]
  questions: [
    "questionId"
  ]
  answers: [{
    id: "a1",
    questionId: "q1",
    description: "answer desc",
    author_id: "user2",
    isCorrect: false,
    date: "26 Mar 2024",
    likes: 4, //თუ ადვილია იყოს მასივი იუზერ აიდების ["user1", "user2"]
  }]