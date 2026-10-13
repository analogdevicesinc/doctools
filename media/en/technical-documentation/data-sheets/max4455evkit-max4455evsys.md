<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

## General Description

The MAX4455 evaluation kit (EV kit) is an assembled and tested circuit board that demonstrates the MAX4455 arbitrary graphics on-screen display video generator. Windows ® 98 software provides a handy user interface to exercise the features of the MAX4455. (Windows 2000 is supported, but at a severely reduced data rate.)

Order the complete evaluation system (EV system) (MAX4455EVSYS) for comprehensive evaluation of the MAX4455 using a PC and the recommended crosspoint switch. A bidirectional parallel port is required. Order the EV kit (MAX4455EVKIT) for use with other userdefined external solutions.

Windows is a registered trademark of Microsoft Corp.

## MAX4455EVSYS Component List

| PART         |   QTY | DESCRIPTION                 |
|--------------|-------|-----------------------------|
| MAX4455EVKIT |     1 | 8-channel on-screen display |
| MAX4358EVKIT |     1 | 32 × 16 crosspoint switch   |

| DESIGNATION                              |   QTY | DESCRIPTION                                                  |
|------------------------------------------|-------|--------------------------------------------------------------|
| C1-C17, C19, C21, C22, C24-C29, C31, C48 |    28 | 0.1µF ±10%, 10V ceramic capacitors (0402)                    |
| C18, C23, C30, C57                       |     4 | 100µF ±20%, 6.3V ceramic capacitors (2220) TDK C575X5R0J107M |
| C20                                      |     1 | 0.01µF ceramic capacitor (1206)                              |
| C32, C35, C36, C39, C40, C43, C44, C47   |     8 | 470pF ±10%, 50V ceramic capacitors (0402)                    |
| C33, C34, C37, C38, C41, C42, C45, C46   |     8 | 0.047µF ±10%, 10V ceramic capacitors (0402)                  |
| C49-C56                                  |     0 | Leave open                                                   |
| J5                                       |     1 | 2 × 25 right-angle header                                    |
| J6                                       |     1 | 2 × 13 right-angle header                                    |
| JU1-JU8                                  |     0 | Leave open                                                   |
| JU9                                      |     1 | 2-pin jumper                                                 |
| JU9                                      |     1 | Shunt                                                        |
| R1                                       |     1 | 10k Ω ±1% resistor (1/4W axial leaded)                       |

## MAXIM

## Features

- ♦ Character Generation Using Fonts from Host PC
- ♦ Demonstration Software and Test Patterns Included
- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | DESCRIPTION                             |
|--------------|--------------|-----------------------------------------|
| MAX4455EVSYS | 0°C to +70°C | Complete system                         |
| MAX4455EVKIT | 0°C to +70°C | Requires user-supplied fast mux switch* |

## EV Kit Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                                                |
|----------------|-------|----------------------------------------------------------------------------------------------------------------------------|
| R2-R9          |     8 | 75 Ω ±1% SMT resistors (0402)                                                                                              |
| R10-R17        |     8 | 430 Ω ±5% SMT resistors (0402)                                                                                             |
| TB1            |     2 | 6-position terminal blocks                                                                                                 |
| U1             |     1 | MAX4455ECQ                                                                                                                 |
| U2             |     1 | Dynamic RAM Micron MT48LC1M16A1TG-7S                                                                                       |
| U3             |     1 | MAX8867EUK33                                                                                                               |
| U4             |     1 | Full-size crystal oscillator ICM International Crystal Manufacturing Corp., Inc. Catalog IT1100FSS, custom 40.5MHz, 3.3VDC |
| U4, Y1         |     8 | Socket pins                                                                                                                |
| VSYNC0- VSYNC7 |     8 | BNC female jacks                                                                                                           |
| Y1             |     0 | Leave open                                                                                                                 |
| None           |     1 | PC board                                                                                                                   |
| None           |     1 | MAX4455 EV kit software CD-ROM                                                                                             |
| None           |     1 | MAX4455 data sheet                                                                                                         |
| None           |     1 | MAX4455 EV kit data sheet                                                                                                  |
| None           |     1 | DB25 IDC plug connector with 6ft ribbon cable D i g i - Key M 7P X G- 2S O6J or eq ui val ent                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX4455 Evaluation Kit/Evaluation System

## Quick Start

## Recommended Equipment

