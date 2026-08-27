<!-- lastmod 2022-08-02 -->
## MAX77503 Evaluation Kit

## General Description

The MAX77503 evaluation kit (EV kit) is a fully assembled  and  tested  PCB  that  demonstrates  the  MAX77503 synchronous step-down (buck) converter. The EV kit is a step-down voltage regulator circuit using MAX77503 that is capable of 3V to 14V input, 1.5A continuous load, and output voltage adjustable between 0.8V and 5V (internal feedback options) or 1.55V and 99% of the input voltage (external feedback option).

The  EV  kit  features  a  dual-range  electronic  load  that allows easy evaluation of loading use cases for the buck converter circuit. Steady-state, transient, or random load profiles can be programmed.

A USB-to-I 2 C translator circuit allows a Windows ® -based PC  to  run  a  graphical  user  interface  (GUI)  for  easy control of the MAX77503 registers as well as the on-board electronic load.

Evaluates: MAX77503

## Benefits and Features

- Proven PCB Reference Design and Layout
- Easy to Use
- Simple Hardware Control: Jumpers and Test Points for EN, BIASEN, and POK
- GUI Drives I 2 C Interface for Optional Software Control
- Fully Assembled and Tested
- USB to I 2 C Converter Allows for Easy Communication
- Windows-Based Software GUI Controls Registers
- Level Translator (MAX3395) Allows for Adjusting I 2 C Bus Voltage from 1.8V to 3.3V
- On-Board Electronic Load Emulates System Loading
- Steady-State, Transient, and Random Modes

Ordering Information appears at end of data sheet.

Figure 1. MAX77503 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX77503

Figure 2. Simplified Block Diagram

<!-- image -->

Figure 3. MAX77503 EV Kit Top View

<!-- image -->

│

Figure 4. MAX77503 EV Kit Bottom View

<!-- image -->

## MAX77503 Evaluation Kit

## EV Kit Default Configuration

- VIN  (SUP) = 3V to 14V
- VOUT = 1.2V, 1.8V, or 3.3V depending on ordering option. Output is further adjustable:
- 0.8V to 5V for internal feedback. See the Setting the Output Voltage (Internal Feedback Version) section.
- 1.55V to 99%V SUP  for external feedback. See the Setting the Output Voltage (External Feedback Version) section.
- I OUT = 1.5A maximum
- SKIP mode enabled (MODE = 0)
- 1ms soft-start time (t SS )
- 2A peak inductor current limit (I LX-PEAK )
- Active discharge enabled (ADEN = 1, internal feedback versions only)
- Active discharge function not available for external feedback version.

## Quick-Start

## Required Equipment

- MAX77503 EV kit
- Power supply with 15V and 2A capability
- Two digital voltmeters (DVM)
- Ammeter
- Windows-based PC
- Micro-USB cable
- GUI

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

- 1) Install EV kit shunts per Table 1.
- 2) Connect a DVM to the SUPS and GNDS terminals to measure input voltage.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                                      |
|------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1                     | 1-2                | 1-2: Connects EN to VSUP 2-3: Connects EN to GND                                                                                                                                                                                                                                                                                                              |
| J2                     | 1-2                | 1-2: Connects BIASEN to VIO 2-3: Connects BIASEN to GND                                                                                                                                                                                                                                                                                                       |
| J6                     | 1-2                | 1-2: Connects POK to OUT through a 100kΩ resistor.                                                                                                                                                                                                                                                                                                            |
| J100                   | N/A                | J100 is an evaluation header. Do not connect shunts to J100.                                                                                                                                                                                                                                                                                                  |
| J101                   | 2-3                | 1-2: Sets the I 2 C bus voltage to the 3.3V EV kit logic rail. 2-3: Sets the I 2 C bus voltage to the 1.8V EV kit logic rail.                                                                                                                                                                                                                                 |
| J102                   | Open               | 1-2: Connects VUSB to VSUP through Schottky diode, D1. Install this jumper to power the MAX77503 VSUP from VUSB. This jumper allows for communication with the MAX77503 through the on-board USB-to-I 2 C translator without the need for an external power supply. Note: Remove this jumper any time an external power supply is applied as an input source. |
| J203                   | 1-2                | 1-2: Connects the output of the MAX5805 DAC to drive the on board electronic load.                                                                                                                                                                                                                                                                            |
| J204                   | 1-2                | 1-2: Connects the U202 amplifier to the gate of the Q202 load MOSFET. 2-3: Connects the U202 amplifier to the gate of the Q201 depopulated TO-220 electronic load MOSFET.                                                                                                                                                                                     |
| J205 J206              | 1-2                | 1-2: Connects OUT to the onboard electronic load (each jumper supports up to 1A).                                                                                                                                                                                                                                                                             |

