<!-- lastmod 2022-08-03 -->
## MAX5879 Evaluation Kit User's Guide

## General Description

The  MAX5879  evaluation  kit  (EV  kit)  contains  a  single MAX5879 14-bit, 2.3Gsps direct RF synthesis digital-toanalog  converter  (DAC).  The  evaluation  board  includes a  transformer  circuit  used  to  convert  the  differential DAC output to a single-ended 50Ω signal. An on-board, 3-transformer circuit is also provided to convert a singleended 50Ω clock source into the well balanced, 50% duty cycle, 100Ω differential source required by the MAX5879.

The MAX5879 evaluation board employs two SAMTECH Q Strip ® (QSH) connectors for the digital interface. The EV kit includes an adapter board that converts the QSH interface to an FPGA Mezzanine Connector (FMC). The FMC  connector  is  commonly  available  on  Commercial Off-the-Shelf  (COTS)  FPGA  evaluation  boards  such  as the Xilinx ©  Virtex ® -7 VC707 EV kit.

The MAX5879 EV kit is supported by the MUXDAC Data Source based on a VC707 FPGA board which provides a  useful  tool  for  supplying  the  digital  signals  required to  evaluate  the  MAX5879.  Refer  to  the  MUXDAC  Data Source User's Guide for more information.

## Features

- Evaluates the MAX5879
- 2.3 Gsps Maximum Update Rate · 2:1 and 4:1 MUX Mode Support
- Proven 12-Layer PCB Design
- Single-Ended Clock Interface · 2.3GHz Maximum Clock Rate
- Single-Ended DAC Output Interface
- Selectable Frequency Response
- Wideband Output Transformer
- Supports from 50MHz to &gt;2GHz
- On-Board 1.25V Reference Circuitry
- On-Board Divide-by-Two Data Clock Divider
- Reduces Frequency for use with FPGA/ASIC
- Fully Assembled and Tested

Xilinx is a registered trademark and registered service mark of Xilinx, Inc.

Virtex is a registered trademark of Xilinx, Inc.

Evaluates: MAX5879

## Quick Start

## Required Equipment

- Window PC (Windows 7/10 operating system), with two available USB2.0 ports
- Spectrum Analyzer - Agilent PXA or equivalent
- RF Signal Generator - Rohde and Schwarz SMF100A or equivalent
- One 3.6V, 2A power supply (V IN )
- Xilinx VC707 EV kit - user-supplied
-  VC707 board
- 12V/5A power cube
- 1 each USB-A to Mini-B cable for interfacing and programming
- 1 each USB-A to Micro-B cable for interfacing and programming
- Low-loss SMA/SMA cables as needed for connections to the spectrum analyzer and signal generator
- Included in the MAX5879 EV kit
- MAX5879 EV kit board
-  MAXDACFMCADP1 adapter board
- Mounting hardware

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX5879 EV Kit and MUXDAC Data Source Test Setup

<!-- image -->

Evaluates: MAX5879

## MAX5879 Evaluation Kit User's Guide

## Required Installed Software and Drivers

- Maxim Integrated MUXDAC Data Source and Associated Components

## Procedure

- 1)
- Install the MUXDAC Data Source Software Reference the MUXDAC Data Source User's Guide for detailed installation and operating instructions. The MUXDAC Data Source User's Guide and Software are available for download from www.maximintegrated.com . Search for 'MUXDAC Data Source', then download the User's Guide and follow the link to download the software. You will be prompted to accept Maxim's End-User License Agreement to complete the download process.
- 2) Setup and Connect the MAX5879 EV Kit Board
- a. Install the two 1-1/4' stand-offs included with the MAX5879 EV kit. Stand-offs should be installed on the DAC output side of the board.
- b. Mate the MAXDACFMCADP1 board to the MAX5879 EV kit.
- i. Secure the two boards using the supplied screws/nuts/washers. See MAX5879 EV Kit Schematic .
- c. Verify all jumpers on the MAX5879 EV kit board are in the default position; refer to Table 1 and Table 2.

## Table 1. MAX5879 EV Kit Jumper Settings