Before you begin, the following equipment is needed:

- Dual-output DC power supply, ±5V at 500mA
- Computer running Windows 98/2000, with a bidirectional or ECP parallel port
- Video signal sources (such as cameras)
- Video monitor(s)
- MAX4455 EV kit
- MAX4358 EV kit
- 25-pin I/O extension cable (included in EV kit)

## Procedure

- 1) Carefully connect the boards by aligning the two rightangle headers of the MAX4455 EV kit with the corresponding headers of the MAX4358 EV kit. Gently press them together. The two boards should be flush against one another.
- 2) With the power supply off, connect the power supply to the MAX4358 EV kit terminal block TB1 (see Table 1).
- 3) With the power supply off, connect the power supply to the MAX4455 EV kit terminal block TB1 (see Table 1).
- 4) Install  the  EV system software on your computer by running the INSTALL.EXE program on the CD-ROM. The program files are copied and icons are created for them in the Windows Start menu. Note: Windows 2000 requires an extra installation step; refer to file win2000.pdf.
- 5) Ensure that the MAX4358 jumpers JU1-JU4 are open.
- 6) Turn on the power supply.
- 7) Connect the 25-pin I/O extension cable between the computer's parallel port and the MAX4358 EV kit. The MAX4358 EV kit includes a suitable 25-pin I/O extension cable. Snap on the included ferrite bead to reduce PC-generated noise from affecting the video boards.
- 8) Start the program by opening its icon in the Start menu.
- 9) Connect video signal sources to IN00...IN03 on the MAX4358 EV kit.
10. 10 Connect video displays to OUT00...OUT03 on the MAX4358 EV kit.
- 11) Confirm that the software successfully connected video source IN00 to video monitor OUT00. The video signal should be visible on the monitor.
- 12) Confirm that the on-screen display is working by selecting the text tool ( )  and then clicking in the middle of the large blue display control area. The Character Generator dialog box pops up. Click OK to copy the text to the on-screen display memory. Both the computer and the video monitor should show the key/fill  text. Note: The parallel port interface bandwidth severely limits the graphics transfer rate between the MAX4455 and the host PC.

## Table 1. MAX4455 EV System Power Connections

| MAX4455 TB1 TERMINAL   | REQUIRED POWER SUPPLY                                      |
|------------------------|------------------------------------------------------------|
| +3.3V                  | Leave unconnected. Supplied by on- board linear regulator. |
| DGND                   | Digital ground return.                                     |
| VKEY                   | OSDFILL power. Connect to +5V supply.                      |
| AGND                   | Analog ground return.                                      |
| VCC                    | Main power. Connect to +5V supply.                         |
| VH1                    | Host power. Connect to +5V supply.                         |
| MAX4358 TB1 TERMINAL   | REQUIRED POWER SUPPLY                                      |
| VCC                    | Connect to +5V supply.                                     |
| AGND                   | Analog ground return.                                      |
| VEE                    | Connect to -5V supply.                                     |
| DGND                   | Digital ground return.                                     |
| VDD                    | Connect to +5V supply.                                     |

## Detailed Description of Software

The MAX4455 EV kit software is a simple but effective paint program that draws on the on-screen display memory. There are nine drawing windows: one for each of the eight on-screen display channels, and a master window for simultaneously writing multiple channels. The large blue area represents the on-screen display memory. Each pixel in this area corresponds to one pixel  in  the  on-screen  display  memory. Transparent areas are blue. The OSDKEY signal is automatically generated for any pixel that is not transparent. The software implements a few simple tools for drawing lines, boxes, and text. User-generated graphics can be loaded from standard Windows bitmap files, and the contents of the on-screen display can be saved to a standard Windows bitmap file. Tables 2-10 describe the buttons found on various toolbars.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

## Loading and Saving Files

The  MAX4455  on-screen  display  uses  15-level grayscale patterns. When the MAX4455 EV kit software saves an image as a windows bitmap, each pixel of the on-screen display image is converted from 15-level grayscale into an equivalent RGB value:

```
osd_value &= 0x0F; if (osd_value == 0) { unsigned __int8 red   = 0; unsigned __int8 green = 0; unsigned __int8 blue  = 255; } else { unsigned __int8 greyscale_nybble = osd_value + 1; double luma  = (greyscale_nybble * 256.0 / 16.0); if (luma > 255.0) { luma = 255.0; } if (luma < 0) { luma = 0; } unsigned __int8 red   = luma; unsigned __int8 green = luma; unsigned __int8 blue  = luma; } color =((blue * 0x10000) | (green * 0x100) | (red));
```