│

## MAX77503 Evaluation Kit

- 3) Connect a DVM to the OUTS and GNDS terminals to measure output voltage.
- 4) Apply a power supply set to 0V (100mA current limit) through an ammeter (10mA range) across the SUP and GND2 terminals of the EV kit. Turn the supply on and increase the voltage to 12V.
- 5) Confirm that the DVM connected to OUTS and GNDS reads  the  default  output  voltage  of  the  EV  kit.  See Table 2 for expected no-load output voltage at 12V supply.

The next steps of the procedure use the software GUI and the MAX77503 I 2 C serial interface. If evaluation of the I 2 C bus is not required, then skip the following steps and connect SCL and SDA to GND using test leads. Unconnected (floating) SDA/SCL pins may chatter causing extra supply current draw.

- 6) Install GUI  software.  Visit  the  product  webpage at www.maximintegrated.com/MAX77503evkit and navigate to Design Resources to  download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.
- 7) Connect a Micro-B USB cable between the EV kit's J103 and your PC's USB port.

## Table 2. EV Kit Measurements

| EV KIT PART NUMBER   |   NO-LOAD SUPPLY CURRENT* AT 12V SUPPLY (μA) |   OUTPUT VOLTAGE AT NO LOAD (SKIP MODE) (V) |
|----------------------|----------------------------------------------|---------------------------------------------|
| MAX77503AEVKIT#      |                                          115 |                                        3.34 |
| MAX77503B33EVKIT#    |                                           14 |                                        3.38 |
| MAX77503B18EVKIT#    |                                            9 |                                        1.84 |
| MAX77503B12EVKIT#    |                                           31 |                                        1.23 |

│

## Evaluates: MAX77503

- 8) Open the GUI and click the Device button in the menu bar. Click the Connect button in the Device button's drop-down list. Wait for the device to respond, and in the Synchronize window, press the Read and Close button.
- 9) Increase the power supply's current limit from 100mA to 500mA or greater.
- 10)  Short  out  the  series  input  ammeter  or  change  its range from 10mA to 1A or greater.
- 11)  If the EV kit evaluates the internal feedback version of MAX77503, then drag the slider bar in Config B to change the output voltage and click Write . Config B is a don't care for the external feedback version of the MAX77503.
- 12)  Confirm with a DVM that the software instruction to change output voltage was successful.

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with  the  GUI.  During  general  device  evaluation,  set  the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For more information on the GUI, see the Software section.

## Evaluating Different MAX77503 Versions

The EV kit is orderable with different versions of MAX77503 preinstalled (see Table 3). A label in the center of the PCB denotes  the  ordered  part  number  and  differentiates  the EV kit options.

Any  EV  kit  option  can  be  reconfigured  to  evaluate  any other version of the MAX77503.

- To  evaluate  the  external  feedback  version,  ensure that  feedback  resistors  R3  and  R4  are  populated and  adjusted  according  to  the  Setting  the  Output Voltage (External Feedback Version) section (MAX77503AEWC).
- To evaluate the internal feedback version, ensure that R3's value is 0Ω and R4 is open.

The values of R3 and R4 are initially set by Maxim per Table 3.

## Hardware

## Electronic Load

To  easily  evaluate  the  MAX77503,  the  EV  kit  comes with  an  on-board,  dual-range  electronic  load  (10mA  or 2.56A  full-scale).  See  Figure  5.  Use  10mA  range  for

## Table 3. EV Kit Component Default Values

| EV KIT PART NUMBER   | U1 IC           | L1*   | R3** (TOP FEEDBACK)   | R4** (BOTTOM FEEDBACK)   |
|----------------------|-----------------|-------|-----------------------|--------------------------|
| MAX77503AEVKIT#      | MAX77503AEWC+   | 4.7μH | 10kΩ                  | 3.24kΩ                   |
| MAX77503B33EVKIT#    | MAX77503BEWC33+ | 4.7μH | 0Ω                    | OPEN                     |
| MAX77503B18EVKIT#    | MAX77503BEWC18+ | 2.2μH | 0Ω                    | OPEN                     |
| MAX77503B12EVKIT#    | MAX77503BEWC12+ | 2.2μH | 0Ω                    | OPEN                     |

