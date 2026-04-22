<!-- lastmod 2023-01-09 -->
<!-- image -->

## Evaluates: MAX25239, MAX25240

## General Description

The MAX25240 evaluation kit (EV kit) is a fully assembled and tested application circuit that simplifies the evaluation of  the  MAX25240  400kHz,  36V  buck-boost  converter. All  installed  components  are  rated  for  the  automotive temperature range. Various test points and jumpers are included for evaluation.

The standard EV kit comes with the MAX25240AFFF/VY+ installed (11.5V, 400kHz) and can also be used to evaluate  other  MAX25240  variants  with  minimal  component changes shown in the MAX25240 EV Kit Bill of Materials .

## Features

- High-Voltage Step-Down Converters with Integrated Power FETs to Minimize Board-Area-Occupancy
- Seamless Transition Across buck and Boost Operating Regions
- 4.5V to 40V Input Supply Range
- Extended Input Range Down to 2V After Initial Startup
- Provides 11.5V Output up to 4.5A Output Current
- Output Voltages Adjustable Between 3.3V and 20V Through External Resistors
- ±2% Output Voltage Accuracy
- Skip-Mode Operation to Maximize Efficiency During Light Load Conditions
- Frequency-Synchronization Input
- Spread Spectrum Enable Input
- Buck-Boost Enable Input
- Voltage-Monitoring PGOOD Output
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- Proven PCB Layout
- Fully Assembled and Tested

©

Click here to ask an associate for production status of specific part numbers.

## MAX25240 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25240 EV kit
- 15V, 10A DC power supply (PS)
- Voltmeters (VM)
- Electronic loads (EL)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions as shown in Table 1.
- 2) Preset the power supply, PS to 14V. Turn off the PS.
- 3) Preset the electronic loads, EL to 3A. Turn off the EL.
- 4) Connect the positive terminal of EL to OUT; connect the negative terminal of EL to GND4.
- 5) Connect the positive terminal of PS to SUP; connect the negative terminal of PS to GND.
- 6) Connect the positive terminal of VM to OUT; connect the negative terminal of VM to GND2.
- 7) Turn on the power supply.
- 8) Verify that the voltmeter on VOUT1 measures approximately 11.5V.
- 9) Enable the electronic loads, EL.
- 10)  Verify that the voltmeter on VOUT1 measures approximately 11.5V.

Ordering Information appears at end of data sheet.

owners.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                          |
|----------|------------------|---------------------------------------------------|
| JU1      | 1-2              | Buck-boost converter enabled                      |
| JU2      | 1-2              | Forced-pulse-width-modulation (FPWM) mode enabled |
| JU3      | 2-3              | Spread spectrum disabled                          |
| JU4      | 1-2              | PGOOD pull-up connected                           |

## Detailed Description

The  MAX25240  EV  kit  provides  a  fully  developed  and proven layout for evaluating all variants of the MAX25240 family  of  current-mode-controlled  buck  converter  ICs. Each converter accepts input supply voltages as high as 36V and input supply transients up to 40V.

## Operation Modes

The IC can operate in two modes, forced-PWM or skip mode. Skip mode offers improved efficiency over PWM during light-load conditions. When FSYNC is pulled low, the device operates in skip mode for light loads, and in PWM mode for larger loads. When FSYNC is pulled high, the  device  is  forced  to  operate  in  PWM  across  all  load conditions.

## Switching Frequency and External Synchronization

The FSYNC pin can be used to synchronize the switching frequency of the IC to an external source by applying an external clock signal. The device is forced to operate in PWM when FSYNC is connected to a clock source.

## Ordering Information

| PART           | TYPE                |
|----------------|---------------------|
| MAX25240EVKIT# | 11.5V/400kHz EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX25239, MAX25240

## Output Voltage Monitoring (PGOOD)

The EV kit provides output test points (PGOOD) to monitor  the  status  of  the  buck-boost  output  voltage on OUT. PGOOD  is  high  impedance  when  the  output  voltage rises above its 95% (typ) of regulation voltage. PGOOD pulls low when the respective output voltage drops below 93.5% (typ) of its nominal regulated voltage.

To obtain logic signals, pull PGOOD up to VCC by installing the shunts on jumpers on JU\_.

