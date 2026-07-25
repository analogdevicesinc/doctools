<!-- lastmod 2022-08-02 -->
## General Description

The  MAX3945 evaluation  kit  (EV  kit)  is  an  assembled electrical  demonstration  board  that  provides  easy computer-controlled  evaluation  of  the  MAX3945  multirate  limiting  amplifier.  The  included  software  communicates with the EV kit through the USB port, and provides access to all the internal registers to optimize the functionality of the MAX3945. The EV kit is powered by a +3.3V supply and USB port. SMA connectors are used for the high-speed inputs and outputs. An LED indicates the status of USB power.

## EV Kit Contents

## S MAX3945 EV Kit Board

## Component List

* EP = Exposed pad.

| DESIGNATION                                  |   QTY | DESCRIPTION                                      |
|----------------------------------------------|-------|--------------------------------------------------|
| C1-C4, C10, C12, C20, C25, C26, C27, C49 C52 |    12 | 0.1 F F ceramic capacitors (0402)                |
| C5, C6, C8, C9, C11, C19                     |     6 | 1000pF ceramic capacitors (0402)                 |
| C7                                           |     1 | 100pF ceramic capacitor (0402)                   |
| C13                                          |     1 | 0.1 F F ceramic capacitor (0603)                 |
| C14                                          |     1 | 0.1 F F ceramic capacitor (0805)                 |
| C15                                          |     1 | 22 F F tantalum capacitor (B case)               |
| C18, C22                                     |     2 | 33pF ceramic capacitors (0402)                   |
| C34, C55                                     |     2 | 1 F F ceramic capacitors (0603)                  |
| C35, C37, C38                                |     3 | 4.7 F F ceramic capacitors (0805)                |
| D6                                           |     1 | Green LED                                        |
| J1                                           |     1 | 1 x 2, 0.1in pitch header Digi-Key S1012-36-ND   |
| J2, J4, J5, J9                               |     4 | SMA PCB-mount RF connectors Johnson 142-0701-851 |
| J3                                           |     1 | USB connector Tyco 1734035-1                     |
| J6, J10, TP1, TP2, TP3, TP7, TP8, TP10-TP13  |    11 | Test points Digi-Key 5000K-ND                    |

| DESIGNATION             |   QTY | DESCRIPTION                                                  |
|-------------------------|-------|--------------------------------------------------------------|
| L1                      |     1 | 4.7 F H inductor Taiyo Yuden CBC3225T4R7MR                   |
| L2, L3                  |     2 | 1 F H inductors (0603) Taiyo Yuden FB MH1608HM102-T          |
| L13                     |     1 | 22 F H, 520mA inductor Taiyo Yuden CBC3225T220M              |
| R1                      |     1 | 1k I resistor (0402)                                         |
| R7, R50                 |     2 | 4.7k I resistors (0402)                                      |
| R24                     |     1 | 1.5k I resistor (0402)                                       |
| R25, R29, R52, R62, R66 |     5 | 499 I resistors (0402)                                       |
| R30, R31, R51, R53      |     4 | 10k I resistors (0402)                                       |
| R91                     |     1 | 680 I resistor (0402)                                        |
| U1                      |     1 | Limiting amplifier (16 TQFN-EP*) Maxim MAX3945ETE+           |
| U10                     |     1 | 8-bit CMOS microcontroller with USB Microchip PIC16C745-I/SO |
| Y1                      |     1 | 6MHz crystal ECS Inc. ECS-60-32-5 PXDN                       |
| -                       |     1 | PCB: MAX3945 EVALUATION BOARD                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3945 Evaluation Kit

Features

- S Fully Assembled and Tested
- S Software Control Through USB Port
- S SMA Connectors for High-Speed Inputs and Output

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3945EVKIT+ | EV Kit |

1

## MAX3945 Evaluation Kit

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  kit  software.  Text  in bold  and underlined refers to items from the Windows M operating system.