* Default inductor case size is 2520 (metric).

** Default feedback resistor case size is 0402 (imperial).

Figure 5. Electronic Load Block Diagram

<!-- image -->

## Evaluates: MAX77503

evaluation of small load currents to gain an understanding  of  MAX77503's SKIP mode and DCM performance. Use  2.56A  range  to  evaluate  the  full  load  capability  of MAX77503 (1.5A max) as well as the buck's response to overloads and soft-short circuits.

The electronic load is controllable with the GUI. The GUI controls an on-board DAC and op-amp configuration to set the load current. Parallel jumpers J205 and J206 connect the load to the output of the MAX77503. See the Software section for how to set the load current from the GUI.

To  simulate  load  transient  response,  connect  a  signal generator to pin 2 of J204. Drive the MOSFET gate with an  analog  signal  between  1V  (off)  and  3V  (fully  on)  to apply transients to the output of the buck.

For  manually  measuring  current,  measure  the  voltage across the sense resistor using test point VIL\_OUT. The value of the sense resistor changes depending on electronic load range.

- In 10mA range, the sense resistor is 49.9Ω.
- In 2.56A range, the sense resistor is 0.2Ω.

Use the GUI to set the range. See Figure 11.

│

Figure 6. Electronic Load Capability vs. Voltage

<!-- image -->

## Setting the Output Voltage (External Feedback Version)

The external feedback version of the device (MAX77503AEWC) uses resistors to set the output voltage between 1.55V and 99% of the input voltage. Use R3 and R4 to set the output voltage.

Choose R3 to be 10kΩ. Calculate the value of R4 for a desired output voltage with the following equation:

<!-- formula-not-decoded -->

where V FB  is 0.8V and V OUT  is the desired output voltage. Common values of R3 and R4 are listed in Table 4. For the internal feedback version of the MAX77503,  use  the  software  GUI  to  change  the  output voltage. See the Setting the Output Voltage (Internal Feedback Version) section for more information.

## Table 4. Common Feedback Resistor Values

|   OUTPUT VOLTAGE TARGET (V) |   R3 (kΩ) |   R4 (kΩ) |
|-----------------------------|-----------|-----------|
|                        1.55 |        10 |      10.7 |
|                        1.85 |        10 |      7.68 |
|                        2.05 |        10 |      6.34 |
|                         2.5 |        10 |      4.75 |
|                         3.0 |        10 |      3.65 |
|                         3.3 |        10 |      3.24 |
|                         3.5 |        10 |      2.94 |
|                           5 |        10 |      1.91 |
|                         5.6 |        10 |      1.65 |

│

## MAX77503 Evaluation Kit

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick,  easy,  and  thorough  evalution  of  the  MAX77503. The GUI drives I 2 C-communication with the EV kit. Every control  in  the  GUI  (excluding  the  Load  Control)  corresponds directly to a register within the MAX77503. Refer to the Register Map section in the MAX77503 device data sheet for a complete description of the registers.

See  Figure  7  for  a  screenshot  of  the  GUI  upon  first opening.

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/MAX77503evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file. Run the .EXE file and follow the on-screen instructions to complete installation.

## Windows Drivers

After  connecting  a  Micro-USB  cable  between  your  PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

Figure 7. MAX77503 Evaluation Kit GUI Interface

<!-- image -->

│

## MAX77503 Evaluation Kit

## Connecting the GUI

In  the  GUI,  click Device in  the  upper  left  corner  of  the GUI window. Click the Connect option in the drop-down menu.

The Synchronize menu  opens  (Figure  8)  once  the MAX77503 responds (it  must  be  powered  and  enabled through  either  EN  or  BIASEN  to  respond).  Click Read and Close . The text at the bottom right of the GUI window changes from Not Connected to Connected .

The Synchronize menu  shows  the  buck's  I 2 C  8-bit device write address. Address shown changes depending on ordering option. Refer to the EV Kit Schematic section of this document or the MAX77503 device data sheet for more information.

## Configuring the Buck Converter

