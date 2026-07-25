<!-- lastmod 2022-08-03 -->
## MAX32650FTHR Evaluation Kit

## General Description

The MAX32650FTHR EV kit provides a platform for evaluating the capabilities of the MAX32650 ultra-low-power memory-scalable microcontroller designed specifically for high-performance, battery-powered applications.

## EV Kit Contents

-  MAX32650FTHR# circuit board
-  MAX326325PICO JTAG debugger/programmer
- Micro USB cables
-  SWD cable

## MAX32650FTHR TOP

<!-- image -->

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Adafruit is a registered trademark of Limor Fried DBA Adafruit Industries.

## Features

- MAX32650 Arm ®  Cortex ® -M4 processor with FPU
-  120MHz Core Speed
- 3MB Internal Flash, 1MB Internal SRAM
- 104µW/MHz Executing from Cache at 1.1V
-  240Mbps SDHC/eMMC/SDIO/microSD Interface
- Up to 105 GPIO
-  SmartDMA Provides Background Memory Transfers with Programmable Data Processing
- Battery Connector and Charging Circuit
- Micro-SD Card Interface
- USB 2.0 Full-Speed Device Interface
- MAX11261 6-Channel, 24-Bit, 16ksps, ADC
- Adafruit ®  Feather Board Compatible

Ordering Information appears at end of data sheet.

Evaluates: MAX32650

<!-- image -->

## MAX32650FTHR Evaluation Kit

## Quick Start

- 1) Connect the USB cable to the micro-B USB connector to a power source.
- 2) Both LEDs illuminate.
- 3) Push the user buttons to toggle the LEDs.

For  firmware  development  support,  download  the  latest Low Power Arm Micro Toolchain from the MAX32650 web page at www.maximintegrated.com/en/products/microcontrollers/MAX32650

## Evaluates: MAX32650

## Detailed Description

The  MAX32650  MCU  connects  to  a  MAX11261  ADC through  the  I 2 C  bus.  The  MAX11261  provides  6  ADC inputs on the standard Adafruit Feather board pins, AIN0AIN5.  The  MCU  is  also  connected  to  a  Micro  SD  card connector through a quad-SPI. Finally, a full-speed USB device interface provides connectivity to USB hosts.

Two user buttons and two LEDs are available for use, as well as a UART interface that is routed to the debug header to support print style debugging through the included MAX32625PICO debugger.

Figure 1. MAX32650FTHR EV Kit Pinout Diagram

<!-- image -->

Evaluates: MAX32650

Figure 2. MAX32650FTHR EV Kit Top Side Components

<!-- image -->

Evaluates: MAX32650

Figure 3. MAX32650FTHR EV Kit Bottom Side Components

<!-- image -->

## Ordering Information

#Denotes RoHS compliance.

| PART          | TYPE           |
|---------------|----------------|
| MAX32650FTHR# | Evaluation kit |

## MAX32650FTHR Evaluation Kit

## MAX32650FTHR EV Kit Bill Of Materials

| REFDES                                                                | MANUFACTURER                                                                                                                         | PART NUMBER                                                                                                                                                                | DESCRIPTION                                     |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| C1, C22, C27, C32, C36, C42, C43, C51, C53                            | MURATA;TDK;TAIYO YUDEN;TDK                                                                                                           | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                                                                               | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC  |
| C2, C3, C5, C10, C11, C17, C18, C23-C26, C29- C31, C37, C41, C44, C45 | KEMET;YAGEO                                                                                                                          | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                                                                          | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC    |
| C4, C7, C9, C12- C14, C16, C19, C28                                   | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN                                                                                    | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                                                                      | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC |
| C6, C15                                                               | AVX;MURATA                                                                                                                           | 06031A8R0CAT2A; GRM- 1885C2A8R0CA01                                                                                                                                        | CAP; SMT (0603); 8PF; 100V; C0G; CE- RAMIC      |
| C8, C52                                                               | TDK; AMERICAN TECHNI- CAL CERAMICS; AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA;TDK;YAGEO PHICOMP;TAIYO YUDEN; SAMSUNG ELECTRONICS | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | CAP; SMT (0402); 0.1UF; 10%; 16V; X7R; CERAMIC  |
| C20                                                                   | KEMET;MURATA; MURATA;TDK                                                                                                             | C0603C224K3RAC; GMC10X7R224K25; GRM188R71E224KA88; C1608X7R1E224K080AC                                                                                                     | CAP; SMT (0603); 0.22UF; 10%; 25V; X7R; CERAMIC |
| C21                                                                   | MURATA;TDK                                                                                                                           | GRM1555C1H102JA01; C1005C0G1H102J050                                                                                                                                       | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC  |
| C34, C35, C38-C40, C48, C54-C58                                       | TDK;SAMSUNG ELECTRONICS;MURATA; MURATA                                                                                               | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13                                                                              | CAP; SMT (0603); 10UF; 20%; 25V; X5R; CERAMIC   |
| C46                                                                   | SAMSUNG ELECTRONICS;MURATA                                                                                                           | CL05B105KQ5NQNC; GRM- 155R70J105KA12                                                                                                                                       | CAP; SMT (0402); 1UF; 10%; 6.3V; X7R; CERAMIC   |
| C47                                                                   | MURATA;MURATA; SAMSUNG ELECTRONICS                                                                                                   | ZRB157R61A225KE11; GRM- 155R61A225KE95; CL05A225KP5NSN                                                                                                                     | CAP; SMT (0402); 2.2UF; 10%; 10V; X5R; CERAMIC  |

