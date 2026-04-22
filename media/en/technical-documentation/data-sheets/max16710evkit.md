<!-- lastmod 2023-04-24 -->
<!-- image -->

## General Description

The  MAX16710  evaluation  kit  (EV  kit)  is  a  reference platform designed for the evaluation of the MAX16710, a 10A step-down DC-DC  switching regulator IC with compact WLP package. The IC operates from 2.7V to 16V input supply. It features peak current mode control, high efficiency,  high-power  density,  and  easy  selection  of various  application  scenario  configurations.  For  more information, refer to the MAX16710 IC data sheet.

The EV kit provides a proven design to evaluate the chip and has been developed with a 6-layer PCB layout and optimized  overall  performance.  The  jumper  pins,  test points,  and  the  input/output  connectors  are  included  to provide  flexible  and  convenient  use  in  a  wide  range  of applications.

## Features and Benefits

- Wide 2.7V to 16V Input-Voltage Range
- 0.5V to 5.8V Output-Voltage Range
- Integrated Internal LDO for Bias Supply
- Selectable Switching Frequency, OCP  Threshold, DCM Operation, Voltage Loop Gain
- Power Good (PGOOD) Indicator LED
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX16710 EV Kit
- 2.7V to 16V Power Supply
- 0A to 10A Load
- Digital Multimeters
- Oscilloscope and Probes

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation and to run the EV kit.

Note: Do not supply V IN  until the board has been correctly configured with the input and output cables connected.

1. Set  up  the  V IN   power  supply  at  a  voltage  level between  2.7V  and  16V.  Disable  the  power-supply output. Verify jumper J6 is closed, all other jumpers are open, and SW1 is positioned to disable the IC.
2. Connect the positive and negative terminal of the V IN power  supply  to  the  board  using  suitable  section cables equipped with male banana plugs.
3. Respecting the polarity, connect the positive terminal to VIN+ and the negative terminal to VIN\_GND with J5 and J8 connectors, respectively.
4. Verify that each jumper is correctly positioned for the required configuration.
5. Connect the electronic load to the output, respecting the polarity.
6. Connect all the required probing equipment to the EV kit.
7. Turn on the V IN  power supply. Ensure LED DS1 is off.
8. Position  the  SW1  toggle  switch  to  enable  the  IC. Enable the load.
9. Ensure LED DS1 is on and measure V OUT  = 1V.

Ordering Information appears at end of data sheet.

319-100984; Rev 0; 2/23

## MAX16710 Evaluation Kit

## Evaluates: MAX16710

## EV Kit Board

Figure 1. MAX16710 EV Kit Board -Top

<!-- image -->

Figure 2. MAX16710 EV Kit Board -Bottom

<!-- image -->

## Evaluates: MAX16710

## Detailed Description of Hardware

The MAX16710 EV kit provides a proven design to evaluate the MAX16710 IC, which is a fully integrated, highly efficient, 10A  buck  regulator  suitable  for  communications  and  data-center  applications.  The  EV  kit  can  be  easily  connected, configured, and tested with the input banana connectors, output screw connectors (suitable for high current), and full onboard test points (for the measurement and monitoring of significative waveforms).

## Table 1. Jumper Connection Guide

| JUMPER                         | DEFAULT CONNECTION   | FEATURE       |
|--------------------------------|----------------------|---------------|
| J1 - J4, J7, J9, J10, J13, J19 | Open                 | N/A           |
| J6                             | Closed               | Enable Switch |

## Output-Voltage Selection

The MAX16710 has an internal 0.5V reference voltage. When the targeted output voltage is higher than 0.5V, resistor dividers R 9  and R 13  are required to sense the output voltage (see the EV Kit Schematics section). The resistor divider ratio is shown in Equation 1.

Equation 1:

where:

VOUT = Output voltage.

VREF = 0.5V fixed reference voltage.

R13  = Top divider resistor.

R9 = Bottom divider resistor.

It is recommended that R9 should not exceed 5kΩ. The EV kit is assembled for a standard configuration and demonstrates full operation at 1V output voltage and 10A load current.