The MAX77503 features several different programmable options to customize the behavior of the regulator during startup,  operation,  and  shutdown.  Figure  9  shows  the portion of the main GUI window that allows for configuration of the device.

## Enabling and Disabling the Buck Converter

Turn  on  the  device  by  clicking  the  toggle  switch  to  the right of Regulator to  change the value of the enable bit (EN\_BIT). Alternatively, activate the regulator by bringing the EN pin logic-high by connecting the shunt on jumper J1 between terminals 1-2.

The default  relationship  between  the  GUI  enable  control (EN\_BIT) and jumper J1's enable control (EN pin) is a logic OR. To change this relationship to a logical AND , click the toggle switch to the right of Enable Logic in the GUI.

Consult  the Buck  Enable  Control  (EN) section  of  the MAX77503 device data sheet for more information.

Figure 8. MAX77503 Evaluation Kit GUI Window after 'Connecting'

<!-- image -->

Figure 9. Config A Control Portion of Main GUI Window

<!-- image -->

│

## MAX77503 Evaluation Kit

## Setting the Output Voltage (Internal Feedback Version)

The MAX77503 internal feedback version features a programmable output voltage from 0.8V to 5V in 50mV steps. External feedback resistors are not required.

When  the  EV  kit  is  first  powered  on  and  connected to  the  GUI,  the  default  output  voltage  appears  in  the V\_OUTREG section of the GUI under Config B (Figure 10).  Drag  the  slider  or  enter  the  desired  output  voltage and  click Write to  change  the  output  voltage.  Clicking Read returns the programmed output voltage to the GUI.

Avoid changing the output voltage target while the converter is both enabled and supplying load.

Config B is a don't care for the external feedback version of  the  MAX77503.  See  the Setting  the  Output  Voltage (External Feedback Version) section for more information on how to set V OUT .

Evaluates: MAX77503

## Electronic Load Control Tab

The load control tab contains controls for setting load on the output. The GUI is capable of setting Steady State, Transient,  and  Random  load  currents.  To  set  a  load current,  use  the  slider  bar  or  text  field  to  input  a  value (mA) and press the Enable button.  Shuffle  through  the modes to exercise different load conditions.

Electronic load range is set with the toggle switch shown in Figure 11.

- 10mA range uses a 49.9Ω sense resistor (R249) for precise load control with 2.5μA of resolution.
- 2.56A range uses a 0.2Ω sense resistor (R245) for heavy loads with 0.625mA of resolution.

The offset and gain values are set by Maxim and do not need to be altered.

Figure 10. Config B Output Voltage Control Slider (MAX77503 Internal Feedback Version)

<!-- image -->

Figure 11. Electronic Load Range Control Switch

<!-- image -->

## Ordering Information

| PART NUMBER        | U1 IC           | VOLTAGE FEEDBACK   | DEFAULT OUTPUT VOLTAGE   |
|--------------------|-----------------|--------------------|--------------------------|
| MAX77503AEVKIT#    | MAX77503AEWC+   | External           | 3.3V (set by R3 and R4)  |
| MAX77503B33EVKIT#  | MAX77503BEWC33+ | Internal           | 3.3V                     |
| MAX77503B18EVKIT#* | MAX77503BEWC18+ | Internal           | 1.8V                     |
| MAX77503B12EVKIT#* | MAX77503BEWC12+ | Internal           | 1.2V                     |

EV kit differences detailed in Table 3 .

│

## MAX77503 Evaluation Kit

## MAX77503 EV Kit Bill of Materials

