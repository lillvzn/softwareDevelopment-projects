"use strict";

const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playButton = document.getElementById("play");
const playbackIcons = document.querySelectorAll(".playback-icons use");
const timeElapsed = document.getElementById("time-elapsed");
const duration = document.getElementById("duration");
const progressBar = document.getElementById("progress-bar");
const seek = document.getElementById("seek");
const seekTooltip = document.getElementById("seek-tooltip");
const volumeButton = document.getElementById("volume-button");
const volumeIcons = document.querySelectorAll(".volume-button use");
const volumeMute = document.querySelector('use[href="#volume-mute"]');
const volumeLow = document.querySelector('use[href="#volume-low"]');
const volumeHigh = document.querySelector('use[href="#volume-high"]');
const volume = document.getElementById("volume");
const playbackAnimation = document.getElementById("playback-animation");
const fullscreenButton = document.getElementById("fullscreen-button");
const videoContainer = document.getElementById("video-container");
const fullscreenIcons = fullscreenButton.querySelectorAll("use");
const pipButton = document.getElementById("pip-button");