- 1)  Reviewing  the  MAX3945  without  the  program  is simple. Connect jumper J1, as shown in Figure 2. At this time, do not connect the USB cable from the EV kit to the computer. Without the program control, the MAX3945 operates in the default mode. The default mode is shown in Table 1.
- 2)  From a 3.3V power supply, connect a wire from the 0V  terminal  to  GND  on  the  EV  kit  (J10).  Then  connect  a  wire  from  the  3.3V  terminal  to  the  VCC  pin (J6). Connect two cables with SMA connectors from a digital signal source to the RIN+ (J4) and RIN- (J9) of the EV kit. Connect two more cables from ROUT+ (J2) and ROUT- (J5) to an oscilloscope.
- 3)  On the signal source choose an NRZ signal between 10mVP-P  to  1.2VP-P  at  a  data  rate  from  1Gbps  to 11Gbps. Observe the output signal on the scope.

Table 1. Default Mode

| FUNCTION                                      | CONTROL               |
|-----------------------------------------------|-----------------------|
| Receive circuitry enabled                     | RX_EN = 1             |
| High bandwidth signal path                    | RATE_SEL = 1          |
| Differential output signal level (400mV P-P ) | SET_CML[7:0] = 92d    |
| No deemphasis                                 | RXDE_EN = 0           |
| Signal-loss detect enabled                    | LOS1_EN = 1           |
| LOS assert threshold of approximately 15mVP-P | SET_LOS[5:0] = 12d    |
| LOS timer period                              | SET_LOSTIMER[6:0] = 0 |
| Noninverted signal polarity                   | RX_POL = 1            |
| Squelch disabled                              | SQ_EN = 0             |
| Autozero loop enabled                         | AZ_EN = 1             |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figures 1a and 1b show the electrical schematics of the MAX3945 EV kit, while Figures 2 to 6 show the various layers of the PCB.

## General Setup

- 1)  Set  up  the  EV  kit  according  to  the Quick  Start instructions. Then connect a USB cable from the EV kit to a computer.
- 2)  Load the program onto the computer and click on the .ZIP file. Then click on Setup . Follow the instructions that come with the program. Users must have a Windows operating system.
- 3)  When the GUI appears on the screen, click on the USB Connect and Rx Read All button. The default settings  appear  on  the  screen.  Note  that  the  soft reset resets the part when the Rx Read All button is clicked, but the GUI is not updated until the Rx Read All button is toggled a second time.
- 4) It  is  a  simple  matter  to  change  the  settings  in  the GUI. Figures 7, 8, and 9 show the GUI dialog boxes with the resulting waveforms. The input waveform is a  200mVP-P  PRBS31  signal  at  6.25Gbps.  Note  the changes to the output waveforms as the settings are changed.

<!-- image -->

## MAX3945 Evaluation Kit

<!-- image -->

Figure 1a. MAX3945 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3945 Evaluation Kit

Figure 1b. MAX3945 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3945 Evaluation Kit

<!-- image -->

Figure 2. MAX3945 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3945 Evaluation Kit

Figure 3. MAX3945 EV Kit PCB Layout-Layer 1 (Primary Side)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3945 Evaluation Kit

<!-- image -->

Figure 4. MAX3945 EV Kit PCB Layout-Layer 2 (Ground Plane)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3945 Evaluation Kit

Figure 5. MAX3945 EV Kit PCB Layout-Layer 3 (Power Plane)

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3945 Evaluation Kit

<!-- image -->

Figure 6. MAX3945 EV Kit PCB Layout-Layer 4 (Secondary Side)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3945 Evaluation Kit

Figures 7a and 7b. The MAX3945 EV kit GUI showing the opening dialog box with the initial default settings (Figure 7a) and the corresponding waveform (Figure 7b).

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3945 Evaluation Kit

<!-- image -->

Figures 8a and 8b. The MAX3945 EV kit GUI showing the dialog box (Figure 8a) with the low-bandwidth signal path (RATE\_SEL = 0) and Rx bandwidth of 3.0GHz (BW1 = 1, BW0 = 1). Figure 8b presents the corresponding waveform.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX3945 Evaluation Kit

<!-- image -->

Figures 9a and 9b. The MAX3945 EV kit GUI showing the dialog box (Figure 9a) with the high-bandwidth signal path (RATE\_SEL = 1), maximum deemphasis (RXDE1 = 1, RXDE0 = 1), and CML output level of 498mVP-P (SET\_CML[7:0] = 155d). Figure 9b presents the corresponding waveform.

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3945 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/10            | Initial release | -               |