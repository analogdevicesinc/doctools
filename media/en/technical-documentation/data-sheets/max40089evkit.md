<!-- lastmod 2022-08-03 -->
## MAX40089 Evaluation Kit

## General Description

The MAX40089 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary  to  evaluate  both  MAX40077  and  MAX40089 dual channel op amps.

The MAX40089 EV kit printed circuit board (PCB) comes installed with MAX40089AUT+ in an 8-µMAX package.

The device is  a  dual-channel,  rail-to-rail  output  op  amp offering 10MHz Gain Bandwidth product (MAX40077) and 42MHz Gain Bandwidth product (MAX40089). The EV kit operates from a single 2.7V to 5.5V DC power supply or from ±1.35V to ±2.75V split supply.

## Features

- +2.7V to +5.5V Supply Voltage Range Across V DD and V SS
- 42MHz Gain Bandwidth Product (MAX40089)
- 10MHz Gain Bandwidth Product (MAX40077)
- Ultra-Low Distortion (0.0002% with 1kΩ load)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40077, MAX40089

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX40089 EV kit
- 2.7V to 5.5V, 100mA DC power supply
- Precision voltage calibrator
- 2 digital multimeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power  supplies  until  all  connections  are  completed and turn on V DD , V SS  supplies before turning on voltage sources on the input pins.

- 1) Make sure JU1 and JU4 jumpers are installed in 1-2 and 1-4 position, respectively, before applying supply voltage.
- 2) Have JU5 installed for single-supply operation.
- 3) Connect  positive  terminal  of  the  +5V  supply  to  the VDD test point and the GND terminal of supply to the VSS test point.
- 4) Connect the positive terminal of the precision voltage source to the INA+ and INB+ test point and negative terminal to GND test point.
- 5) Connect 2 Digital  Multimeters(DMM)  to  monitor  the voltage on the OUTA and OUTB test points.
- 6) Turn on the 5V power supply connected to VDD test point  and  turn  on  the  precision  voltage  source  on INA+,  INB+  test  points  and  set  0.1V.  Observe  the output  at  the  OUTA  and  OUTB  test  points  on  the Multimeters. DMMs should approximately read 1V.
- 7) Also,  now  vary  precision  voltage  source  on  inputs INA+, INB+ between 0V to 0.45V and see if DMMs on OUTA and OUTB test points is gained up by a factor of 10V/V to the voltage applied on input.

Once  above  steps  are  confirmed,  EV  kit  is  tested  for functionality.

<!-- image -->

## MAX40089 EV Kit Board Photo

<!-- image -->

│

## MAX40089 Evaluation Kit

## Detailed Description of Hardware

The MAX40089 EV kit contains the MAX40089 IC, a railto-rail output op amp with low noise and wide bandwidth in  8-µMAX package. The EV kit operates from a single 2.7V  to  5.5V  DC  power  supply.  The  EV  kit  is  meant to  work  using  split  supplies  as  well  where  the  voltage between V DD  and V SS  is +2.7V to +5.5V.

## Default Application Circuit

The EV kit comes preconfigured in a noninverting amplifier configuration with gain set as 10V/V on both the channels. The  EV  kit  also  comes  with  shielding  and  guarding  on the INA+/INB+ pins with usage of TRIAX connectors that enable us to measure input leakage current on the order of ~30fA. Inner shield of the TRIAX is driven to the INA+/ INB+ voltage to nullify leakage from input signal trace. If this low input bias current measurement is not important then R6, R17 can be opened and install JU2, JU3 to force shield of TRIAX connector to ground.

## Op Amp Configurations

The  EV  kit  provides  flexibility  to  easily  reconfigure the  dual  op  amp  into  any  of  the  three  common  circuit topologies: inverting amplifier, noninverting amplifier, 2 op amp instrumentation amplifier, and ADC driver.

These configurations are described in the next few sections.

## Noninverting Configuration

The MAX40089 EV kit comes preconfigured as a noninverting amplifier on both the channels.  The gain is set by the ratio of R1, R9 on CHA and R11, R12 on CHB. The MAX40089 EV kit comes preconfigured for a gain of 10.

The  output  voltage  for  the  noninverting  configuration  is given by the equation below for CHA:

<!-- formula-not-decoded -->

## Inverting Configuration

To configure the EV kit as an inverting amplifier on both the channels, remove the shunt 1-2 on JU1, remove shunt 1-4 on JU4 and tie INA+, INB+ test points to ground or any voltage.

