<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

## Features

- S USB Powered, No Additional Supply Needed* (Cable Not Included)
- S 3.3V Fixed VDD from On-Board LDO (MAX8510)
- S 3.000V On-Board Precise Voltage Reference (MAX6133)
- S Direct USB Communication through the MAXQ622 Microcontroller
- S Windows XP-, Windows Vista-, and Windows 7 (32-bit)-Compatible Software
- S SPI Interface Terminals
- S Proven PCB Layout
- S Fully Assembled and Tested

* Since 14 bits is 16,383 levels, the LSB is 183µV. Depending on how clean the computer's USB power is, it may be necessary to provide clean analog power for the best accuracy.

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| J3            |     0 | Not installed, 2-pin header, 0.1in centers                   |
| J4            |     0 | Not installed, 1-pin header                                  |
| J5, J7, J8    |     3 | Turret terminal pin headers Mill-Max 2108-2-00-44-00-00-07-0 |
| J6            |     0 | Not installed, 4-pin header, 0.1in centers                   |
| J9            |     0 | Not installed, RF-coaxial SMA connector Molex 733910060      |
| R1, R2, R10   |     3 | 27 I Q 1% resistors (0603) YAGEO RC0603FR-0727RL             |
| R3            |     1 | 1k I Q 1% resistor (0603) Panasonic ERJ-3EKF1001V            |
| R4-R9         |     6 | 0 I Q 1% resistors (0603) YAGEO RC0603FR-070RL               |

## General Description

The  MAX5214DACLite  evaluation  kit  (EV  kit)  enables evaluation  of  the  MAX5214  single-channel,  low-power, buffered-output, 3-wire SPI interface 14-bit DAC. The EV kit  also  includes  Windows  XP M -,  Windows  Vista M -,   and Windows M 7-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

| DESIGNATION           |   QTY | DESCRIPTION                                                                |
|-----------------------|-------|----------------------------------------------------------------------------|
| C1, C2, C5, C6 C7, C9 |     6 | 1 F F Q 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K          |
| C3                    |     1 | 10nF Q 10%, 50V X7R ceramic capacitor (0603) TDK CGA3E2X7R1H103K           |
| C4, C8, C12, C13, C14 |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104KA01J |
| C10, C11              |     2 | 18pF Q 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0GH1180JT           |
| FB1                   |     1 | Ferrite bead (0805) TDK MMZ20112Y601BT                                     |
| J1                    |     1 | Mini-USB-B receptacle Mill-Max 897-43-005-00-100001                        |
| J2                    |     0 | Not installed, 10-pin (2 x 5) JTAG header, 0.1in centers                   |

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| U4            |     1 | 3.3V, ultra-low noise LDO linear regulator (5 SC70) Maxim MAX8510EXK33+ |
| Y1            |     1 | 12MHz crystal oscillator (HC49US) Abracon Crystals ABLS-12.000MH-B4-T   |
| -             |     1 | PCB: MAX5214Lite Rev. A                                                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Abracon Corporation                    | 945-546-8000 | www.abracon.com             |
| Mill-Max Mfg. Corp.                    | 516-922-6000 | www.mill-max.com            |
| Molex                                  | 800-768-6539 | www.molex.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| YAGEO Corporation                      | -            | www.yageo.com               |

Note: Indicate that you are using the MAX5214 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX5214DACLite	EV	kit The EV kit board is a plug-n-play device that connects to the PC through a USB-A to Mini-B cable. The USB cable  is  not  included,  but  is  widely  available  from local stores.
- The	EV	kit	is	preloaded	with	the	default	firmware	that communicates with the MAX5214DACLite evaluation software.  Software  can  be  installed  and  run  on  any Windows-based system.

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

µ MAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| U1            |     1 | 14-bit DAC (8 F MAX M ) Maxim MAX5214GUA+                                    |
| U2            |     1 | 16-bit microcontroller with USB 2.0 interface (64 LQFP) Maxim MAXQ622G-0000+ |
| U3            |     1 | 3.000V, 3ppm/ N C, low-power voltage reference (8 F MAX) Maxim MAX6133A30+   |

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV  kit software, 5214DACLiteRxx-LV.ZIP.  Unzip  the  file  and  run  the setup.exe  program.  Follow  the  instructions  to  install the evaluation software on your PC. The program files are  copied  and  icons  are  created  in  the  Windows Start | Programs menu.
- 2)  Connect  the  MAX5214DACLite  to  the  PC  through  a USB cable. No additional driver is needed; Windows recognizes  the  new  device  as  a  human  interface device (HID) and automatically finds and installs the appropriate driver for it. For more information, check the device properties in:

Device  Manager\Human  Interface  Control\USB Input Device\Properties  USB\VID\_0B6A and PID\_1234 . See Figure 1.

- 3)  Run the MAX5214Lite.exe program. The application's GUI window appears, as shown in Figure 2.

## Evaluates: MAX5214

Figure 1. USB Input Device Properties

<!-- image -->

Figure 2. GUI Single Operation Tab

<!-- image -->

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

