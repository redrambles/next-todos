/* eslint-disable react/no-unescaped-entities */
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
          experience, particularly with folks who are transitioning into the tech field as early-career developers.
        </p>

        <p className='my-4'>
          I also have extensive experience building and maintaining web applications using a variety of stacks. I've recently
          fallen in love with Ruby on Rails, working with a friend on an open-source environment research initiative over the past
          year.
        </p>

        <p className='my-4'>
          I'm looking for an opportunity to push my technical skills to the next level! I am perpetually curious, always seeking
          to learn more and thrive in a team setting. Right now I'm wrapping my mind around Next.js 13. 🎉
        </p>
      </article>
      <Link
        href='/'
        className='inline-block py-2 my-4 border border-orange-300 text-orange-300 px-2 rounded hover:bg-orange-700 hover:text-orange-200 focus-within:bg-orange-700 outline-none'
      >
        Back to Todos
      </Link>
    </div>
  );
}

export default AboutMe;