Some do not install (DNI) component options (e.g. feedback net filtering or input/output capacitance place holders) can be useful for custom conditions. However, they are not required for full functionality within the input-voltage range, outputvoltage range, and current.

The correct number of input and output capacitors (pre-installed) has been selected to guarantee input and output-voltage ripple as specified for safe operation. The MAX16710 does not require an external bias supply.

The J2 and J3 headers (VCC and AVDD, respectively) can be used as test points to measure the two bias voltages. VCC is provided by the on-chip LDO. AVDD (power IC internal analog block supply) is derived from VCC though a simple RC filter.

J4, J1 can be used to change the IC default configuration.

J10 and J13 are V DDH  and LX test points.

J2, J3, J10, and J13 must be left open when unconnected to an external measurement instrument.

TP1, TP13, and TP14 are three test points dedicated to Bodeplot acquisition. A 10Ω resistor is in series into the feedback line and provides the input port to inject the sweep frequency signal generated by the Bode-plot equipment.

## Bode Plot

A 10Ω resistor is installed between the V OUT sense point and the SNSP pin to measure the Bode plot. TP13 and TP14 test points are provided on the board on either side of the 10 Ω resistor for small signal injection and to enable the Bodeplot measurement for V OUT .

www.analog.com

<!-- formula-not-decoded -->

## Evaluates: MAX16710

## Output Enable (EN)

The EN pin is used to enable/disable an operation and the corresponding output voltage. On the EV kit board, the SW1 selection switch allows for the enabling and disabling of the regulator.

## Status Monitoring

Whenever the part is actively regulating and the output voltage is within the power-good window, the PGOOD pin is high. Under all other conditions (including enabled but in a fault state), the PGOOD pin is pulled low.

## Input-Voltage Monitoring

The input supply can be monitored on TP4 for V DDH  and on TP7 for GND.

## Switching-Voltage Monitoring

The switching waveform can be monitored on J13.

## Output-Voltage Monitoring

TP8 and TP11 monitor the output voltage. These test points should not be used for loading.

## User Case and Scenario Selection

The MAX16710 gives flexibility to set application parameters based on the value of one resistor (R2 connected on the PGM0 pin) and the logic level of the PGM1 and PGM2 pins at power-up. Soldering a different value of the resistor R2 on PGM0 allows selection of one of 32 PGM0 codes that determine the switching frequency and one of six pre-defined scenarios (A, B, C, D, E, or F). Refer to the MAX16710 IC data sheet for more details. The default configuration is with PMG1 and PGM2 open, 500kHz switching frequency, scenario A, DCM disabled, and POCP of 15A.

PGM1 and PGM2 can recognize a three-level setting (AVDD, AGND, and high-impedance). Properly setting the position of J1 and J4 allows the selection of the targeted over-current protection (OCP) threshold level and provides the option to select discontinuous current mode (DCM) at light loads.

The R2 value (the resistor connected to PGM0) and the logic levels on PGM1 and PGM2 are only detected once at poweron reset. Moving the jumpers while the bias is present does not affect any of the parameters.

## Switching Frequency

The switching frequency is programmable using PGM0. The default switching frequency of the MAX16710 EV kit is 500kHz.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16710EVKIT# | EV Kit |

# Denotes RoHS-compliant.

## MAX16710 Evaluation Kit

## MAX16710 EV Kit Bill of Materials

