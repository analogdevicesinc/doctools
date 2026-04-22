<!-- lastmod 2023-06-09 -->
## MAX19692/MAX19693 Evaluation Kit User's Guide

## General Description

The MAX19692 and MAX19693 evaluation kits (EV kits) include either a MAX19692 2.3Gsps or MAX19693 4.0Gsps 12-bit,  direct  RF  synthesis  digital-to-analog  converter (DAC). The evaluation board includes a transformer circuit used  to  convert  the  differential  DAC  output  to  a  singleended 50Ω signal. An on-board 3-transformer circuit is also provided to convert a single-ended 50Ω clock source into the well balanced, 50% duty cycle, 100Ω differential source required by the MAX19692/MAX19693.

The  MAX19692/MAX19693  evaluation  board  employs two  SAMTECH  Q  Strip ®   (QSH)  connectors  for  the digital  interface.  The  EV  Kit  includes  an  adapter  board that converts the QSH interface to an FPGA Mezzanine Connector  (FMC).  The  FMC  connector  is  commonly available  on  Commercial  Off-the-Shelf  (COTS)  FPGA evaluation  boards  such  as  the  Xilinx ©   Virtex ® -7  VC707 EV kit.

The  MAX19692/MAX19693  EV  Kit  is  supported  by  the MUXDAC Data Source based on a VC707 FPGA board which  provides  a  useful  tool  for  supplying  the  digital signals  required  to  evaluate  the  MAX19692/MAX19693. Refer to the MUXDAC Data Source User's Guide for more information.

Evaluates: MAX19692/MAX19693

## Features

- Evaluates the MAX19692/MAX19693
- Supports Maximum Update Rates
-  2.3Gsps for MAX19692
-  4.0Gsps for MAX19693
- Proven 12-Layer PCB Design
- Single-Ended Clock Interface
-  2.3GHz Maximum Clock Rate (MAX19692)
-  2.0GHz Maximum Clock Rate (MAX19693)
- Single-Ended DAC Output Interface
- Selectable Frequency Response (MAX19692)
- Wideband Output Transformer
-  Supports from 50MHz to &gt;2GHz
- On-Board 1.25V Reference Circuitry
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## Evaluates: MAX19692/MAX19693 MAX19692/MAX19693 Evaluation Kit User's Guide

Figure 1. MAX19692/MAX19693 EV Kit and MUXDAC Data Source Test Setup

<!-- image -->

## MAX19692/MAX19693 Evaluation Kit User's Guide

## Quick Start

## Required Equipment

- Window PC (Windows 7/10 operating system), with two available USB2.0 ports
- Spectrum analyzer - Agilent PXA or equivalent
- RF signal generator - Rohde &amp; Schwarz SMF100A or equivalent
- One 3.3V/0.5A power supply (AVDD3.3)
- One or two 1.8V power supplies (AVDD1.8 and AVCLK)
- Total current capability should be 0.5A per supply connection
- Xilinx VC707 EV kit - user supplied
-  VC707 board
-  12V/5A power cube
- 1 each USB-A to Mini-B cable for interfacing and programming
- 1 each USB-A to Micro-B cable for interfacing and programming
- Low-Loss SMA/SMA cables as needed for connections to the spectrum analyzer and signal generator
- Included in the MAX19692/MAX19693 EV Kit
-  MAX19692/MAX19693 EV kit board
-  MAXDACFMCADP1 adapter Board
- Mounting hardware

## Required Installed Software and Drivers

- Maxim Integrated MUXDAC data source and associated components

## Procedure

1) Install the MUXDAC Data Source software Reference  the MUXDAC  Data  Source  User's  Guide for  detailed  installation  and  operating  instructions.  The MUXDAC  Data  Source  User's  Guide  and  software  are available for download from www.maximintegrated.com . Search  for  'MUXDAC  Data  Source',  then  download  the User's Guide and follow the link to download the software. You will be prompted to accept Maxim's End User License Agreement to complete the download process.

## Evaluates: MAX19692/MAX19693

