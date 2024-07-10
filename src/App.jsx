import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player/file";

import VideoCard from "./VideoCard";
import RollingWaves from "./RollingWaves";
import TimestampLink from "./TimestampLink";

import linkedIn from "/icon-linked-in.png";
import introPhoto from "/brett-photo.jpg";
import brettLogo from "/brett-holcomb.svg";

import thumbSystems from "/thumb-systems.png";
import thumbShaders from "/thumb-shaders.png";
import thumbPrototyping from "/thumb-prototyping.png";

import qbalVideo from "/quickbooks-animation-library.mp4";
import customToolsVideo from "/custom-tools-and-plugins.mp4";
import prototypingVideo from "/prototype-and-scale-ux.mp4";

import iconPlay from "/icon-play.svg";
import iconPause from "/icon-pause.svg";

const videos = {
  qbal: qbalVideo,
  tools: customToolsVideo,
  prototyping: prototypingVideo,
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
      {Object.keys(videos).map((key) => (
        <link rel="prefetch" key={key} href={videos[key]} />
      ))}

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
        <h2 className="content-header">Prototyping and Scaling UX</h2>
        <div className="content">
          <p>
            I switched from mostly designing to mostly coding when we wanted to
            ship higher fidelity experiences for QuickBooks that better matched
            our vision. I eventually shipped entire microsites and landing
            pages, and contributed to the design systems at Intuit and Roku, but
            still love to inform early design and interaction nuances by
            building prototypes.
          </p>
          <ul>
            <li>
              At Roku I was responsible for our prototyping component library,
              including creating components, architecture, CI/CD, and code
              reviews.
              <TimestampLink
                onClick={() => setOpenModal("prototyping")}
                time="0:00"
              />
            </li>
            <li>
              I prototyped many product and marketing experiences at Intuit for
              desktop and mobile devices. This prototype shows an accounting
              experiment that consolidates all accounting data by default, then
              allows for advanced filtering and searching.
              <TimestampLink
                onClick={() => setOpenModal("prototyping")}
                time="0:37"
              />
            </li>
            <li>
              Some of our more experimental marketing experiences enhanced
              storytelling with motion. For this one I created animation in
              After Effects, exported to Lottie, then animated based on scroll
              position.
              <TimestampLink
                onClick={() => setOpenModal("prototyping")}
                time="1:07"
              />
            </li>
          </ul>
        </div>

        <div className="video">
          <VideoCard
            onClick={() => setOpenModal("prototyping")}
            thumbSrc={thumbPrototyping}
            alt="prototyping and scaling ux"
            duration="1.5 min"
          />
        </div>
      </div>

      <div style={{ height: "120px" }} />

      <div className="grid">
        <h2 className="content-header">Custom Tools and Plugins</h2>
        <div className="content">
          <p>
            I’ve created custom tools for Intuit and Roku, plus open-source
            plugins for Figma.
          </p>
          <ul>
            <li>
              Magpie is a Roku Figma plugin that lets designers search for
              artwork and metadata and insert it into design mocks.
              <TimestampLink
                onClick={() => setOpenModal("tools")}
                time="0:00"
              />
            </li>
            <li>
              Hummingbird is a tool that let's designers create their own
              shaders and launch them on Roku device.
              <TimestampLink
                onClick={() => setOpenModal("tools")}
                time="0:38"
              />
            </li>
            <li>
              <a
                href="https://www.figma.com/community/widget/1024916888280193111"
                target="_blank"
                rel="noreferrer"
              >
                Priority Matrix
              </a>{" "}
              is a FigJam collaborative prioritization widget with over 60,000
              users.
              <TimestampLink
                onClick={() => setOpenModal("tools")}
                time="1:54"
              />
            </li>
            <li>
              <a
                href="https://www.figma.com/community/plugin/1353117070534651153/chroma-data-vis-color-palettes"
                target="_blank"
                rel="noreferrer"
              >
                Chroma Palettes
              </a>{" "}
              is an open-source plugin to generate beautiful and accessible
              palettes for data visualization.
              <TimestampLink
                time="2:46"
                onClick={() => setOpenModal("tools")}
              />
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

      <div className="grid">
        <h2 className="content-header">Design Systems + Motion</h2>
        <div className="content">
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

      <div style={{ height: "180px" }} />

      <Modal open={openModal !== ""} onClose={() => setOpenModal("")} center>
        <div className="player-wrapper">
          <ReactPlayer
            id="react-player"
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
