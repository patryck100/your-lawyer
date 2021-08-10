const INITIAL_STATE = {
  client: [
    {
      title: "Explain your problem",
      imageUrl: "https://i.ibb.co/WHwnQ9j/enquiry.jpg",
      id: 1,
      linkUrl: "/mycases",
      Subtitle: "Your enquiry will be sent to the Lawyers registered in the app",
    },
    {
      title: "Find a solution",
      imageUrl: "https://i.ibb.co/bJQQWX5/contact.jpg",
      id: 2,
      linkUrl: "/mycases",
      Subtitle: "Specialised Lawyers will contact you",
    },
    {
      title: "Make a deal",
      imageUrl: "https://i.ibb.co/RhPbBBP/make-a-deal.jpg",
      id: 3,
      linkUrl: "/mycases",
      Subtitle: "Make an agreement and solve your case!",
    },
  ],
  lawyer : [
    {
      title: "Find an enquiry",
      imageUrl: "https://i.ibb.co/tKfDkTB/question.jpg",
      id: 1,
      linkUrl: "/mycases",
      Subtitle: "You will receive enquiries according to your specialization",
    },
    {
      title: "Contact the client",
      imageUrl: "https://i.ibb.co/GxxptCZ/contact-a-client.jpg",
      id: 2,
      linkUrl: "/mycases",
      Subtitle: "The enquiries will come with the Client email so then you can contact them",
    },
    {
      title: "Make a deal",
      imageUrl: "https://i.ibb.co/TKmk5Qg/deal.jpg",
      id: 3,
      linkUrl: "/mycases",
      Subtitle: "Gain professional exposure and make money!",
    },
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;