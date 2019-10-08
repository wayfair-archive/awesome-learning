import React from 'react';
import Block from '../shared/Block';
import ContentSection from '../ContentSection';
import './HowTo.scss';

const HowTo = () => (
  <div className="HowTo">
    <ContentSection title="Gathering A Group" className="HowTo-description">
      <Block is="p" mb="16px">
        Awesome Learning is best when run in a group setting. Your group can be
        co-located or remote. Here are some battle-tested ground rules.
      </Block>
      <ul className="HowTo-list">
        <li className="HowTo-listItem">
          Limit the group size to a maximum of 6. Anything more can limit
          individual participation.
        </li>
        <li className="HowTo-listItem">
          Strive to find a group of roughly similar skill levels. This isn't an
          exact science, but mixing highly experienced and in-experienced folks
          together can sometimes lead to being too bored or too challenged on a
          subject.
        </li>
        <li className="HowTo-listItem">
          Set a time commitment early, and get buy-in. Shoot for an hour a week
          meeting with a consistent time and location.
        </li>
      </ul>
    </ContentSection>

    <ContentSection title="Before Your Lesson" className="HowTo-description">
      <Block is="p" mb="16px">
        Each lesson includes a video and reading materials. We strongly
        recommend working through both the videos and the reading materials{" "}
        <b>before</b> your lesson begins. If you are the lesson leader, please
        send out the link to the lesson to your group at least 24 hours in
        advance of when you will gather for the lesson exercises.
      </Block>
      <ul className="HowTo-list">
        <li className="HowTo-listItem">
          <b>Good:</b> Watching the video before the lesson begins.
        </li>
        <li className="HowTo-listItem">
          <b>Better:</b> Watching the video and reading the pre-read materials
          before the lesson begins.
        </li>
        <li className="HowTo-listItem">
          <b>Best:</b> All of the above and taking the pre-read quiz to test
          your understanding.
        </li>
      </ul>
    </ContentSection>
    <ContentSection title="During Your Lesson" className="HowTo-description">
      <Block is="p" mb="16px">
        Check out this short video for an introduction to our exercise
        environment.
      </Block>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/e8_wPD6O3gA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Block is="p" mt="16px" mb="16px">
        <b>Rough lesson guide</b>
      </Block>
      <ul className="HowTo-list">
        <li className="HowTo-listItem">
          Go over any questions the group has based on the pre-work materials.
        </li>
        <li className="HowTo-listItem">Open and fork the exercise sets.</li>
        <li className="HowTo-listItem">
          Read through all exercise descriptions and prompts out loud
        </li>
        <li className="HowTo-listItem">
          Group program the exercises! Pass the keyboard for each exercise,
          discuss problems and solutions, etc. Above all, communicate!
        </li>
        <li className="HowTo-listItem">
          Check the provided solutions if you get stuck, and don't be afraid to
          get derailed with discussions and research.
        </li>
      </ul>
    </ContentSection>
    <ContentSection title="FAQs" className="HowTo-description">
      <Block is="p" mb="16px">
        <b>Why should I Awesome Learn?</b>
      </Block>
      <Block is="p" mb="16px">
        Everyone in this industry deals with imposter syndrome. Technologies
        keep advancing while we feel like we're falling behind. Saying it out
        loud is the first step, changing it is the hard step.
      </Block>
      <Block is="p" mb="16px">
        <b>Who can Awesome Learn?</b>
      </Block>
      <Block is="p" mb="16px">
        Anyone at any level is welcome to start a group or jump in solo. We
        strongly believe learning can be done without an "expert" in the room.
      </Block>
      <Block is="p" mb="16px">
        <b>How does Awesome Learning work?</b>
      </Block>
      <Block is="p" mb="16px">
        Anyone can form a team. Once you gather a team, the team selects the
        "course" they want to learn first. Each course has pre-built hour-long
        lessons with learning materials and coding exercises included. We
        provide completed solutions and learning annotations to make sure you
        never get stuck.
      </Block>
      <Block is="p" mb="16px">
        <b>What will this do for my team?</b>
      </Block>
      <Block is="p" mb="16px">
        Awesome learning is a research-backed learning platform designed to help
        small teams build lasting, foundational skills. The platform is a series
        of videos, reading materials, and exercises in one hour intervals
        divided into subject-matter "courses". Reading quizzes keep learners
        engaged, surveys keep leaders up to date with how well team members are
        learning. TDD exercises provide a tight feedback loop.
      </Block>
      <Block is="p" mb="16px">
        <b>What is a Lesson?</b>
      </Block>
      <Block is="p" mb="16px">
        An Awesome Learning lesson is a series of videos, pre-reads, and
        exercises designed to teach you a specific subject matter within the
        scope of the course.
      </Block>
      <Block is="p" mb="16px">
        <b>What is a Course?</b>
      </Block>
      <Block is="p" mb="16px">
        An Awesome Learning course is a collection of lessons grouped under an
        umbrella theme. The specific goal of each lesson is to help you build a
        better mental model of the broader topic.
      </Block>
      <Block is="p" mb="16px">
        <b>How long is the time commitment for a single Course?</b>
      </Block>
      <Block is="p" mb="16px">
        It varies. Some of our courses contain 2 lessons, others contain 5. The
        recommended cadence is one lesson or per week. We don't reccommend a
        slower cadence than once per week. Our experience shows folks lose too
        much course context when more than a week passes in between lessons.
      </Block>
    </ContentSection>
  </div>
);

export default HowTo;