|   ITEM | REF DES            | DNI/DNP   |   QTY | MANUFACTURER PART NUMBER                                                             | MANUFACTURER                                               | VALUE             | DESCRIPTION                                                                                             |
|--------|--------------------|-----------|-------|--------------------------------------------------------------------------------------|------------------------------------------------------------|-------------------|---------------------------------------------------------------------------------------------------------|
|      1 | C1                 | -         |     1 | GMC10X7R475K6R 3NT- CL10B475KQ8NQN- JMK107BB7475KA- CL10B475KQ8NQN C- 06036C475KAT2A | CAL-CHIP ELECTRONIC INC.-SAMSUNG- TAIYO YUDEN- SAMSUNG-AVX | 4.7UF             | CAP- SMT (0603)- 4.7UF- 10%- 6.3V- X7R- CERAMIC- NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20- 004u7-16 |
|      2 | C2, C21            | -         |     2 | CL31X226KAHN3N- GRM31CC81E226K E11                                                   | SAMSUNG- MURATA                                            | 22UF              | CAP- SMT (1206)- 22UF- 10%- 25V- X6S- CERAMIC                                                           |
|      3 | C3, C13, C16, C33  | -         |     4 | GRM31CD80J107M E39                                                                   | MURATA                                                     | 100UF             | CAP- SMT (1206)- 100UF- 20%- 6.3V- X6T- CERAMIC                                                         |
|      4 | C4                 | -         |     1 | GRM155R70J104K A01                                                                   | MURATA                                                     | 0.1UF             | CAP- SMT (0402)- 0.1UF- 10%- 6.3V- X7R- CERAMIC                                                         |
|      5 | C6                 | -         |     1 | CL05B105KQ5NQN C- GRM155R70J105K A12                                                 | SAMSUNG ELECTRONICS- MURATA                                | 1UF               | CAP- SMT (0402)- 1UF- 10%- 6.3V- X7R- CERAMIC                                                           |
|      6 | C10                | -         |     1 | LMK105B7474KV- GRM155R71A474K E01                                                    | PANASONIC- MURATA                                          | 0.47UF            | CAP- SMT (0402)- 0.47UF- 10%- 10V- X7R- CERAMIC                                                         |
|      7 | C14                | -         |     1 | TMK107B7105KA- 06033C105KAT2A- C1608X7R1E105K0 80AE                                  | MURATA-TAIYO YUDEN-AVX- TAIYO YUDEN                        | 1UF               | CAP- SMT (0603)- 1UF- 10%- 25V- X7R- CERAMIC                                                            |
|      8 | C26                | -         |     1 | C0402C102K5GAC                                                                       | KEMET                                                      | 1000PF            | CAP- SMT (0402)- 1000PF- 10%- 50V- C0G- CERAMIC                                                         |
|      9 | C29, C47           | -         |     2 | GRM155R71E104K E14- C1005X7R1E104K0 50BB- TMK105B7104KVH- CGJ2B3X7R1E104K 050BB      | MURATA-TDK- TAIYO YUDEN- TDK                               | 0.1UF             | CAP- SMT (0402)- 0.1UF- 10%- 25V- X7R- CERAMIC                                                          |
|     10 | C32, C36, C37, C39 | -         |     4 | T521X107M025ATE 060                                                                  | KEMET                                                      | 100UF             | CAP- SMT (7343)- 100UF- 20%- 25V- TANTALUM                                                              |
|     11 | D1, D3             | -         |     2 | MBRS540T3G                                                                           | ON SEMICONDUCTO R                                          | MBRS540 T3        | DIODE- SCH- SURFACE MOUNT SCHOTTKY POWER RECTIFIER- SMC- PIV=40V- IF=5A                                 |
|     12 | DS1                | -         |     1 | LGL29K-G2J1-24-Z                                                                     | OSRAM                                                      | LGL29K- G2J1-24-Z | DIODE- LED- SMARTLED- GREEN- SMT- PIV=1.7V- IF=0.02A                                                    |

## MAX16710 Evaluation Kit

## Evaluates: MAX16710

## MAX16710 Evaluation Kit

