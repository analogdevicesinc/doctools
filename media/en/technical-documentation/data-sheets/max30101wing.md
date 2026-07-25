<!-- lastmod 2022-08-02 -->
## MAX30101WING Expansion Board

## General Description

The MAX30101WING board is a rapid development board designed to quickly develop application firmware for the MAX30101 pulse oximetry sensor. The MAX30101WING contains the MAX14750A power management IC (PMIC) that supplies a +1.8V power rail (1V8) to the MAX30101 along  with  a  programmable  +2.5V  to  +5V  rail  (VLED) to  drive  the  MAX30101  internal  LEDs.  The  board  is compatible  with  +1.8V  and  +3.3V  logic  (VIO),  select -able  through  jumper  JP1.  The  ZIF  Flat  Flexible  Cable Connector  allows  integration  of  the  MAX30205EVSYS, which features the MAX30205 silicon-based human body temperature  sensor.  The  board  seamlessly  integrates with the MAX32630FTHR to enable rapid prototyping and development.

## MAX30101WING Board

<!-- image -->

Ordering Information appears at end of data sheet.

Evaluates: MAX30101

## Features

- Convenient Expansion Board
- 0.9in x 2.0in DIP Form Factor
- -Breadboard Compatible
- -Feather Compatible
- Integrated PMIC to Supply LED Drive Voltage
- +1.8V and +3.3V Logic VIO Compatibility
- ZIF Flat Flex Cable Connector
- -Compatible with the MAX30205EVSYS
- MAX30101 High-Sensitivity Pulse Oximeter and Heart-Rate Sensor Features
- Noninvasive Reflective LED Solution
- 5.6mm x 3.3mm x 1.55mm 14-Pin Optical Module
- -Integrated Cover Glass for Optimal, Robust Performance
- Ultra-Low Power Operation for Mobile Devices
- -Programmable Sample Rate and LED Current for Power Savings
- -Low-Power Heart-Rate Monitor (&lt; 1mW)
- -Ultra-Low Shutdown Current (0.7µA, typ)
- Fast Data Output Capability
- -Sample Rates up to 3200sps
- Robust Motion Artifact Resilience
- -40˚C to +85˚C Operating Temperature Range
- MAX14750A PMIC Features
- Micro-I Q 250mW Buck-Boost Regulator
- -Supplies VLED to the MAX30101
- -Output Voltage Programmable from 2.5V to 5V
- -1.1µA Quiescent Current
- -Programmable Current Limit
- -Input Voltage from 1.8V to 5.5V
- Micro-I Q 100mA LDO
- -Supplies 1V8 Rail for the MAX30101
- -Input Voltage From 1.71V to 5.5V
- -Output Programmable from 0.09V to 4.0V
- -0.9µA Quiescent Current
- -Configurable as a Load Switch
- -Individual Enable Pins
-  I 2 C Control Interface

<!-- image -->

Evaluates: MAX30101

Figure 1. DIP Pinout

<!-- image -->

│

## MAX30101WING Expansion Board

## Detailed Description

The MAX30101WING is designed to enable engineers to rapidly prototype and test functionality of the MAX30101 optical sensor. The on-board MAX14750A PMIC sets the LED drive voltage of the optical sensor and is program -mable through the I 2 C interface. The PMIC supplies the 1V8 rail  that  is  used  to  power  the  optical  sensor  along with the communication lines when 1V8 logic is selected. Test point TP1 connects to the monitor multiplexer output of  the  MAX14750A that allows input and output voltage monitoring  through  software  configuration.  Jumper  JP1 changes the logic level between 3V3 and 1V8. The ZIF Flat Flex Cable Connector provides a terminal to integrate the MAX30205EVSYS.

The  dual  inline  pinout  and  form  factor  for  this  board  is based  on  the  Adafruit®  feather  series  of  boards.  It  is designed  for  implementation  with  the  MAX32630FTHR and is intended to be compatible with many of the Adafruit peripheral  wings,  but  is  not  guaranteed  to  work  with  all feathers/wings.

## Firmware Development