The output voltage for the inverting configuration is given by the equation below for CHA:

<!-- formula-not-decoded -->

## 2 Op Amp Instrumentation Amplifier

To configure the MAX40089 EV kit as an instrumentation amplifier, choose R1, R9, R11, and R12 with appropriate

## Evaluates: MAX40077, MAX40089

resistors. When R9 = R11 and R1 = R12, the CMRR of the Instrumentation amplifier is determined by the matching of resistor ratios R11/R12 and R1/R5. R10 serves as the variable gain setting resistor on the EV kit.

The  output  voltage  for  the  instrumentation  amplifier  for CHA is given by the equation below and it applies to CHB as well:

<!-- formula-not-decoded -->

where

<!-- formula-not-decoded -->

## Dual Op Amp Driving Fully Differential ADC Circuit (MAX40077 Only)

To configure the MAX40089 EV kit as ADC driver to drive fully  differential  input  signal  into  fully  differential  ADC, apply each half of fully differential signal to INA+, INB+ test points.  Replace  MAX40089AUT+  with  MAX40077AUT+ Have JU1 short at 1-2 and JU4 short at 1-4 as per default jumper configuration. R1, R11 can be chosen as 0Ω and R5, R12 can be open to make both the channels as unity gain follower configuration. The EV kit, by default, comes in with Gain = 10V/V noninverting configuration with R1, R11 = 1800Ω and R5, R15 = 200Ω.

Choose  appropriate  RC  filter  combination  (R2,  C11  on OUTA and R14, C12 on OUTB) on each OUTA and OUTB legs to optimize ADC performance.

## Transimpedance Amplifier circuit

To configure the MAX40089 EV kit as a transimpedance amplifier  (TIA),  short  INA+,  INB+  test  point  to  either ground or appropriate bias voltage, replace R5, R12 with a 0Ω resistor and replace R1, R11 pad with 100kΩ resis -tor. Also, remove short 1-2 on JU1 and short 1-4 on JU4.

The output voltage for CHA of the TIA is the input current multiplied by the feedback resistor and it applies to CHB as well:

<!-- formula-not-decoded -->

where  I INAis  the  input  current  source  applied  at  the INA- test point, I BIASis  the  input bias current into INApin,  and  V OS   is  the  input  offset  voltage  of  the  op  amp. Use  capacitor  C1  to  stabilize  the  op  amp  by  rolling  off high-frequency gain due to a large cable capacitance if desired.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve stability of the amplifier in such cases, replace R2 on OUTA and R14 on OUTB with a suitable isolation resistance to improve amplifier phase margin.

│

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                     |
|----------|------------------|---------------------------------------------------------------------------------|
| JU1      | 1-2*             | INA- to GND                                                                     |
| JU1      | 2-3              | Apply external VREF to INA- for dc bias on output                               |
| JU1      | Not Installed    | INA- terminal floating                                                          |
| JU2      | Install          | INA+ TRIAX shield to GND                                                        |
| JU2      | Not Installed*   | INA+ TRIAX shield floating                                                      |
| JU3      | Install          | INB+ TRIAX shield to GND                                                        |
| JU3      | Not Installed*   | INB+ TRIAX shield floating                                                      |
| JU4      | 1-2              | Connects INB- to OUTAfor 2 op amp instrumentation amplifier application circuit |
| JU4      | 1-3              | Apply external VREF to INB- for dc bias on output                               |
| JU4      | 1-4*             | INB- to GND                                                                     |
| JU4      | Not Installed    | INB- terminal floating                                                          |
| JU5      | Install*         | Single-supply operation                                                         |
| JU5      | Not Installed    | To enable split-supply operation                                                |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40089EVKIT# | EV Kit |

#RoHS-compliant

Evaluates: MAX40077, MAX40089

## Component Suppliers

| SUPPLIER                              | WEBSITE                     |
|---------------------------------------|-----------------------------|
| Murata Electronics North America Inc. | www.murata-northamerica.com |

Note: Indicate that you are using the MAX40089 EV kit when contacting these component suppliers.

│

## MAX40089 EV Kit Bill of Materials

