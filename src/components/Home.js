import React from "react";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState(
    "Please accept my apologies for my extremely late submission of assignment! Also, I did not have access to the google doc in which assignment was given so I tried to complete this assignment as much as I remembered when I first read that document."
  );

  const p1 =
    "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life - Steve Jobs";
  const p2 =
    "If you go back a few hundred years, what we take for granted today would seem like magic-being able to talk to people over long distances, to transmit images, flying, accessing vast amounts of data like an oracle. These are all things that would have been considered magic a few hundred years ago.-Elon Musk";
  const p3 =
    "“What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.-Carl Sagan";
  const p4 =
    "I'm fascinated by the idea that genetics is digital. A gene is a long sequence of coded letters, like computer information. Modern biology is becoming very much a branch of information technology-Richard Dawkins";
  const onChangeHandler = (event) => {
    const selectedText = event.target.value;

    setText(selectedText);
  };

  return (
    <div>
      <div style={{ marginLeft: 20, marginTop: 20 }}>
        <select onChange={onChangeHandler} style={{ width: 300 }}>
          <option value={p1}>Quote 1</option>
          <option value={p2}>Quote 2</option>
          <option value={p3}>Quote 3</option>
          <option value={p4}>Quote 4</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        {" "}
        {text}
      </div>
    </div>
  );
};

export default Home;