- 2) Setup and connect the MAX19692/MAX19693 EV kit board.
- a. Install the two 1-1/4' stand-offs included with the MAX19692/MAX19693 EV kit. Stand-offs should be installed on the DAC output side of the board.
- b. Mate the MAXDACFMCADP1 board to the MAX19692/MAX19693 EV kit.
- i. Secure the two boards using the supplied screws/nuts/washers.
- c. Verify all jumpers on the MAX19692/MAX19693 EV kit board are in the default position; refer to Table 1 and Table 2.
- d. Connect the MAX19692/MAX19693 EV kit board to the VC707 board, HPC1 as shown in Figure 1.
- e. Connect the power supplies to the MAX19692/ MAX19693 EV kit and enable the output.
- f. Connect the RF generator to the clock input with a low-loss SMA cable and set the frequency to 2.0GHz (50% duty-cycle) with output power at +10dBm.
- g. Connect the DAC Output to the spectrum analyzer with a low-loss SMA cable.
- h. Turn on the VC707 by sliding switch SW12 to the ON (left) position.
- i. Connect the USB A to Micro-B cable from the VC707 JTAG port to the PC.
- j. Connect the USB A to Mini-B cable from the VC707 USB2.0 port to the PC.
- 3) Start the MUXDACEVKITSoftwareController.exe a. Wait for the program to initialize.
- 4) Load the FPGA configuration
- a. Click on the Xilinx Impact Tool Installed checkbox.
- b. Click the &lt;Load FPGA Configuration File&gt; button.
- i.  A file browser will open  in the C:\ maximintegrated\MUXDACEVKIT\ VC707Files folder. Double click the MUXDAC\_DSS\_vNpM.bit file. (N and M are the revision numbers, i.e., v1p3 is Version 1.3)
- c. A progress bar will display while the FPGA is configured, should take &lt; 2 minutes.

Please ensure that all the USB device drivers are installed and 'ready for use' before proceeding to the next step. This preparation may take up to 20 minutes to complete. The Windows OS reports new device arrivals in the Notification Area of the Task Bar. Device Manager can also be used to verify the USB connections.

## MAX19692/MAX19693 Evaluation Kit User's Guide

Evaluates: MAX19692/MAX19693

## Table 1. General MAX19692/MAX19693 EV Kit Jumper Settings

| JUMPER       | POSITION                 | EVKIT FUNCTION                                                                                                                            |
|--------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| JU1          | Installed* Not Installed | MAX19692/MAX19693 external reference connected MAX19692/MAX19693 using internal reference                                                 |
| JU2          | Installed* Not Installed | Power for U3 - MAX6161 - external reference MAX6161 NOT powered                                                                           |
| JU3 (DELAY)  | 1-2* 2-3                 | Logic High (VDD3.3) - Delay of 1/2 Input Data Period Logic low (GND) - No Delay Added                                                     |
| JU5 (CLKDIV) | 1-2* 2-3                 | Logic High (VDD3.3) - DDR Mode: DATACLK = input data rate/2 (f CLK /4) Logic low (GND) - QDR Mode: DATACLK = input data rate/4 (f CLK /8) |
| JU8 (CAL)    | Installed* Not Installed | External RESET (CAL Enable) Connected Float CAL Input                                                                                     |

## Table 2. MAX19692 Frequency-Response Selection (JU4, JU9)

| SHUNT POSITION   | SHUNT POSITION   | OPERATING MODE   |
|------------------|------------------|------------------|
| JU4 → RZ         | JU9 → RF         | OPERATING MODE   |
| 2-3*             | 2-3*             | NRZ mode         |
| 2-3              | 1-2              | RZ mode          |
| 1-2              | 2-3              | RF mode          |

## Table 3. MAX19693 Modulation Mode Selection (JU4)

| SHUNT POSITION   | OPERATING MODE                |
|------------------|-------------------------------|
| 1-2              | Enable fDAC/2 Modulation Mode |
| 2-3*             | Disable Modulation Mode       |

## Table 4. MAX19693 Input Register Scan Enable (JU7)

| CONNECTION    | SE PIN                                                      | SCAN FUNCTION                                                                   |
|---------------|-------------------------------------------------------------|---------------------------------------------------------------------------------|
| Installed*    | Connected to GND                                            | Scan Disabled                                                                   |
| Not Installed | Not connected (SE pin internally pulled down to ground GND) | User must supply a 1.8V CMOS logic signal to pin 1 of jumper JU7 to enable scan |

