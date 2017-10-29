---
layout: default
title: HackOne - Sign up for hackathons instantly, through Google Chrome
permalink: index.html
---

<div class="first-page">
  <div id="madeby">
    <a href id="logo"></a>
  </div>

  <section id="headline">
    <h1>Hackathons. Register instantly.</h1>
    <h2>Your hacker profile, saved locally in Chrome. Instantly share it with hackathons.</h2>

<pre><code data-language="javascript" id="result">{
  name: "Bilawal Hameed",
  shirtSize: "L",
  github: "https://github.com/bih",
  skills: ["JavaScript", "Ruby", "HTML", "CSS"]
  // and more :)
  // hint: try using hackone on this page
}</code></pre>

    <p style="display: none"><a href="https://chrome.google.com/webstore/detail/hackone/ochbpomnongmncmgifkdbmcjfeekfghm" target="_blank" class="download-for-chrome">Install the pre-alpha for Google Chrome</a></p>
  </section>
</div>

<div id="integrate" class="fourth-page">
  <h1>Integrate HackOne <strong>with only 4 lines of code.</strong></h1>
  <div id="clear"></div>

  <div id="holder">
    <div id="center">
      <p>Just copy the code below to your site and use the extension.</p>

      <a style='width: 100%; margin: 0 auto; display: block; text-decoration: none' href='https://hackone-demos.glitch.me/index.html' title='Click for demo'><pre><div class="name">JavaScript - <u>Click for Demo</u></div><code data-language="html">document.addEventListener("hackone:onUserDataReceived", function (e) {
  var user = e.detail.userData;
  console.log("Hi, " + user.bio.firstName);
});</code></pre></a>

      <br />

      <a style='width: 100%; margin: 0 auto; display: block; text-decoration: none' href='https://hackone-demos.glitch.me/autocomplete.html' title='Click for demo'><pre><div class="name">HTML (without JavaScript) - <u>Click for Demo</u></div><code data-language="html"><input type="text" data-hackone="bio.firstName" /></code></pre></a>
    </div>
  </div>
</div>