Evaluates: MAX32650

## MAX32650FTHR EV Kit Bill Of Materials (continued)

| REFDES                  | MANUFACTURER                                       | PART NUMBER                                                                                              | DESCRIPTION                                                                                                          |
|-------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| C49                     | KEMET;TAIYO YUDEN; TDK;TDK;SAMSUNG ELECTRONICS;TDK | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN; C1608X5R1A475K080AE | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                       |
| C50                     | MURATA                                             | GRM155R61C225KE44                                                                                        | CAP; SMT (0402); 2.2UF; 10%; 16V; X5R; CERAMIC                                                                       |
| DS1                     | LUMEX OPTOCOMPO- NENTS INC                         | SML-LX1206SRC-TR                                                                                         | DIODE; LED; QUASARBRITE LED; RED; SMT (1206); VF=1.7V; IF=0.02A                                                      |
| DS2                     | LUMEX OPTOCOMPO- NENTS INC                         | SML-LX1206GC-TR                                                                                          | DIODE; LED; QUASARBRITE LED; GREEN; SMT (1206); VF=2.2V; IF=0.02A                                                    |
| J1                      | MOLEX                                              | 47346-0001                                                                                               | CONNECTOR; FEMALE; SMT; 47346 SERIES; RIGHTANGLE; 5PINS                                                              |
| J2                      | MOLEX                                              | 4.76E+08                                                                                                 | CONNECTOR; FEMALE; SMT; MICRO-SD CARD HEADER WITH DETECT SWITCH; RIGHTANGLE; 8PINS                                   |
| J5                      | SAMTEC                                             | FTSH-105-01-F-DV-K-P                                                                                     | CONNECTOR; MALE; SMT; MICRO HEAD- ER; STRAIGHT; 10PINS                                                               |
| J8                      | JST MANUFACTURING                                  | S2B-PH-K-S(LF)(SN)                                                                                       | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHTANGLE; 2PINS |
| L1                      | MURATA                                             | BLM21PG221SN1                                                                                            | INDUCTOR; SMT (0805); FERRITE-BEAD; 220; TOL=+/-25%; 0.2A                                                            |
| L2                      | LAIRD TECHNOLOGIES                                 | HZ1206C202R-10                                                                                           | INDUCTOR; SMT (1206); FERRITE-BEAD; 2000; TOL=+/-25%; 0.3A                                                           |
| L3                      | TDK                                                | MLP2012H2R2MT0S1                                                                                         | INDUCTOR; SMT (0805); FERRITE; 2.2UH; 20%; 1A                                                                        |
| L4                      | MURATA                                             | NCP03XH103J05                                                                                            | THERMISTOR; SMT (0201); 10K OHM; TOL=+/-5%                                                                           |
| L5                      | MURATA                                             | LQW18ANR47G00                                                                                            | INDUCTOR; SMT (0603); WIREWOUND CHIP; 470NH; TOL=+/-2%; 0.075A; -55 DEGC TO +125 DEGC                                |
| Q1                      | TOSHIBA                                            | SSM3J327R,LF                                                                                             | TRAN; PCH; FIELD-EFFECT TRANSISTOR SILICON P-CHANNELMOS TYPE (U-MOS VI); SOT-23F; PD-(1W); I-(-3.9A); V-(-20V)       |
| R1                      | VISHAY DALE;YAGEO                                  | CRCW040210R0FK; 9C04021A10R0FL                                                                           | RES; SMT (0402); 10; 1%; +/-100PPM/ DEGC; 0.0630W                                                                    |
| R2, R7-R9, R15-R22, R26 | VISHAY DALE;YAGEO PHI- COMP                        | CRCW040210K0FK; RC0402FR-0710KL                                                                          | RES; SMT (0402); 10K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                   |
| R3, R4                  | VISHAY DALE                                        | CRCW04023K30FK                                                                                           | RES; SMT (0402); 3.3K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                  |

Evaluates: MAX32650

## MAX32650FTHR EV Kit Bill Of Materials (continued)