│

## MAX19692/MAX19693 Evaluation Kit User's Guide

- 5) Select the DAC in use
- a. Click on the text box in the DAC Selection section of the window.
- b. Select MAX19692 or MAX19693 from the list.
- 6) Load Test Patterns
- a. Click the Load Pattern List button.
- b. A file browser will open in the C:\maximintegrated\ MUXDACEVKIT\TestPatterns folder. Select the CW or Two-Tone list for 12-bit devices.
- 7) Wait for the patterns to load.
- 8) Select a Pattern from the List
- a. Click on the Select Pattern text.
- b. Select a pattern from the populated list.
- i. The format of the CW pattern's name is FO\_FNumxFS\_AO\_ANumdBFS\_12-Bit and the format of the two-tone pattern's name is FCent\_FNumxFS\_FSpcSNUMxFS\_AO\_ ANumdBFS\_12-BIT, where the variables are FNum, ANum, and SNum for the frequency, amplitude, and spacing, respectively. The DAC output frequency of the patterns will be at or around FNum * f DAC .
- 9) Start the Pattern

a. Click the Start button.

- 10)  Observe the DAC output.

Refer  to  the Test  Patterns  and  Lists section  of  the MUXDAC User's Guide for details regarding the creation of custom patterns and lists.

## Detailed Description of Hardware

The MAX19692 and MAX19693 EV kits are designed to simplify  the  evaluation  of  the  MAX19692  2.3Gsps  and MAX19693  4.0Gsps  12-bit,  direct  RF  synthesis  DACs. Each EV Kit  operates  with  LVDS  data  inputs,  a  singleended clock input signal, and 1.8V/3.3V power supplies for simple board operation.

The  evaluation  board  features  on-board  QSH  connectors that interface to the MAXDACFMCADP1 board that allows direct connection to a VC707 FMC connector, circuitry that converts the differential 50Ω output to a singleended 50Ω signal, and circuitry to convert a user-supplied single-ended clock signal to a differential clock required by the DAC. The evaluation board also includes jumpers that configure frequency response, modulation, scan, reference voltage, calibration, and data clock modes.

## Evaluates: MAX19692/MAX19693

## Power Supplies

Each  evaluation  board  operates  from  two  1.8V  and  one 3.3V power supplies. The two separate 1.8V power supplies can be driven from the same source. Each power plane on the PCB is filtered for optimum dynamic performance.

## Clock Signal

Each DAC requires a differential clock input signal with minimal jitter. The evaluation boards feature single-endedto-differential-conversion circuitry. Supply a single ended clock  signal  at  the  SMA  connector  labeled  CLK.  The power applied  to  the  SMA  should  be  between  +10dBm and +15dBm when measured at the connector. Insertion losses  due  to  the  interconnecting  cable  decrease  the power seen at the board input. Account for these losses when setting the signal generator amplitude.

## Reference Voltage Options

The DAC requires a reference  voltage  to  set  its  output power. The DAC features a stable on-chip bandgap reference  of  1.2V.  The  internal  reference  can  be  overdriven by  an  external  reference  to  enhance  accuracy  and  drift performance or for gain control.

The  evaluation  board  features  three  reference  options. Use the DAC's internal voltage reference by removing the shunts from jumpers JU1 and JU2. Use an external reference by removing the shunts from jumpers JU1 and JU2 and connecting a stable voltage reference at the REFIO pad. Install  shunts  on  jumpers  JU1  and  JU2 to use the on-board reference (MAX6161). See Table 1 to configure the shunts across jumpers JU1 and JU2 and select the source of the reference voltage.

The  full-scale  continuous-wave  (CW)  output  power  is dependent  on  the  value  of  the  reference  voltage  and resistor R6. Use the equation below to calculate the DAC full-scale output power:

<!-- formula-not-decoded -->

where:

POUT = DAC full-scale output power,