| JUMPER        | POSITION                   | EV KIT FUNCTION                                                                      |
|---------------|----------------------------|--------------------------------------------------------------------------------------|
| JU1           | Installed* Not Installed   | Power for U5 - MAX6161 - external reference MAX6161 NOT powered                      |
| JU2           | Installed* Not Installed   | MAX5879 external reference connected MAX5879 using internal reference                |
| JU3+ (DELAY)  | 1-2* 1-3 Not Installed 1-4 | High Level (VDD1.8) Mid-Level 1 (27kΩ to GND) Mid-Level 2 (floating) Low Level (GND) |
| JU4           | 1-2 2-3*                   | External Divider Set to /1 External Divider Set to /2                                |
| JU5+ (DLLOFF) | 1-2 1-3 Not Installed 1-4* | High Level (VDD1.8) Mid-Level 1 (27kΩ to GND) Mid-Level 2 (floating) Low Level (GND) |
| JU6           | Installed* Not Installed   | 3.3V LDO (U6) Power for AVDD3.3 Input External 3.3V/0.5A Supply for AVDD3.3 Input    |
| JU7           | Installed* Not Installed   | 1.8V LDO (U5) Power for VDD1.8 Input External 1.8V/0.5A Supply for VDD1.8 Input      |

Evaluates: MAX5879

- d. Connect the MAX5879 EV kit board to the VC707 board, HPC1, as shown in MAX5879 EV Kit and MUXDAC Data Source Test Setup .
- e. Connect the power supplies to the MAX5879 EV kit and enable the output.
- f. Connect the RF generator to the clock input with a low-loss SMA cable and set the frequency to 2.3GHz (50% duty-cycle) with output power at +10dBm.
- g. Connect the DAC Output to the spectrum analyzer with a low-loss SMA cable.
- h. Turn on the VC707 by sliding switch SW12 to the ON (left) position.
- i. Connect the USB A to Micro-B cable from the VC707 JTAG port to the PC.
- j. Connect the USB A to Mini-B cable from the VC707 USB2.0 port to the PC.

Please ensure that all the USB device drivers are installed and  'ready  for  use'  before  proceeding  to  the  next  step. This  preparation  may  take  up  to  20  minutes  to  complete.  The  Windows  OS  reports  new  device  arrivals  in the Notification  Area of  the Task  Bar.  Device Manager can also be used to verify the USB connections.

## MAX5879 Evaluation Kit User's Guide

## Table 1. MAX5879 EV Kit Jumper Settings (continued)

| JUMPER   | POSITION                 | EV KIT FUNCTION                                                                        |
|----------|--------------------------|----------------------------------------------------------------------------------------|
| JU8      | Installed* Not Installed | 1.8V LDO (U8) Power for AVCLK Input External 1.8V/0.5A Supply for AVCLK Input          |
| JU9      | Installed* Not Installed | 3.3V LDO (U7) Power for Clock Divider (U7) External 3.3V/0.5A Supply for Clock Divider |
| J1(1-2)  | Installed Not Installed* | Enable f DAC /2 Modulation Disable f DAC /2 Modulation                                 |
| J1(3-4)  | Installed Not Installed* | Enable Internal Clock Output Divider (/2) Disable Internal Clock Output Divider (/1)   |
| J1 (5-6) | Installed Not Installed* | 4:1 MUX Mode Operation Enabled 2:1 MUX Mode Operation Enabled                          |

## Table 2. Frequency-Response Selection (J1)

| SHUNT POSITION   | SHUNT POSITION   | OPERATING MODE   |
|------------------|------------------|------------------|
| J1 (7-8)→RZ      | J1 (1-2)→RF      |                  |
| Not installed    | Not installed    | NRZ mode*        |
| Installed        | Not installed    | RZ mode          |
| Not installed    | Installed        | RF mode          |
| Installed        | Installed**      | RFZ mode**       |