The simplest way to develop firmware for the MAX30101WING  board  is  through  the  Mbed™  development  environment.  On  the  Mbed  website,  users  can import  examples  into  their  online  IDE,  then  edit,  com -pile,  and  load  binaries  into  the  board  without  installing any  software.  Go  to https://os.mbed.com/platforms/ MAX32630FTHR/ to start programming with Mbed.

## Table 1. DIP 16-Pin Header

| PIN        | PORT   | DESCRIPTION              |
|------------|--------|--------------------------|
| 1, 3, 5-15 | N.C.   | Not Connected            |
| 2          | +3V3   | +3V3 Voltage Supply Rail |
| 4, 16      | GND    | Ground                   |

Adafruit is a registered trademark of Adafruit Industries.

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX30101

To support software development, an example library for the MAX30101 and the MAX30205 are found at the fol -lowing links:

- [https://os.mbed.com/teams/MaximIntegrated/ code/MAX30101/](https://os.mbed.com/teams/MaximIntegrated/code/MAX30101/)
- [https://os.mbed.com/teams/MaximIntegrated/ code/MAX30205/](https://os.mbed.com/teams/MaximIntegrated/code/MAX30205/)

In  addition,  demo  programs  for  the  MAX30101WING and  MAX30105EVSYS  have  been  developed  to  expe -dite  prototyping.  Visit  the  links  below  for  access  to  the source  code.  Refer  to  Application  Note  6557: How  to Interface  the  MAX30101WING  Pulse  Oximeter  with  the MAX32630FTHR and  Application  Note  6558: How  to Interface the MAX30205EVSYS with the MAX32630FTHR for additional instructions on getting started.

- [https://os.mbed.com/teams/Maxim-Integrated/ code/MAX30101WING\_HR\_SPO2/](https://os.mbed.com/teams/Maxim-Integrated/code/MAX30101WING_HR_SPO2/)
- [https://os.mbed.com/teams/Maxim-Integrated/ code/MAX30205\_Demo/](https://os.mbed.com/teams/Maxim-Integrated/code/MAX30205_Demo/)

## Expansion Connectors

The  MAX30101WING  includes  a  ZIF  Flat  Flex  Cable Connector  to  integrate  the  MAX30205EVSYS.  The exposed  metallic  side  of  the  ribbon  cable  should  face down,  blue  side  up,  when  inserted.  Insert  the  rib -bon  cable  into  ZIF  Flat  Flex  Cable  Connector  on  the MAX30101WING and MAX30205EVSYS to integrate the MAX30205. See the Firmware Development section  for links to development firmware for the MAX30205.

## Table 2. DIP 12-Pin Header

| PIN   | PORT   | DESCRIPTION                                                           |
|-------|--------|-----------------------------------------------------------------------|
| 1-8   | N.C.   | Not Connected                                                         |
| 9     | EN     | Active-High Enable for VLED Referenced to the Microcontroller's Logic |
| 10    | INT    | Interrupt for the MAX30101 and MAX30205 Referenced to VIO             |
| 11    | SCL    | I 2 C SCL Reference to VIO                                            |
| 12    | SDA    | I 2 C SDAReferenced to VIO                                            |

│

## MAX30101WING Expansion Board

## Table 3. ZIF Flat Flex Cable Connector

| PIN         | PORT   | DESCRIPTION                             |
|-------------|--------|-----------------------------------------|
| 1           | +3V3   | +3V3 Voltage Supply Rail                |
| 2, 9        | N.C.   | Not Connected                           |
| 3, 5, 7, 10 | GND    | Ground                                  |
| 4           | SCL    | I 2 C SCL                               |
| 6           | SDA    | I 2 C SDA                               |
| 8           | INT    | Interrupt for the MAX30101 and MAX30205 |

## Table 4. Jumpers

| PIN   | PORT           | DESCRIPTION                                       |
|-------|----------------|---------------------------------------------------|
| JP1   | 1-2*           | Sets the logic level to +3V3                      |
| JP1   | 2-3            | Sets the logic level to +1V8                      |
| R3    | Installed*     | Connects +3V3 rail to LEN to enable the +1V8 rail |
| R3    | Not installed  | Permits user supplied logic for LEN               |
| R4    | Installed      | Shorts HVEN and LEN together                      |
| R4    | Not installed* | Disconnects HVEN from LEN                         |

## Table 5. Test Point

| PIN   | DESCRIPTION                         |
|-------|-------------------------------------|
| GND   | Ground test point                   |
| VLED  | LED drive voltage test point        |
| TP1   | Monitor multiplex output test point |

## Ordering Information

| PART          | TYPE              |
|---------------|-------------------|
| MAX30101WING# | Development Board |

Evaluates: MAX30101

│

## MAX30101WING EV Bill of Materials

|   ITEM | REF_DES     |   QTY | MFG PART #        | MANUFACTURER   | VALUE          | DESCRIPTION                                                                                                             |
|--------|-------------|-------|-------------------|----------------|----------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C2, C5  |     3 | GRM155R61C225KE44 | MURATA         | 2.2UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
|      2 | C3, C4      |     2 | GRM155R70J104KA01 | MURATA         | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; TG=- 55 DEGC TO +125 DEGC; TC=X7R                            |
|      3 | C6, C8, C10 |     3 | GRM188R61C106KAAL | MURATA         | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |
|      4 | C7          |     1 | GRM155R61A475MEAA | MURATA         | 4.7UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
|      5 | C11         |     1 | F380J476MSAAH1    | AVX            | 47UF           | CAPACITOR; SMT (0805); TANTALUM CHIP; 47UF; 6.3V; TOL=20%                                                               |
|      6 | GND         |     1 | 5011              | KEYSTONE       | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      7 | H1          |     1 | TSW-116-07-G-S    | SAMTEC         | TSW-116-07-G-S | CONNECTOR; MALE; SMT; 0.25INCH SQ POST HEADER; STRAIGHT; 16PINS                                                         |
|      8 | H3          |     1 | TSW-112-07-G-S    | SAMTEC         | TSW-112-07-G-S | CONNECTOR; MALE; THROUGH-HOLE .025INCH SQ POST HEADER; STRAIGHT; 12PINS                                                 |

Evaluates: MAX30101

## MAX30101WING EV Bill of Materials (continued)

|   ITEM | REF_DES   |   QTY | MFG PART #                        | MANUFACTURER                 | VALUE          | DESCRIPTION                                                                                             |
|--------|-----------|-------|-----------------------------------|------------------------------|----------------|---------------------------------------------------------------------------------------------------------|
|      9 | J1        |     1 | 6.87E+10                          | WURTH ELECTRONICS INC.       | 6.87E+10       | CONNECTOR; FEMALE; SMT; 0.5MM ZIF HORIZONTAL BOTTOM CONTACT WR-FPC; RIGHT ANGLE; 10PINS                 |
|     10 | JP1       |     1 | TSW-103-07-T-S                    | SAMTEC                       | TSW-103-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                        |
|     11 | L1        |     1 | VLS201610CX-4R7M                  | TDK                          | 4.7UH          | INDUCTOR; SMT (2016); FERRITE CORE; 4.7UH; TOL=+/-20%; 0.92A                                            |
|     12 | R1, R2    |     2 | ERJ2GEJ332                        | PANASONIC                    | 3.3K           | RESISTOR; 0402; 3.3K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                 |
|     13 | R3        |     1 | CRCW04020000Z0EDHP; RCS04020000Z0 | VISHAY DRALORIC; VISHAY DALE | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                     |
|     14 | R5, R6    |     2 | ERJ-2RKF1002                      | PANASONIC                    | 10K            | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                  |
|     15 | TP1       |     1 | 5002                              | KEYSTONE                     | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;   |
|     16 | U1        |     1 | MAX14750AEWA+                     | MAXIM                        | MAX14750AEWA+  | IC; PWRM; POWER- MANAGEMENT SOLUTI0N; WLP25                                                             |
|     17 | U2        |     1 | MAX30101EFD+                      | MAXIM                        | MAX30101EFD+   | IC; SNSR; HIGH- SENSITIVITY PULSE OXIMETER AND HEART-RATE SENSOR IC FOR WEARABLE HEALTH; OLGA14 3.3X5.6 |
|     18 | PCB       |     1 | MAX                               | MAXIM                        | PCB            | PCB:MAX                                                                                                 |

Evaluates: MAX30101

## MAX30101WING EV Schematic

<!-- image -->

│

Evaluates: MAX30101

## MAX30101WING Expansion Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX30101