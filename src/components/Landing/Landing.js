import React from "react";
import StyledLink from "../Link";
import Block from "../Block";
import ContentSection from "../ContentSection";
import TrackCard from "./trackCard";
import DataIcon from "./dataIcon";
import ArrayIcon from "./arrayIcon";
import AsyncIcon from "./asyncIcon";
import TestingIcon from "./testingIcon";

import "./Landing.scss";

const Landing = () => (
  <div className="Landing">
    <div className="Landing-heroWrapper">
      <div className="Landing-titleWrapper">
        <h1>Learn JavaScript and Front-End Fundamentals.</h1>
        <h2>At your own pace.</h2>
      </div>
      <div className="Landing-courseWrapper">
        <TrackCard
          title="Array Methods"
          icon={<ArrayIcon />}
          subTitle="Learn functional array methods like filter, map, and reduce!"
          path="/courses/Array-Methods/"
        />
        <TrackCard
          title="Data Types"
          icon={<DataIcon />}
          subTitle="Deep dive into types, equality, coercion, immutability and more."
          path="/courses/Data-Types/"
        />
        <TrackCard
          title="Promises"
          icon={<AsyncIcon />}
          subTitle="Learn the Promise API inside and out."
          path="/courses/Promises/"
        />
        <TrackCard
          title="Testing"
          icon={<TestingIcon />}
          subTitle="Learn frontend testing with Jest and Enzyme."
          path="/courses/Testing/"
        />
      </div>
    </div>
    <div className="Landing-callOut">
      <p>
        Awesome Learning is Frontend focused learning platform built around{" "}
        <b>deliberate practice</b>.
      </p>
      <p>
        We designed the courses to be perfect for <b>group programming</b>.
      </p>
    </div>

    <ContentSection
      className="Landing-description"
      title="What's Deliberate Practice?"
      isLight
    >
      <p>
        Deliberate practice involves more than just repetition; it requires
        activities that are designed to improve performance, challenge the
        learner, and provide feedback.
      </p>
      <StyledLink
        variation="secondary"
        path="https://pwp.gatech.edu/bmeac/2016/02/18/deliberate-practice-and-why-you-should-do-it/"
        isExternal
      >
        Learn More
      </StyledLink>
    </ContentSection>

    <ContentSection
      className="Landing-description"
      title="How Do We Apply Deliberate Practice?"
      isLight
    >
      <Block is="p" mb="16px">
        Each course and lesson are specifically designed to incrementally
        challenge the learner while providing immediate feedback in the form of
        tests, quizzes, provided solutions, and guiding comments.
      </Block>

      <Block is="p" mb="16px">
        <b>Each course</b> is comprised of multiple lessons that each build on
        the things learned in the previous lesson, always challenging the
        learning to reach for new understanding.
      </Block>

      <p>
        <b>Each lesson</b> features exercises designed to incrementally increase
        in complexity to further challenge the user.
      </p>
    </ContentSection>

    <ContentSection
      className="Landing-description"
      title="Group Focused"
      isLight
    >
      <Block is="p" mb="16px">
        We believe one of the major separators between "junior" and "senior"
        developers is technical communication. That's why we strongly suggest
        you run these sessions with a small group, either in person or over a
        chat client.{" "}
      </Block>
      <p>
        Over the hundreds of sessions we've run, we've seen the folks that
        tackle these courses as a group learn faster, become stronger technical
        communicators, all while building key technical skills.
      </p>
    </ContentSection>

    <ContentSection title="How it Works" isLight>
      <ol className="Landing-list">
        <li className="Landing-listItem">
          <h3>Gather a Team</h3>
          <p className="Landing-listItemText">
            We recommend groups of no more than five or six people. Try to build
            groups with relatively similar abilities across members to keep
            things interesting for each member.
          </p>
          <StyledLink
            variation="secondary"
            path="https://en.wikipedia.org/wiki/Ringelmann_effect"
            isExternal
          >
            Here's why small teams are better
          </StyledLink>
        </li>
        <li className="Landing-listItem">
          <h3>Pick a Course</h3>
          <p className="Landing-listItemText">
            Pick one of our pre-built courses like array methods, testing, etc.
          </p>
        </li>
        <li className="Landing-listItem">
          <h3>Pick a Time</h3>
          <p className="Landing-listItemText">
            We recommend setting aside an hour to an hour and a half per
            session, at a cadence of once per week until you complete your
            course.
          </p>
        </li>
        <li className="Landing-listItem">
          <h3>Pick a Place</h3>
          <p className="Landing-listItemText">
            Ideally, each of you has a laptop in a quiet conference room.
            Otherwise, find the best way to get your group together at the
            scheduled time whether in person or remotely.
          </p>
        </li>
      </ol>
    </ContentSection>

    <ContentSection
      className="Landing-description"
      title="Who is This For?"
      isLight
    >
      <Block is="p" mb="16px">
        This material is currently used by full time software engineers within
        Wayfair. We believe beginners, experts, and everyone in-between can
        learn something here.
      </Block>
      <p>
        In general, we find that a group of folks motivated to learn and improve
        both their soft skills and Frontend knowledge will do well here. If
        there are explicit pre-requisites for a course, they will be clearly
        stated.
      </p>
    </ContentSection>
    <ContentSection title="Ready to Get Started?" isLight>
      <Block mb="16px">
        <StyledLink variation="secondary" path="/courses">
          See Our Courses
        </StyledLink>
      </Block>
      <StyledLink variation="secondary" path="/howTo">
        Read the Session How-To Guide
      </StyledLink>
    </ContentSection>
  </div>
);

export default Landing;
