<!-- lastmod 2022-08-03 -->
## MAXNANOPWRBD# Evaluation Kit

## General Description

The  MAXNANOPWRBD  evaluation  kit  brings  together Maxim's Nanopower technology with the ultra-low power, low  pin  count,  MAX32660 Arm®  Cortex®-M4  processor with FPU to create a simple digital multimeter application example running on a single 1.5V alkaline button cell.

The kit includes the following items:

- MAXNANOPWRBD# circuit board
- MAX326325PICO JTAG debugger/programmer

## MAXNANOPWRBD# Evaluation Kit Top View

<!-- image -->

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX32660, MAX11615, MAX40007, MAX9119,

MAX9634, MAX17222

## Benefits and Features

- Ultra-Low Power MAX32660 Arm Cortex M4F
- MAX11615 Low Power 8-Channel 12-Bit ADC
- MAX40007 Nanopower Op-Amp
- MAX9119 Nanopower Comparator
- MAX9634 Current Sense Amplifier
- MAX17222 Boost Convertor
- PCB mounted Coin Cell Power Source

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXNANOPWRBD# Evaluation Kit

## Quick Start

The kit comes preprogrammed with multimeter example firmware.  Simply  apply  power  to  the  board  with  a  1.5V button cell battery or with an external 1.5V voltage source. SW1 can be used to cycle through the three operational modes: voltage measurement, current measurement, and frequency measurement.

Voltage and frequency measurement is relative to the V and  COM  terminals.  Current  measurement  uses  the  A and COM terminals.

## Detailed Description

The  MAXNANOPWRBD  kit  implements  a  simple  battery-powered  multimeter  to  demonstrate  several  low power Maxim analog and digital technologies. Application functionality  is  provided  by  firmware  that  runs  on  the MAX32660  Arm  Cortex-M4  processor  with  FPU.  The analog  front-end  is  implemented  with  nanopower  comparators and operational amplifiers that present measurement signals to the MAX11615 12-bit ADC. The ADC is connected to the MCU through an I 2 C bus.

The 128x128 pixel LCD is connected to the MCU through a SPI bus and two buttons are provided to complete the multimeter user interface.

The  example  firmware  provided  with  the  kit  enables voltage,  current,  and  frequency  measurements  through the  V,  A,  and  COM  terminals.  Limit  voltage  measurements  to  ±10V  and  current  measurements  to  ±100mA. Kit design does not provide protection and safety circuitry required  by  commercial  multimeter  designs.  Therefore,

Figure 1. MAXNANOPWRBD# EV Block Diagram

<!-- image -->

## Evaluates: MAX32660, MAX11615, MAX40007, MAX9119, MAX9634, MAX17222

the kit should not be connected to high-voltage sources. Exceeding  the  specified  input  ranges  will  damage  the PCB and the components.

The  kit  can  be  powered  by  a  single  LR44,  or  similar, 1.5V  button  cell.  The  board  can  optionally  be  powered externally  by  a  benchtop  supply  through  J2.  Maximum input  voltage  applied  to  J2  should  be  limited  to  1.5V. SW4 specifies between external power (EXT) and battery power (BAT).

The kit features two connectors for external interfacing. J7 provides a JTAG SWD interface that can be used with the included  MAX32635PICO debugger module to program and debug the MAX32660 Arm Cortex M4 processor with FPU. J1 provides access to the I 2 C bus to interface with the MCU and the ADC. This interface is compatible with Sparkfun's QWIIC system.

Power conversion is provided by the MAX17222, which converts the 1.5V nominal battery voltage to 3.3V for use by the rest of the board.

## Firmware

A source code package for the kit can be obtained from Maxim website. Simply use the search tool on Maxim's website and search for 'MAXNANOPWRBD'. The package is found on the Design Resources tab.

Information  about  the  source  code  and  how  to  build, program, and debug it can be found in the source code package.

## Ordering Information

| PART          | TYPE           |
|---------------|----------------|
| MAXNANOPWRBD# | Evaluation Kit |