|   ITEM | REF DES                            | DNI/DNP   |   QTY | MFG PART #                         | MANUFACTURER               | VALUE               | DESCRIPTION                                                                                                                     |
|--------|------------------------------------|-----------|-------|------------------------------------|----------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
|     13 | J1, J4, J9                         | -         |     3 | PEC03SAAN                          | SULLINS                    | PEC03SA AN          | CONNECTOR- MALE- THROUGH HOLE- BREAKAWAY- STRAIGHT- 3PINS                                                                       |
|     14 | J2, J3, J6, J7, J10, J13, J14, J19 | -         |     8 | TSW-101-22-L-D                     | SAMTEC                     | TSW-101- 22-L-D     | CONNECTOR- MALE- THROUGH HOLE- .025IN SQ POST HEADER- STRAIGHT- 2PINS                                                           |
|     15 | J5, J8                             | -         |     2 | 6095                               | KEYSTONE                   | 6095                | CONNECTOR- FEMALE- PANELMOUNT- NON- INSULATED RECESSED HEAD BANANA JACK- STRAIGHT THROUGH- 1PIN                                 |
|     16 | J11                                | -         |     1 | UPS-08-01-01-L-RA                  | SAMTEC                     | UPS-08- 01-01-L- RA | CONNECTOR- FEMALE- THROUGH HOLE- DUAL LEAF POWER HEADER- RIGHT ANGLE- 8PINS                                                     |
|     17 | L1                                 | -         |     1 | PA5034.331HLT                      | PULSE ELECTRONICS          | 330NH               | INDUCTOR- SMT- SHIELDED- 330NH- 15%- 40A                                                                                        |
|     18 | MH1 - MH4                          | -         |     4 | 9032                               | KEYSTONE                   | 9032                | MACHINE FABRICATED- ROUND-THRU HOLE SPACER- NO THREAD- M3.5- 5/8IN- NYLON                                                       |
|     19 | Q1                                 | -         |     1 | BSS138                             | ON SEMICONDUCTO R          | BSS138              | TRAN- LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR- NCH- SOT-23- PD-(0.36W)- I- (0.22A)- V-(50V)- -55 DEGC TO +150 DEGC |
|     20 | R1                                 | -         |     1 | CRCW04024R70FK                     | VISHAY DALE                | 4.7                 | RES- SMT (0402)- 4.7- 1%- +/-100PPM/DEGC- 0.0630W                                                                               |
|     21 | R2                                 | -         |     1 | CRCW040295R3FK                     | VISHAY DALE                | 95.3                | RES- SMT (0402)- 95.3- 1%- +/-100PPM/DEGC- 0.0630W                                                                              |
|     22 | R3, R11                            | -         |     2 | RC0402JR-070RL- CR0402-16W- 000RJT | YAGEO PHYCOMP- VENKEL LTD. | 0                   | RES- SMT (0402)- 0- 5%- JUMPER- 0.0630W                                                                                         |
|     23 | R9, R13, R16, R17                  | -         |     4 | CRCW04023K00FK                     | VISHAY DALE                | 3K                  | RES- SMT (0402)- 3K- 1%- +/-100PPM/DEGC- 0.0630W                                                                                |
|     24 | R14                                | -         |     1 | 9C04021A10R0FL                     | YAGEO                      | 10                  | RES- SMT (0402)- 10- 1%- +/-100PPM/DEGC- 0.0630W                                                                                |
|     25 | R41                                | -         |     1 | CRCW040220K0FK                     | VISHAY DALE                | 20K                 | RES- SMT (0402)- 20K- 1%- +/-100PPM/DEGC- 0.0630W                                                                               |

## Evaluates: MAX16710

## MAX16710 Evaluation Kit