| REF_DES                                                                                                      | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | VALUE                                                                                                        | DESCRIPTION                                                                                                             |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| U1                                                                                                           | 1                                                                                                            | MAX77503 (see Table 3 )                                                                                      | MAXIM                                                                                                        | VARIES (see Table 3 )                                                                                        | EVKIT PART-IC; MAX77503; 14V; 1.5A; HIGH-EFFICIENCY BUCK CONVERTER; PKG. DWG. NO.: 21-100250                            |
| L1                                                                                                           | 1                                                                                                            | DFE252012F-xxxx                                                                                              | MURATA                                                                                                       | 4.7UH OR 2.2UH (see Table 3 )                                                                                | INDUCTOR; SMT (2520); METAL ALLOY CHIP; TOL = ±20%; >2A SAT                                                             |
| R2, R5                                                                                                       | 3                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0                                                                                                            | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                           |
| R3                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 10K OR 0 (see Table 3 )                                                                                      | RESISTOR, 0402, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                             |
| R4                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 3.24K OR OPEN (see Table 3 )                                                                                 | RESISTOR, 0402, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                             |
| C1                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 4.7UF                                                                                                        | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V;TOL = 10%; MODEL = ; TG = -55°CTO +85°C;TC = X5R ; FORMFACTOR           |
| C2                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0.22UF                                                                                                       | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL = 10%; MODEL = GRMSERIES; TG = -55°CTO +125°C;TC = X7R; FORMFACTOR     |
| C3                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 2.2UF                                                                                                        | CAPACITOR; SMT (0402); CERAMIC; 2.2UF; 6.3V; TOL = [10%]; MODEL = C SERIES; TG = -55°CTO +85°C;TC = X5R                 |
| C4                                                                                                           | 1                                                                                                            | C0402C569C5GAC                                                                                               | KEMET                                                                                                        | 100PF                                                                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 5.6PF; 50V;TOL = ±0.25PF; MODEL =; TG = -55°CTO +125°C;TC = COG                    |
| C5-C7, C9                                                                                                    | 3                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 22UF                                                                                                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V;TOL = 20%; MODEL = CL SERIES; TG = -55°CTO +85°C;TC = X5R; FORMFACTOR    |
| C8                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0.1UF                                                                                                        | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55°C to + 125°C; 0 ±30PPM/°C; FORMFACTOR                          |
| Components below this line are outside of the immediate MAX77503 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77503 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77503 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77503 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77503 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77503 evaluation circuit and solution silkscreen.            |
| C10                                                                                                          | 1                                                                                                            | TPSC107K016R0200                                                                                             | AVX                                                                                                          | 100UF                                                                                                        | CAPACITOR;SMT(6032);TANTALUMCHIP;100UF; 16V;TOL = 10%; MODEL =; TG =-55°CTO +125°C                                      |
| C108, C135, C150, C151, C155-C157, C159                                                                      | 8                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0.1UF                                                                                                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V;TOL = 10%; MODEL = CGA SERIES; TG = -55°CTO +125°C;TC = X7R; FORMFACTOR |
| C110-C113, C115, C118, C120, C158                                                                            | 8                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 1UF                                                                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V;TOL = 10%; MODEL =; TG = -55°CTO +85°C;TC = X5R;                         |

│

Evaluates: MAX77503

## MAX77503 Evaluation Kit

## MAX77503 EV Kit Bill of Materials (continued)