- 3) Start the MUXDACEVKITSoftwareController.exe a. Wait for the program to initialize
- 4) Load the FPGA configuration
- a. Click on the Xilinx Impact Tool Installed checkbox.
- b. Click the &lt;Load FPGA Configuration File&gt; button.
- i. A file browser will open in the C:\maximinte -grated\MUXDACEVKIT\VC707Files folder. Double click the MUXDAC\_DSS\_vNpM.bit file. (N and M are the revision numbers, i.e; v1p3 is Version 1.3)
- c. A progress bar will display while the FPGA is configured, should take &lt; 2 minutes.
- 5) Select the DAC in use
- a. Click on the text box in the DAC Selection sec -tion of the window
- b. Select MAX5879 from the list
- 6) Load Test Patterns
- a. Click the Load Pattern List button
- b. A file browser will open in the C:\maximintegrat -ed\MUXDACEVKIT\TestPatterns folder. Select one of the lists for 14-bit devices.
- 7) Wait for the patterns to load
- 8) Select a Pattern from the List
- a. Click on the Select Pattern text
- b. Select a pattern from the populated list
- 9) Start the Pattern
- a. Click the Start button
- 10)  Observe the DAC Output

Refer  to  the  Test  Patterns  and  Lists  section  of  the MUXDAC User's Guide for details regarding the creation of custom patterns and lists.

Evaluates: MAX5879

## Detailed Description of Hardware

## MAX5879 Evaluation Board

The  MAX5879  EV  Kit  is  a  fully  assembled  and  tested Printed Circuit Board (PCB or board) that contains all the components  necessary  to  evaluate  the  performance  of the MAX5879 14-bit, 2.3Gsps direct RF synthesis DAC. The  EV  Kit  operates  with  LVDS  data  inputs,  a  singleended clock input signal, and a single 3.6V power supply for simple board operation.

The device is a high-performance, 14-bit, current-steering DAC with an integrated 50Ω differential output termination to the 3.3V supply. The device uses a delay-locked loop (DLL) to ease interface timing requirements for the FPGA or ASIC data sources.

The evaluation board features SAMTECH Q Strip ® (QSH) connectors  that  provide  the  high-speed  digital  interface to  the  DAC.  An  adapter  board,  MAXDACFMCADP1, converts  the  QSH  connectors  to  an  FMC  connector  for use  with  the  VC707  FPGA  Evaluation  Kit.  The  VC707, configured as the MUXDAC Data Source (MDS), drives the  device's  LVDS  inputs  and  controls  the  DLLOFF multiplexer using an SPDT analog switch (U3).

The  evaluation  board  uses  a  BALUN  transformer  to convert the differential 50Ω output to a single-ended 50Ω signal.  Three  BALUN  transformers  are  used  to  convert a  user-supplied  single-ended  clock  signal  to  a  wellbalanced differential clock. Jumpers are used to configure the modulation, reference voltage, data clock, and DLL/ delay settings. The evaluation board includes an external buffer/divider clock circuit to ease the interfacing of data sources.

## Power Supplies

The  evaluation  board  operates  from  a  single  3.6V,  2A power  supply.  The  device  is  then  powered  from  LDO regulators, one each for the two 1.8V and two 3.3V power supply rails. Optionally, the user may disconnect any of the LDO outputs and use an external supply for one or all supply rails. All supplies are filtered as they enter the board. The on-board filters allow for the two 1.8V supply rails to be connected to each other externally and driven by a single source. The two 3.3V supply rails can also be connected to each other externally and driven by a single source.

## Clock Signal

The device requires a differential clock input signal with minimal  jitter.  The  differential  clock  also  needs  to  be  a well-balanced, symmetrical signal with a 50% duty cycle. The 3-transformer circuit is provided to convert the singleended clock source to a suitable differential signal. The single-ended  clock  signal  is  applied  at  the  CLK  SMA connector.  The  power  applied  to  the  SMA  connec -tor  should  be  between  10dBm  and  13dBm  when measured at the  connector.  Please  remember  to  account  for connector  and  cables  losses  when  setting  the  signalgenerator amplitude.

## Reference Voltage Options