# Denotes RoHS compliance.

│

## MAXNANOPWRBD# Evaluation Kit

## MAXNANOPWRBD# EV Bill of Materials

| REFDES          |   QTY | MANUFACTURER                  | PART NUMBER                                                                  | DESCRIPTION                                                                                 |
|-----------------|-------|-------------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| BT1             |     1 | KEYSTONE                      | 2996                                                                         | BATTERY HOLDER; SMT; 11.6MM BUTTON CELL RETAINER; 0.25MM PHOSPHOR BRONZE; TIN NICKEL PLATED |
| C1, C3          |     2 | TDK                           | C1608X5R1A106K080AC                                                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R    |
| C2, C10, C12    |     3 | MURATA; TDK; TAIYO YUDEN; TDK | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R  |
| C4-C7, C11, C14 |     8 | KEMET; YAGEO                  | C0402C105K8PAC; CC0402KRX5R6BB105                                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R     |
| J1              |     1 | JST MANUFACTURING             | SM04B-SRSS-TB(LF)(SN)                                                        | CONNECTOR; MALE; SMT; DISCONNECTABLE CRIMP STYLE; RIGHTANGLE; 4PINS                         |
| J2              |     1 | PHOENIX CONTACT               | 1725656                                                                      | CONNECTOR; FEMALE; THROUGH HOLE; PCB TERMINAL BLOCK; RIGHTANGLE; 2PINS                      |
| J3              |     1 | MOLEX                         | 51441-1093                                                                   | CONNECTOR; FEMALE; SMT; 0.5MM FPC CONNECTOR; RIGHTANGLE; 10PINS                             |
| J7              |     1 | SAMTEC                        | FTSH-105-01-L-DV-K                                                           | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS                      |
| L1              |     1 | WURTH ELECTRONICS INC.        | 74479276222                                                                  | INDUCTOR; SMT (0806); MOLDED CHIP; 2.2µH; 30%; 1.40A                                        |
| MH1-MH4         |     4 | KEYSTONE                      | 9032                                                                         | ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                       |
| MOD1            |     1 | SHARP                         | LS013B7DH03                                                                  | LCD MODULE; 30.3MM X 26.6MM X 0.851MM; SMT;                                                 |
| R1, R4, R12     |     3 | VISHAY DALE; YAGEO PHICOMP    | CRCW040210K0FK; RC0402FR-0710KL                                              | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                        |
| R2, R3          |     2 | VENKEL LTD.; PANASONIC        | CR0402-16W-3091FT; ERJ-2RKF309                                               | RESISTOR; 0402; 3.09KΩ; 1%; 100PPM; 0.063W; THICK FILM                                      |
| R7              |     1 | VISHAY; PANASONIC             | CRCW060380K6FK; ERJ-3EKF8062                                                 | RESISTOR; 0603; 80.6K Ω ; 1%; 100PPM; 0.10W; METAL FILM                                     |
| R9              |     1 | KOASPEER                      | SR732BTTDR390F                                                               | RES; SMT (1206); 0.390; 1%; ±100PPM/°C; 0.33W                                               |
| R10             |     1 | PANASONIC                     | ERJ-3EKF1133                                                                 | RES; SMT (0603); 113K; 1%; ±100PPM/°C; 0.1W                                                 |

│

Evaluates: MAX32660, MAX11615,

MAX40007, MAX9119,

MAX9634, MAX17222

## MAXNANOPWRBD# Evaluation Kit

Evaluates: MAX32660, MAX11615,

MAX40007, MAX9119,

MAX9634, MAX17222

## MAXNANOPWRBD# EV Bill of Materials (continued)