| REF_DES                         |   QTY | MFG PART #                            | MANUFACTURER                | VALUE        | DESCRIPTION                                                                                                           |
|---------------------------------|-------|---------------------------------------|-----------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| C114                            |     1 | ANY                                   | ANY                         | 0.47UF       | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55°C to + 125°C, ; FORMFACTOR                                  |
| C152, C153                      |     2 | C0402C0G500-150JNP; GRM1555C1H150JA01 | VENKEL LTD./ MURATA         | 15PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V;TOL = 5%;TG = -55°CTO +125°C;TC = C0G                                  |
| C154                            |     1 | ANY                                   | ANY                         | 4.7UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V;TOL = 20%; MODEL = C SERIES; TG = -55°CTO +85°C;TC = X5R; FORMFACTOR  |
| C211                            |     1 | ANY                                   | ANY                         | 1000PF       | CAPACITOR;SMT(0402);CERAMICCHIP;1000PF; 50V;TOL = 10%; MODEL = C0G; TG = -55°CTO +125°C;TC = +; FORMFACTOR            |
| C212, C221-C223                 |     4 | ANY                                   | ANY                         | 0.1UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V;TOL = 10%; MODEL = C SERIES; TG = -55°CTO +125°C;TC = X7R; FORMFACTOR |
| C213, C214                      |     2 | C0402C101K5GAC; C1005C0G1H101K050BA   | KEMET/TDK                   | 100PF        | CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%; C0G; -55°C to +125°C; 0 ±30PPM/°C                                     |
| C241                            |     1 | C1005X5R1C105K                        | TDK                         | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V;TOL = 10%; MODEL = C SERIES; TG = -55°CTO +85°C;TC = X5R                |
| C250                            |     1 | C1005X5R1H472K050                     | TDK                         | 4700PF       | CAPACITOR;SMT(0402);CERAMICCHIP;4700PF; 50V;TOL = 10%;TG = -55°CTO +85°C;TC = X5R                                     |
| D1                              |     1 | CMHSH5-4                              | CENTRAL SEMICONDUCTOR CORP. | CMHSH5-4     | DIODE; SCH; SMT (SOD-123); PIV = 40V; IF = 0.5A; -65°CTO +125°C                                                       |
| D100, D101                      |     2 | LTST-C190YKT                          | LITE-ON ELECTRONICS; INC.   | LTST-C190YKT | DIODE; LED; STANDARD;YELLOW; SMT (0603); PIV = 5.0V; IF = 0.02A; -55°CTO +85°C                                        |
| D102                            |     1 | LTST-C190GKT                          | LITE-ON ELECTRONICS; INC.   | LTST-C190GKT | DIODE; LED;WATER CLEAR GREEN; SMT (0603); VF = 2.1V; IF = 0.03A; -55°CTO +85°C                                        |
| EN, POK, SCL, SDA, QSCL, QSDA   |     6 | 5002                                  | KEYSTONE                    | N/A          | TEST POINT; PIN DIA = 0.1IN;TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZEWIRE SILVER;             |
| FB100                           |     1 | BLM18PG221SN1                         | MURATA                      | 220          | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL = ±25%; 1.4A; -55°CTO +125°C                                             |
| GND, OUT, SUP, GND2, GND4- GND6 |     7 | 9020 BUSS                             | WEICOWIRE                   | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICOWIRE; SOFT DRAWNBUSTYPE-S; 20AWG                                 |
| GND1, GND3, OUT1, SUP1          |     4 | 111-2223-001                          | EMERSON NETWORK POWER       | 111-2223-001 | MACHINE SCREW;THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                              |

│

Evaluates: MAX77503

## MAX77503 Evaluation Kit

## MAX77503 EV Kit Bill of Materials (continued)

| REF_DES                                      |   QTY | MFG PART #      | MANUFACTURER              | VALUE           | DESCRIPTION                                                                                                            |
|----------------------------------------------|-------|-----------------|---------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------|
| GNDS                                         |     1 | 5001            | KEYSTONE                  | N/A             | TEST POINT; PIN DIA = 0.1IN;TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZEWIRE SILVER PLATE FINISH; |
| J1, J2, J101                                 |     3 | TSW-103-07-T-S  | SAMTEC                    | TSW-103-07-T-S  | CONNECTOR;THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                         |
| J6, J203, J205, J206                         |     4 | TSW-102-07-T-S  | SAMTEC                    | TSW-102-07-T-S  | CONNECTOR;THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°CTO +105°C                                         |
| J100                                         |     1 | PBC06SAAN       | SULLINS ELECTRONICS CORP. | PBC06SAAN       | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65°CTO +125°C                                               |
| J102                                         |     1 | PBC02SAAN       | SULLINS ELECTRONICS CORP. | PBC02SAAN       | EVKIT PART-CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65°CTO +125°C;                                   |
| J103                                         |     1 | 10103592-0001LF | FCI CONNECT               | 10103592-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                   |
| J204                                         |     1 | PEC03SAAN       | SULLINS ELECTRONICS CORP. | PEC03SAAN       | EVKIT PART-CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°CTO +125°C;                                   |
| Q100, Q101                                   |     2 | FDY300NZ        | FAIRCHILD SEMICONDUCTOR   | FDY300NZ        | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-(0.6A); V-(20V)                    |
| Q200                                         |     1 | IRFHM8337TRPBF  | INTERNATIONAL RECTIFIER   | IRFHM8337TRPBF  | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                                                     |
| Q202                                         |     1 | IRF3704ZSPBF    | N/A                       | IRF3704ZSPBF    | TRAN; HEXFET POWER MOSFET; NCH; D2PAK; PD-(57W); I-(67A); V-(20V)                                                      |
| VL, OUTS, SUPS, BIASEN, VIL_OUT              |     5 | 5000            | KEYSTONE                  | N/A             | TEST POINT; PIN DIA=0.1IN;TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZEWIRE SILVER PLATE FINISH;     |
| R100, R118                                   |     2 | ANY             | ANY                       | 4.7K            | RESISTOR, 0402, 4.7KΩ, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                     |
| R103, R123                                   |     2 | ANY             | ANY                       | 22              | RESISTOR, 0402, 22Ω, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                       |
| R107, R108                                   |     2 | ANY             | ANY                       | 2.2K            | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                     |
| R110                                         |     1 | CRCW0402470RFK  | VISHAY DALE               | 470             | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                  |
| R1, R120, R115, R157, R159, R161, R214, R283 |     8 | ANY             | ANY                       | 100K            | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                      |