| REFDES   | MANUFACTURER                      | PART NUMBER                         | DESCRIPTION                                                                                                                                                      |
|----------|-----------------------------------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R5       | VISHAY DALE                       | CRCW0402470RFK                      | RES; SMT (0402); 470; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                               |
| R6       | VISHAY DALE                       | CRCW0402332RFK                      | RES; SMT (0402); 332; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                               |
| R10      | PANASONIC                         | ERJ-2RKF1004                        | RES; SMT (0402); 1M; 1%; +/-100PPM/ DEGC; 0.1000W                                                                                                                |
| R12      | VISHAY DALE                       | CRCW0402634KFK                      | RES; SMT (0402); 634K; 1%; +/-100PPM/ DEGK; 0.0630W                                                                                                              |
| R13      | VENKEL LTD.; VISHAY DALE          | CR0402-16W-3243FT; CRC- W0402324KFK | RES; SMT (0402); 324K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                              |
| R14      | KOASPEER; VISHAY DALE             | RK73H1ETTP1333F; CRC- W0402133KFK   | RES; SMT (0402); 133K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                              |
| R23-R25  | VISHAY DALE; KOASPEER ELECTRONICS | CRCW0402200KFK; RF- 73H1ELTP2003    | RES; SMT (0402); 200K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                              |
| R28      | PANASONIC                         | ERJ-2RKF4703                        | RES; SMT (0402); 470K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                              |
| R29      | VISHAY DALE                       | CRCW040247K0FK                      | RES; SMT (0402); 47K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                               |
| R30      | VISHAY;YAGEO                      | CRCW0402100KFK; RC0402FR-07100KL    | RES; SMT (0402); 100K; 1%; +/-100PPM/ DEGC; 0.0630W                                                                                                              |
| S1-S3    | PANASONIC                         | EVP-AA102K                          | SWITCH; SPST; SMT; 15V; 0.02A; EVPAA SERIES WITH GROUND TERMINAL; LIGHT TOUCH SWITCH; RCONTACT=0.1 OHM; RINSULATION=100M OHM; WITH SPECIAL ASSEMBLY INSTRUCTIONS |
| U1       | MAXIM                             | MAX32650GWQ+                        | IC; UCON; ULTRA-LOW-POWERARM CORTEX-M4 WITH FPU-BASED MICRO- CONTROLLER (MCU) WITH 3MB FLASH AND 1MB SRAM; BGA96; NOTE:SPECIAL ORDER ONLY                        |
| U2       | MAXIM                             | MAX6071AAUT25+                      | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                                                                            |
| U3       | MAXIM                             | MAX11261ENX+                        | EVKIT PART - IC; MAX11261ENX+; 6-CHANNEL; 24-BIT; DELTA-SIGMAADC; PACKAGE OUTLINE DRAWING: 21-0742; PACKAGE CODE: N362B2+1                                       |
| U4       | MAXIM                             | MAX8510EXK30+                       | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW-DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                                                                |
| U5       | MAXIM                             | MAX3207EAUT+                        | IC; PROT; DUAL, QUAD,AND HEX HIGH- SPEED DIFFERENTIAL ESD-PROTECTION IC; SOT23-6                                                                                 |

Evaluates: MAX32650

## MAX32650FTHR EV Kit Bill Of Materials (continued)

| REFDES   | MANUFACTURER   | PART NUMBER         | DESCRIPTION                                                                                                                                                                                                   |
|----------|----------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U6       | MAXIM          | MAX17270ETE+        | EVKIT PART-IC; NANOPOWER TRIPLE/ DUAL-OUTPUT SINGLE INDUCTOR MULTIPLE-OUTPUT (SIMO) BUCK BOOST REGULATOR; TQFN16-EP; PKG. CODE: T1633+5; PKG. OUTLINE DWG. NO.: 21- 100136; PKG. LAND PATTERN NUMBER: 90-0032 |
| U7       | MAXIM          | MAX8511EXK33+       | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULA- TOR; SC70-5                                                                                                                                 |
| U8       | MAXIM          | MAX77818EWZ+        | IC; PWRM; DUAL INPUT; POWER PATH; 3A SWITCH MODE CHARGER WITH FG; BGA72                                                                                                                                       |
| U10      | MAXIM          | MAX1806EUA33+       | IC; VREG; LOW-VOLTAGE LINEAR REGU- LATOR; UMAX8-EP                                                                                                                                                            |
| U11      | MAXIM          | MAX14699EWC+        | EVKIT PART-IC; PROT; HIGH ACCURACY; SURGE-PROTECTED OVERVOLTAGE PROTECTOR; WLP12 1.98X1.28                                                                                                                    |
| Y1       | ABRACON        | ABS07-32.768KHZ-6-T | CRYSTAL; SMT; 6PF; 32.768KHZ; +/- 20PPM; -0.036PPM/T2                                                                                                                                                         |

Evaluates: MAX32650

## MAX32650FTHR EV Kit Schematics

<!-- image -->

Evaluates: MAX32650

## MAX32650FTHR EV Kit Schematics (continued)

<!-- image -->

## MAX32650FTHR Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

Evaluates: MAX32650