When the MAX4455 EV kit software loads a Windows bitmap image, each pixel of the image is converted from RGB into an equivalent brightness (luma) value, in accordance with the following equation:

```
Luma = (0.299 x Red) + (0.587 x Green) + (0.114 x Blue)
```

The MAX4455 EV kit software uses pure saturated blue (RGB value of red = 0, green = 0, blue = 255) to designate transparent pixels.

Example code: converting RGB value into MAX4455 on-screen display control nybble:

```
const double ar = 0.299, ag = 0.587, ab = 0.114, offset = 0; double luma = ar x red + ag x green + ab x blue + offset; unsigned __int8 greyscale_nybble = ((luma * 16.0) / 256) + 0.5; if (greyscale_nybble > 15+1) { greyscale_nybble = 15+1; } if (greyscale_nybble < 1+1) { greyscale_nybble = 1+1; } osd_control_value = greyscale_nyb ble - 1;
```

<!-- image -->

## Creating Test Patterns

Simple brightness-gradient test patterns can be drawn interactively  using  the  horizontal  or  vertical  luma  bar drawing tool. Click the desired tool button ( or ), and then drag the mouse across the opposite corners of  the  desired  region.  The  white  bar  is  always  drawn near where the mouse is first clicked. All 15 grayscale levels are drawn, and one additional transparent bar is drawn just after the black bar.

Custom test patterns can be created using any paint program that can read and write Windows bitmap files. Always start with a pure saturated blue background (RGB value of red = 0, green = 0, blue = 255) for a transparent background.

Capture any program's output by pressing ALT+ PrintScreen ,  then  paste  into  the  Windows  Paint  program and save as a bitmap. For example:

- 1) Run the MAX4455 EV kit software.
- 2) Click the View Channel 0 button ( ).
- 3) Draw some luma bars ( or ) to use as a drawing palette (optional).
- 4) Locate your monitor's overscan boundary by pointing the camera at a black field, choose a contrasti ng  drawing color ( ),  select  the  free-hand drawing tool ( ),  and drag the mouse around the edges of the on-screen display (optional).
- 5) Click the Save All button ( ), saving the empty onscreen display memory.
- 6) Edit the saved bitmap using any suitable paint program.
- 7) Load your newly created test pattern using the Load All button ( ). The test pattern is copied into the on-screen display memory.

## Using Shared Memory

The MAX4455 can insert a horizontal band of on-screen display information from a different channel. This example draws vertical bars on channel 0 and horizontal bars on channel 2, then shares part of the channel 0 memory into the channel 2 display.

- 1) Click the View Channel 0 button ( ).
- 2) Maximize the window.
- 3) Click the Vertical luma bars ( )  drawing tool, and drag the mouse from the upper-left corner of the drawing area to the lower-right corner of the drawing area. (Once drawing begins, minimize the window to improve drawing speed.)
- 4) Click the View Channel 2 button ( ).
- 5) Maximize the window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4455 Evaluation Kit/Evaluation System

- 6) Click the Horizontal luma bars ( )  drawing tool, and drag the mouse from the upper-left corner of the drawing area to the lower-right corner of the drawing area.
- 7) Click the Shared Memory from Channel 0/1 button ( ).
- 8) Click the Define Shared Memory button ( ),  and drag the mouse from the top of one of the bars to the bottom of the same bar.
- 9) View the video display connected to OUT02.

Figure 1. MAX4455 Single-Channel Write

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

On the host PC, the software displays a colored rectangle indicating the band of shared memory. The monitor displays the horizontal bars test pattern, replacing the shared memory band with the vertical bars pattern from channel 0.

## MAX4455 Evaluation Kit/Evaluation System

## Using the Time Stamp Using the Time Stamp

- 1) Click the View Channel 0 button ( ).
- 2) Enable the software time stamp by clicking the Time Stamp button ( ).
- 3) Click  the  Query  button  ( ),  and  move the mouse cursor to locate the top and bottom NTSC lines of the time stamp.
- 4) Click the View Channel 2 button ( ).
- 5) Click the Define Shared Memory button ( ).

<!-- image -->