The  MAX5879  requires  a  reference  voltage  to  set  the DAC output  power. The  DAC  features  a  stable  on-chip bandgap reference of 1.2V. The internal reference can be overdriven by an external reference to enhance accuracy and drift performance or for gain control.

The evaluation board features multiple reference options. Use the device's internal voltage reference by removing the  shunts  on  jumpers  JU1  and  JU2.  Use  an  external reference by removing the shunts on JU1 and JU2 and connecting a stable voltage reference between the REFIO pad and ground. Install shunts on JU1 and JU2 to use the on-board 1.25V reference, MAX6161 (U2). See Table 2 to  configure the shunts on JU1 and JU2 and select the source of the reference voltage.

The  full-scale  continuous-wave  (CW)  output  power  is dependent  on  the  value  of  the  reference  voltage  and resistor R6. Use the equation below to calculate the DAC full-scale output power:

<!-- formula-not-decoded -->

where:

POUT = DAC full-scale output power,

V REFIO  = Voltage present at the REFIO pad in volts (1.2V if using the device's internal reference),

R6 = Value of resistor R6 in ohms (2kΩ default).

## MAX5879 Evaluation Kit User's Guide

## DLLOFF/DELAY Frequency Control

The MAX5879 provide two, 4-level control signals for tun -ing  the  DLL  operating  frequency. The 4-level  inputs  are set using 4-pin headers allow for selection of the levels applied  to  the  DLLOFF  (JU5)  and  DELAY  (JU3)  inputs. The four levels are:

- 1) Logic High (1.8V)
- 2) Logic Low (GND)
- 3) Logic Mid 1 (27kΩ to GND)
- 4) Logic Mid 4 (Floating)

The DLLOFF input to the DAC is switched using a SPDT switch  (U3)  to  facilitate  resetting  the  timing  of  the  DLL. The  MDS  software  will  briefly  assert  DLLOFF  (DLL  in reset)  when  operation  of  data  interface  is  started.  The switch output is then returned to the state of JU5.

Evaluates: MAX5879

Refer to Table 3 for details regarding the DLL configuration on the MAX5879.

## Clock Division

The  differential  data  clock  output-signal  (DATACLK\_) frequency  is  scaled  down  from  the  DAC  clock  input. Pins  3-4  of  header  J1  control  the  division  factor  within the  MAX5879.  See Table  5  for  jumper  configuration. Additional  circuitry  (U4,  JU4)  is  available  for  externally scaling down the DATACLK\_ frequency. The DATACLK\_ frequency  is  lowered  to  ease  the  interfacing  of  various data sources.

## Table 3. Reference Voltage Selection (JU1, JU2)

| SHUNT POSITIONS   | SHUNT POSITIONS   | VOLTAGE                                                                                                          |
|-------------------|-------------------|------------------------------------------------------------------------------------------------------------------|
| JU1               | JU2               | REFERENCE MODE                                                                                                   |
| Installed*        | Installed*        | External 1.25V reference (U2) connected to the device's REFIO pin.                                               |
| Not installed     | Not installed     | The device's internal 1.2V bandgap reference or user-supplied voltage reference at the REFIO pad (0.5V to 1.8V). |

## Table 4. DLLOFF/DELAY (JU5, JU3)

| SHUNT POSITION   | SHUNT POSITION   | f CLK (MHZ)   | EV KIT OPERATION                                                                  |
|------------------|------------------|---------------|-----------------------------------------------------------------------------------|
| JU5 (DLLOFF)     | JU3 (DELAY)      |               |                                                                                   |
| 1-2              | 1-2              | 10 to 2304    | DLL disabled (one DAC clock period delay added to the DATACLKP/ DATACLKN outputs) |
| 1-2              | 1-4              | 10 to 2304    | DLL disabled (no delay added to the DATACLKP/DATACLKN outputs)                    |
| 1-4              | 1-2              | 2150 to 2304  | DLL enabled                                                                       |
| 1-4              | Not installed    | 1900 to 2150  | DLL enabled                                                                       |
| Not installed    | 1-4              | 1650 to 1900  | DLL enabled                                                                       |
| Not installed    | 1-2              | 1400 to 1650  | DLL enabled                                                                       |
| Not installed    | Not installed    | 1250 to 1400  | DLL enabled                                                                       |
| 1-3              | 1-4              | 1100 to 1250  | DLL enabled                                                                       |
| 1-3              | 1-2              | 950 to 1100   | DLL enabled                                                                       |
| 1-3              | Not installed    | 800 to 950    | DLL enabled                                                                       |