│

Evaluates: MAX77503

## MAX77503 Evaluation Kit

## MAX77503 EV Kit Bill of Materials (continued)

| REF_DES                                                               |   QTY | MFG PART #                                        | MANUFACTURER                        | VALUE   | DESCRIPTION                                                        |
|-----------------------------------------------------------------------|-------|---------------------------------------------------|-------------------------------------|---------|--------------------------------------------------------------------|
| R122                                                                  |     1 | ANY                                               | ANY                                 | 1M      | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR      |
| R135, R136, R139, R141, R143, R148, R155, R162-R166, R238, R305, R306 |    15 | ANY                                               | ANY                                 | 0       | RESISTOR; 0402; 0Ω; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR    |
| R137, R138                                                            |     2 | ANY                                               | ANY                                 | 49.9    | RESISTOR; 0402; 49.9Ω; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR |
| R142                                                                  |     1 | ANY                                               | ANY                                 | 0       | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR      |
| R156                                                                  |     1 | CRCW0402105KFK                                    | VISHAY DALE                         | 105K    | RESISTOR; 0402; 105KΩ; 1%; 100PPM; 0.063W ; THICK FILM             |
| R158                                                                  |     1 | CRCW0402169KFK                                    | VISHAY DALE                         | 169K    | RESISTOR; 0402; 169KΩ; 1%; 100PPM; 0.063W; THICK FILM              |
| R160                                                                  |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE                         | 47.5K   | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM             |
| R109, R111, R235                                                      |     3 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL  | VISHAYDALE; PANASONIC; YAGEOPHYCOMP | 100     | RESISTOR; 0402; 100Ω; 1%; 100PPM; 0.063W; THICKFILM                |
| R236                                                                  |     1 | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE/ YAGEO PHICOMP          | 680     | RESISTOR, 0402, 680Ω, 1%, 100PPM, 0.0625W, THICK FILM              |
| R237                                                                  |     1 | CRCW040220K0FK                                    | VISHAY DALE                         | 20K     | RESISTOR; 0402; 20KΩ; 1%; 100PPM; 0.063W; THICK FILM               |
| R239, R240                                                            |     2 | CRCW04024K02FK; ERJ-2RKF4021X                     | VISHAY DALE/ PANASONIC              | 4.02K   | RESISTOR; 0402; 4.02K; 1%; 100PPM; 0.0625W; THICK FILM             |
| R242, R243                                                            |     2 | ANY                                               | ANY                                 | 1K      | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR    |
| R244, R246, R251                                                      |     3 | CRCW04021M00FK                                    | VISHAY DALE                         | 1M      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                |
| R245                                                                  |     1 | WSL2512R2000F                                     | VISHAY DALE                         | 0.2     | RESISTOR; 2512; 0.2Ω; 1%; 75PPM; 1.0W; THICK FILM                  |
| R249                                                                  |     1 | CRCW080549R9FK; ERJ-6ENF49R9                      | VISHAY DALE; PANASONIC              | 49.9    | RESISTOR; 0805; 49.9Ω; 1%; 100PPM; 0.125W; THICK FILM              |
| R252                                                                  |     1 | CRCW040210K0FK; RC0402FR-0710K                    | VISHAY DALE; YAGEO PHICOMP          | 10K     | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM               |
| R297                                                                  |     1 | ERJ-2RKF4703X                                     | PANASONIC                           | 470K    | RESISTOR, 0402, 470KΩ, 1%, 100PPM, 0.0625W, THICK FILM             |

│

Evaluates: MAX77503

## MAX77503 Evaluation Kit

## MAX77503 EV Kit Bill of Materials (continued)