VREFIO = Voltage present at the REFIO pad in volts (1.2V if using the device's internal reference),

R6 = Value of resistor R6 in ohms (2kΩ default).

## MAX19692/MAX19693 Evaluation Kit User's Guide

## Clock Division

The  data  clock  output  differential  signal  (DATACLK) frequency  is  scaled  down  from  the  DAC  clock  input. Jumper JU5 controls the division factor. See Table 2 for shunt settings. Refer to the IC data sheet for details on synchronizing the DAC to an external pattern generator. Install resistors R2, R3, and R4 to access the differential output  data  clock  signal  at  the  DATA-CLKP  and  DATACLKN SMA connectors on the evaluation board when not using the MUXDAC Data Source System.

## Data Clock Delay

Jumper JU3 adjusts the delay of the data clock output. Refer to the Data Timing Relationships section in the IC data sheet for more details. See Table 1 for shunt settings.

## Differential Output

The DAC features a differential output with built-in  selfcalibrated  output  termination  resistors.  The  evaluation board  circuit  pulls  the  outputs  up  to  AVDD3.3  through bias inductors L4 and L5 to optimize performance of the device. Balun transformer T1 converts the differential signal to a single-ended signal. Measure the resulting DAC output at the SMA connector labeled OUT.

## Impulse/Frequency Response (MAX19692)

The MAX19692  DAC  has  three  impulse/frequency response  modes:  NRZ,  RZ,  and  RF.  These  modes  are set with the RZ and RF input pins. The MAX19692 EV kit provides jumpers JU4 and JU9 to configure these pins. See Table 2 for jumpers JU4 and JU9 configuration. Refer to the DAC Impulse/Frequency Response Mode section in the MAX19692 IC data sheet for more details.

## Modulation (MAX19693)

The MAX19693 f DAC /2 (or f CLK ) modulation mode can be enabled or disabled by connecting the MOD pin to 3.3V or to ground. The evaluation board circuit provides jumper

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX19692EVKIT | EV KIT |
| MAX19693EVKIT | EV KIT |

## Evaluates: MAX19692/MAX19693

JU4 to configure the MOD pin. Refer to the MAX19693 IC data sheet for more details on the MOD pin. See Table 3 for jumper JU4 configuration.

## Output Resistor Calibration

The  evaluation  board  circuit  features  an  on-board  µP supervisor  (U2)  to  generate  the  CAL  signal  required  to calibrate  the  integrated  output  termination  resistors.  At power-up, the supervisor applies a logic-high to the CAL pin 140ms after the final supply voltage is within its specified  range.  Pressing  switch  SW1  recalibrates  the  integrated termination resistors by creating a logic-low pulse on the CAL pin. The shunt on jumper JU8 can be removed to  apply an external logic signal to pin 1 of jumper JU8 and initiate a CAL operation. See Table 1 for jumper JU8 configuration. Refer to the IC data sheet for details on the CAL operation.

## Input Register Scan (MAX19693)

The MAX19693 scan function can be enabled or disabled by  configuring  the  SE  pin.  When  the  scan  function  is enabled, the contents of the input register are shifted out on the SO pin. Connect a digital sampling device to pin 1 of JU6 to access the scan output data on the SO pin. The EV kit circuit provides jumper JU7, which is used to enable or  disable  the  scan  function.  During  normal  operation, install  the  shunt  across  jumper  JU7  to  disable  the  scan function. Refer to the MAX19693 IC data sheet for more details. See Table 4 for jumper JU7 configuration.

## Operation with the MUXDAC Data Source

The device's LVDS-level data clock outputs (DATACLKP, DATACLKN) synchronize the data source and the DAC during  normal  operation  of  the  EV  Kit.  Install  a  shunt on  JU5:1-2  to  configure  the  DAC  for  DDR  mode  which produce  the  correct  DATACLK  frequency  for  operation with the MUXDAC Data Source System.

## MAX19692/MAX19693 Evaluation Kit User's Guide

## MAX19692/MAX19693 EV Kit Bill of Materials

|   ITEM | REFERENCE            | QTY    | VALUE     | TOLERANCE   | DESCRIPTION                                              | PART NUMBER                      | MANUFACTURER             |
|--------|----------------------|--------|-----------|-------------|----------------------------------------------------------|----------------------------------|--------------------------|
|      1 | C1, C2               | 2      | 100pF     | ±5%         | 0402 Ceramic Capacitor, SMT, 50V                         | C1005C0G1H101J GRM1555C1H101J    | TDK Murata               |
|      2 | C3, C4, C12, C13     | 4      | 0.1μF     | ±20%        | 0402 Ceramic Capacitor, SMT, 10V                         | C1005X5R1A104M                   | TDK                      |
|      3 | C5-C8, C24-C31       | 12     | 1.0μF     | ±20%        | 0402 Ceramic Capacitor, SMT, 6.3V                        | EEEFTV151XAP                     | PANASONIC                |
|      4 | C9, C10, C11         | 0      | -         | -           | 0603 Capacitors, SMT, Not Installed                      | -                                | -                        |
|      5 | C14, C15, C16        | 3      | 47μF      | ±20%        | C-Case Tantalum Capacitor, SMT, 16V                      | TPSC476M016R0350 594D476X0016C2T | AVX Vishay               |
|      6 | C17-C23              | 7      | 10μF      | ±20%        | 0805 Ceramic Capacitor, SMT, 6.3V                        | C2012X5R0J106M GRM21BR60J106M    | TDK Murata               |
|      7 | C32 - C47            | 16     | 0.1μF     | ±20%        | 0201 Ceramic Capacitor, SMT, 6.3V                        | C0603X5R0J104M                   | TDK                      |
|      8 | DATA-CLKP, DATA-CLKN | 0      | -         | -           | SMAPC Mount Connector, Vertical, Not installed           | -                                | -                        |
|      9 | CLK, OUT             | 2      | -         | -           | PC edge mount 0.92' SMAConnector                         | 32K243-40ML5                     | Rosenberger              |
|     10 | H1, H2               | 2      | -         | -           | Vertical 2x60 surface mount high speed socket connectors | QSH-060-01-L-D-A                 | Samtec                   |
|     11 | JU1, JU2, JU7, JU8   | 4      | -         | -           | 2x4 pin header(Cut to Fit)                               | PEC36SAAN                        | Sullins Electronic Corp. |
|     12 | JU3, JU4, JU5, JU9*  | 4 (3*) | -         | -           | 3 Pin Headers (Cut to Fit)                               | PEC36SAAN                        | Sullins Electronic Corp. |
|     13 | JU6                  | 0      | -         | -           | 2-pin headers, No Installed                              | PEC36SAAN                        | Sullins Electronic Corp. |
|     14 | L1, L2, L3           | 3      | -         | -           | 1812 Chip bead cores, SMT                                | EXC-CL4532U1                     | PANASONIC                |
|     15 | L4, L5               | 2      | 2.2uH     | ±5%         | 2520 wire-wound chip inductors, SMT, 0.47A               | 1008CS-222XJLB                   | Coilcraft                |
|     16 | R1                   | 1      | 10.0 kOhm | ±1%         | 0603 chip resistor, SMT                                  |                                  |                          |
|     17 | R2, R3               | 0      | -         | -           | 0402 chip resistor, SMT, Not Installed                   |                                  |                          |
|     18 | R4                   | 0      | -         | -           | 0603 chip resistor, SMT, Not Installed                   |                                  |                          |
|     19 | R5, R6               | 2      | 49.9 Ohm  | ±1%         | 0402 chip resistors, SMT                                 |                                  |                          |
|     20 | R7                   | 1      | 2.0 kOhm  | ±0.1%       | 0603 chip resistor, SMT                                  |                                  |                          |

│

Evaluates: MAX19692/MAX19693

## MAX19692/MAX19693 Evaluation Kit User's Guide

Evaluates: MAX19692/MAX19693

## MAX19692/MAX19693 EV Kit Bill of Materials (continued)

|   ITEM | REFERENCE              | QTY    | VALUE    | TOLERANCE   | DESCRIPTION                                              | PART NUMBER                        | MANUFACTURER             |
|--------|------------------------|--------|----------|-------------|----------------------------------------------------------|------------------------------------|--------------------------|
|     21 | R8                     | 1      | 499 Ohm  | ±1%         | 0402 chip resistor, SMT                                  |                                    |                          |
|     22 | R9, R11                | 2      | 174 kOhm | ±1%         | 0603 chip resistor, SMT                                  |                                    |                          |
|     23 | R10, R12               | 2      | 100k Ohm | ±1%         | 0603 chip resistor, SMT                                  |                                    |                          |
|     24 | SW1                    | 1      | -        | -           | Switch, Momentary, Push-Button, SMT                      | B3S-1000                           | Omron Electronics        |
|     25 | T1 - T4                | 4      | -        | -           | 1:1 3000MHz RF Transformers                              | TC1-1-13M+                         | Mini-Circuits            |
|     26 | TP1                    | 0      | -        | -           | Test point, Not Installed                                |                                    |                          |
|     27 | VDD1.8, AVDD3.3, AVCLK | 3      | -        | -           | PC Test Point, Red                                       | 5000                               | Keystone Electronics     |
|     28 | GND                    | 3      | -        | -           | PC Test point, black                                     | 5001                               | Keystone Electronics     |
|     29 | U1 (MAX19692)          | 1      | -        | -           | 12-Bit, 2.3Gsps, Digital- to-Analog Converter, 169 CSBGA | MAX19692EXW-D                      | Maxim                    |
|     30 | U1 (MAX19693)          | 1      | -        | -           | 12-Bit, 4Gsps, Digital- to-Analog Converter, 169 CSBGA   | MAX19693EXW-D                      | Maxim                    |
|     31 | U2                     | 1      | -        | -           | High-Accuracy Supervisory Circuit, 6-SOT23               | MAX6710LUT+ (Top Mark: AAZL)       |                          |
|     32 | U3                     | 1      | -        | -           | 1.25V precision voltage reference, 8 SO                  | MAX6161AESA+ or MAX6161BESA+       | Maxim                    |
|     33 | -                      | 8 (7*) | -        | -           | Shunts (JU1-JU5, JU7- JU9*)                              | STC02SYAN                          | Sullins Electronic Corp. |
|     34 |                        | 1      | -        | -           | PCB, 1 Oz Impedance Controlled                           | MAX19692 / MAX19693 Evaluation Kit | Maxim                    |
|     35 |                        | 1      |          |             | FMCADAPTER CARD                                          | MAXDACFMCADP1                      | Maxim                    |

*MAX19693EVKIT Excludes JU9

## MAX19692 Kit Schematic

<!-- image -->

## MAX19692 Kit Schematic (continued)

<!-- image -->

Evaluates: MAX19692/MAX19693

## MAX19693 Kit Schematic

<!-- image -->

## MAX19693 Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX19692/MAX19693

## MAX19692/MAX19693 Evaluation Kit User's Guide

## MAXDACFMCADP1 Bill of Materials

|   ITEM | REFERENCE   |   QTY | DESCRIPTION                       | PART NUMBER      | MANUFACTURER   |
|--------|-------------|-------|-----------------------------------|------------------|----------------|
|      1 | J1, J2      |     2 | 120 pin high-speed connector, SMT | QTH-060-01-L-D-A | SAMTEC         |
|      2 | J3          |     1 | High pin count FMC connector, SMT | ASP-134488-01    | SAMTEC         |
|      3 | PCB         |     1 | PCB:EPCBMAXADAPTDACFMC1           | EEEFTV151XAP     |                |

│

Evaluates: MAX19692/MAX19693

## MAX19692/MAX19693 Evaluation Kit User's Guide

## MAXDACFMCADP1 Schematic

<!-- image -->

│

## Evaluates: MAX19692/MAX19693

## MAXDACFMCADP1 Schematic (continued)

<!-- image -->

│

## MAX19692/MAX19693 Evaluation Kit User's Guide

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/06           | Initial release                                                                                                                                                                 | -               |
|                 1 | 5/08            | The EV kit board was redesigned. The same data sheet is now used for both the MAX19692 and MAX19693 EV kits                                                                     | 1-16            |
|                 2 | 3/19            | Extensive changes to flow and content of document. Changes include matching newer format. Also details new tools and adapters provided for the MAX19692 and MAX19693 EV kits    | 1-16            |
|                 3 | 10/20           | Updated Procedure , Detailed Description of Hardware , Power Supplies , Clock Division , Operation with the MUXDAC Data Source sections, Table 1 and Ordering Information table | 3-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX19692/MAX19693