|   ITEM | REF DES                  | DNI/DNP   |   QTY | MFG PART #                          | MANUFACTURER                           | VALUE    | DESCRIPTION                                                                                                                                                                        |
|--------|--------------------------|-----------|-------|-------------------------------------|----------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     26 | R42                      | -         |     1 | RC0603FR-07100RL- CR0603-FX-1000ELF | YAGEO-BOURNS                           | 100      | RES- SMT (0603)- 100- 1%- +/-100PPM/DEGC- 0.1000W                                                                                                                                  |
|     27 | R51                      | -         |     1 | ERJ-3EKF2100                        | PANASONIC                              | 210      | RES- SMT (0603)- 210- 1%- +/-100PPM/DEGK- 0.1000W                                                                                                                                  |
|     28 | ST1, ST2                 | -         |     2 | 7808                                | KEYSTONE                               | 7808     | TERMINAL- BODY LENGTH=0.67IN- BODY WIDTH=0.47IN- HEIGHT=0.45IN- SCRW- BRASS                                                                                                        |
|     29 | SU3                      | -         |     1 | S1100-B-SX1100-B- STC02SYAN         | KYCON-KYCON- SULLINS ELECTRONICS CORP. | SX1100-B | TEST POINT- JUMPER- STR- TOTAL LENGTH=0.24IN- BLACK- INSULATION=PBT- PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                           |
|     30 | SW1                      | -         |     1 | GT21MCBE                            | C&K COMPONENTS                         | GT21MCBE | SWITCH- DPDT- THROUGH HOLE- 20V- 0.4VA- GT SERIES- SEALED ULTRAMINIATURE TOGGLE SWITCH- RCOIL= 0.05 OHM- RINSULATION=10G OHM-                                                      |
|     31 | TP1, TP2, TP7, TP9, TP11 | -         |     5 | 5011                                | KEYSTONE                               | N/A      | TEST POINT- PIN DIA=0.125IN- TOTAL LENGTH=0.445IN- BOARD HOLE=0.063IN- BLACK- PHOSPHOR BRONZE WIRE SILVER PLATE FINISH- RECOMMENDED FOR BOARD THICKNESS=0.062IN- NOT FOR COLD TEST |
|     32 | TP4, TP8                 | -         |     2 | 5010                                | KEYSTONE                               | N/A      | TEST POINT- PIN DIA=0.125IN- TOTAL LENGTH=0.445IN- BOARD HOLE=0.063IN- RED- PHOSPHOR BRONZE WIRE SIL- NOT FOR COLD TEST                                                            |
|     33 | TP13, TP14               | -         |     2 | 5012                                | KEYSTONE                               | N/A      | TEST POINT- PIN DIA=0.125IN- TOTAL LENGTH=0.445IN- BOARD HOLE=0.063IN- WHITE- PHOSPHOR BRONZE WIRE SILVER PLATE FINISH- RECOMMENDED FOR BOARD THICKNESS=0.062IN- NOT FOR COLD TEST |

www.analog.com

## Evaluates: MAX16710

## MAX16710 Evaluation Kit

