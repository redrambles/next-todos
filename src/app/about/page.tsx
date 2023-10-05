import React from "react";
import Link from "next/link";

function AboutMe() {
  return (
    <div>
      <h1 className='text-3xl'>About Me</h1>
      <article className='my-4'>
        <p className='my-2'>Hello, hello!!</p>

        <p className='my-4'>
          I'm Ann, a musician turned full-stack developer with over 8 years of building web applications and remote teaching
          experience, particularly with folks who are transitioning into the tech field as early-career developers. I teach HTML /
          CSS, Git, JavaScript, and React. Troubleshooting, tinkering, breaking down problems into manageable pieces, and
          conveying the information in a 'meet-you-where-you-are' kind of way is what I spend a lot of my time doing. 
        </p>

        <p className='my-4'>
          I also have extensive experience building and maintaining web applications using a variety of stacks. I've recently
          fallen in love with Ruby on Rails, working with a friend on an open-source environment research initiative over the past
          year. It has given me the opportunity to learn so much about the language and framework, as well as the general flow of
          working on a team, from issue to pull request.
        </p>

        <p className='my-4'>
          I'm looking for an opportunity to push my technical skills to the next level! I am perpetually curious, always seeking
          to learn more and thrive in a team setting. I believe I bring a fresh perspective and an open mind to problem-solving
          and working with software.{" "}
        </p>
      </article>
      <Link
        href='/'
        className='inline-block py-2 my-4 border border-slate-300 text-slate-300 px-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
      >
        Back to Home Page
      </Link>
    </div>
  );
}

export default AboutMe;