## MAX5879 Evaluation Kit User's Guide

## Operation with the MUXDAC Data Source

The device's LVDS-level data clock outputs (DATACLKP, DATACLKN) synchronize the data source and the DAC during normal operation of the EV Kit. The MDS requires the  data  clock  frequency  to  be  f DAC /8.  The  EV  Kit  pro -vides two options, as shown in Table 6, for achieving the MDS  required  frequency  setting  using  header  J1  and jumper JU4.

Table 5. Data Clock Division (J1, Pins 3-4)

| SHUNT POSITION   | DCLKDIV PIN                | EV KIT FUNCTION                |
|------------------|----------------------------|--------------------------------|
| Installed        | Logic High (1.8V)          | DATACLK = f DAC /8 (f CLK /4)  |
| Not installed    | Logic Low (GND through R8) | DATACLK = f DAC /4 (f CLK /2 ) |

## Component Suppliers

| SUPPLIER                               | WEBSITE                     |
|----------------------------------------|-----------------------------|
| Fairchild Semiconductor                | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                  | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | www.murata-northamerica.com |
| Panasonic Corp.                        | www.panasonic.com           |
| Taiyo Yuden                            | www.t-yuden.com             |
| TDK Corp.                              | www.component.tdk.com       |

Note: Indicate that you are using the MAX5879 when contacting these component suppliers.

## Ordering Information

| PART          | TYPE           |
|---------------|----------------|
| MAX5879EVKIT+ | Evaluation Kit |

+Lead-free, RoHS compliant

Evaluates: MAX5879

Option 1 uses the device's internal  divide-by-two  circuit (enabled with DCLKDIV logic input) and an external buffer (U4). Install a shunt on pins 3-4 of header J1 to enable the device's internal divider; install a shunt on pins 1-2 of jumper JU4 to disable the external divider.

Option  2  uses  the  external  clock  divider.  Verify  that  a shunt is not installed on pins 3-4 of header J1 and install a  shunt  on  pins  2-3  of  jumper  JU4  to  use  the  external clock divider.

## Table 6. EV Kit fDAC/8 Frequency Setting

| SHUNT POSITION           | SHUNT POSITION   | DATACLK   |
|--------------------------|------------------|-----------|
| J1                       | JU4              | FUNCTION  |
| Installed (pins 3-4)*    | 1-2*             | Option 1  |
| Not installed (pins 3-4) | 2-3              | Option 2  |

## MAX5879 Evaluation Kit User's Guide

## MAX5879 EV Kit Bill of Materials