|   ITEM | REF DES                                             | DNI/DNP   |   QTY | MFG PART #                                         | MANUFACTURER                        | VALUE    | DESCRIPTION                                                                                                                                                                        |
|--------|-----------------------------------------------------|-----------|-------|----------------------------------------------------|-------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     34 | TP29, TP30                                          | -         |     2 | 5126                                               | KEYSTONE                            | N/A      | TEST POINT- PIN DIA=0.125IN- TOTAL LENGTH=0.445IN- BOARD HOLE=0.063IN- GREEN- PHOSPHOR BRONZE WIRE SILVER PLATE FINISH- RECOMMENDED FOR BOARD THICKNESS=0.062IN- NOT FOR COLD TEST |
|     35 | U1                                                  | -         |     1 | MAX16710AWA+                                       | ANALOG DEVICES                      | MAX16710 | EVKIT PART - IC- MAX16710AWA+ PACKAGE OUTLINE NUMBER: 21-100614 - PACKAGE CODE: W252W2Z+1- WLP25- SOLDERMASK DEFINED FOOTPRINT                                                     |
|     36 | PCB                                                 | -         |     1 | MAX16710                                           | ANALOG DEVICES                      | PCB      | PCB:MAX16710                                                                                                                                                                       |
|     37 | C5, C7 - C9, C11, C34, C35, C46, C48, C50, C54, C55 | DNP       |    12 | GRM31CD80J107ME39                                  | MURATA                              | 100UF    | CAP- SMT (1206)- 100UF- 20%- 6.3V- X6T- CERAMIC                                                                                                                                    |
|     38 | C12                                                 | DNP       |     1 | C0402C333J4RAC                                     | KEMET                               | 0.033UF  | CAP- SMT (0402)- 0.033UF- 5%- 16V- X7R- CERAMIC                                                                                                                                    |
|     39 | C17                                                 | DNP       |     1 | VJ0402A101FXJCW1BC                                 | VISHAY                              | 100PF    | CAP- SMT (0402)- 100PF- 1%- 16V- C0G- CERAMIC                                                                                                                                      |
|     40 | C20, C30                                            | DNP       |     2 | CL31X226KAHN3N- GRM31CC81E226KE11                  | SAMSUNG- MURATA                     | 22UF     | CAP- SMT (1206)- 22UF- 10%- 25V- X6S- CERAMIC                                                                                                                                      |
|     41 | C23                                                 | DNP       |     1 | C0402C103J3RAC                                     | KEMET                               | 0.01UF   | CAP- SMT (0402)- 0.01UF- 5%- 25V- X7R- CERAMIC                                                                                                                                     |
|     42 | C24                                                 | DNP       |     1 | TMK107B7105KA- 06033C105KAT2A- C1608X7R1E105K080AE | MURATA-TAIYO YUDEN-AVX- TAIYO YUDEN | 1UF      | CAP- SMT (0603)- 1UF- 10%- 25V- X7R- CERAMIC                                                                                                                                       |
|     43 | C27, C28                                            | DNP       |     2 | GRM155R71E472KA01                                  | MURATA                              | 4700PF   | CAP- SMT (0402)- 4700PF- 10%- 25V- X7R- CERAMIC                                                                                                                                    |
|     44 | C31, C40                                            | DNP       |     2 | T491X477K010AT                                     | KEMET                               | 470UF    | CAP- SMT (7343)- 470UF- 10%- 10V- TANTALUM                                                                                                                                         |
|     45 | C41, C43, C44, C49                                  | DNP       |     4 | CL31X476KQHNNN- GRT31CC80J476KE13                  | SAMSUNG- MURATA                     | 47UF     | CAP- SMT (1206)- 47UF- 10%- 6.3V- X6S- CERAMIC                                                                                                                                     |

## Evaluates: MAX16710

## MAX16710 Evaluation Kit

|   ITEM | REF DES        | DNI/DNP   |   QTY | MFG PART #                         | MANUFACTURER               | VALUE   | DESCRIPTION                                       |
|--------|----------------|-----------|-------|------------------------------------|----------------------------|---------|---------------------------------------------------|
|     46 | C51 - C53, C72 | DNP       |     4 | GRM188C81A106 MA73                 | MURATA                     | 10UF    | CAP- SMT (0603)- 10UF- 20%- 10V- X6S- CERAMIC     |
|     47 | R4             | DNP       |     1 | ERJ-P08J101                        | PANASONIC                  | 100     | RES- SMT (1206)- 100- 5%- +/-200PPM/DEGC- 0.6600W |
|     48 | R19            | DNP       |     1 | RC0402JR-070RL- CR0402-16W- 000RJT | YAGEO PHYCOMP- VENKEL LTD. | 0       | RES- SMT (0402)- 0- 5%- JUMPER- 0.0630W           |

## Evaluates: MAX16710

## MAX161710 EV Kit Schematics

<!-- image -->

## MAX16710 Evaluation Kit

## Evaluates: MAX16710

## MAX16710 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX16710

## MAX16710 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX16710

## MAX16710 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX16710

## MAX16710 EV Kit PCB Layout

MAX16710 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX16710 EV Kit PCB Layout -Layer 2 PGND

<!-- image -->

## MAX16710 Evaluation Kit

MAX16710 EV Kit PCB Layout -Top

<!-- image -->

MAX16710 EV Kit PCB Layout -Layer 3 SIG AGND

<!-- image -->

## Evaluates: MAX16710

## MAX16710 EV Kit PCB Layout (continued)

MAX16710 EV Kit PCB Layout -Layer 4

<!-- image -->

MAX16710 EV Kit PCB Layout -Bottom

<!-- image -->

## MAX16710 Evaluation Kit

MAX16710 EV Kit PCB Layout -Layer 5 PGND

<!-- image -->

MAX16710 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX16710

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 02/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX16710 Evaluation Kit