Figure 2. MAX4455 Single-Channel Write-Expert Mode

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6) Define the top and bottom of the shared memory band by dragging the mouse from the top NTSC line of the time stamp to the bottom NTSC line of the time stamp.
- 7) Click the Shared Memory from Channel 0/1 button ( ).

The parallel port interface bandwidth severely limits the graphics transfer rate between the MAX4455 and the host PC.

## MAX4455 Evaluation Kit/Evaluation System

Figure 3. MAX4455 Multiple Channel Write

<!-- image -->

## Low-Level Register Access

The MAX4455 registers can be accessed directly in expert mode, which is enabled by clicking the Expert Mode button ( ) (see Table 2).

Normally, the user interface automatically writes to affected registers as soon as a control is changed. If you check ' postpone automatic updates, '  you  can

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

set up a write operation and control the exact moment when the register is updated. For example, you can type '150' into the VOFFSET edit field, and then click the VOFFSET SET button to perform the write.

## MAX4455 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX4455 Multiple Channel Write-Expert Mode

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

## Evaluate: MAX4455

## MAX4455 Evaluation Kit/Evaluation System

## Table 2. Command Buttons

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON   | FUNCTION                                                                        |
|----------|---------------------------------------------------------------------------------|
|          | Load bitmap file into on-screen display memory                                  |
|          | Save on-screen display memory to a bitmap file                                  |
|          | Decrease vertical offset, moving the on-screen display overlay up               |
|          | Increase vertical offset, moving the on-screen display overlay down             |
|          | Decrease horizontal offset, moving the on-screen display overlay to the left    |
|          | Increase horizontal offset, moving the on-screen display overlay to the right   |
|          | Inhibit the fill video insertion. Pass video signals with no on-screen display. |
|          | Toggle Expert Mode on and off, enabling direct access to the MAX4455 registers  |
|          | Erase the on-screen display memory                                              |
|          | Display the help file                                                           |

## Table 4. Shared Memory Tool Buttons

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON   | FUNCTION                                                                                                                    |
|----------|-----------------------------------------------------------------------------------------------------------------------------|
|          | Define the top and bottom of the shared memory band by dragging the mouse across the opposite corners of the desired region |
|          | Select channel 0 or 1 as the source of the shared memory                                                                    |
|          | Select channel 2 or 3 as the source of the shared memory                                                                    |
|          | Select channel 4 or 5 as the source of the shared memory                                                                    |
|          | Select channel 6 or 7 as the source of the shared memory                                                                    |
|          | Disable shared memory                                                                                                       |

## Table 3. Drawing Tool Buttons

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON   | FUNCTION                                                                                                                                                             |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|          | Read the luma fill value stored at the selected line and column                                                                                                      |
|          | Freehand drawing single-pixel points by dragging the mouse                                                                                                           |
|          | Freehand drawing whole quad-pixel groups by dragging the mouse                                                                                                       |
|          | Draw an open rectangle by dragging the mouse across the opposite corners of the desired region                                                                       |
|          | Draw a rectangle filled with the selected luminance value by dragging the mouse across the opposite corners of the desired region                                    |
|          | Draw a rectangle filled with horizontal bars of varying luminance by dragging the mouse across the opposite corners of the desired region                            |
|          | Draw a rectangle filled with vertical bars of varying luminance by dragging the mouse across the opposite corners of the desired region                              |
|          | Place text where the mouse was clicked. This button runs the character generator dialog box to select font and insert text.                                          |
|          | Load a bitmap file into the on-screen display memory. The upper-left corner of the bitmap is placed where the mouse was clicked.                                     |
|          | Read a p or ti on of the on- scr een d i sp l ay m em or y i nto the host b y d r ag g i ng the m ouse acr oss the op p osi te cor ner s of the d esi r ed r eg i on |

## Table 5. Time Stamp Buttons

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON   | FUNCTION                                         |
|----------|--------------------------------------------------|
|          | Place the time stamp where the mouse was clicked |
|          | Enable or disable the time stamp                 |
|          | Enable or disable the date stamp                 |
|          | Select the font to use for the time/date stamp   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

Table 6. Multiple Write Buttons

