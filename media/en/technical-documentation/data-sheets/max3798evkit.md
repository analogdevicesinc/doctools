<!-- lastmod 2022-08-02 -->
## General Description

The  MAX3798  evaluation  kit  (EV  kit)  is  an  assembled electrical demonstration board that provides easy computer-controlled evaluation of the MAX3798 multirate limiting amplifier and VCSEL driver. The included software communicates with the EV kit through the USB port and provides access to all the internal registers to optimize the MAX3798 functionality. A +3.3V supply and USB port powers the EV kit. SMA connectors are used for the highspeed inputs and outputs. An LED indicates the status of USB power.

<!-- image -->

## MAX3798 Evaluation Kit

Features

- S Fully Assembled and Tested
- S Software Control Through USB Port
- S SMA Connectors for High-Speed Inputs and Outputs
- S Powered by +3.3V Supply and USB Port
- S Indicator for USB Power

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX3798EVKIT | EV Kit |

## Component List

| DESIGNATION                                              |   QTY | DESRCIPTION                                                 |
|----------------------------------------------------------|-------|-------------------------------------------------------------|
| C3-C6, C11, C12, C50, C51                                |     8 | 0.01 F F Q 10% ceramic capacitors (0402)                    |
| C7, C9, C10, C14, C15, C16, C19, C43, C44, C45, C47, C53 |    12 | 1000pF Q 10% ceramic capacitors (0402)                      |
| C18, C22                                                 |     2 | 33pF Q 5% ceramic capacitors (0402)                         |
| C21                                                      |     1 | 0.1 F F Q 10% ceramic capacitor (0805)                      |
| C25-C28, C46, C48, C49, C52, C56                         |     9 | 0.1 F F Q 10% ceramic capacitors (0402)                     |
| C29                                                      |     1 | 0.1 F F Q 10% ceramic capacitor (0603)                      |
| C34, C55                                                 |     2 | 1 F F Q 10% ceramic capacitors (0603)                       |
| C35, C37, C38                                            |     3 | 4.7 F F Q 10% ceramic capacitors (0805)                     |
| C57                                                      |     1 | 22 F F Q 5% tantalum capacitor (B case)                     |
| D6                                                       |     1 | Green LED Lumex SSL-LX3044GD                                |
| J1, J2, J4-J9                                            |     8 | SMA connectors, edge mount, tab center Johnson 142-0701-851 |

| DESIGNATION                                              |   QTY | DESRCIPTION                                             |
|----------------------------------------------------------|-------|---------------------------------------------------------|
| J3                                                       |     1 | Mini USB connector, B type Tyco 1743035-1               |
| JU1-JU9, JU20                                            |    10 | 2-pin headers, 0.1in centers                            |
| L4                                                       |     1 | 4.7 F H Q 20%, 870mA inductor Taiyo Yuden CBC3225T4R7MR |
| L8, L9, L11                                              |     3 | Ferrite beads (0603) Taiyo Yuden FBMH1608HM102-T        |
| L13                                                      |     1 | 22 F H Q 20%, 520mA inductor Taiyo Yuden CBC3225T220M   |
| R1                                                       |     1 | 1k I Q 1% resistor (0402)                               |
| R2                                                       |     1 | Not installed                                           |
| R10, R16, R50                                            |     3 | 4.7k I Q 1% resistors (0402)                            |
| R12, R13                                                 |     2 | 400 I Q 1% resistors (0402)                             |
| R18, R25, R29, R52, R55, R62, R66, R73                   |     8 | 499 I Q 1% resistors (0402)                             |
| R24                                                      |     1 | 1.5k I Q 1% resistor (0402)                             |
| R30, R31, R48, R51, R53                                  |     5 | 10k I Q 1% resistors (0402)                             |
| R91                                                      |     1 | 680 I Q 5% resistor (0402)                              |
| TP1, TP3-TP7, TP9, T10, TP11, TP13, TP14, TP15, J10, J13 |    14 | Test points                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3798 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESRCIPTION                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------|
| U8            |     1 | 1.0625Gbps to 10.32Gbps, integrated, low-power SFP+ limiting amplifier and VCSEL driver Maxim MAX3798ETJ+ (32 TQFN) |
| U10           |     1 | Microcontroller (28 SO) Microchip PIC16C745-I/SO                                                                    |

## Quick Start

Note: In the following section, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold and underlined refers to items from the Windows M operating system.

- 1)  Install shunts on jumpers JU1 to JU7.
- 2)    Connect a +3.3V supply to VCC (J13) and GND (J10). Set the supply current limit to 300mA.
- 3)    Connect the computer to the EV kit with a USB cable (A-Male  to  Mini-B-Male).  LED  D6  should  switch  on, indicating that USB power is detected.
- 4)    Connect a 2.0V power source to BIAS (TP3) to ensure proper transmitter operation.
- 5)    To  download  the  latest  version  of  the  EV  kit  software  (MAX3798revX.zip),  visit  the  Maxim  website at www.maxim-ic.com/evkitsoftware . Uncompress the zip file to a local folder and run the installation file  (setup.exe).  Installation  requires  administrative rights and can also require Internet access to download necessary drivers.
- 6)    After  installation  is  complete,  follow  this  path  to start the program: Start → All Programs → Maxim Integrated Products → MAX3798 Evaluation Kit .
- 7)    If the MAX3798 EV kit is connected with a USB cable, the Status indicator turns green. Otherwise, doublecheck the USB connection.
- 8)    The receiver (Figure 1) and transmitter (Figure 2) are controlled on separate tabs. The registers contain a default setting and can be read using the Read All button.  For  detailed  register  functions,  refer  to  the MAX3798 IC data sheet.
- 9)    Connect a 50 I CML source to RIN Q (J4 and J9) for the receiver. Connect a 50 I CML source to TIN Q (J5 and J6). Set the input amplitude to 400mVP-P.
- 10)   Connect  a  50 I terminated  oscilloscope  to  ROUT Q (J7 and J8) and to TOUT Q (J1 and J2). The receiver output  amplitude  can  be  adjusted  with  the CML output  level control.  The  transmitter  output  amplitude can be adjusted with the IMod control.

| DESIGNATION   |   QTY | DESRCIPTION                                   |
|---------------|-------|-----------------------------------------------|
| Y1            |     1 | 6.000MHz SMD crystal, 32pF ECS-60-32-5PXDN-TR |
| None          |    10 | Shunts                                        |
| None          |     1 | PCB: MAX3798 EV Kit+ Board, Rev A             |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3798 Evaluation Kit

Figure 1. MAX3798 EV Kit Software (Receiver)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3798 Evaluation Kit

Figure 2. MAX3798 EV Kit Software (Transmitter)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3798 Evaluation Kit

<!-- image -->

Figure 3a. MAX3798 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3798 Evaluation Kit

Figure 3b. MAX3798 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3798 Evaluation Kit

<!-- image -->

Figure 4. MAX3798 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX3798 Evaluation Kit

Figure 5. MAX3798 EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3798 Evaluation Kit

<!-- image -->

Figure 6. MAX3798 EV Kit PCB Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX3798 Evaluation Kit

Figure 7. MAX3798 EV Kit PCB Layout-Power Plane

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3798 Evaluation Kit

Figure 8. MAX3798 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.