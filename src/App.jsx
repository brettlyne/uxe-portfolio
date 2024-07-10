import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player/file";

import VideoCard from "./VideoCard";
import RollingWaves from "./RollingWaves";

import linkedIn from "/icon-linked-in.png";
import introPhoto from "/brett-photo.jpg";
import brettLogo from "/brett-holcomb.svg";

import playButtonOverlay from "/play-button-overlay.svg";
import thumbSystems from "/thumb-systems.png";
import thumbLemur from "/thumb-lemur.png";
import thumbShaders from "/thumb-shaders.png";
import thumbMoreMotion from "/thumb-more-motion.png";

import qbalVideo from "/quickbooks-animation-library.mp4";
import lemurVideo from "/lemur-abridged.mp4";
import shadersVideo from "/hummingbird-abridged.mp4";
import moreMotionVideo from "/more-intuit-motion.mp4";
import customToolsVideo from "/custom-tools-and-plugins.mp4";

import iconPlay from "/icon-play.svg";
import iconPause from "/icon-pause.svg";

const videos = {
  qbal: qbalVideo,
  lemur: lemurVideo,
  shaders: shadersVideo,
  moreMotion: moreMotionVideo,
  tools: customToolsVideo,
};

function App() {
  const [openModal, setOpenModal] = useState("");
  const [animPaused, setAnimPaused] = useState(false);

  const letters = "Design".split("");

  const handlePauseClick = () => {
    setAnimPaused(!animPaused);
  };

  return (
    <>
      <div className="hero">
        <div className="logo">
          <img src={brettLogo} alt="Brett Holcomb" />
        </div>

        <div className="linked-in">
          <a
            href="https://www.linkedin.com/in/brettholcomb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </div>

        <button className="play-control" onClick={handlePauseClick}>
          {animPaused ? (
            <>
              <img src={iconPlay} alt="play" />
              play
              <br />
              animation
            </>
          ) : (
            <>
              <img src={iconPause} alt="pause" />
              pause
              <br />
              animation
            </>
          )}
        </button>

        <div id="text-ux">
          <motion.h1
            animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 }}
            initial={{ opacity: 0, scale: 0.75, y: 40, x: 0, rotate: 0 }}
            transition={{
              delay: 0.5,
              type: "spring",
              duration: 1.5,
              bounce: 0.2,
            }}
          >
            UX
          </motion.h1>
        </div>
        <div id="text-code">
          <motion.h1
            animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 }}
            initial={{ opacity: 0, scale: 0.75, y: 40, x: 0, rotate: 0 }}
            transition={{
              delay: 1.5,
              type: "spring",
              duration: 1.5,
              bounce: 0.2,
            }}
          >
            Code
          </motion.h1>
        </div>
        <div id="text-motion">
          <h1>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 140, x: 0 }}
                animate={{ y: 0, x: 0 }}
                transition={{
                  delay: 2.75 + index * 0.15,
                  type: "spring",
                  duration: 2.25 + index * 0.2,
                  bounce: 0.4 - index * 0.015,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        <RollingWaves animPaused={animPaused} />
      </div>

      <div className="intro">
        <div className="grid">
          <div className="intro-content">
            <h2>A Short Introduction</h2>
            <ul>
              <li>
                I started my career working on UnrealEngine and I&apos;m at my
                best tackling creative technical challenges
              </li>
              <li>
                I have a Masters of HCI from Carnegie Mellon and 13 years
                combined experience as a Designer and UX Engineer
              </li>
              <li>
                I led the Motion Design + UX Engineering team for TurboTax,
                before moving on to Roku to work on TV experiences
              </li>
            </ul>
          </div>
          <div className="intro-photo">
            <img src={introPhoto} alt="photo of Brett" />
          </div>
        </div>
      </div>
      <RollingWaves
        animPaused={animPaused}
        style={{ transform: "scaleY(-1) scaleX(1)" }}
      />

      <div className="grid top-section">
        <div className="backdrop" />
        <div className="content">
          <h2>Design Systems + Motion</h2>
          <p>
            I worked from existing motion specs for individual components
            (created by{" "}
            <a
              href="https://www.linkedin.com/in/heybwall/"
              target="_blank"
              rel="noreferrer"
            >
              Brandon Wall
            </a>
            ) to create a mature design system for UI motion across Intuit. Key
            accomplishments included:
          </p>
          <ul>
            <li>
              Expanding the set of animations to cover more use cases and better
              differentiate between product vs. marketing / storytelling
              animations
            </li>
            <li>
              Creating an{" "}
              <a
                href="https://intuit.github.io/qb-animation-library/"
                target="_blank"
                rel="noreferrer"
              >
                open-source library
              </a>{" "}
              of CSS animations and writing an{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/intuit-engineering/delivering-consistent-animations-with-a-design-system-library-323f29f5efc6"
              >
                article
              </a>{" "}
              detailing the rationale and process
            </li>
            <li>
              Creating documentation and semantic labels to guide usage across
              Intuit + working with teams to ensure a consistent motion
              experience across touchpoints
            </li>
          </ul>
        </div>

        <div className="video">
          <VideoCard
            onClick={() => setOpenModal("qbal")}
            thumbSrc={thumbSystems}
            alt="motion design systems"
            duration="1 min"
          />
        </div>
      </div>

      <div style={{ height: "120px" }} />

      <div className="grid">
        <div className="backdrop" />
        <div className="content">
          <h2>Custom Tools and Plugins</h2>
          <p>
            I’ve created custom tools for Intuit and Roku, plus open-source
            plugins for Figma.
          </p>
          <ul>
            <li>
              Magpie is a Roku Figma plugin that lets designers search for
              artwork and metadata and insert it into design mocks
            </li>
            <li>
              Hummingbird is a tool that let's designers create their own
              shaders and launch them on Roku device
            </li>
            <li>
              Priority Matrix is a FigJam collaborative prioritization widget
              with over 60,000 users
            </li>
            <li>
              Chroma Palettes is an open-source plugin to generate beautiful and
              accessible palettes for data visualization.
            </li>
          </ul>
        </div>

        <div className="video">
          <VideoCard
            onClick={() => setOpenModal("tools")}
            thumbSrc={thumbShaders}
            alt="custom tools"
            duration="4 min"
          />
        </div>
      </div>

      <div style={{ height: "120px" }} />

      <div style={{ height: "180px" }} />

      <Modal open={openModal !== ""} onClose={() => setOpenModal("")} center>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url={videos[openModal]}
            controls
            playing
            muted
          />
        </div>
      </Modal>
    </>
  );
}

export default App;