| BUTTON   | FUNCTION                                                   |
|----------|------------------------------------------------------------|
|          | Enable or disable channel 0 when writing                   |
|          | Enable or disable channel 1 when writing                   |
|          | Enable or disable channel 2 when writing multiple channels |
|          | Enable or disable channel 3 when writing multiple channels |
|          | Enable or disable channel 4 when writing multiple channels |
|          | Enable or disable channel 5 when writing multiple channels |
|          | Enable or disable channel 6 when writing                   |
|          | Enable or disable channel 7 when writing multiple channels |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Table 8. Luma (Brightness) Buttons

| BUTTON   | LUMA FILL VALUE       |   MAX4455 QUAD-PIXEL LUMA NYBBLE |
|----------|-----------------------|----------------------------------|
|          | Transparent (no fill) |                                0 |
|          | Insert 7 IRE fill     |                                1 |
|          | Insert 14 IRE fill    |                                2 |
|          | Insert 21 IRE fill    |                                3 |
|          | Insert 27 IRE fill    |                                4 |
|          | Insert 34 IRE fill    |                                5 |
|          | Insert 41 IRE fill    |                                6 |
|          | Insert 47 IRE fill    |                                7 |
|          | Insert 54 IRE fill    |                                8 |

Table 7. Window View Buttons

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON   | FUNCTION                                  |
|----------|-------------------------------------------|
|          | View multiple-write window (main window)  |
|          | View the channel 0 window                 |
|          | View the channel 1 window                 |
|          | View the channel 2 window                 |
|          | View the channel 3 window                 |
|          | View the channel 4 window                 |
|          | View the channel 5 window                 |
|          | View the channel 6 window                 |
|          | View the channel 7 window                 |
|          | View the MAX4358 crosspoint switch window |
|          | View the parallel port diagnostics window |

Table 8. Luma (Brightness) Buttons (continued)

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON   | LUMA FILL VALUE     |   MAX4455 QUAD-PIXEL LUMA NYBBLE |
|----------|---------------------|----------------------------------|
|          | Insert 60 IRE fill  |                                9 |
|          | Insert 67 IRE fill  |                               10 |
|          | Insert 74 IRE fill  |                               11 |
|          | Insert 80 IRE fill  |                               12 |
|          | Insert 87 IRE fill  |                               13 |
|          | Insert 94 IRE fill  |                               14 |
|          | Insert 100 IRE fill |                               15 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4455 Evaluation Kit/Evaluation System

Figure 5. MAX4358 Crosspoint Switch

<!-- image -->

## Table 9. MAX4358 Crosspoint Switch Command Buttons

<!-- image -->

<!-- image -->

<!-- image -->

## PAL/SECAM Compatability

When used with PAL or SECAM video systems, use the vertical offset ( ) to position the active portion of the on-screen display so that it is visible.

## Writing a Single Channel

The single-channel screen includes the drawing tools, plus shared memory, vertical and horizontal offset, reading on-screen display memory, and display inhibit. Due to the severely limited bandwidth of the parallel port, the MAX4455 EV kit software time-stamp function is  not  offered  for  the  multiple-write  screen  (see  the Using the Time Stamp section).

| BUTTON   | FUNCTION                                                                           |
|----------|------------------------------------------------------------------------------------|
|          | Route MAX4358 inputs 0-15 to outputs 0-15                                          |
|          | Inhibit all video outputs                                                          |
|          | Set all MAX4358 outputs to unity gain                                              |
|          | Set all MAX4358 outputs to a gain of 2V/V                                          |
|          | Toggle Expert Mode on and off, enabling access to all 32 inputs and all 16 outputs |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

Figure 6. MAX4455 Character Generator

<!-- image -->

## Table 10. Character Generator Command Buttons

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

| BUTTON                                               | FUNCTION                         |
|------------------------------------------------------|----------------------------------|
| Choose which text                                    | windows font to use when drawing |
| Write white text (100 IRE) on a black background     |                                  |
| Write light gray text (74 IRE) on a black background |                                  |
| Write dark gray text (47 IRE) on a black background  |                                  |
| Write black text (0 IRE) on a white (100 background  | IRE)                             |

## Writing Multiple Channels

The main screen's drawing tools can draw on all eight channels of the on-screen display. Table 6 shows the buttons that enable or disable each channel. When the program starts, channel 0 is automatically enabled. The main screen has a diagnostic menu, with global settings related to low-level register access. These settings do not need to be changed.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4358 Crosspoint Switch