|   ITEM | REFERENCE                    |   QTY | VALUE   | TOLERANCE   | DESCRIPTION                                              | PART NUMBER      | MANUFACTURER             |
|--------|------------------------------|-------|---------|-------------|----------------------------------------------------------|------------------|--------------------------|
|      1 | C1, C2                       |     2 | 100pF   | ±5%         | 0402 Ceramic Capacitor, SMT, 50V                         | C1005C0G1H101J   | TDK                      |
|      2 | C3, C4, C12, C13, C52        |     5 | 0.1μF   | ±20%        | 0402 Ceramic Capacitor, SMT, 10V                         | C1005X5R1A104M   | TDK                      |
|      3 | C5, C6, C7, C8, C24-C31, C50 |    13 | 1.0μF   | ±20%        | 0402 Ceramic Capacitor, SMT, 6.3V                        | EEEFTV151XAP     | PANASONIC                |
|      4 | C14, C15, C16, C48           |     4 | 47μF    | ±20%        | C-Case Tantalum Capacitor, SMT, 16V                      | TPSC476M016R0350 | AVX                      |
|      5 | C17-C23, C49                 |     8 | 10μF    | ±20%        | 0805 Ceramic Capacitor, SMT, 6.3V                        | C2012X5R0J106M   | TDK                      |
|      6 | C32 -C47, C53-C61            |    25 | 0.1μF   | ±20%        | 0201 Ceramic Capacitor, SMT, 6.3V                        | C0603X5R0J104M   | TDK                      |
|      7 | C51, C64, C69                |     3 | 0.01μF  | ±10%        | 0402 Ceramic Capacitor, SMT, 25V                         | C1005X5R1E103K   | TDK                      |
|      8 | C62                          |     1 | 150μF   | ±20%        | Electrolytic Capacitor, SMT, 10V (6.3mmx 8mm)            | EEEFK1A151AP     | Panasonic                |
|      9 | C66, C71                     |     2 | 4.7μF   | ±10%        | 0805 Ceramic Capacitor, SMT, 6.3V                        | 2012X5R0J475K    | TDK                      |
|     10 | C67, C72                     |     2 | 6.8μF   | ±10%        | 1206 Ceramic Capacitor, SMT, 16V                         | C3216X5R1C685K   | TDK                      |
|     11 | CLK, OUT                     |     2 | -       | -           | PC edge mount 0.92' SMA Connector                        | 32K243-40ML5     | Rosenberger              |
|     12 | H1, H2                       |     2 | -       | -           | Vertical 2x60 surface mount high speed socket connectors | QSH-060-01-L-D-A | Samtec                   |
|     13 | J1                           |     1 | -       | -           | 2x4 pin header(Cut to Fit)                               | PEC36SAAN        | Sullins Electronic Corp. |

Evaluates: MAX5879

## MAX5879 Evaluation Kit User's Guide

## MAX5879 EV Kit Bill of Materials (continued)

|   ITEM | REFERENCE                                 |   QTY | VALUE     | TOLERANCE   | DESCRIPTION                                             | PART NUMBER    | MANUFACTURER             |
|--------|-------------------------------------------|-------|-----------|-------------|---------------------------------------------------------|----------------|--------------------------|
|     14 | JU1, JU2, JU6-JU9                         |     6 | -         | -           | 2-pin headers (Cut to Fit)                              | PEC36SAAN      | Sullins Electronic Corp. |
|     15 | JU3, JU5                                  |     2 | -         | -           | 4-pin headers (Cut to Fit)                              | PEC36SAAN      | Sullins Electronic Corp. |
|     16 | JU4                                       |     1 | -         | -           | 3-pin headers (Cut to Fit)                              | PEC36SAAN      | Sullins Electronic Corp. |
|     17 | L1, L2, L3, L6                            |     1 | -         | -           | 1812 Chip bead cores, SMT                               | EXC-CL4532U1   | PANASONIC                |
|     18 | L4, L5                                    |     2 | 390nH     | ±5%         | 2520 wire-wound chip inductors, SMT, 0.47A              | 1008CS-391XJLB | Coilcraft                |
|     19 | R2, R11, R16, R19, R21                    |     5 | 0 Ohm     | ±5%         | 0603 chip resistor, SMT                                 |                |                          |
|     20 | R3, R4                                    |     2 | 49.9 Ohm  | ±1%         | 0402 chip resistors, SMT                                |                |                          |
|     21 | R5                                        |     1 | 499 Ohm   | ±1%         | 0402 chip resistor, SMT                                 |                |                          |
|     22 | R6                                        |     1 | 2.0k Ohm  | ±1%         | 0603 chip resistor, SMT                                 |                |                          |
|     23 | R7-R10                                    |     4 | 10.0k Ohm | ±1%         | 0603 chip resistor, SMT                                 |                |                          |
|     24 | R13                                       |     1 | 133k Ohm  | ±1%         | 0603 chip resistor, SMT                                 |                |                          |
|     25 | R14                                       |     1 | 80.6k Ohm | ±1%         | 0603 chip resistor, SMT                                 |                |                          |
|     26 | R15                                       |     1 | 100 Ohm   | ±1%         | 0603 chip resistor, SMT                                 |                |                          |
|     27 | R17, R18                                  |     2 | 27k Ohm   | ±1%         | 0402 chip resistor, SMT                                 |                |                          |
|     28 | T1-T5                                     |     5 | -         | -           | 1:1 3000MHz RF transformers                             | TC1-1-13M+     | Mini-Circuits            |
|     29 | VDD1.8, ACLKDIV, AVDD3.3, AVCLK, VIN (x2) |     6 | -         | -           | PC Test point, red                                      | 5000           | Keystone Electronics     |
|     30 | GND                                       |     6 | -         | -           | PC Test point, black                                    | 5001           | Keystone Electronics     |
|     31 | U1                                        |     1 | -         | -           | 14-Bit, 2.3Gsps, digital-to-analog converter, 256 CSBGA | MAX5879EXF+D   | Maxim                    |

