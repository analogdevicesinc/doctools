<!-- lastmod 2022-08-03 -->
## MAX31840 Evaluation Kit

## General Description

The MAX31840 evaluation kit (EV kit) demonstrates the MAX31840 LED driver IC used for dimmable 12V MR16 as well as AR111 and other 12V lighting applications. The EV kit is configured in a boost topology that provides an output  power  of  up  to  13W  for  up  to  35V  LED  forward voltage. The IC is designed for the boost architecture to address  35W  and  50W  MR16  LED  replacement  bulbs. The EV kit's typical efficiency 90% at 12V AC and features a power-factor correction of 0.9 (typ).

The EV kit is a fully assembled and tested surface-mount PCB designed and optimized to accommodate an MR16 application form factor. The EV kit is dimmable with most electronic transformers and trailing-edge dimmer combinations. The EV kit includes bleeder and constant power circuits for enhanced electronic transformer performance.

## Features

- Input Voltage Ranges
- 9V AC to 13.2V AC from AC Source
- 6.5V to 13.8V DC or Output of Electronic Transformers
- Drives Up to 35V LED Forward Voltage
- 36V Overvoltage Protection
- Up to 13W Output Power
- Demonstrates IC Power-Factor Correction
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX31840

## Quick Start

## Required Equipment

- MAX31840 EV kit
- 12V AC or DC supply, or a 12V electronic transformer
- Trailing edge dimmer
- Current probe to measure the LED current

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

## Test with AC or DC Source

- 1) Connect the AC or DC source to the AC1 and AC2 test-point pads.
- 2) Enable the power supply.
- 3) Measure the LED current using the current probe.

## Test with Electronic Transformer Plus Dimmer

- 1) Connect the output of a trailing edge dimmer to the input of electronic transformer.
- 2) Connect the output of the electronic transformer to the AC1 and AC2 test-point pads.
- 3) Connect the input of the dimmer to power outlet.
- 4) Turn on the dimmer.
- 5) Measure the LED current using the current probe.
- 6) Adjust dimmer setting to change brightness on the LED.

<!-- image -->

## MAX31840 Evaluation Kit

## Detailed Description of Hardware

The  MAX31840  EV  kit  demonstrates  the  MAX31840 MR16 LED driver. The MAX31840 is an average currentmode  control  LED  driver  IC  for  boost  topology  in  lowvoltage  SSL  applications.  The  MAX31840  incorporates a  proprietary  circuit  that  enables  deep  dimming  and  an integrated bleeder to improve compatibility with a broad range of electronic transformers.

The  EV  kit  circuit  is  configured  in  boost  topology  that operates  at  the  IC's  fixed  700kHz  switching  frequency and  provides  up  to  13W  of  output  power  for  HBLEDs connected at the LED+ and LED- test-point holes. The EV kit circuit operates from a 6.5V to 13.8V AC or 9V to 13.2V DC supply or from electronic transformers. The EV kit is designed on a proven 2oz copper, two layer, small PCB footprint design that fits in a MR16 application form factor.

The IC regulates the average voltage on CS to 200mV. The  average  input  current  is  set  by  the  current-sense resistor R4. The average current is:

<!-- formula-not-decoded -->

where  0.2  is  the  voltage  at  the  IC's  CS  pin  and  R4  is in ohms. The R4 on the EV kit is 0.2 Ω and the average current is about 1000mA.

The CS pin monitors the current through the sense resistor R4.  When  V CS  falls  below  180mV,  the  bleeder  FET  is turned on to maintain the minimum load requirement and keep the electronic transformer on. Current through the bleeder FET is set by R2:

<!-- formula-not-decoded -->

where 0.5 is  the  voltage  at  the  BSRC  pin  and  R2  is  in ohms. The R2 on the EV kit is  0.5 Ω,  and  I BLEEDER is about 1000mA. R5 and R7 are used to provide protection to the bleeder FET against high voltage at the output of the rectifier.

Evaluates: MAX31840

With  0.2 Ω R2  and  0.5 Ω R5, the  power  consumption  of the  system  is  approximately  1000mA  x  12V IN   =  12W (average current times input RMS voltage). This is equivalent to 50W halogen bulb. For 35W equivalent application, use 0.33Ω for R4 and 0.82Ω for R2.

R3  and  C5  are  lowpass  filters  to  eliminate  the  highfrequency components and glitches on the output signal of the electronic transformer.