The MAX4455 EV kit is designed for use with the MAX4358 crosspoint switch. To control the MAX4358 EV kit  (included in the MAX4455EVSYS), choose the MAX4358 crosspoint from the view menu (see Figure 5).

Each of the outputs has a drop-down combo box to select an input signal. Each output can also be configured for unity gain or a gain of 2V/V. The setup menu lets you quickly disable all outputs, or quickly connect each output to a preset input.

Due to space limitations, the MAX4358 EV kit provides BNC connectors for only four of its 16 outputs and only four  of  its  32  inputs.  However,  the  entire  chip  is  functional,  and  the  software  allows  control  of  all  channels. When expert mode is selected, the GUI provides controls for all inputs and outputs, as well as exposing the IC address pin controls.

## MAX4455 Evaluation Kit/Evaluation System

## Character Generator

The MAX4455 EV kit software can generate text labels using any standard Windows font installed on the host computer system. Typical Windows systems usually include Arial, Courier New, and Times New Roman fonts.

The font selector button runs the standard Windows font  selector  dialog  box,  which  lets  you  choose  from any of the fonts installed on your system.

The text color buttons set the text foreground color to luma values of 100 IRE, 74 IRE, 47 IRE, or 0 IRE.

## Detailed Description of Hardware

The MAX4455 EV kit consists of a MAX4455 arbitrary graphics  on-screen  display  video  generator,  a synchronous dynamic RAM, a 3.3V crystal oscillator module, and a 3.3V linear regulator. Cost-sensitive applications can replace the crystal oscillator module with a 40.5MHz fundamental mode crystal. Resistor R1 sets the white video fill. (Refer to the MAX4455 data sheet for white level calculation.)

The crosspoint outputs are sampled through the rightangle connector J5, or can optionally be fed through the BNC jacks. Resistor/capacitor networks such as C32-C33-R10 sample the video signals.

Because the MAX4455 EV system uses a bidirectional parallel printer cable as opposed to a local microprocessor bus, Schmitt triggers are used to sharpen the rise times of the read and write strobes. These Schmitt trigger buffers are located on the MAX4358 EV kit companion board.

## Design Considerations

For best picture quality, the design of a custom MAX4455 on-screen display system requires careful attention to the ground return paths. The MAX4455 video outputs switch a significant amount of current into the analog ground return.

The EV kit is designed as a two-board set to accommodate customers using different video crosspoints. However, for best results, the MAX4455 should be located close to the crosspoint switch.

The MAX4455 is designed to interface directly to a microprocessor. The EV kit uses the parallel port for ease of evaluation, which is not recommended for production designs. Throughput is severely limited, and the long cable requires Schmitt trigger buffers to clean up the read/write strobes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Troubleshooting

## Problem: display seems to flicker

Interlaced raster scan can appear to flicker for test patterns that have sharp, single-pixel horizontal lines. Flicker is worst on small, bright, high-contrast features. Apply a digital antialiasing function across the test pattern before writing it to the MAX4455. Do not write single-pixel lines; instead, write both field 1 and field 2 of each NTSC line pair.

## Problem: software can't read MAX4455 EV kit

Although the MAX4455 EV kit works directly with most modern computers, some systems require that the parallel  port  must be enabled for bidirectional mode in the BIOS setup screen. You must reboot your computer, enter BIOS setup before Windows starts, find the integrated peripherals screen, and ensure that the LPT port is configured as an ECP port. Standard and EPP parallel port settings are not compatible with the MAX4455 EV kit.

## Problem: switching channels causes the display to roll

If the MAX4455 inserts video fill during the vertical blanking interval, it can miss the vertical sync information. The solution is to set the BLANK bit true when switching the crosspoint. Once video sync is established, set the BLANK bit false to re-enable the video fill. (Refer to the MAX4455 data sheet for more information.)

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

<!-- image -->

Figure 7. MAX4455 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4455 Evaluation Kit/Evaluation System

Figure 7. MAX4455 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. MAX4455 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4455 Evaluation Kit/Evaluation System

Figure 9. MAX4455 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

<!-- image -->

Figure 10. MAX4455 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4455 Evaluation Kit/Evaluation System

Figure 11. MAX4455 EV Kit PC Board Layout-Internal Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4455 Evaluation Kit/Evaluation System

<!-- image -->

Figure 12. MAX4455 EV Kit PC Board Layout-Internal Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4455 Evaluation Kit/Evaluation System

Figure 13. MAX4455 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->