Evaluates: MAX5879

## MAX5879 Evaluation Kit User's Guide

## MAX5879 EV Kit Bill of Materials (continued)

|   ITEM | REFERENCE                 |   QTY | VALUE   | TOLERANCE   | DESCRIPTION                             | PART NUMBER                                     | MANUFACTURER             |
|--------|---------------------------|-------|---------|-------------|-----------------------------------------|-------------------------------------------------|--------------------------|
|     32 | U2                        |     1 | -       | -           | 1.25V precision voltage reference, 8 SO | MAX6161AESA+ or MAX6161BESA+                    | Maxim                    |
|     33 | U3                        |     1 | -       | -           | SPDTAnalog Switches, 6 SOT23            | MAX4644EUT                                      | Maxim                    |
|     34 | U4                        |     1 | -       | -           | 3.3V LVDS Clock Driver, 16 MLF          | SY89876LMG (Top Mark 876L)                      | Micrel                   |
|     35 | U5, U7                    |     2 | -       | -           | 500mALDO Regulator (8 TDFN-EP)          | MAX8902AATA+ (Top Mark ABG)                     | Maxim                    |
|     36 | U6                        |     1 | -       | -           | 1A LDO Regulator (16-TSSOP-EP)          | MAX1793EUE50+ or MAX1793EUE25+ or MAX1793EUE18+ | Maxim                    |
|     37 |                           |       |         |             |                                         |                                                 |                          |
|     38 | 1 Oz Impedance Controlled |     1 | -       | -           | PCB: MAX5879 Evaluation Kit+            | EPCB5882+                                       | Maxim                    |
|     39 | Package                   |     7 | -       | -           | Shunts (J1, JU1-JU5)                    | STC02SYAN                                       | Sullins Electronic Corp. |
|     40 | Package                   |     1 | -       | -           | FMCADAPTER CARD                         | MAXDACFMCADP1                                   | Maxim                    |

Evaluates: MAX5879

## MAX5879 Evaluation Kit User's Guide

## MAX5879 EV Kit Schematic

<!-- image -->

Evaluates: MAX5879

## MAX5879 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX5879

## MAX5879 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX5879

## MAXDACFMCADP1 Bill of Materials

|   ITEM | REFERENCE   |   QTY | DESCRIPTION                       | PART NUMBER      | MANUFACTURER   |
|--------|-------------|-------|-----------------------------------|------------------|----------------|
|      1 | J1, J2      |     2 | 120 pin high-speed connector, SMT | QTH-060-01-L-D-A | SAMTEC         |
|      2 | J3          |     1 | High pin count FMC connector, SMT | ASP-134488-01    | SAMTEC         |
|      3 | PCB         |     1 | PCB:EPCBMAXADAPTDACFMC1           | EEEFTV151XAP     |                |

## MAXDACFMCADP1 Schematic

<!-- image -->

Evaluates: MAX5879

## MAXDACFMCADP1 Schematic (continued)

<!-- image -->

Evaluates: MAX5879

## MAX5879 Evaluation Kit

## User's Guide

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION          | PAGES CHANGED   |
|-------------------|-----------------|----------------------|-----------------|
|                 0 | 8/11            | Initial release      | -               |
|                 1 | 4/19            | Reflow of data sheet | 1-15            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX5879