The electronic transformer constantly outputs short pulses and checks the existence of any connected devices. If the load is too small, the electronic transformer does not turn on. The  D1  diode  provides  a  direct  path  for  the  electronic transformer to turn on the internal LDO of the MAX31840. The bleeder FET can be turned on only after LDO is enabled.

## Maximum LED+ Voltage

The IC features an internal 36V overvoltage protection at the IN pin to protect the internal switching MOSFET from damage if the LED string is open or if the voltage on the LED string is too high.

## Electronic Transformer Compatibility

The MR16 board was tested with 8 LEDs for electronic transformer  compatibility  and  also  with  the  appropriate dimmers.  See Table  1  for  the  results  with  the  different transformer models tested.

│

Table 1. Electronic Transformers Tested

| MANUFACTURER (MODEL NAME)   | RATED INPUT VOLTAGE AND POWER   |   LED OUTPUT VOLTAGE (V) |   LED OUTPUT CURRENT (mA) |
|-----------------------------|---------------------------------|--------------------------|---------------------------|
| KEYSTONE                    |                                 |                          |                           |
| KTET-75-1-SCP-DIM-HV-AL     | 120V, 75W                       |                     29.3 |                       255 |
| PHILIPS                     |                                 |                          |                           |
| ET-E 60 220-240             | 220V to 240V 20W to 60W         |                     31.7 |                       226 |
| ET-S 60 220-240             | 220V to 240V 20W to 60W         |                     31.5 |                       211 |
| LUXMAN                      |                                 |                          |                           |
| ETH 60.202                  | 220V to 240V 20W to 60W         |                     32.5 |                       182 |
| HATCH                       |                                 |                          |                           |
| RS12-60M                    | 120V, 60W                       |                     28.7 |                       276 |
| BL TECHNOLOGIES             |                                 |                          |                           |
| CV-10/75-12                 | 120V, 75W                       |                       29 |                       286 |
| LIGHTECH                    |                                 |                          |                           |
| LET 75                      | 120V, 75W                       |                     29.1 |                       234 |
| LET 60                      | 120V, 60W                       |                     29.1 |                       221 |
| LET 75 BF                   | 120V, 75W                       |                     29.3 |                       221 |
| RJ US                       |                                 |                          |                           |
| HD75-120                    | 120V,75W                        |                     29.6 |                       235 |
| KS ELECTRONIC TRANSFORMER   | KS ELECTRONIC TRANSFORMER       |                          |                           |
| -                           | 110V, 50W                       |                     29.7 |                       234 |

Evaluates: MAX31840

## MAX31840 Evaluation Kit

## Component Suppliers

| SUPPLIER                    | WEBSITE                     |
|-----------------------------|-----------------------------|
| BOURNS                      | www.bourns.com              |
| DIODES INCORPORATED         | www.diodes.com              |
| INTERNATIONAL RECTIFIER     | www.infineon.com            |
| MICRO COMMERCIAL COMPONENTS | www.mccsemi.com             |
| MURATA                      | www.murata.com              |
| NICHICON                    | www.nichicon.co.jp          |
| PANASONIC                   | na.industrial.panasonic.com |
| ROHM SEMICONDUCTOR          | www.rohm.com                |
| STACKPOLE ELECTRONICS INC   | www.seielect.com            |
| TDK                         | www.component.tdk.com       |
| TOSHIBA                     | toshiba.semicon-storage.com |
| YOGEO                       | www.yageo.com               |

Note: Indicate that you are using the MAX31840 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31840EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX31840

│

## MAX31840 EV Kit Bill of Materials