| REF_DES         |   QTY | MFG PART #            | MANUFACTURER                        | VALUE         | DESCRIPTION                                                                                                  |
|-----------------|-------|-----------------------|-------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------|
| R298            |     1 | CRCW0402649KFK        | VISHAY DALE                         | 649K          | RESISTOR; 0402; 649KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                        |
| U2              |     1 | 24AA02T-I/OT          | MICROCHIP                           | 24AA02T-I/OT  | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                     |
| U100            |     1 | MAXQ2000-RBX+         | MAXIM                               | MAXQ2000-RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER;TQFN56-EP 8X8                                                        |
| U101            |     1 | FT232RQ               | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ       | IC; INFC; UART INTERFACE IC USBTO SERIAL; QFN32-EP 5X5                                                       |
| U102-U104       |     3 | MAX8512EXK            | MAXIM                               | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                |
| U107            |     1 | MAX3395EETC           | MAXIM                               | MAX3395EETC   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVELTRANSLATORWITH SPEED-UP CIRCUITRY;TQFN12 4X4      |
| U202            |     1 | MAX44251AUA+          | MAXIM                               | MAX44251AUA+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                          |
| U205            |     1 | MAX5805AAUB+          | MAXIM                               | MAX5805AAUB+  | IC; DAC; ULTRA-SMALL, SINGLE-CHANNEL, 12-BITBUFFEREDOUTPUTDACWITHINTERNAL REFERENCE ANDI2C INTERFACE; UMAX10 |
| Y101            |     1 | CX3225SB16000 D0FLJZZ | KYOCERA- KINSEKI                    | 16MHZ         | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; ±10PPM; ±15PPM                                                      |
| PCB             |     1 | MAX77503 SOLDERDOWN   | MAXIM                               | PCB           | PCB:MAX77503SOLDERDOWN                                                                                       |
| Q201            |     0 | PSMN022-30PL          | NXP                                 | PSMN022-30PL  | TRAN; N-CHANNEL 30V 22MOHMLOGIC LEVEL MOSFET; NCH;TO-220AB; PD-(41W); I-(30A); V-(30V)                       |
| C11, C129, C134 |     0 | N/A                   | N/A                                 | OPEN          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                      |

│

Evaluates: MAX77503

## MAX77503 EV Kit Schematic

| Part Number     | Configuration                                                         | 7-bit                  | 8-bit Write                           | 8-bit Read       |
|-----------------|-----------------------------------------------------------------------|------------------------|---------------------------------------|------------------|
| MAX77503AEWC+   | (default U1 installed External Feedback on MAX77503AEVKIT#) version   | 0b001 1110 0x1E        | 0b0011 1100 0X3C                      | 0b0011 1101 0x3D |
| MAX77503BEWC33+ | on MAX77503B33EVKIT#) (default U1 installed version Internal Feedback | 0x1E 0b001 1110        | 0b0011 1100 0X3C                      | 0b0011 1101 0x3D |
| MAX77503BEWC18+ | (default U1 installed on MAX77503B18EVKIT#) version Internal Feedback | 0b010 0100 0x24        | 0b0100 1000 0X48                      | 0b0100 1001 0x49 |
| MAX77503BEWC12+ | version (default U1 installed Internal Feedback on MAX77503B12EVKIT#) | 0b011 0111 0x37        | 0b0110 1110 0x6E                      | 0b0110 1111 0x6F |
| MAX5805 (DAC)   | ADDR=GND                                                              | 0b001 1000 0x18        | 0x30 0b0011 0000 0x32 *** 0b0011 0010 | 0b0011 0001 0x31 |
| 24AA02 (EEPROM) | N/A                                                                   | 0b1010xxx 0x50 to 0x57 | 0b1010xxx0                            | 0b1010xxx1       |

│

## MAX77503 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77503

## MAX77503 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77503

## MAX77503 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77503 EV Kit PCB Layouts

MAX77503 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX77503 EV Kit PCB Layouts (continued)

MAX77503 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX77503 EV Kit PCB Layouts (continued)

MAX77503 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77503 EV Kit PCB Layouts (continued)

MAX77503 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77503 EV Kit PCB Layouts (continued)

MAX77503 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77503 EV Kit PCB Layouts (continued)

MAX77503 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX77503 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                               | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/18            | Initial release                                                                                           | -               |
|                 1 | 2/19            | Added notes about I 2 C device address, updated Figure 8 and Ordering Information table, added hyperlinks | 9-11            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX77503