import React, { useState, useEffect, useLayoutEffect } from "react";
import * as Page from "../components/Page/Page";
import { useRouter } from "next/router";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import useMediaQuery, { tablet } from "../hooks/useMediaQuery";
import Head from "next/head";

function services() {
  const router = useRouter();
  const media = useMediaQuery();

  useEffect(() => {
    if (router.query.service) {
      const el = document.getElementById(`${router.query.service}`);
      if (el) {
        const timeout = setTimeout(() => {
          window.scrollTo({ top: el.offsetTop - 75, behavior: "smooth" });
        }, 250);
        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [router]);

  return (
    <Page.Wrapper headerMode="sticky">
      <Head>
        <title>Services - Hopkins Marketing Group</title>
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServiceSection
        id="media"
        title="MEDIA MANAGEMENT 0.1"
        webp="/images/jakob-owens-WUmb_eBrpjs-unsplash.webp"
        fallback="/images/jakob-owens-WUmb_eBrpjs-unsplash.jpg"
        alt="Media Management"
        orientation="left"
        content={[
          {
            subtitle: "Social Media",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "Multi Media",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "Branding",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
        ]}
      />
      <ServiceSection
        id="photography"
        title="PHOTOGRAPHY 0.2"
        webp="/images/alexander-dummer-aS4Duj2j7r4-unsplash.webp"
        fallback="/images/alexander-dummer-aS4Duj2j7r4-unsplash.jpg"
        alt="Photography"
        orientation={media <= tablet ? "left" : "right"}
        content={[
          {
            subtitle: "Weddings",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "Graduations",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
        ]}
      />
      <ServiceSection
        id="videography"
        title="VIDEOGRAPHY 0.3"
        webp="/images/jason-jarrach-NL6pn-d-MnY-unsplash.webp"
        fallback="/images/jason-jarrach-NL6pn-d-MnY-unsplash.jpg"
        alt="Videography"
        orientation="left"
        content={[
          {
            subtitle: "Live Events",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "Music Videos",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "Filming and Editing",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
        ]}
      />
      <ServiceSection
        id="web"
        title="WEB DESIGN 0.4"
        webp="/images/karl-pawlowicz-QUHuwyNgSA0-unsplash.webp"
        fallback="/images/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg"
        alt="Web Design"
        orientation={media <= tablet ? "left" : "right"}
        content={[
          {
            subtitle: "Websites",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "Server Hosting",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            subtitle: "SEO",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.",
          },
        ]}
      />
    </Page.Wrapper>
  );
}

export default services;
