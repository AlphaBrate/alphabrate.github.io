=metadata=
title = Metronome
=metadata=

## User Guide

### Table of Contents
1. [Getting Started](#getting-started)
2. [Adjusting Tempo](#adjusting-tempo)
3. [Changing Time Signature](#changing-time-signature)
4. [Using the Swing Arm](#using-the-swing-arm)
5. [Tap Tempo](#tap-tempo)
6. [Keyboard Controls](#keyboard-controls)
7. [Audio and Visual Feedback](#audio-and-visual-feedback)
8. [Tips for Effective Use](#tips-for-effective-use)

### Getting Started
Our metronome is intuitive and user-friendly, you can easily use it just like a physical metronome. It runs in a web browser, offering a familiar experience with a tempo slider, time signature adjuster, and a swinging pendulum that mirrors the motion of a traditional metronome. To begin:
- Open the metronome in a compatible browser (e.g., Chrome, Firefox, Safari).
- Ensure your device’s audio is turned on to hear clicks and adjustment sounds, replicating the audible ticks of a physical metronome.
- The metronome starts with a default tempo of 120 beats per minute (BPM) and a 4/4 time signature, ready for immediate use.

### Adjusting Tempo
Adjust the tempo (40–208 BPM) with the ease of sliding a weight on a physical metronome, using drag-and-drop or precise controls.

#### Drag-and-Drop Tempo Adjustment
- **Standard Tempo Slider**:
  - Find the tempo slider, which looks like the adjustable weight on a physical metronome’s pendulum.
  - Click and drag the slider up to slow down or down to speed up the tempo, just as you would move a weight on a physical metronome.
  - Release to set the tempo. The tempo display updates instantly to show the current BPM.
  - Visual cues appear when you’re close to the minimum (40 BPM) or maximum (208 BPM) limits, similar to the physical stops on a metronome.
- **Precise Tempo Adjustment**:
  - Click and drag the tempo display (the number showing the BPM) for fine-tuned control, like setting an exact BPM on a digital metronome.
  - Drag up to decrease BPM or down to increase BPM in 1-BPM steps.
  - The cursor changes to a “grabbing” hand, and subtle blur effects show how fast you’re dragging, making it feel responsive.

#### Notes
- You’ll hear a click sound when the tempo crosses certain thresholds (every 6 BPM), similar to the ticks of a mechanical metronome.
- If you try to drag beyond the minimum or maximum tempo, the metronome will stop dragging after a few attempts and play a distinct sound to let you know you’ve hit the limit.

### Changing Time Signature
Switch between time signatures (0/4, 2/4, 3/4, 4/4, 6/4) with a simple drag, like turning a dial on a physical metronome.
- **Drag to Adjust**:
  - Locate the time signature adjuster, typically a horizontal bar or marker below the metronome.
  - Click and drag left or right to cycle through time signatures. The current time signature is highlighted (e.g., “4” for 4/4).
  - Release to set the time signature, and you’ll hear a click sound, mimicking a mechanical adjustment.
- The time signature adjuster appears briefly during changes and hides after 1 second to keep the interface clean.

### Using the Swing Arm
The swing arm acts like the swinging pendulum of a physical metronome, visually guiding your rhythm.
- **Starting the Metronome**:
  - Click and drag the swing arm left or right, then release, as you would nudge a physical metronome’s pendulum to start it.
  - If released near the center (almost straight up), the metronome stops, like a pendulum settling.
  - If released at an angle, the metronome starts, and the swing arm moves back and forth in sync with the tempo, just like a physical metronome.
- **Stopping the Metronome**:
  - Drag the swing arm back to the center or press the spacebar (see [Keyboard Controls](#keyboard-controls)).
  - The arm smoothly returns to a straight position with a brief animation, resembling a physical pendulum slowing down.

### Tap Tempo
Set the tempo by tapping, just like tapping your foot to match a song’s rhythm.
- Press the `T` or `t` key repeatedly to tap out a rhythm.
- After four or more taps, the metronome calculates the average time between taps and sets a new tempo (between 40 and 208 BPM).
- Each tap triggers a click sound, and the tempo display updates automatically.
- If you stop tapping for 5 seconds, the tap history resets, ready for a new session.

### Keyboard Controls
Control the metronome with keyboard shortcuts, offering a hands-free alternative to physical metronome buttons:
- **Arrow Up**: Increase tempo by 1 BPM (or decrease if you’ve enabled reverse vertical controls in preferences).
- **Arrow Down**: Decrease tempo by 1 BPM (or increase if reverse vertical is enabled).
- **Arrow Left**: Switch to the previous time signature (or next if reverse horizontal is enabled).
- **Arrow Right**: Switch to the next time signature (or previous if reverse horizontal is enabled).
- **Spacebar**: Start or stop the metronome, like pressing a start/stop button.
- **T or t**: Tap to set the tempo based on your rhythm.

### Audio and Visual Feedback
The metronome provides familiar audio and visual cues to enhance the physical metronome experience:
- **Audio Feedback**:
  - The first beat of a measure (strong beat) plays a louder, distinct sound, like an accented tick on a physical metronome.
  - Other beats (normal beats) play a softer sound.
  - Tempo adjustments play a click sound when crossing thresholds, and time signature changes or limit hits play a different click, mimicking mechanical sounds.
- **Visual Feedback**:
  - The swing arm moves in time with the tempo, just like a physical metronome’s pendulum.
  - The background flashes with different colors for each beat (if enabled in preferences), helping you follow the rhythm visually.
  - During tempo dragging, a blur effect shows your drag speed, and the time signature adjuster highlights the selected option for clarity.

### Tips for Effective Use
- **Use It Like a Physical Metronome**: Drag the swing arm or tempo slider to feel like you’re using a traditional metronome.
- **Match Songs with Tap Tempo**: Use `T` or `t` to quickly set the tempo to a song’s rhythm.
- **Fine-Tune Precisely**: Drag the tempo display number for exact BPM adjustments during practice.
- **Go Hands-Free with Keyboard**: Use arrow keys and the spacebar for quick control, especially when playing an instrument.
- **Turn On Visual Feedback**: Enable background flashes in preferences for visual rhythm cues in noisy environments.
- **Try Different Time Signatures**: Switch time signatures to practice complex rhythms, using drag or arrow keys.
- **Check Audio Levels**: Adjust your device’s volume to clearly hear the strong and normal beats for better rhythm tracking.

Our metronome’s intuitive design makes it as easy to use as a physical metronome, blending traditional familiarity with modern interactivity. Enjoy practicing with rhythm and precision!

## Technical Notes

### Key Features

- **Dynamic Tempo Adjustment**: Users can adjust the tempo (40–208 BPM) via drag-and-drop on the tempo slider or precise tempo controls, with real-time visual and audio feedback.
- **Time Signature Customization**: Supports multiple time signatures (0/4, 2/4, 3/4, 4/4, 6/4) adjustable through a draggable interface, with highlighted visual cues.
- **Swinging Pendulum Animation**: A visually appealing swing arm animation that synchronizes with the metronome's tempo, enhancing the user experience.
- **Tap Tempo Functionality**: Allows users to set the tempo by tapping, calculating the average interval between taps to determine BPM.
- **Keyboard Controls**: Supports keyboard inputs (e.g., arrow keys for tempo and time signature adjustments, spacebar to toggle on/off) for accessibility.
- **Audio Feedback**: Utilizes Web Audio API to play distinct sounds for strong and normal beats, as well as tempo and time signature adjustments, with customizable playback rates.
- **Visual Feedback**: Includes background color flashes on beats (if enabled) and dynamic blur effects during tempo adjustments to indicate drag speed.
- **Drag-and-Drop Interaction**: Offers intuitive drag controls for tempo, precise tempo, and swing, with safeguards to prevent exceeding limits and smooth transitions.

### Key Mechanism for Smooth Swing Transition
When a user drags the swing arm and releases it, the metronome transitions smoothly from the manual drag state to the automated swinging state.

The smooth transition is achieved by detecting the end of the user's drag, determining the swing arm's current position, moving it to the starting point of the metronome's periodic animation using a CSS transition, and then initiating the metronome's swing animation and audio playback with precise timing to maintain synchronization. This approach prevents abrupt visual changes, ensuring a cohesive flow from manual dragging to automated swinging.

> ^ ß 0.1.1 - Initial release with core features and basic UI. ^

<br>
<hr>
<br>

<div class="space-break dots" data-height="4"></div>