the  slider  position  with  a  decimal  number.  Connect  a digital multimeter (DMM) to the J5 header (Figure 8) to measure the DAC output voltage.

The DAC output can also be set by selecting a decimal, hexadecimal,  or  an  octal  or  binary  value  in  the DAC Control spin box (Figure 4). The IC accepts codes from 0  to  16383  (2 14 -1)  decimal  or  from  0  to  3FFF  hex.  The notation is displayed on the left side of the box.

In  the Rising  Ramp , Falling  Ramp , Triangle , Sine , Square wave , or Staircase tab sheets give the DAC the ability to generate different waveforms with the selected parameters  (see  the  sine-wave  and  staircase  plots shown in Figures 5 and 6). There is a possible delay to start  a  new  waveform  until  previous  one  finishes  a  full cycle when switching between tabs.

## Detailed Description of Software

## Single Operation Tab

The Single Operation tab (Figure 2) is active by default. The  application  checks  all  the  boards  with  the  USB VID/PID 0x0B6A/0x1234 that connected to the PC and indicates  them  on  the  right  side  of  the  GUI.  Up  to  16 boards  can  be  connected  to  the  system.  Each  board has its own unique board index even though the board ID could be the same. In order to communicate with a particular board, the Board ID index should match with the Board Index box (Figure 3).

Any  possible  operation  can  be  evaluated  on  this  tab sheet. For example, move the track bar slider to set the DAC output voltage. The DAC Control spin box reflects

<!-- image -->

Figure 3. Select the Board Index in the System with Multiple Boards

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

Figure 4. Notation Selection Dialog Box

<!-- image -->

Figure 5. Sine-Wave Generator

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

5

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

Figure 6. Staircase Plot

<!-- image -->

## Detailed Description of Hardware

The  MAX5214Lite  EV  kit  board  is  loaded  with  the MAX5214,  Maxim's  best-in-class,  lowest  power  14-bit DAC.  The  on-board  MAX6133A30  device  (U3)  provides low noise, low-temperature drift of 3ppm/ N C, and 3.000V  precise  voltage  reference  for  the  DAC.  The MAX5214    device  (U1)  receives  a  command  from  the 16-bit  MAXQ622  microcontroller  (U2)  through  a  3-wire high-speed SPI bus. The U1 device can run at 50MHz clock  frequency,  but  the  SPI  bus  speed  is  limited  to 6MHz on this board by the microcontroller. The U1, U2, and U3 devices are powered by the MAX8510 3.3V LDO, low-noise voltage regulator (U4), which gets power from the  USB  port.  The  U1  device  can  be  evaluated  at  the fixed  VDD level  of  3.3V  only.  The  above  limitations  are reflected by the suffix 'Lite' in the name of the board. The EV kit block diagram is shown in Figure 7.

<!-- image -->

Figure 7. MAX5214Lite EV Kit Block Diagram

<!-- image -->

The evaluation software allows full access to the DAC's functions  and  features  through  the  full-speed  USB  -2.0 bus  and  the  U2  microcontroller.  The  microcontroller  is preloaded  with  the  firmware  that  communicates  with the GUI.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5214DACLite Evaluation Kit Evaluates: MAX5214

## MAX5214Lite Extended Features

## Table 1. JTAG Connector Description (J2)

The U1 device can be evaluated over the full voltage and SPI bus speed ranges with an external power supply and SPI host controller. To do so, the following board modifications must be made:

- 1)  Totally  disconnect  the  U1  and  U3  devices  from  the rest  of  the  board  by  removing  resistors  R4-R9  (see Figure 10 for component placement).
- 2)  Connect the SPI lines, CSb, SCLK and DIN, and CLRb pins from J6 to the external host controller. Make sure that the input voltage (VIH) is within the spec limit and matches the AVDD level.
- 3)  Apply external power from 2.7V to 5.5V between J3.2 (AVDD) and J8 (GND).
- 4)  Send command to the DAC.

The  microcontroller  on  the  EV  kit  board  can  also  be programmed with custom firmware through the J2 JTAG connector (see Table 1).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

|   PIN | LABEL   | FUNCTION                        |
|-------|---------|---------------------------------|
|     1 | TCK     | Test clock                      |
|     2 | GND     | Digital ground                  |
|     3 | TDO     | Test data output                |
|     4 | N.C.    | No connect                      |
|     5 | TMS     | Test mode select                |
|     6 | RST     | Reset                           |
|     7 | N.C.    | No connect                      |
|     8 | +5V     | +5V from the JTAG debug adapter |
|     9 | TDI     | Test data input                 |
|    10 | GND     | Digital ground                  |

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

<!-- image -->

Figure 8. MAX5214DACLite EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5214DACLite Evalution Kit

## Evalutes: MAX5214

<!-- image -->

Figure 9. MAX5214DACLite EV Kit Component Placement Guide-Component Side (Top)

<!-- image -->

Figure 10. MAX5214DACLite EV Kit Component Placement Guide-Component Side (Bottom)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX5214DACLITE# | EV Kit |

# Denotes RoHS compliant.

## MAX5214DACLite Evaluation Kit

## Evaluates: MAX5214

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.