| REFDES   |   QTY | MANUFACTURER              | PART NUMBER     | DESCRIPTION                                                                                                           |
|----------|-------|---------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------|
| R11      |     1 | PANASONIC                 | ERJ-2RKF1004    | RESISTOR; 0402; 1MΩ;1%; 100PPM; 0.10W; THICK FILM                                                                     |
| R13      |     1 | STACKPOLE ELECTRONICS INC | HMC0402JT33M0   | RESISTOR; 0402; 33MΩ; 5%; 400PPM; 0.063W; THICK FILM                                                                  |
| SW1-SW3  |     3 | C&K COMPONENTS            | KSR231GLFS      | SWITCH; SPST; SMT; 32V; 0.05A; KSR SERIES; SUBMINIATURE TACT SWITCH; RCOIL = 0.1Ω; RINSULATION = 10GΩ; C&K COMPONENTS |
| SW4      |     1 | ALPS                      | SSSS211900      | SWITCH; SP3T; THROUGH HOLE; 6V; 0.3A                                                                                  |
| U1       |     1 | MAXIM                     | MAX32660GTP+    | IC; UCON; ULTRA-LOW POWER ARM CORTEX-M4 WITH FPU-BASED MICROCONTROLLER FOR WEARABLEAND IOT SENSORS; TQFN20-EP         |
| U3       |     1 | MAXIM                     | MAX11615EWE+    | IC; ADC; LOW-POWER; 8-CHANNEL; I 2 C; 12-BIT ADC; WLP16                                                               |
| U4       |     1 | MAXIM                     | MAX40007AUT+    | IC; OPAMP; NANOPOWER OPAMP; GAIN = 1; SOT23-6                                                                         |
| U6       |     1 | MAXIM                     | MAX9119EXK+     | IC; COMP; NANOPOWER; BEYOND-THE-RAILS COMPARATORS WITH/WITHOUT REFERENCE; SC70-5                                      |
| U7, U8   |     2 | MAXIM                     | MAX9634TEUK+    | IC; AMP; PRECISION CURRENT-SENSE AMPLIFIER; SOT23-5                                                                   |
| U9       |     1 | MAXIM                     | MAX17222ELT+    | IC; VCON; 0.4V TO 5.5V INPUT; NANOPOWER SYNCHRONOUS; BOOST CONVERTER WITH TRUE SHUTDOWN; UDFN6                        |
| Y1       |     1 | CITIZEN                   | CM1610H32768DZB | CRYSTAL; SMT 1.6MMX1MM; 6PF; 32.7680KHZ; ±20PPM                                                                       |

│

## MAXNANOPWRBD# Evaluation Kit

## MAXNANOPWRBD# EV Schematic

<!-- image -->

│

Evaluates: MAX32660, MAX11615,

MAX40007, MAX9119,

MAX9634, MAX17222

## MAXNANOPWRBD# Evaluation Kit

## MAXNANOPWRBD# EV PCB Layout Diagrams

<!-- image -->

MAXNANOPWRBD# EV PCB Layout-Silk Top

<!-- image -->

MAXNANOPWRBD# EV PCB Layout-Top View

MAXNANOPWRBD# EV PCB Layout-Bottom View

<!-- image -->

MAXNANOPWRBD# EV PCB Layout-Silk Bottom

<!-- image -->

│

Evaluates: MAX32660, MAX11615, MAX40007, MAX9119,

MAX9634, MAX17222

## MAXNANOPWRBD# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/19            | Initial release                                                                                                                                 | -               |
|                 1 | 10/19           | Updated part number, Firmware section, MAXNANOPWRBD# EV Bill of Materials MAXNANOPWRBD# EV Schematic , and MAXNANOPWRBD# EV PCB Layout Diagrams | 1-7             |
|                 2 | 10/19           | Updated Benefits and Features , Detailed Description , Figure 1, and MAXNANOPWRBD# EV Bill of Materials                                         | 1-4             |
|                 3 | 12/19           | Updated Detailed Description section                                                                                                            | 2               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG. MD[LP IQWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VSHFL¿FDWLRQ

<!-- image -->

│

Evaluates: MAX32660, MAX11615,

MAX40007, MAX9119,

MAX9634, MAX17222