| ITEM   | REF_DES    | DNI/DNP   |   QTY | MFG PART #                                                              | MANUFACTURER                      | VALUE        | DESCRIPTION                                                                                                                               |
|--------|------------|-----------|-------|-------------------------------------------------------------------------|-----------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | AC1, AC2   | -         |     2 | N/A                                                                     | N/A                               | TP_SMD_3MM   | TEST POINT; PAD DIA 3MM; SMD                                                                                                              |
| 2      | C1         | -         |     1 | GRM155R71E472KA01                                                       | MURATA                            | 4700PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R;                                              |
| 3      | C2         | -         |     1 | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14                 | TDK; MURATA                       | 0.1µF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                |
| 4      | C3         | -         |     1 | UMK107BJ105KA-T; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL | TAIYO YUDEN; TDK; SAMSUNG; MURATA | 1µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 50V; TOL = 10%; MODEL = _MK SERIES; TG = -55°C TO +85°C                                         |
| 5      | C4         | -         |     1 | UPW1H151MPD1TD                                                          | NICHICON                          | 150µF        | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 150µF; 50V; TOL = 20%                                                         |
| 6      | C5         | -         |     1 | GRM155R71C224KA12                                                       | MURATA                            | 0.22µF       | CAPACITOR; SMT (0402); CERAMIC; 0.22µF; 16V; TOL = 10%; MODEL = GRMSERIES; TG = -55°C TO +125°C; TC = X7R                                 |
| 7      | D1         | -         |     1 | 1SS417                                                                  | TOSHIBA                           | 1SS417       | DIODE; SCH; SMT (SOD-923); PIV = 45V; IF = 0.1A                                                                                           |
| 8      | D2         | -         |     1 | B360A-13-F                                                              | DIODES INCORPORATED               | B360A-13-F   | DIODE; SCH; SMA; PIV = 60V; IF = 3A                                                                                                       |
| 9      | L1         | -         |     1 | VLS6045EX-101M                                                          | TDK                               | 100UH        | INDUCTOR; SMT;WOUND FERRITE; 100µH; TOL = ± 20%; 0.9A;                                                                                    |
| 10     | Q1         | -         |     1 | IRLML2502PBF                                                            | INTERNATIONAL RECTIFIER           | IRLML2502PBF | TRAN; N-CHANNEL MOSFET; NCH; SOT-23; PD-(0.8W); I-(4.2A); V-(20V)                                                                         |
| 11     | R1         | -         |     1 | RNCP0603FTD100R                                                         | STACKPOLE ELECTRONICS INC         | 100          | RESISTOR; 0603; 100 Ω ; 1%; 100PPM; 0.125W; THIN FILM                                                                                     |
| 12     | R2         | -         |     1 | CSR1206FTR500                                                           | STACKPOLE ELECTRONICS INC.        | 0.5          | RESISTOR; 1206; 0.5 Ω ; 1%; 100PPM; 0.5W; THICK FILM                                                                                      |
| 13     | R3         | -         |     1 | ERJ-2RKF5600X                                                           | PANASONIC                         | 560          | RESISTOR, 0402, 560 Ω , 1%, 100PPM, 0.0625W, THICK FILM                                                                                   |
| 14     | R4         | -         |     1 | RL0805FR-7W0R2L                                                         | YAGEO                             | 0.2          | RESISTOR; 0805; 0.2 Ω ; 1%; 600PPM; 0.25W; THICK FILM                                                                                     |
| 15     | R5, R7     | -         |     2 | ERJ14YJ3R9                                                              | PANASONIC                         | 3.9          | RESISTOR; 1210; 3.9 Ω ; 5%; -400+150PPM; 0.5W; THICK FILM                                                                                 |
| 16     | U1         | -         |     1 | MAX31840                                                                | MAXIM                             | MAX31840     | EVKIT PART-IC; TDFN8-EP; MR16 LED DRIVER WITH INTEGRATED CONTROL MOSFET AND DEEP DIMMING; PACKAGE CODE: T833+3; PACKAGE OUTLINE: 21-0137P |
| 17     | U2         | -         |     1 | MB16S                                                                   | MICRO COMMERCIAL COMPONENTS       | MB16S        | DIODE; SCH; TO-269AA; PIV = 60V; IF = 1A                                                                                                  |
| 18     | PCB        | -         |     1 | MAX31840                                                                | MAXIM                             | PCB          | PCB:MAX31840                                                                                                                              |
| 19     | LED+, LED- | DNP       |     0 | 5004                                                                    | KEYSTONE                          | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                 |
| TOTAL  | TOTAL      | TOTAL     |    20 |                                                                         |                                   |              |                                                                                                                                           |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT) ; DNP--&gt; DO NOT PROCURE

Evaluates: MAX31840

## MAX31840 EV Kit Schematic

<!-- image -->

## MAX31840 EV Kit PCB Layout Diagrams

MAX31840 PCB Layout-Top Silkscreen

<!-- image -->

MAX31840 PCB Layout-Bottom

<!-- image -->

MAX31840 PCB Layout-Top

<!-- image -->

MAX31840 PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX31840 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX31840