|   ITEM |   QTY | DES REF                                          | MAXINV                   | # PART MFG                     | MANUFACTURER              | VALUE                     | DESCRIPTION                                                                                                                                                                           |
|--------|-------|--------------------------------------------------|--------------------------|--------------------------------|---------------------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     2 | C7, C9                                           | 20-004U7-O9              | C2012X5R1H475K125AB            | TDK                       | 4.7µF                     | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7µF; 50V; TOL = 10%; MODEL = ; TG = -55°C TO +85°C; TC = X5R                                                                                   |
|      2 |     2 | C8, C10                                          | 20-000U1-04A             | N/A                            | N/A                       | 0.1µF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; MODEL = CGA SERIES; TG = -55°C TO +125°C; TC = X7R; FORMFACTOR                                                            |
|      3 |     7 | GND1-GND7                                        | 02-TPMINI5001-00         | 5001                           | KEYSTONE                  | N/A                       | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|      4 |     8 | INA+, INA-, INB+, INB-, OUTA, OUTB, OUTFA, OUTFB | 02-TPMINI5002-00         | 5002                           | KEYSTONE                  | N/A                       | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                         |
|      5 |     2 | INA+/TRIAX1, INB+/TRIAX2                         | 01-CBBJR796P-01          | CBBJR79                        | TROMPETER ELECTRONICS INC | CBBJR79                   | CONNECTOR; BNC; THROUGH HOLE; FEMALE; RIGHT ANGLE; 6PINS                                                                                                                              |
|      6 |     4 | INA-/BNC2, INB-/BNC3, OUTFA/BNC1, OUTFB/BNC4     | 01-31532952RFX5P-01      | 31-5329-52RFX                  | AMPHENOL                  | 31-5329-52RFX             | CONNECTOR; FEMALE; THROUGH HOLE; BNC 50OHM PCB RECEPTACLE; STRAIGHT; 5PINS                                                                                                            |
|      7 |     1 | JU1                                              | 01-80010003100010003P-21 | 800-10-003-10-001000           | MILLMAX                   | HEADER_3P                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS;                                                                                                                    |
|      8 |     3 | JU2, JU3, JU5                                    | 01-80010002100010002P-21 | 800-10-002-10-001000           | MILLMAX                   | HEADER_2P                 | CONNECTOR, FEMALE, TH, BREAKAWAY, STR, 2PINS                                                                                                                                          |
|      9 |     1 | JU4                                              | 01-TSW10407LS4P-17       | TSW-104-07-L-S                 | SAMTEC                    | TSW-104-07-L-S            | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                     |
|     10 |     4 | R1, R3, R11, R15                                 | 80-001K8-70              | TNPW08051K80BE                 | VISHAY DALE               | 1.8K                      | RESISTOR; 0805; 1.8K Ω ; 0.1%; 25PPM; 0.125W; THICK FILM                                                                                                                              |
|     11 |     4 | R17 R14, R6, R2,                                 | 80-0000R-28              | N/A                            | N/A                       | 0                         | RESISTOR; 0805; 0 Ω ; JUMPER; 0.125W; THICK FILM; FORMFACTOR                                                                                                                          |
|     12 |     4 | R4, R5, R12, R16                                 | 80-0200R-25              | CRCW0805200RFK; 9C08052A2000FK | VISHAY DALE; YAGEO        | 200                       | RESISTOR; 0805; 200 Ω ; 1%; 100PPM; 0.125W; THICK FILM                                                                                                                                |
|     13 |     1 | U1                                               | 00-SAMPLE-01             | MAX40077AUT+ MAX40089AUA+      | MAXIM                     | MAX40077AUT+ MAX40089AUA+ | EVKIT PART - IC; AMP; DUAL ULTRA-LOW INPUT BIAS CURRENT; LOW NOISE AMPLIFIER; UMAX8                                                                                                   |
|     14 |     4 | VDD, VREFA, VREFB, VSS                           | 02-TPMINI5000-00         | 5000                           | KEYSTONE                  | N/A                       | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST   |
|     15 |     1 | PCB                                              | EPCB                     | MAX                            | MAXIM                     | PCB                       | PCB:MAX                                                                                                                                                                               |

## MAX40089 EV Kit Schematic

<!-- image -->

## MAX40089 EV Kit PCB Layout

MAX40089 EV Kit-Top Silkscreen

<!-- image -->

MAX40089 EV Kit-Layout Top side

<!-- image -->

│

## MAX40089 EV Kit PCB Layout (continued)

MAX40089 EV Kit-Layer 2

<!-- image -->

MAX40089 EV Kit-Layer 3

<!-- image -->

│

## MAX40089 EV Kit PCB Layout (continued)

MAX40089 EV Kit-Layout Bottom side

<!-- image -->

MAX40089 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX40089 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/18            | Initial release | -               |
|                 1 | 5/18            | Add board photo | 2               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX40077, MAX40089