## Setting the Output Voltage in Buck Converters

The  EV  kit  comes  assembled  to  provide  a  fixed  11.5V output regulation on OUT. To externally adjust the voltage at  OUT,  remove  R fb   and  place  appropriate  resistors  in positions Ry and Rx according to the following equation:

<!-- formula-not-decoded -->

where  VFB  =  0.8V  (typ)  and  R8  is  between  10kΩ  and 50kΩ.

## Evaluating Other Variants

The MAX25240EVKIT# comes installed with the 11.5V/400kHz variant (MAX25240AFFF/VY+)

Analog  Devices  offers  additional  variations  including those that operate at higher switching frequency of 2MHz for  smaller  component  size.  See MAX25240 EV Kit Bill of  Materials to  select  components  for  evaluating  2MHz variants.

Refer  to  the  MAX25240  IC  data  sheet  for  part  variant details and contact the factory to request additional variants of MAX25240.

│

## MAX25240 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                    | VAR STATUS   | MAXINV                  | MFG PART #                                                                                  | MANUFACTURER                               | VALUE                  | DESCRIPTION                                                                                                                                                                             | COMMENTS        |
|--------|-------|--------------------------------------------|--------------|-------------------------|---------------------------------------------------------------------------------------------|--------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|      1 |     2 | C1, C2                                     | Pref         | EC111000003722          | EEH - ZC1H470                                                                               | PANASONIC                                  | 47UF                   | CAP; SMT(CASE_F); 47UF; 20%; 50V; ALUMINUM - ELECTROLYTIC                                                                                                                               | (C2:OPEN)       |
|      2 |     1 | C4                                         | Pref         | 20 - 004U7 - 11D        | GRM188Z71C475KE21                                                                           | MURATA                                     | 4.7UF                  | CAP; SMT (0603); 4.7UF; 10%; 16V; X7R; CERAMIC                                                                                                                                          |                 |
|      3 |     5 | C5 - C7, C15, C18                          | Pref         | 20 - 000U1 - 04A        | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV - FR             | TDK; MURATA; TDK; TAIYO YUDEN              | 0.1UF                  | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                          |                 |
|      4 |     1 | C8                                         | Pref         | 20 - 2200P - E5         | C0603C222K1RAC                                                                              | KEMET                                      | 2200PF                 | CAP; SMT (0603); 2200PF; 10%; 100V; X7R; CERAMIC                                                                                                                                        |                 |
|      5 |     1 | C9                                         | Pref         | 20 - 0100P - DA94       | 06033C101MAT2A                                                                              | AVX                                        | 100PF                  | CAP; SMT (0603); 100PF; 20%; 25V; X7R; CERAMIC                                                                                                                                          |                 |
|      6 |     2 | C3, C14                                    | Pref         | 20 - 004U7 - 72         | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L | MURATA; MURATA; MURATA; TAIYOYUDEN; MURATA | 4.7UF                  | CAP;SMT(1206);4.7UF;10%;50V;X7R;CERAMIC                                                                                                                                                 | (C3:OPEN)       |
|      7 |     6 | C10 - C13, C19, C20                        | Pref         | EC111000006843          | CGA6P3X7R1E226M250AB TDK                                                                    | CGA6P3X7R1E226M250AB TDK                   | 22UF                   | CAP; SMT (1210); 22UF; 20%; 25V; X7R; CERAMIC; NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                                                                               | (C19, C20:OPEN) |
|      8 |     1 | CFF                                        | Pref         | 20 - 0022P - 15         | 06035C220JAT                                                                                | AVX                                        | 22PF                   | CAP; SMT (0603); 22PF; 5%; 50V; X7R; CERAMIC                                                                                                                                            | OPEN            |
|      9 |     6 | EN_TP, GND2, GND3, PGOOD, SUP_FILTER, SYNC | Pref         | 01 - 9020BUSS20AWG - 00 | 9020 BUSS                                                                                   | WEICO WIRE                                 | MAXIMPAD               | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE - S; 20AWG                                                                                              |                 |
|     10 |     4 | GND1, GND4, OUT, SUP                       | Pref         | 01 - 10807400011P - 80  | 108 - 0740 - 001                                                                            | EMERSON NETWORK POWER                      | 108 - 0740 - 001       | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                                |                 |
|     11 |     3 | J1 - J3                                    | Pref         | 01 - PBC03SAAN3P - 21   | PBC03SAAN                                                                                   | SULLINS                                    | PBC03SAAN              | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; - 65 DEGC TO +125 DEGC                                                                                                       |                 |
|     12 |     1 | J4                                         | Pref         | 01 - TSW10207TS2P - 17  | TSW - 102 - 07 - T - S                                                                      | SAMTEC                                     | TSW - 102 - 07 - T - S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; - 55 DEGC TO +105 DEGC                                                                                                |                 |
|     13 |     1 | L1                                         | Pref         | 50 - 004U7 - 0IF        | XAL7070 - 472ME                                                                             | COILCRAFT                                  | 4.7UH                  | INDUCTOR; SMT; SHIELDED; 4.7UH; TOL=+/ - 20%; 13.6A                                                                                                                                     |                 |
|     14 |     4 | MH1 - MH4                                  | Pref         | 02 - SOM35016H - 00     | 9032                                                                                        | KEYSTONE                                   | 9032                   | MACHINE FABRICATED; ROUND - THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                             |                 |
|     15 |     1 | R1                                         | Pref         | 80 - 0000R - AA6        | CRCW06030000Z0                                                                              | VISHAY DALE                                | 0                      | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                             |                 |
|     16 |     1 | R2                                         | Pref         | 80 - 0030K - 24         | CRCW060330K0FK                                                                              | VISHAY DALE                                | 30K                    | RES; SMT (0603); 30K; 1%; +/ - 100PPM/DEGC; 0.1000W                                                                                                                                     |                 |
|     17 |     1 | R5                                         | Pref         | 80 - 0010K - 53         | CRCW060310K0JN; ERJ - 3GEYJ103                                                              | VISHAY DALE; PANASONIC                     | 10K                    | RES; SMT (0603); 10K; 5%; +/ - 200PPM/DEGK; 0.1000W                                                                                                                                     |                 |
|     18 |     1 | R6                                         | Pref         | 80 - 0020R - 24         | CRCW060320R0FK; ERJ - 3EKF20R0                                                              | VISHAY DALE; PANASONIC                     | 20                     | RES; SMT (0603); 20; 1%; +/ - 100PPM/DEGC; 0.1000W                                                                                                                                      |                 |
|     19 |     1 | R7                                         | Pref         | 80 - 0294K - 19         | ERJ - 3EKF2943                                                                              | PANASONIC                                  | 294K                   | RES; SMT (0603); 294K; 1%; +/ - 100PPM/DEGC; 0.1000W                                                                                                                                    | OPEN            |
|     20 |     1 | R8                                         | Pref         | 80 - 0021K - 24         | CRCW060321K0FK                                                                              | VISHAY DALE                                | 21K                    | RES; SMT (0603); 21K; 1%; +/ - 100PPM/DEGC; 0.1000W                                                                                                                                     | OPEN            |
|     21 |     4 | SU1 - SU4                                  | Pref         | 02 - JMPSNT100BKG - 00  | SNT - 100 - BK - G                                                                          | SAMTEC                                     | SNT - 100 - BK - G     | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                                                               |                 |
|     22 |     1 | U1                                         | Pref         | 00 - SAMPLE - 01        | MAX25240                                                                                    | MAXIM                                      | MAX25240               | EVKIT PART - IC; AUTOMOTIVE 2V TO 36V WIDE VIN; 2.1MHZ; 3.0A; BUCK - BOOST CONVERTER; PACKAGE DRAWING NUMBER: 21 - 100399; LAND PATTERN NUMBER: 90 - 100137; PACKAGE CODE: F222A4FY - 1 |                 |
|     23 |     1 | VCC                                        | Pref         | 02 - TPCOMP5007 - 00    | 5007                                                                                        | KEYSTONE                                   | N/A                    | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST       |                 |
|     24 |     1 | PCB                                        | -            | EPCB25240               | MAX25240                                                                                    | MAXIM                                      | PCB                    | PCB:MAX25240                                                                                                                                                                            | -               |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                                            | DO NOT PURCHASE(DNP)                  | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                                                                             | DO NOT PURCHASE(DNP)   |
|------------------------|------------------------|------------------------|------------------------|------------------------|---------------------------------------------------------------------------------|---------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------|------------------------|
| ITEM                   | QTY                    | REF DES                | VAR STATUS             | MAXINV                 | MFG PART #                                                                      | MANUFACTURER                          | VALUE                  | DESCRIPTION                                                                                                      | COMMENTS               |
| 1                      | 1                      | C16                    | DNP                    | 20 - 0001U - 14        | UMK107AB7105KA; CC0603KRX7R9BB105                                               | TAIYO YUDEN; YAGEO                    | 1UF                    | CAP; SMT (0603); 1UF; 10%; 50V; X7R; CERAMIC                                                                     |                        |
| 2                      | 4                      | C17, C21, C24, C25     | DNP                    | 20 - 000U1 - 04A       | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV - FR | TDK; MURATA; TDK; TAIYO YUDEN         | 0.1UF                  | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                   |                        |
| 3                      | 2                      | C22, C23               | DNP                    | 20 - 0010U - B40       | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A              | MURATA; SAMSUNG ELECTRONICS; TAIYO YU | 10UF                   | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                    |                        |
| 4                      | 1                      | FB1                    | DNP                    | EL111000007023         | 74279224181                                                                     | WURTH ELECTRONICS INC.                | 180                    | INDUCTOR; SMT; FERRITE - BEAD; 180 OHMS AT 100MHZ; TOL=+/ - 25%; 10A ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER |                        |
| 5                      | 1                      | L2                     | DNP                    | EL111000006365         | IHLP2020BZERR47M01                                                              | VISHAY                                | 470NH                  | INDUCTOR; SMT; SHIELDED; 470NH; 20%; 2.8A                                                                        |                        |
| TOTAL                  | 9                      |                        |                        |                        |                                                                                 |                                       |                        |                                                                                                                  |                        |

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM QTY                                                                                    | ITEM QTY                                                                                    | REF DES                                                                                     | VAR STATUS                                                                                  | MAXINV                                                                                      | MFG PART #                                                                                  | MANUFACTURER                                                                                | VALUE                                                                                       | DESCRIPTION                                                                                 | COMMENTS                                                                                    |
| 1                                                                                           | 1                                                                                           | D1                                                                                          | DNI                                                                                         | ED111000007017                                                                              | RB081LAM - 20                                                                               | ROHM SEMICONDUCTOR                                                                          | RB081LAM - 20                                                                               | DIODE; SCH; SMT (SOD - 128); PIV=20V; IF=80A                                                | PACKOUT                                                                                     |
| 2                                                                                           | 1                                                                                           | RBST                                                                                        | DNI                                                                                         | 80 - 0010K - D3                                                                             | ERJ - 6GEYJ103; RMCF0805JG10K0                                                              | PANASONIC; STACKPOLE ELECTRONICS                                                            | 10K                                                                                         | RES; SMT (0805); 10K; 5%; +/ - 200PPM/DEGC; 0.1250W                                         | PACKOUT                                                                                     |
| TOTAL                                                                                       | 2                                                                                           |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |

## MAX25240 Evaluation Kit

## MAX25240 EV Kit Schematic

<!-- image -->

Evaluates: MAX25239, MAX25240

## MAX25240 Evaluation Kit

## MAX25240 EV Kit PCB Layouts

MAX25240 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

MAX25240 EV Kit PCB Layout-GND Signal

<!-- image -->

Evaluates: MAX25239, MAX25240

MAX25240 EV Kit PCB Layout-Top

<!-- image -->

MAX25240 EV Kit PCB Layout-Signal

<!-- image -->

│

## MAX25240 Evaluation Kit

## MAX25240 EV Kit PCB Layouts (continued)

MAX25240 EV Kit PCB Layout-Component Placement Bottom

<!-- image -->

Evaluates: MAX25239, MAX25240

MAX25240 EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

## MAX25240 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                           | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------|-----------------|
|                 0 | 10/20           | Initial release                                                       | -               |
|                 1 | 7/22            | Changed installed part to the 11.5V/400kHz variant (MAX25240AFFF/VY+) | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX25239, MAX25240