const INITIAL_STATE = {
  sections: [
    {
      title: "Explain your problem",
      imageUrl: "https://i.ibb.co/WHwnQ9j/enquiry.jpg",
      id: 1,
      linkUrl: "/signin",
    },
    {
      title: "Find a solution",
      imageUrl: "https://i.ibb.co/bJQQWX5/contact.jpg",
      id: 2,
      linkUrl: "/signin",
    },
    {
      title: "Make a deal",
      imageUrl: "https://i.ibb.co/RhPbBBP/make-a-deal.jpg",
      id: 3,
      linkUrl: "/signin",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;